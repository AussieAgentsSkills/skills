"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { paidSkills, paidSkillCategories } from "@/data/skills";

const categoryColors: Record<string, string> = {
  trading: "bg-green-600",
  "money-making": "bg-yellow-600",
  automation: "bg-purple-600"
};

export default function MarketplacePage() {
  const [filter, setFilter] = useState<string>("all");
  const [loading, setLoading] = useState<string | null>(null);

  const filteredSkills = filter === "all" 
    ? paidSkills 
    : paidSkills.filter(s => s.category === filter);

  const handleBuy = async (skillId: string) => {
    setLoading(skillId);
    try {
      const response = await fetch("/api/buy-skill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skillId })
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
    setLoading(null);
  };

  const handleBuyBundle = async () => {
    setLoading("bundle");
    try {
      const response = await fetch("/api/buy-skill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skillId: "skills-bundle" })
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
    setLoading(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      <Header navLinks={[
        { href: "/", label: "Skills" },
        { href: "/bundles", label: "Bundles" },
        { href: "/premium", label: "Premium", className: "text-yellow-400 hover:text-yellow-300" },
      ]} />

      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
          💰 SKILL MARKETPLACE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Money-Making Skills for AI Agents
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Trading, investing, and automation skills. Each skill is a complete knowledge pack your AI agent can use immediately.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === "all" 
                ? "bg-white text-black" 
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            All Skills
          </button>
          {paidSkillCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setFilter(cat.slug)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === cat.slug 
                  ? "bg-white text-black" 
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.id}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-green-500/50 transition"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`${categoryColors[skill.category]} text-white text-xs px-2 py-1 rounded`}>
                    {paidSkillCategories.find(c => c.slug === skill.category)?.emoji}{" "}
                    {paidSkillCategories.find(c => c.slug === skill.category)?.name}
                  </span>
                  <span className="text-green-400 font-bold">${skill.price}</span>
                </div>
                
                <h3 className="text-white font-semibold text-lg mb-2">{skill.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{skill.description}</p>
                
                <div className="space-y-2 mb-4">
                  {skill.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </div>
                  ))}
                  {skill.features.length > 3 && (
                    <div className="text-slate-500 text-sm">
                      +{skill.features.length - 3} more features
                    </div>
                  )}
                </div>

                <div className="bg-slate-900 rounded-lg p-3 mb-4">
                  <p className="text-slate-500 text-xs mb-2">Example prompts:</p>
                  {skill.preview.map((prompt, i) => (
                    <p key={i} className="text-slate-400 text-sm italic">&quot;{prompt}&quot;</p>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-slate-700 p-4">
                <button
                  onClick={() => handleBuy(skill.id)}
                  disabled={loading === skill.id}
                  className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white py-2 rounded-lg font-medium transition"
                >
                  {loading === skill.id ? "Loading..." : `Buy for $${skill.price}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Want All 9 Skills?</h2>
          <p className="text-slate-300 mb-2">
            Individual total: ${paidSkills.reduce((sum, s) => sum + s.price, 0)}
          </p>
          <p className="text-green-400 text-2xl font-bold mb-6">
            Bundle price: $149 (save ${paidSkills.reduce((sum, s) => sum + s.price, 0) - 149})
          </p>
          <button 
            onClick={handleBuyBundle}
            disabled={loading === "bundle"}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 disabled:opacity-50 text-black px-8 py-3 rounded-lg font-bold"
          >
            {loading === "bundle" ? "Loading..." : "Get All 9 Money-Making Skills — $149"}
          </button>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-8 border-t border-slate-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© 2026 Aussie Agent Skills. Skills for AI agents that make money.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white">Free Skills</Link>
            <Link href="/premium" className="hover:text-white">Premium</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
