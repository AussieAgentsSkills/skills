import { NextRequest } from "next/server";

const hits = new Map<string, number[]>();

const ALLOWED_ORIGINS = [
  "https://agentskill.com.au",
  "https://www.agentskill.com.au",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

export function isAllowedBrowserOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin") || "";
  const referer = request.headers.get("referer") || "";
  // Browser fetch from the site always sends Origin or Referer. Missing both is a script, not Checkout.
  if (!origin && !referer) return false;
  return ALLOWED_ORIGINS.some(
    (allowed) => origin.startsWith(allowed) || referer.startsWith(allowed)
  );
}

export function rateLimit(key: string, limit = 8, windowMs = 60_000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

export function clientKey(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}
