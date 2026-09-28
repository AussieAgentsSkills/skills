import { NextRequest, NextResponse } from "next/server";
import { clientKey, isAllowedBrowserOrigin, rateLimit } from "@/lib/requestGuard";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";

const BUNDLE_PRICES: Record<string, string> = {
  "tradie-bundle": "price_1TPzG5DdV0hQ2BwTxpmh3Yxs",
  "real-estate-bundle": "price_1TPzG6DdV0hQ2BwTvvBrnoYm",
  "small-business-bundle": "price_1TPzG7DdV0hQ2BwTKVV2ugUs",
  "finance-bundle": "price_1TPzG8DdV0hQ2BwTumjmRjLx",
  "hospitality-bundle": "price_1TPzG9DdV0hQ2BwT5jYT9CzM",
  "ecommerce-bundle": "price_1TPzGADdV0hQ2BwTAnpkDQDo"
};

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedBrowserOrigin(request)) {
      return NextResponse.json({ error: "forbidden" }, { status: 403 });
    }
    const ip = clientKey(request);
    if (!rateLimit(`buy-bundle:${ip}`, 12, 60_000)) {
      return NextResponse.json({ error: "rate_limited" }, { status: 429 });
    }
    const { bundleId, ref } = await request.json();
    
    const priceId = BUNDLE_PRICES[bundleId];
    if (!priceId) {
      return NextResponse.json({ error: "Invalid bundle" }, { status: 400 });
    }

    const params: Record<string, string> = {
      "mode": "payment",
      "payment_method_types[0]": "card",
      "line_items[0][price]": priceId,
      "line_items[0][quantity]": "1",
      "success_url": `https://agentskill.com.au/bundles/success?bundle=${bundleId}&session_id={CHECKOUT_SESSION_ID}`,
      "cancel_url": "https://agentskill.com.au/bundles",
      "metadata[bundle_id]": bundleId
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
