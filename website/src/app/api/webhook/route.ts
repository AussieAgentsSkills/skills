import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";

const SKILL_DOWNLOADS: Record<string, { name: string; url: string }> = {
  "asx-trading": {
    name: "ASX Trading Agent",
    url: "https://github.com/AussieAgentsSkills/paid-skills/releases/download/asx-trading-v1/asx-trading.zip",
  },
  "crypto-trading-au": {
    name: "Crypto Trading Australia",
    url: "https://github.com/AussieAgentsSkills/paid-skills/releases/download/crypto-trading-au-v1/crypto-trading-au.zip",
  },
  "forex-trading-au": {
    name: "Forex Trading Australia",
    url: "https://github.com/AussieAgentsSkills/paid-skills/releases/download/forex-trading-au-v1/forex-trading-au.zip",
  },
  "dropshipping-au": {
    name: "Dropshipping Australia",
    url: "https://github.com/AussieAgentsSkills/paid-skills/releases/download/dropshipping-au-v1/dropshipping-au.zip",
  },
  "affiliate-marketing-au": {
    name: "Affiliate Marketing Australia",
    url: "https://github.com/AussieAgentsSkills/paid-skills/releases/download/affiliate-marketing-au-v1/affiliate-marketing-au.zip",
  },
  "property-investment-au": {
    name: "Property Investment Australia",
    url: "https://github.com/AussieAgentsSkills/paid-skills/releases/download/property-investment-au-v1/property-investment-au.zip",
  },
  "lead-generation": {
    name: "Lead Generation Agent",
    url: "https://github.com/AussieAgentsSkills/paid-skills/releases/download/lead-generation-v1/lead-generation.zip",
  },
  "content-creation": {
    name: "Content Creation Agent",
    url: "https://github.com/AussieAgentsSkills/paid-skills/releases/download/content-creation-v1/content-creation.zip",
  },
  "customer-service": {
    name: "Customer Service Agent",
    url: "https://github.com/AussieAgentsSkills/paid-skills/releases/download/customer-service-v1/customer-service.zip",
  },
  "skills-bundle": {
    name: "All 9 Money-Making Skills Bundle",
    url: "https://github.com/AussieAgentsSkills/paid-skills/releases/download/skills-bundle-v1/skills-bundle.zip",
  },
};

const PREMIUM_DOWNLOAD =
  "https://github.com/AussieAgentsSkills/premium-packs/releases/download/v1.0/all-premium-packs.zip";
const ALL_SKILLS_DOWNLOAD = PREMIUM_DOWNLOAD;

async function sendResendEmail(payload: Record<string, unknown>) {
  if (!RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("Resend error:", res.status, await res.text());
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!STRIPE_SECRET_KEY || !STRIPE_WEBHOOK_SECRET) {
      console.error("Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET");
      return NextResponse.json({ error: "misconfigured" }, { status: 500 });
    }
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json({ error: "misconfigured" }, { status: 500 });
    }

    const body = await request.text();
    const signature = request.headers.get("stripe-signature");
    if (!signature) {
      return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
    }

    const stripe = new Stripe(STRIPE_SECRET_KEY);
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // BECS/PayTo can complete asynchronously — also fulfill async_payment_succeeded.
    if (
      event.type === "checkout.session.completed" ||
      event.type === "checkout.session.async_payment_succeeded"
    ) {
      const session = event.data.object as Stripe.Checkout.Session;
      // Avoid emailing download links before bank payment clears.
      if (session.payment_status !== "paid") {
        return NextResponse.json({ received: true });
      }
      const customerEmail =
        session.customer_email || session.customer_details?.email || undefined;
      const skillId = session.metadata?.skill_id;
      const bundleId = session.metadata?.bundle_id;
      const mode = session.mode;

      if (!customerEmail) return NextResponse.json({ received: true });

      let downloadUrl: string;
      let productName: string;
      let isPremium = false;
      const isEnterprise = session.metadata?.product === "enterprise-package";

      if (isEnterprise) {
        downloadUrl = ALL_SKILLS_DOWNLOAD;
        productName = "Enterprise Package — All Skills + 5 Agent Implementation";
        isPremium = true;
      } else if (mode === "subscription") {
        downloadUrl = PREMIUM_DOWNLOAD;
        productName = "Aussie Agent Skills Premium (14 Packs)";
        isPremium = true;
      } else if (skillId && SKILL_DOWNLOADS[skillId]) {
        downloadUrl = SKILL_DOWNLOADS[skillId].url;
        productName = SKILL_DOWNLOADS[skillId].name;
      } else if (session.metadata?.product === "chatgpt-ads-implementation") {
        downloadUrl = "https://agentskill.com.au/chatgpt-ads";
        productName = "ChatGPT Ads Campaign Implementation";
      } else if (bundleId) {
        downloadUrl = "https://agentskill.com.au/bundles";
        productName = `Skill Bundle (${bundleId})`;
      } else {
        console.error("Unknown product:", { skillId, bundleId, mode });
        return NextResponse.json({ received: true });
      }

      await sendResendEmail({
        from: "Aussie Agent Skills <hello@agentskill.com.au>",
        to: customerEmail,
        subject: `Your ${productName} is Ready!`,
        html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px">
          <h1>G'day! Your download is ready</h1>
          <p>Thanks for purchasing <strong>${productName}</strong>.</p>
          <p><a href="${downloadUrl}">Download / open ${productName}</a></p>
          <p style="color:#94a3b8;font-size:12px">Questions? DM @Joyjacobs42</p>
        </div>`,
      });

      const amount = session.amount_total
        ? `$${(session.amount_total / 100).toFixed(2)}`
        : "Unknown";

      await sendResendEmail({
        from: "Aussie Agent Skills <hello@agentskill.com.au>",
        to: "joyjacob42920@gmail.com",
        subject: `New Sale: ${productName} - ${amount}`,
        html: `<p><strong>Product:</strong> ${productName}</p>
          <p><strong>Customer:</strong> ${customerEmail}</p>
          <p><strong>Amount:</strong> ${amount} AUD</p>
          <p><strong>Type:</strong> ${isPremium ? "Subscription/Enterprise" : "One-time"}</p>`,
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
