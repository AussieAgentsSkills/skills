import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Using AI for Fair Work Compliance in Australia",
  description: "How to use AI agents to navigate Modern Awards, NES entitlements, termination rules, and Fair Work Act compliance for Australian employers.",
  keywords: [
    "Fair Work AI",
    "Modern Awards AI assistant",
    "NES entitlements calculator",
    "Fair Work compliance tool",
    "Australian employment law AI",
    "termination pay calculator Australia",
  ],
  openGraph: {
    title: "Using AI for Fair Work Compliance in Australia",
    description: "Navigate Modern Awards and NES with AI assistance.",
    type: "article",
    publishedTime: "2026-04-25",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header navLinks={[
        { href: "/", label: "Skills" },
        { href: "/blog", label: "Blog" },
      ]} />

      <article className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm">← Back to Blog</Link>
        </div>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
            <span className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded">Compliance</span>
            <span>April 25, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Using AI for Fair Work Compliance in Australia
          </h1>
          <p className="text-xl text-slate-400">
            Stop guessing about Modern Awards and NES entitlements.
          </p>
        </header>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Australian employment law is complex. There are 122+ Modern Awards, the National Employment Standards (NES), enterprise agreements, and state-based variations. Getting it wrong is expensive — underpayment claims, penalties, and reputation damage.
            </p>
            <p>
              AI agents with Fair Work skills can help you navigate the basics quickly.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What AI Can Help With</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Award identification:</strong> Which Modern Award applies to an employee?</li>
              <li><strong>Pay rates:</strong> Minimum rates, penalty rates, overtime calculations</li>
              <li><strong>NES entitlements:</strong> Leave, notice periods, redundancy pay</li>
              <li><strong>Classification:</strong> Employee vs contractor distinctions</li>
              <li><strong>Common questions:</strong> Can I dock pay for lateness? How much notice for termination?</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Example: Award Identification</h2>
            <p>Ask your AI agent:</p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-3">
              <p className="font-mono text-green-400">"What award covers a full-time barista in Melbourne?"</p>
              <p className="text-slate-400">→ Restaurant Industry Award 2020 or General Retail Industry Award 2020 (depending on the business type)</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Example: Redundancy Calculation</h2>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-3">
              <p className="font-mono text-green-400">"Calculate redundancy pay for an employee with 5 years service"</p>
              <p className="text-slate-400">→ NES minimum: 10 weeks' pay (based on ordinary hours)</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Example: Penalty Rates</h2>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-3">
              <p className="font-mono text-green-400">"What's the Sunday penalty rate under the Hospitality Award?"</p>
              <p className="text-slate-400">→ Full-time/part-time: 150% | Casual: 175%</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Setting Up Fair Work Skills</h2>
            <p>Install the Fair Work skill:</p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
              npx skills-au add fair-work -a claude
            </div>
            <p className="mt-4">Or for Cursor:</p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
              npx skills-au add fair-work -a cursor
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What It Knows</h2>
            <p>The Fair Work skill includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All 11 NES entitlements</li>
              <li>Modern Award structure and common awards</li>
              <li>Minimum wage rates (updated annually)</li>
              <li>Termination and redundancy rules</li>
              <li>Leave calculations (annual, personal, parental)</li>
              <li>Employee vs contractor tests</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Limitations</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <p className="text-yellow-400 font-semibold mb-2">⚠️ Important</p>
              <p className="text-slate-300">
                AI provides guidance, not legal advice. For specific situations, disputes, or binding decisions:
              </p>
              <ul className="list-disc pl-6 mt-2 text-slate-300">
                <li>Check the Fair Work Ombudsman website (fairwork.gov.au)</li>
                <li>Use the FWO Pay Calculator for official rates</li>
                <li>Consult an employment lawyer for complex cases</li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mt-12">
              <p className="text-blue-400 font-semibold mb-2">Free Fair Work Skill</p>
              <p className="text-slate-300 mb-4">
                Our Fair Work skill is free and open source. Works with Claude Code, Cursor, ChatGPT, and OpenClaw.
              </p>
              <Link
                href="/skills/fair-work"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Get Fair Work Skill →
              </Link>
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t border-slate-700 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-500">
          © 2026 Aussie Agent Skills
        </div>
      </footer>
    </div>
  );
}
