import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "How to Use Claude Code for BAS & GST in Australia",
  description: "Step-by-step guide to setting up Claude Code with Australian tax skills for BAS lodgement, GST calculations, and ATO compliance.",
  keywords: [
    "Claude Code BAS",
    "Claude Code GST Australia",
    "AI BAS lodgement",
    "Australian tax AI assistant",
    "Claude Code ATO",
    "GST calculator AI",
  ],
  openGraph: {
    title: "How to Use Claude Code for BAS & GST in Australia",
    description: "Step-by-step guide to setting up Claude Code with Australian tax skills.",
    type: "article",
    publishedTime: "2026-04-28",
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
            <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded">Tutorials</span>
            <span>April 28, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            How to Use Claude Code for BAS & GST in Australia
          </h1>
          <p className="text-xl text-slate-400">
            Set up Claude Code with Australian tax skills in under 5 minutes.
          </p>
        </header>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Claude Code is powerful, but out of the box it doesn't know Australian tax specifics — current GST rates, BAS reporting periods, PAYG brackets, or ATO lodgement requirements.
            </p>
            <p>
              This guide shows you how to add Australian tax skills so Claude Code becomes your BAS assistant.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What You'll Get</h2>
            <p>After setup, Claude Code will be able to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Calculate GST on invoices (10% rate, GST-free items)</li>
              <li>Determine BAS reporting periods (monthly vs quarterly)</li>
              <li>Calculate PAYG withholding from current tax tables</li>
              <li>Identify deductible expenses for your industry</li>
              <li>Explain ATO lodgement deadlines</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 1: Install Claude Code</h2>
            <p>If you haven't already:</p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
              npm install -g @anthropic-ai/claude-code
            </div>
            <p className="mt-4">Then authenticate:</p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
              claude auth login
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 2: Add the BAS Skill</h2>
            <p>In your project directory, run:</p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
              npx skills-au add ato-bas-expert -a claude
            </div>
            <p className="mt-4">
              This creates a <code className="bg-slate-700 px-2 py-1 rounded">.claude/skills/ato-bas-expert/</code> folder with the skill files.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 3: Reference in CLAUDE.md</h2>
            <p>Add a reference to your project's CLAUDE.md:</p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
{`# Project: My Business

## Skills
- .claude/skills/ato-bas-expert/SKILL.md

## Context
This is an Australian business. Use Australian tax rules.`}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 4: Test It</h2>
            <p>Start Claude Code and try these prompts:</p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-3">
              <p className="font-mono text-green-400">&gt; "Calculate GST on a $1,100 invoice"</p>
              <p className="text-slate-400">→ GST: $100, Net: $1,000</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-3 mt-4">
              <p className="font-mono text-green-400">&gt; "When is my Q3 BAS due?"</p>
              <p className="text-slate-400">→ For July-Sept quarter: 28 October (or 25 Nov if lodging electronically through a tax agent)</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-3 mt-4">
              <p className="font-mono text-green-400">&gt; "PAYG on $85,000 salary"</p>
              <p className="text-slate-400">→ Calculates using current ATO tax brackets</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Optional: Add More Tax Skills</h2>
            <p>We have several tax-related skills:</p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
{`npx skills-au add superannuation-guide -a claude
npx skills-au add payg-withholding -a claude
npx skills-au add fbt-calculator -a claude
npx skills-au add cgt-calculator -a claude`}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Common Use Cases</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Invoice Review</h3>
            <p>Paste an invoice and ask Claude to verify GST treatment:</p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <p className="font-mono text-green-400">"Review this invoice for GST compliance: [paste invoice]"</p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">BAS Prep Checklist</h3>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <p className="font-mono text-green-400">"Generate a BAS preparation checklist for a small retail business"</p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Deduction Questions</h3>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <p className="font-mono text-green-400">"Can I claim my home office as a business expense?"</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Important Notes</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <p className="text-yellow-400 font-semibold mb-2">⚠️ Not Tax Advice</p>
              <p className="text-slate-300">
                AI skills provide guidance based on general ATO rules. For complex situations, lodgement, or binding decisions, consult a registered tax agent or the ATO directly.
              </p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mt-8">
              <p className="text-blue-400 font-semibold mb-2">Get All Tax Skills Free</p>
              <p className="text-slate-300 mb-4">
                We have 6 tax & finance skills available — all free and open source.
              </p>
              <Link
                href="/#tax-finance"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Browse Tax Skills →
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
