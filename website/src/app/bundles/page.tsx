"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

const bundles = [
  {
    id: "tradie-bundle",
    name: "Tradie Bundle",
    emoji: "🏗️",
    description: "Everything a tradie needs for tax, super, licensing and compliance",
    price: 79,
    individualPrice: 145,
    skills: [
      "BAS & GST Expert",
      "Superannuation Guide",
      "WorkCover & Insurance",
      "Trade Licensing",
      "Invoice & Quoting"
    ],
    popular: true
  },
  {
    id: "real-estate-bundle",
    name: "Real Estate Bundle",
    emoji: "🏠",
    description: "Property investment, contracts, stamp duty and rental management",
    price: 89,
    individualPrice: 165,
    skills: [
      "Property Investment AU",
      "Stamp Duty Calculator",
      "Rental Yield Analyzer",
      "Contract Review",
      "Depreciation Guide"
    ],
    popular: false
  },
  {
    id: "small-business-bundle",
    name: "Small Business Bundle",
    emoji: "💼",
    description: "Start and run your Aussie business with all the essentials",
    price: 99,
    individualPrice: 195,
    skills: [
      "ABN & Business Setup",
      "BAS & GST Expert",
      "Payroll & PAYG",
      "Fair Work Compliance",
      "Business Insurance",
      "Bookkeeping Basics"
    ],
    popular: true
  },
  {
    id: "finance-bundle",
    name: "Finance Bundle",
    emoji: "📊",
    description: "Personal finance, tax optimisation and wealth building",
    price: 69,
    individualPrice: 125,
    skills: [
      "Tax Deductions Guide",
      "Superannuation Guide",
      "Investment Basics",
      "Budgeting & Savings"
    ],
    popular: false
  },
  {
    id: "hospitality-bundle",
    name: "Hospitality Bundle",
    emoji: "🍽️",
    description: "Run a café, restaurant or bar with Australian compliance",
    price: 89,
    individualPrice: 175,
    skills: [
      "Food Safety & HACCP",
      "Liquor Licensing",
      "Fair Work Hospitality",
      "Rostering & Wages",
      "BAS & GST Expert"
    ],
    popular: false
  },
  {
    id: "ecommerce-bundle",
    name: "E-Commerce Bundle",
    emoji: "🛒",
    description: "Sell online with Australian consumer law and GST compliance",
    price: 79,
    individualPrice: 155,
    skills: [
      "Australian Consumer Law",
      "GST for Online Sales",
      "Shipping & Returns",
      "Dropshipping AU",
      "Privacy & Terms"
    ],
    popular: false
  }
];

export default function BundlesPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleBuy = async (bundleId: string) => {
    setLoading(bundleId);
    try {
      const response = await fetch("/api/buy-bundle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bundleId })
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
        { href: "/marketplace", label: "Marketplace" },
        { href: "/premium", label: "Premium", className: "text-yellow-400 hover:text-yellow-300" },
      ]} />

      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
          📦 SKILL BUNDLES
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Themed Skill Packs
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Get everything you need for your industry in one discounted bundle. Save up to 50% compared to buying individually.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle) => (
            <div 
              key={bundle.id}
              className={`bg-slate-800 rounded-xl border overflow-hidden relative ${
                bundle.popular ? "border-purple-500" : "border-slate-700"
              }`}
            >
              {bundle.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-3 py-1 rounded-bl-lg font-bold">
                  POPULAR
                </div>
              )}
              
              <div className="p-6">
                <div className="text-4xl mb-3">{bundle.emoji}</div>
                <h2 className="text-xl font-bold text-white mb-2">{bundle.name}</h2>
                <p className="text-slate-400 text-sm mb-4">{bundle.description}</p>
                
                <div className="space-y-2 mb-6">
                  {bundle.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-green-400">✓</span>
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-white">${bundle.price}</span>
                  <span className="text-slate-500 line-through">${bundle.individualPrice}</span>
                  <span className="bg-green-600/20 text-green-400 text-xs px-2 py-1 rounded">
                    Save ${bundle.individualPrice - bundle.price}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-slate-700 p-4 space-y-2">
                <button
                  onClick={() => handleBuy(bundle.id)}
                  disabled={loading === bundle.id}
                  className={`w-full py-3 rounded-lg font-bold transition ${
                    bundle.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white"
                      : "bg-slate-700 hover:bg-slate-600 text-white"
                  } disabled:opacity-50`}
                >
                  {loading === bundle.id ? "Loading..." : `Get ${bundle.name}`}
                </button>
                <Link
                  href={`/chat?bundle=${bundle.id}`}
                  className="block w-full py-2 rounded-lg border border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 text-center text-sm transition"
                >
                  💬 Chat with this bundle
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Everything?</h2>
          <p className="text-slate-400 mb-6">
            Get all skills + implementation support with our Enterprise package.
          </p>
          <Link 
            href="/enterprise"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black px-8 py-3 rounded-lg font-bold"
          >
            Enterprise Package — $3,525
          </Link>
        </div>
      </section>
    </div>
  );
}
