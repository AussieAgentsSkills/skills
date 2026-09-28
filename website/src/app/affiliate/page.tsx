"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";

export default function AffiliatePage() {
  const [affiliateId, setAffiliateId] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const baseUrl = "https://agentskill.com.au";
  
  const links = [
    { name: "Premium Subscription", path: "/premium", price: "$49/mo", commission: "30%" },
    { name: "Marketplace", path: "/marketplace", price: "$29-149", commission: "25%" },
    { name: "Bundles", path: "/bundles", price: "$69-99", commission: "25%" },
    { name: "Enterprise Package", path: "/enterprise", price: "$3,525", commission: "20%" },
  ];

  const copyLink = (path: string) => {
    const link = `${baseUrl}${path}?ref=${affiliateId || "YOUR_ID"}`;
    navigator.clipboard.writeText(link);
    setCopied(path);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <Header navLinks={[
        { href: "/", label: "Free Skills" },
        { href: "/premium", label: "Premium" },
      ]} />

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full mb-4">
            🤝 AFFILIATE PROGRAM
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Earn 20-30% Commission
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Promote AI skills to your audience and earn recurring commissions on every sale. No caps, no limits.
          </p>
        </div>

        {/* Commission Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">30%</div>
            <div className="text-sm text-zinc-400">Premium Subscriptions</div>
            <div className="text-xs text-zinc-500 mt-1">Recurring monthly</div>
          </div>
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">25%</div>
            <div className="text-sm text-zinc-400">Marketplace & Bundles</div>
            <div className="text-xs text-zinc-500 mt-1">One-time purchases</div>
          </div>
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">20%</div>
            <div className="text-sm text-zinc-400">Enterprise Package</div>
            <div className="text-xs text-zinc-500 mt-1">$705 per sale</div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Apply", desc: "Fill out the form below" },
              { step: "2", title: "Get Approved", desc: "We review within 24 hours" },
              { step: "3", title: "Share Links", desc: "Promote with your unique ref" },
              { step: "4", title: "Get Paid", desc: "Monthly PayPal/bank transfer" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <div className="font-medium mb-1">{item.title}</div>
                <div className="text-sm text-zinc-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Link Generator */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 mb-16">
          <h2 className="text-xl font-bold mb-4">Generate Your Links</h2>
          <div className="mb-4">
            <label className="block text-sm text-zinc-400 mb-2">Your Affiliate ID</label>
            <input
              type="text"
              value={affiliateId}
              onChange={(e) => setAffiliateId(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ""))}
              placeholder="e.g., mattwolfe or your-name"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          
          <div className="space-y-3">
            {links.map((link) => (
              <div key={link.path} className="flex items-center justify-between bg-zinc-900/50 rounded-lg p-3">
                <div>
                  <span className="font-medium">{link.name}</span>
                  <span className="text-zinc-500 text-sm ml-2">{link.price}</span>
                  <span className="text-emerald-400 text-sm ml-2">({link.commission})</span>
                </div>
                <button
                  onClick={() => copyLink(link.path)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-medium transition"
                >
                  {copied === link.path ? "✓ Copied!" : "Copy Link"}
                </button>
              </div>
            ))}
          </div>
          
          {affiliateId && (
            <div className="mt-4 p-3 bg-zinc-900 rounded-lg">
              <div className="text-xs text-zinc-500 mb-1">Example link:</div>
              <code className="text-sm text-emerald-400 break-all">
                {baseUrl}/premium?ref={affiliateId}
              </code>
            </div>
          )}
        </div>

        {/* Application Form */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 mb-16">
          <h2 className="text-xl font-bold mb-4">Apply to Join</h2>
          <form
            action="https://formspree.io/f/xpwzyzag"
            method="POST"
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Preferred Affiliate ID *</label>
              <input
                type="text"
                name="affiliate_id"
                required
                placeholder="e.g., your-name or handle"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Website / Social Profile *</label>
              <input
                type="url"
                name="website"
                required
                placeholder="https://..."
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">How will you promote? *</label>
              <textarea
                name="promotion_plan"
                required
                rows={3}
                placeholder="YouTube videos, blog posts, email newsletter, etc."
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Estimated Audience Size</label>
              <select
                name="audience_size"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select...</option>
                <option value="<1k">&lt; 1,000</option>
                <option value="1k-10k">1,000 - 10,000</option>
                <option value="10k-50k">10,000 - 50,000</option>
                <option value="50k-100k">50,000 - 100,000</option>
                <option value="100k+">100,000+</option>
              </select>
            </div>
            <input type="hidden" name="_subject" value="New Affiliate Application" />
            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold transition"
            >
              Submit Application
            </button>
          </form>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "When do I get paid?", a: "Monthly, via PayPal or bank transfer. Minimum payout is $50 AUD." },
              { q: "How long does the cookie last?", a: "30 days. If someone clicks your link and purchases within 30 days, you get credit." },
              { q: "Can I use paid ads?", a: "Yes, but not on brand terms (Aussie Agent Skills, agentskill.com.au)." },
              { q: "Are recurring commissions included?", a: "Yes! Premium subscriptions earn you 30% every month the customer stays subscribed." },
            ].map((faq, i) => (
              <div key={i} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                <div className="font-medium mb-2">{faq.q}</div>
                <div className="text-sm text-zinc-400">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-zinc-400 mb-4">Questions? DM us on X</p>
          <a
            href="https://x.com/Joyjacobs42"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
          >
            @Joyjacobs42 →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-zinc-500">
          © 2026 Aussie Agent Skills. Affiliate program powered by Stripe.
        </div>
      </footer>
    </div>
  );
}
