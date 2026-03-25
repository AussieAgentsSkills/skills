"use client";
import { useState } from "react";
import Link from "next/link";

const SUPABASE_URL = "https://nsrxksrttgetfgizdnqg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_YV9YxLDrcqOaStYehTkzfA_9FFfiLXC";

export default function SubmitSkill() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const submission = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      github: formData.get("github") as string || null,
      skill_name: formData.get("skill_name") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      skill_content: formData.get("skill_content") as string,
      sources: formData.get("sources") as string || null,
      newsletter: formData.get("newsletter") === "yes",
      status: "pending"
    };
    
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/skill_submissions`, {
        method: "POST",
        headers: { 
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(submission)
      });
      
      if (response.ok || response.status === 201) {
        // Also add to newsletter if checked
        if (submission.newsletter) {
          await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
            method: "POST",
            headers: { 
              "apikey": SUPABASE_ANON_KEY,
              "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
              "Content-Type": "application/json",
              "Prefer": "return=minimal"
            },
            body: JSON.stringify({ email: submission.email, source: "skill_submission" })
          });
        }
        setSubmitted(true);
      } else {
        setError("Something went wrong. Try again or email us directly.");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
        <div className="bg-slate-800 rounded-xl p-8 max-w-md text-center border border-green-500">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-white mb-4">Skill Submitted!</h1>
          <p className="text-slate-300 mb-6">
            Thanks for contributing! We will review your skill and get back to you within 48 hours.
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

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Submit a Skill</h1>
        <p className="text-slate-400 mb-8">
          Share your Australian expertise. We review and publish quality skills with full credit to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-4">Your Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name *</label>
                <input type="text" name="name" required className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email *</label>
                <input type="email" name="email" required className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">GitHub Username (optional)</label>
                <input type="text" name="github" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none" placeholder="@username" />
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-4">Skill Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Skill Name *</label>
                <input type="text" name="skill_name" required className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none" placeholder="e.g., QLD Stamp Duty Calculator" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Category *</label>
                <select name="category" required className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none">
                  <option value="">Select category...</option>
                  <option value="tax-and-finance">Tax & Finance</option>
                  <option value="government-services">Government Services</option>
                  <option value="legal-compliance">Legal & Compliance</option>
                  <option value="business-operations">Business Operations</option>
                  <option value="localization">Localization</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Description *</label>
                <textarea name="description" required rows={3} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none" placeholder="What does this skill help with?" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Skill Content *</label>
                <p className="text-xs text-slate-500 mb-2">Paste your SKILL.md content or describe the knowledge in detail</p>
                <textarea name="skill_content" required rows={10} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white font-mono text-sm focus:border-blue-500 focus:outline-none" placeholder="# Skill Name&#10;&#10;You are an expert in...&#10;&#10;## Key Information&#10;- Point 1&#10;- Point 2" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Sources / References</label>
                <textarea name="sources" rows={2} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none" placeholder="Links to official sources (ATO, legislation, etc.)" />
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="newsletter" value="yes" defaultChecked className="mt-1 w-4 h-4 bg-slate-900 border-slate-600 rounded" />
              <div>
                <span className="text-white">Join the community</span>
                <p className="text-slate-400 text-sm">Get updates on new skills and community news</p>
              </div>
            </label>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium">
            {loading ? "Submitting..." : "Submit Skill"}
          </button>
        </form>

        <p className="text-slate-500 text-sm mt-6 text-center">
          Prefer GitHub? <a href="https://github.com/AussieAgentsSkills/skills/pulls" target="_blank" className="text-blue-400 hover:text-blue-300">Submit a PR directly</a>
        </p>
      </div>
    </div>
  );
}
