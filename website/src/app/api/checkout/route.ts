import { NextRequest, NextResponse } from "next/server";
import { clientKey, isAllowedBrowserOrigin, rateLimit } from "@/lib/requestGuard";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";
const PRICE_ID = "price_1TKfpJDdV0hQ2BwTc6UC2yCC";

export async function POST(request: NextRequest) {
  try {
    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "misconfigured" }, { status: 500 });
    }
    if (!isAllowedBrowserOrigin(request)) {
      return NextResponse.json({ error: "forbidden" }, { status: 403 });
    }
    const ip = clientKey(request);
    if (!rateLimit(`checkout:${ip}`, 8, 60_000)) {
      return NextResponse.json({ error: "rate_limited" }, { status: 429 });
    }

    const body = await request.json().catch(() => ({}));
    const email = body?.email;
    const ref = body?.ref;

    const params: Record<string, string> = {
      mode: "subscription",
      "payment_method_types[0]": "card",
      "line_items[0][price]": PRICE_ID,
      "line_items[0][quantity]": "1",
      success_url:
        "https://agentskill.com.au/premium/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://agentskill.com.au/premium",
    };

    if (email && typeof email === "string") {
      params["customer_email"] = email;
    }

    if (ref && typeof ref === "string" && ref.length > 0 && ref.length < 50) {
      params["metadata[affiliate_ref]"] = ref;
    }

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(params),
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
