"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default function AIAndLawCoursePage() {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/buy-ai-and-law", {
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
        <div className="text-sm font-semibold text-emerald-400 mb-3">
          Aussie Agent Skills · Live course
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          AI and Law for Australian Academics
        </h1>
        <p className="text-xl text-slate-300 mb-4">
          Practical governance, research integrity, and teaching practice under
          Australian law — for university staff who need Monday-ready artefacts,
          not a law degree.
        </p>
        <p className="text-slate-400 text-sm mb-8">
          6-week Zoom course · 6 × 90-minute live sessions · async toolkit ·
          cohort-style delivery
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-white font-bold mb-3">Who it&apos;s for</h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✓ Academic staff (Level B–E) using generative AI in research, teaching, or service</li>
            <li>✓ HDR supervisors and unit coordinators setting local rules ahead of central policy</li>
            <li>✓ Integrity, research-office, library, and learning-design staff who advise academics</li>
          </ul>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-white font-bold mb-3">What you get</h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>✓ Six live Zoom modules (90 minutes each) over six weeks</li>
            <li>✓ Session slides, Australian reading pack, and participant toolkit</li>
            <li>✓ Checklists, clause bank, risk matrix, HDR protocol, and practice-note starter</li>
            <li>✓ Capstone one-pager with pass/fail completion certificate</li>
            <li>✓ Suggested cohort size 12–20 for discussion quality</li>
          </ul>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-white font-bold mb-3">Module map</h2>
          <ol className="space-y-2 text-slate-300 text-sm list-decimal list-inside">
            <li>Orient: AI in the Australian university</li>
            <li>Data, privacy, and third-party models</li>
            <li>Copyright, licensing, and scholarly outputs</li>
            <li>Research integrity and HDR supervision</li>
            <li>Teaching, assessment, and academic integrity</li>
            <li>Governance and institutional action + capstone</li>
          </ol>
        </div>

        <div className="bg-amber-950/40 border border-amber-700/50 rounded-xl p-6 mb-8">
          <h2 className="text-amber-200 font-bold mb-2">Important boundaries</h2>
          <ul className="space-y-2 text-amber-100/90 text-sm">
            <li>• Not legal advice and not a substitute for university counsel, research office, or integrity decisions</li>
            <li>• Not clinical, medical-device, or regulated-profession advice</li>
            <li>• Jurisdiction focus is Australia; overseas comparisons are illustrative only</li>
            <li>• Your institution&apos;s policies prevail where they conflict with course templates</li>
          </ul>
        </div>

        <div className="flex flex-wrap items-baseline gap-3 mb-2">
          <span className="text-4xl font-bold text-white">A$2,300</span>
          <span className="text-emerald-300 text-lg font-semibold">+ GST</span>
        </div>
        <p className="text-slate-400 text-sm mb-6">
          A$2,530 incl. GST · one seat · one-time · live Zoom delivery under Aussie Agent Skills
        </p>

        <button
          onClick={handleBuy}
          disabled={loading}
          className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-900 px-8 py-3 rounded-lg font-bold"
        >
          {loading ? "Loading..." : "Enrol — pay A$2,530 incl. GST"}
        </button>

        <p className="text-slate-500 text-sm mt-6">
          After payment we email enrolment next steps (cohort dates and Zoom access).
          Facilitator and cohort start dates are confirmed in that email.
          Also available:{" "}
          <Link href="/chatgpt-ads" className="text-violet-400 hover:underline">
            ChatGPT Ads A$3,525
          </Link>
          {" "}and{" "}
          <Link href="/enterprise" className="text-amber-400 hover:underline">
            Enterprise A$3,525
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
