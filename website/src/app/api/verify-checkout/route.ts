import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { clientKey, rateLimit } from "@/lib/requestGuard";

export async function GET(request: NextRequest) {
  try {
    const ip = clientKey(request);
    if (!rateLimit(`verify:${ip}`, 20, 60_000)) {
      return NextResponse.json({ paid: false, error: "rate_limited" }, { status: 429 });
    }

    const sessionId = request.nextUrl.searchParams.get("session_id") || "";
    if (!sessionId.startsWith("cs_")) {
      return NextResponse.json({ paid: false }, { status: 400 });
    }

    const secret = process.env.STRIPE_SECRET_KEY;
    if (!secret) {
      return NextResponse.json({ paid: false, error: "misconfigured" }, { status: 500 });
    }

    const stripe = new Stripe(secret);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid =
      session.payment_status === "paid" ||
      session.status === "complete";

    return NextResponse.json({
      paid,
      amount:
        typeof session.amount_total === "number"
          ? session.amount_total / 100
          : undefined,
      currency: (session.currency || "aud").toUpperCase(),
    });
  } catch (error) {
    console.error("verify-checkout error:", error);
    return NextResponse.json({ paid: false }, { status: 400 });
  }
}
