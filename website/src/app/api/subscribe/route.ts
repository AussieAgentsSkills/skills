import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

export async function POST(request: NextRequest) {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.error("Missing SUPABASE_URL or SUPABASE_ANON_KEY");
      return NextResponse.json({ error: "misconfigured" }, { status: 500 });
    }
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json({ error: "misconfigured" }, { status: 500 });
    }

    const { email, source } = await request.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }

    const supabaseRes = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email, source: source || "website" }),
    });

    if (!supabaseRes.ok && supabaseRes.status !== 201) {
      const error = await supabaseRes.json().catch(() => ({}));
      if (error?.code === "23505") {
        return NextResponse.json({ error: "already_subscribed" }, { status: 400 });
      }
      return NextResponse.json({ error: "database_error" }, { status: 500 });
    }

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Aussie Agent Skills <hello@agentskill.com.au>",
        to: email,
        subject: "Welcome to Aussie Agent Skills! 🇦🇺",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #1e293b;">G'day! 🇦🇺</h1>
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Thanks for joining the Aussie Agent Skills community!
            </p>
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              You'll now receive updates when we add new Australian AI skills.
            </p>
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Cheers,<br>The Aussie Agent Skills Team
            </p>
          </div>
        `,
      }),
    });

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Aussie Agent Skills <hello@agentskill.com.au>",
        to: "joyjacob42920@gmail.com",
        subject: `🇦🇺 New subscriber: ${email}`,
        html: `<p><strong>New subscriber:</strong> ${email}</p><p><strong>Source:</strong> ${source || "website"}</p>`,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
