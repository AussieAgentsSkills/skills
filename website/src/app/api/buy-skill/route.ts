import { NextRequest, NextResponse } from "next/server";
import { clientKey, isAllowedBrowserOrigin, rateLimit } from "@/lib/requestGuard";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";

const SKILL_PRICES: Record<string, string> = {
  // Skills
  "asx-trading": "price_1TKgWFDdV0hQ2BwThrSPQOvk",
  "crypto-trading-au": "price_1TKgWGDdV0hQ2BwT10lCrQKu",
  "forex-trading-au": "price_1TKgWHDdV0hQ2BwTPxa6vOfq",
  "dropshipping-au": "price_1TKgWJDdV0hQ2BwTLYZyDLT8",
  "affiliate-marketing-au": "price_1TKgWKDdV0hQ2BwTK75cswOQ",
  "property-investment-au": "price_1TKgWKDdV0hQ2BwTPUulscla",
  "lead-generation": "price_1TKgWLDdV0hQ2BwTEJO0JiHJ",
  "content-creation": "price_1TKgWMDdV0hQ2BwTpAtM0zJa",
  "customer-service": "price_1TKgWNDdV0hQ2BwTrpqFtwq4",
  "skills-bundle": "price_1TKgWODdV0hQ2BwT340jySy9",
  // Plugins — MCP servers
  "xero-mcp": "price_1TVKlbDdV0hQ2BwTJWp8Ud10",
  "ato-tax-mcp": "price_1TVKlcDdV0hQ2BwTnU8x5onl",
  "square-au-mcp": "price_1TVKldDdV0hQ2BwTNwglxoMu",
  "xero-myob-mcp": "price_1TVKleDdV0hQ2BwTHb1W2SFq",
  // Plugins — browser extensions
  "aussie-tax-ext": "price_1TVKlfDdV0hQ2BwT5JotOpaW",
  "rea-ext": "price_1TVKlgDdV0hQ2BwTPtyGQUkN",
  "seek-ext": "price_1TVKlhDdV0hQ2BwT2c9kf5Sc",
  "gumtree-ext": "price_1TVKliDdV0hQ2BwTEniXPCqP",
  // Plugins — skill add-ons
  "bas-autofiler": "price_1TVKljDdV0hQ2BwTQCmhwrjj",
  "property-comparables": "price_1TVKlkDdV0hQ2BwTSNlka5ut",
  "asx-quotes": "price_1TVKllDdV0hQ2BwTN3ytsnTv",
  "multi-agent-orch": "price_1TVKlmDdV0hQ2BwTahPCggHV",
  "plugins-bundle": "price_1TVKlmDdV0hQ2BwTmEV67I4e"
};

const PLUGIN_IDS = new Set([
  "xero-mcp", "ato-tax-mcp", "square-au-mcp", "xero-myob-mcp",
  "aussie-tax-ext", "rea-ext", "seek-ext", "gumtree-ext",
  "bas-autofiler", "property-comparables", "asx-quotes", "multi-agent-orch",
  "plugins-bundle"
]);

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedBrowserOrigin(request)) {
      return NextResponse.json({ error: "forbidden" }, { status: 403 });
    }
    const ip = clientKey(request);
    if (!rateLimit(`buy-skill:${ip}`, 12, 60_000)) {
      return NextResponse.json({ error: "rate_limited" }, { status: 429 });
    }
    const { skillId, ref } = await request.json();
    
    const priceId = SKILL_PRICES[skillId];
    if (!priceId) {
      return NextResponse.json({ error: "Invalid skill" }, { status: 400 });
    }

    // Build params with optional affiliate tracking
    const params: Record<string, string> = {
      "mode": "payment",
      "payment_method_types[0]": "card",
      "line_items[0][price]": priceId,
      "line_items[0][quantity]": "1",
      "success_url": PLUGIN_IDS.has(skillId)
        ? `https://agentskill.com.au/plugins/success?plugin=${skillId}&session_id={CHECKOUT_SESSION_ID}`
        : `https://agentskill.com.au/marketplace/success?skill=${skillId}&session_id={CHECKOUT_SESSION_ID}`,
      "cancel_url": PLUGIN_IDS.has(skillId)
        ? "https://agentskill.com.au/plugins"
        : "https://agentskill.com.au/marketplace",
      "metadata[skill_id]": skillId,
      "metadata[type]": PLUGIN_IDS.has(skillId) ? "plugin" : "skill"
    };
    
    // Add affiliate ref if provided
    if (ref && typeof ref === "string" && ref.length > 0 && ref.length < 50) {
      params["metadata[affiliate_ref]"] = ref;
    }

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(params)
    });

    const session = await response.json();
    
    if (session.error) {
      return NextResponse.json({ error: session.error.message }, { status: 400 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
  }
}
