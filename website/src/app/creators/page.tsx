"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default function CreatorsPage() {
  const [step, setStep] = useState<"info" | "form" | "success">("info");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      <Header navLinks={[
        { href: "/", label: "Skills" },
        { href: "/marketplace", label: "Marketplace" },
      ]} />

      {step === "info" && <CreatorInfo onStart={() => setStep("form")} />}
      {step === "form" && <CreatorForm onSuccess={() => setStep("success")} />}
      {step === "success" && <CreatorSuccess />}
    </div>
  );
}

function CreatorInfo({ onStart }: { onStart: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
          💰 EARN MONEY
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Sell Your AI Skills
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Built a useful skill for Claude, Cursor, or any AI agent? Sell it here and keep 70% of every sale.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="text-3xl mb-3">📝</div>
          <h3 className="text-white font-semibold mb-2">1. Submit Your Skill</h3>
          <p className="text-slate-400 text-sm">Upload your SKILL.md or CLAUDE.md file. Add description, category, and set your price.</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="text-3xl mb-3">✅</div>
          <h3 className="text-white font-semibold mb-2">2. We Review It</h3>
          <p className="text-slate-400 text-sm">Quick quality check to make sure it works. Usually approved within 24 hours.</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="text-3xl mb-3">💸</div>
          <h3 className="text-white font-semibold mb-2">3. Get Paid</h3>
          <p className="text-slate-400 text-sm">Every time someone buys your skill, you get 70%. Payouts via PayPal monthly.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Revenue Split</h2>
        <div className="flex justify-center items-center gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400">70%</div>
            <div className="text-slate-400">You Keep</div>
          </div>
          <div className="text-slate-600 text-2xl">/</div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-500">30%</div>
            <div className="text-slate-400">Platform Fee</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-8 py-4 rounded-lg font-bold text-lg"
        >
          Submit Your Skill →
        </button>
      </div>
    </div>
  );
}

function CreatorForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    creatorName: "",
    creatorEmail: "",
    xHandle: "",
    github: "",
    paypalEmail: "",
    skillName: "",
    description: "",
    category: "automation",
    price: "29",
    skillContent: "",
    previewPrompts: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/submit-skill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        onSuccess();
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      alert("Failed to submit. Please try again.");
    }
    
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Submit Your Skill</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h2 className="text-white font-semibold mb-4">About You</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-slate-400 text-sm mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={formData.creatorName}
                onChange={(e) => setFormData({...formData, creatorName: e.target.value})}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1">Email *</label>
              <input
                type="email"
                required
                value={formData.creatorEmail}
                onChange={(e) => setFormData({...formData, creatorEmail: e.target.value})}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                placeholder="jane@example.com"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1">X/Twitter Handle</label>
                <input
                  type="text"
                  value={formData.xHandle}
                  onChange={(e) => setFormData({...formData, xHandle: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                  placeholder="@username"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1">GitHub</label>
                <input
                  type="text"
                  value={formData.github}
                  onChange={(e) => setFormData({...formData, github: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                  placeholder="username"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1">PayPal Email (for payouts) *</label>
              <input
                type="email"
                required
                value={formData.paypalEmail}
                onChange={(e) => setFormData({...formData, paypalEmail: e.target.value})}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                placeholder="paypal@example.com"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h2 className="text-white font-semibold mb-4">Your Skill</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-slate-400 text-sm mb-1">Skill Name *</label>
              <input
                type="text"
                required
                value={formData.skillName}
                onChange={(e) => setFormData({...formData, skillName: e.target.value})}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                placeholder="Australian Tax Calculator"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1">Description *</label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                placeholder="What does your skill do? Who is it for?"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                >
                  <option value="automation">Automation</option>
                  <option value="trading">Trading & Finance</option>
                  <option value="money-making">Money Making</option>
                  <option value="business">Business</option>
                  <option value="legal">Legal & Compliance</option>
                  <option value="health">Health & Fitness</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1">Price (AUD) *</label>
                <select
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                >
                  <option value="19">$19</option>
                  <option value="29">$29</option>
                  <option value="39">$39</option>
                  <option value="49">$49</option>
                  <option value="69">$69</option>
                  <option value="99">$99</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1">Skill Content (SKILL.md or CLAUDE.md) *</label>
              <textarea
                required
                rows={10}
                value={formData.skillContent}
                onChange={(e) => setFormData({...formData, skillContent: e.target.value})}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white font-mono text-sm"
                placeholder="Paste your full skill file content here..."
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1">Example Prompts (one per line)</label>
              <textarea
                rows={3}
                value={formData.previewPrompts}
                onChange={(e) => setFormData({...formData, previewPrompts: e.target.value})}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"
                placeholder="Calculate my tax for $85,000 salary&#10;What deductions can I claim as a tradie?&#10;Compare salary vs ABN income"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 disabled:opacity-50 text-white py-4 rounded-lg font-bold text-lg"
        >
          {loading ? "Submitting..." : "Submit for Review"}
        </button>
      </form>
    </div>
  );
}

function CreatorSuccess() {
  return (
    <div className="max-w-lg mx-auto px-4 py-16 text-center">
      <div className="text-6xl mb-4">🎉</div>
      <h1 className="text-3xl font-bold text-white mb-4">Skill Submitted!</h1>
      <p className="text-slate-400 mb-8">
        We&apos;ll review your skill within 24 hours. You&apos;ll get an email when it&apos;s approved and live on the marketplace.
      </p>
      <div className="flex gap-4 justify-center">
        <Link 
          href="/marketplace"
          className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          Browse Marketplace
        </Link>
        <Link 
          href="/"
          className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
