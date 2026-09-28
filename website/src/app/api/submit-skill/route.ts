import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

function getSupabase() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

export async function POST(request: NextRequest) {
  try {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
      return NextResponse.json({ error: "misconfigured" }, { status: 500 });
    }
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json({ error: "misconfigured" }, { status: 500 });
    }
    const supabase = getSupabase();
    const body = await request.json();
    const {
      creatorName,
      creatorEmail,
      xHandle,
      github,
      paypalEmail,
      skillName,
      description,
      category,
      price,
      skillContent,
      previewPrompts
    } = body;

    // Create or get creator
    let creatorId: string;
    
    const { data: existingCreator } = await supabase
      .from("creators")
      .select("id")
      .eq("email", creatorEmail)
      .single();

    if (existingCreator) {
      creatorId = existingCreator.id;
    } else {
      const { data: newCreator, error: creatorError } = await supabase
        .from("creators")
        .insert({
          email: creatorEmail,
          name: creatorName,
          x_handle: xHandle || null,
          github: github || null,
          paypal_email: paypalEmail
        })
        .select("id")
        .single();

      if (creatorError) {
        console.error("Creator error:", creatorError);
        return NextResponse.json({ error: "Failed to create creator" }, { status: 500 });
      }
      creatorId = newCreator.id;
    }

    // Create slug from skill name
    const slug = skillName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    // Parse preview prompts
    const prompts = previewPrompts
      ? previewPrompts.split("\n").filter((p: string) => p.trim())
      : [];

    // Insert skill
    const { error: skillError } = await supabase
      .from("community_skills")
      .insert({
        creator_id: creatorId,
        name: skillName,
        slug: slug + "-" + Date.now(),
        description,
        category,
        price: parseFloat(price),
        skill_content: skillContent,
        preview_prompts: prompts,
        status: "pending"
      });

    if (skillError) {
      console.error("Skill error:", skillError);
      return NextResponse.json({ error: "Failed to create skill" }, { status: 500 });
    }

    // Send confirmation email to creator
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Aussie Agent Skills <hello@agentskill.com.au>",
        to: creatorEmail,
        subject: `✅ Skill Submitted: ${skillName}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #1e293b;">G'day ${creatorName}! 🇦🇺</h1>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Your skill <strong>${skillName}</strong> has been submitted for review.
            </p>
            
            <div style="background: #f1f5f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <p style="margin: 0; color: #475569;"><strong>Skill:</strong> ${skillName}</p>
              <p style="margin: 8px 0 0 0; color: #475569;"><strong>Price:</strong> $${price} AUD</p>
              <p style="margin: 8px 0 0 0; color: #475569;"><strong>Your cut:</strong> $${(parseFloat(price) * 0.7).toFixed(2)} per sale (70%)</p>
            </div>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              We'll review your skill within 24 hours and email you when it's live on the marketplace.
            </p>
            
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Cheers,<br>
              The Aussie Agent Skills Team
            </p>
          </div>
        `
      })
    });

    // Notify admin
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Aussie Agent Skills <hello@agentskill.com.au>",
        to: "joyjacob42920@gmail.com",
        subject: `🆕 New Skill Submission: ${skillName}`,
        html: `
          <p><strong>Skill:</strong> ${skillName}</p>
          <p><strong>Creator:</strong> ${creatorName} (${creatorEmail})</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Price:</strong> $${price} AUD</p>
          <p><strong>X:</strong> ${xHandle || "N/A"}</p>
          <p><strong>GitHub:</strong> ${github || "N/A"}</p>
          <hr>
          <p><strong>Description:</strong></p>
          <p>${description}</p>
          <hr>
          <p><strong>Content preview:</strong></p>
          <pre style="background: #f5f5f5; padding: 10px; overflow: auto;">${skillContent.substring(0, 1000)}...</pre>
        `
      })
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submit error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
