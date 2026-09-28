"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default function ChatGPTAdsPage() {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/buy-chatgpt-ads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Failed to start checkout. Please try again.");
      }
    } catch {
      alert("Failed to start checkout. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      <Header
        navLinks={[
          { href: "/", label: "Skills" },
          { href: "/enterprise", label: "Enterprise" },
          { href: "/premium", label: "Premium", className: "text-yellow-400 hover:text-yellow-300" },
        ]}
      />

      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-sm font-semibold text-violet-400 mb-3">Implementation</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ChatGPT Ads, set up for you
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          We build your first ChatGPT Ads campaign in Ads Manager. You pay OpenAI for the media.
          We handle the setup.
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
          <h2 className="text-white font-bold mb-3">What&apos;s included</h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✓ Ads Manager campaign structure (objective, budget, dates)</li>
            <li>✓ AU targeting where ChatGPT Ads supports it</li>
            <li>✓ Ad groups and ad copy that match how people talk in chat</li>
            <li>✓ Landing page checklist</li>
            <li>✓ Pixel / conversions checklist</li>
            <li>✓ One review call in the first 30 days</li>
          </ul>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
          <h2 className="text-white font-bold mb-3">How it works</h2>
          <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
            <li>Buy this package</li>
            <li>We book a short kickoff</li>
            <li>You get Ads Manager ready and the first campaign live (or ready to launch)</li>
            <li>You fund the ad account with OpenAI</li>
            <li>We do one optimisation pass</li>
          </ol>
        </div>

        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-4xl font-bold text-white">A$3,525</span>
          <span className="text-slate-400 text-sm">one-time · media spend separate</span>
        </div>

        <button
          onClick={handleBuy}
          disabled={loading}
          className="w-full sm:w-auto bg-violet-500 hover:bg-violet-400 disabled:opacity-50 text-white px-8 py-3 rounded-lg font-bold"
        >
          {loading ? "Loading..." : "Get ChatGPT Ads implementation"}
        </button>

        <p className="text-slate-500 text-sm mt-6">
          Not a monthly retainer. Not a guarantee of clicks or sales. Ad spend is paid to OpenAI, not us.
          Also available:{" "}
          <Link href="/enterprise" className="text-amber-400 hover:underline">
            Enterprise A$3,525
          </Link>
          {" "}and{" "}
          <Link href="/bundles/tradie" className="text-emerald-400 hover:underline">
            Tradie Pack A$49
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
