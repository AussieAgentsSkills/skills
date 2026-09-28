export function trackMetaEvent(
  event: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
  if (!fbq) return;
  if (params) fbq("track", event, params);
  else fbq("track", event);
}
