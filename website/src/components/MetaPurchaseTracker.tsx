"use client";

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/metaPixel";

export default function MetaPurchaseTracker({
  value,
  currency = "AUD",
  contentName,
}: {
  value?: number;
  currency?: string;
  contentName?: string;
}) {
  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get(
      "session_id"
    );
    if (!sessionId || !sessionId.startsWith("cs_")) {
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          `/api/verify-checkout?session_id=${encodeURIComponent(sessionId)}`
        );
        if (!res.ok || cancelled) return;
        const data = await res.json();
        if (!data?.paid || cancelled) return;

        trackMetaEvent("Purchase", {
          value: value ?? data.amount,
          currency: data.currency || currency,
          content_name: contentName,
        });
      } catch {
        // swallow — never fire Purchase on verify failure
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [value, currency, contentName]);

  return null;
}
