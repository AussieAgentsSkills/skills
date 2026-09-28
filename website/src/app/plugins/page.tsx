"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { plugins, pluginCategories } from "@/data/skills";

const categoryColors: Record<string, string> = {
  "mcp": "bg-blue-600",
  "browser-ext": "bg-pink-600",
  "skill-addon": "bg-amber-600"
};

export default function PluginsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [loading, setLoading] = useState<string | null>(null);

  const filtered = filter === "all"
    ? plugins
    : plugins.filter(p => p.category === filter);

  const handleBuy = async (pluginId: string) => {
    setLoading(pluginId);
    try {
      const response = await fetch("/api/buy-skill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skillId: pluginId })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to start checkout. Please try again.");
      }
    } catch {
      alert("Failed to start checkout. Please try again.");
    }
    setLoading(null);
  };

  const handleBuyBundle = async () => {
    setLoading("plugins-bundle");
    try {
      const response = await fetch("/api/buy-skill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skillId: "plugins-bundle" })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to start checkout. Please try again.");
      }
    } catch {
      alert("Failed to start checkout. Please try again.");
    }
    setLoading(null);
  };

  const total = plugins.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      <Header navLinks={[
        { href: "/", label: "Skills" },
        { href: "/marketplace", label: "Marketplace", className: "text-green-400 hover:text-green-300" },
        { href: "/bundles", label: "Bundles" },
        { href: "/premium", label: "Premium", className: "text-yellow-400 hover:text-yellow-300" },
      ]} />

      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
          🔌 PLUGINS — POWER UP YOUR AGENT
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Plugins for AI Agents
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          MCP servers, browser extensions, and skill add-ons. Bolt-on capabilities that give your agent superpowers.
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
            All Plugins
          </button>
          {pluginCategories.map((cat) => (
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
          {filtered.map((plugin) => (
            <div
              key={plugin.id}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-3">
                  <span className={`${categoryColors[plugin.category]} text-white text-xs px-2 py-1 rounded`}>
                    {pluginCategories.find(c => c.slug === plugin.category)?.emoji}{" "}
                    {pluginCategories.find(c => c.slug === plugin.category)?.name}
                  </span>
                  <span className="text-blue-400 font-bold">${plugin.price}</span>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">{plugin.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plugin.description}</p>

                <div className="space-y-2 mb-4">
                  {plugin.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-blue-400">✓</span>
                      {feature}
                    </div>
                  ))}
                  {plugin.features.length > 3 && (
                    <div className="text-slate-500 text-sm">
                      +{plugin.features.length - 3} more features
                    </div>
                  )}
                </div>

                <div className="bg-slate-900 rounded-lg p-3 mb-4">
                  <p className="text-slate-500 text-xs mb-2">Example prompts:</p>
                  {plugin.preview.map((prompt, i) => (
                    <p key={i} className="text-slate-400 text-sm italic">&quot;{prompt}&quot;</p>
                  ))}
                </div>

                <div className="bg-slate-950 rounded-lg p-3 mb-2">
                  <p className="text-slate-500 text-xs mb-1">Install:</p>
                  <code className="text-blue-300 text-xs">{plugin.installs}</code>
                </div>
              </div>

              <div className="border-t border-slate-700 p-4">
                <button
                  onClick={() => handleBuy(plugin.id)}
                  disabled={loading === plugin.id}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white py-2 rounded-lg font-medium transition"
                >
                  {loading === plugin.id ? "Loading..." : `Buy for $${plugin.price}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Want All 12 Plugins?</h2>
          <p className="text-slate-300 mb-2">
            Individual total: ${total}
          </p>
          <p className="text-blue-400 text-2xl font-bold mb-6">
            Bundle price: $199 (save ${total - 199})
          </p>
          <button
            onClick={handleBuyBundle}
            disabled={loading === "plugins-bundle"}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 disabled:opacity-50 text-white px-8 py-3 rounded-lg font-bold"
          >
            {loading === "plugins-bundle" ? "Loading..." : "Get All 12 Plugins — $199"}
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-white font-semibold text-lg mb-3">What&apos;s a plugin?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300">
            <div>
              <div className="text-blue-400 font-semibold mb-1">🔌 MCP Servers</div>
              <p>Standalone tools your agent can call. Connects to live data sources like Xero, ATO, Square.</p>
            </div>
            <div>
              <div className="text-pink-400 font-semibold mb-1">🌐 Browser Extensions</div>
              <p>Drop your agent right into the websites you already use. RealEstate, Seek, Gumtree, anywhere.</p>
            </div>
            <div>
              <div className="text-amber-400 font-semibold mb-1">⚡ Skill Add-ons</div>
              <p>Bolt extra capability onto an existing skill. Auto-filing, live data, multi-agent orchestration.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-8 border-t border-slate-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© 2026 Aussie Agent Skills. Plugins for AI agents that earn their keep.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white">Free Skills</Link>
            <Link href="/marketplace" className="hover:text-white">Marketplace</Link>
            <Link href="/premium" className="hover:text-white">Premium</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
