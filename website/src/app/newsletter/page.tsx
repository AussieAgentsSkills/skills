"use client";
import { useState } from "react";
import Link from "next/link";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xwpkgjvn", {
        method: "POST",
        body: JSON.stringify({ email, source: "newsletter_page" }),
        headers: { 
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
        <div className="bg-slate-800 rounded-xl p-8 max-w-md text-center border border-green-500">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-white mb-4">You are in!</h1>
          <p className="text-slate-300 mb-6">
            Welcome to the Aussie Agent Skills community. We will keep you updated on new skills and features.
          </p>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <header className="border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <span className="text-2xl">🇦🇺</span>
            <span className="text-xl font-bold text-white">Aussie Agent Skills</span>
          </Link>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Join the Community</h1>
        <p className="text-slate-400 mb-8">
          Get updates on new Australian AI skills, feature requests, and community news.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
            placeholder="your@email.com"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium"
          >
            {loading ? "Joining..." : "Join Community"}
          </button>
        </form>

        <p className="text-slate-500 text-sm mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
