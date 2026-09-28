"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default function EnterprisePage() {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/buy-enterprise", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Failed to start checkout. Please try again.");
      }
    } catch (error) {
      alert("Failed to start checkout. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-28">
      <Header navLinks={[
        { href: "/", label: "Free Skills" },
        { href: "/marketplace", label: "Marketplace" },
        { href: "/premium", label: "Premium", className: "text-yellow-400 hover:text-yellow-300" },
      ]} />

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
            🏢 ENTERPRISE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise Package
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to deploy AI agents in your business — all skills plus hands-on implementation support.
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-2 border-amber-500/50 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included:</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">📦</span>
                  <div>
                    <h3 className="text-white font-semibold">All Skills — Current & Future</h3>
                    <p className="text-slate-400 text-sm">Lifetime access to every skill in our library, plus all new skills we release.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">🤖</span>
                  <div>
                    <h3 className="text-white font-semibold">5 AI Agent Implementations</h3>
                    <p className="text-slate-400 text-sm">We&apos;ll set up and configure 5 AI agents tailored to your business needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">🎯</span>
                  <div>
                    <h3 className="text-white font-semibold">Custom Configuration</h3>
                    <p className="text-slate-400 text-sm">Each agent configured with the right skills, prompts, and integrations for your use case.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">📞</span>
                  <div>
                    <h3 className="text-white font-semibold">Direct Support</h3>
                    <p className="text-slate-400 text-sm">Priority support via email and video calls during setup and beyond.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">📚</span>
                  <div>
                    <h3 className="text-white font-semibold">Training & Documentation</h3>
                    <p className="text-slate-400 text-sm">We&apos;ll train your team on how to use and maintain the agents.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-slate-900 rounded-xl p-8 text-center">
                <p className="text-slate-400 mb-2">One-time investment</p>
                <div className="text-5xl font-bold text-white mb-2">$3,525</div>
                <p className="text-slate-500 mb-6">AUD + GST if applicable</p>
                
                <button
                  onClick={handleBuy}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:opacity-50 text-black py-4 rounded-lg font-bold text-lg mb-4"
                >
                  {loading ? "Loading..." : "Get Enterprise Package"}
                </button>
                
                <p className="text-slate-500 text-sm">
                  Secure payment via Stripe. Receipt provided.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Perfect For:</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-slate-400">
              <span className="text-green-400">✓</span> Small businesses wanting AI automation
            </div>
            <div className="text-slate-400">
              <span className="text-green-400">✓</span> Agencies building for clients
            </div>
            <div className="text-slate-400">
              <span className="text-green-400">✓</span> Teams new to AI agents
            </div>
            <div className="text-slate-400">
              <span className="text-green-400">✓</span> Tradies & service businesses
            </div>
            <div className="text-slate-400">
              <span className="text-green-400">✓</span> E-commerce operations
            </div>
            <div className="text-slate-400">
              <span className="text-green-400">✓</span> Professional services firms
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Have questions first?</p>
          <a 
            href="https://x.com/Joyjacobs42" 
            target="_blank"
            className="inline-block bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            DM us on X @Joyjacobs42
          </a>
        </div>
      </section>
    </div>
  );
}
