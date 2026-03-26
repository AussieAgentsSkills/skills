import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = "https://nsrxksrttgetfgizdnqg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_YV9YxLDrcqOaStYehTkzfA_9FFfiLXC";
const RESEND_API_KEY = "re_KiFJyKHp_JkJA6EgcEiozyWVvRX3an7Ks";

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();

    // Save to Supabase
    const supabaseRes = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({ email, source: source || "website" })
    });

    if (!supabaseRes.ok && supabaseRes.status !== 201) {
      const error = await supabaseRes.json();
      if (error?.code === "23505") {
        return NextResponse.json({ error: "already_subscribed" }, { status: 400 });
      }
      return NextResponse.json({ error: "database_error" }, { status: 500 });
    }

    // Notify you of new subscriber
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "joyjacob42920@gmail.com",
        subject: `🇦🇺 New subscriber: ${email}`,
        html: `
          <h2>New Aussie Agent Skills Subscriber!</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Source:</strong> ${source || "website"}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        `
      })
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
