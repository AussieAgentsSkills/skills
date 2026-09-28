import { NextRequest, NextResponse } from "next/server";
import { clientKey, isAllowedBrowserOrigin, rateLimit } from "@/lib/requestGuard";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";

export async function POST(request: NextRequest) {
  try {
    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "misconfigured" }, { status: 500 });
    }
    if (!isAllowedBrowserOrigin(request)) {
      return NextResponse.json({ error: "forbidden" }, { status: 403 });
    }
    const ip = clientKey(request);
    if (!rateLimit(`buy-enterprise:${ip}`, 5, 60_000)) {
      return NextResponse.json({ error: "rate_limited" }, { status: 429 });
    }

    const body = await request.json().catch(() => ({}));
    const ref = body?.ref;

    // Card + AU bank methods. One-time PayTo rejects mandate amount_type, so omit it.
    const params: Record<string, string> = {
      mode: "payment",
      "payment_method_types[0]": "card",
      "payment_method_types[1]": "au_becs_debit",
      "payment_method_types[2]": "payto",
      "payment_method_options[card][request_three_d_secure]": "automatic",
      "line_items[0][price]": "price_1UKQSrDdV0hQ2BwTQqfibb8q",
      "line_items[0][quantity]": "1",
      success_url:
        "https://agentskill.com.au/enterprise/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://agentskill.com.au/enterprise",
      "metadata[product]": "enterprise-package",
    };

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
      console.error("Stripe error:", session.error);
      return NextResponse.json({ error: session.error.message }, { status: 400 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
  }
}
