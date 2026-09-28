"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { premiumSkills } from "@/data/skills";

const categoryLabels: Record<string, { label: string; color: string }> = {
  agents: { label: "🤖 Agents", color: "bg-purple-600" },
  memory: { label: "🧠 Memory", color: "bg-blue-600" },
  research: { label: "🔬 Research", color: "bg-green-600" },
  workflows: { label: "⚡ Workflows", color: "bg-orange-600" },
  learning: { label: "📚 Learning", color: "bg-pink-600" }
};

function CheckoutButton({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to start checkout. Please try again.");
      }
    } catch (error) {
      alert("Failed to start checkout. Please try again.");
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={className || "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 disabled:opacity-50 text-black px-8 py-3 rounded-lg font-bold"}
    >
      {loading ? "Loading..." : "Get All 14 Packs — $49/mo"}
    </button>
  );
}

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-28">
      <Header navLinks={[
        { href: "/", label: "Free Skills" },
        { href: "/submit", label: "Submit" },
      ]} />

      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
          ⭐ PREMIUM
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Power Tools for AI Agents
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          14 battle-tested skill packs from top practitioners. 145K+ GitHub stars combined. 
          MIT licensed — yours to use forever.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <CheckoutButton />
          <Link href="/" className="border border-slate-600 hover:border-slate-500 text-white px-6 py-3 rounded-lg font-medium">
            Browse Free Skills
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <div className="text-3xl font-bold text-yellow-400">14</div>
            <div className="text-slate-400 text-sm">Skill Packs</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <div className="text-3xl font-bold text-yellow-400">145K+</div>
            <div className="text-slate-400 text-sm">GitHub Stars</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <div className="text-3xl font-bold text-yellow-400">300+</div>
            <div className="text-slate-400 text-sm">Individual Skills</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <div className="text-3xl font-bold text-yellow-400">MIT</div>
            <div className="text-slate-400 text-sm">Licensed</div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumSkills.map((skill) => (
            <div 
              key={skill.id}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`${categoryLabels[skill.category].color} text-white text-xs px-2 py-1 rounded`}>
                  {categoryLabels[skill.category].label}
                </span>
                {skill.stars !== "—" && (
                  <span className="text-yellow-400 text-sm">⭐ {skill.stars}</span>
                )}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{skill.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.features.slice(0, 3).map((feature) => (
                  <span key={feature} className="bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
                <span className="text-slate-500 text-xs">{skill.license} License</span>
                <span className="text-slate-500 text-xs">Instant download</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Level Up?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Get instant access to all 14 premium skill packs. MIT licensed — use them in any project, commercial or personal.
          </p>
          <CheckoutButton />
          <p className="text-slate-500 text-sm mt-4">Cancel anytime. No questions asked.</p>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-8 border-t border-slate-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© 2026 Aussie Agent Skills. Premium skills curated from MIT-licensed repos.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white">Free Skills</Link>
            <Link href="/newsletter" className="hover:text-white">Newsletter</Link>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur border-t border-yellow-500/30 p-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">⭐</span>
            <div>
              <p className="text-white font-medium">14 Premium Skill Packs</p>
              <p className="text-slate-400 text-sm">145K+ GitHub stars, MIT licensed</p>
            </div>
          </div>
          <CheckoutButton className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 disabled:opacity-50 text-black px-6 py-2 rounded-lg font-bold whitespace-nowrap" />
        </div>
      </div>
    </div>
  );
}
