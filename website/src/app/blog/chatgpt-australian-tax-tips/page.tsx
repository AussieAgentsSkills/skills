import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ChatGPT for Australian Tax: Tips, Prompts & Limitations",
  description: "How to use ChatGPT for Australian tax questions. Best prompts for BAS, GST, deductions, and what ChatGPT gets wrong about ATO rules.",
  keywords: [
    "ChatGPT Australian tax",
    "ChatGPT BAS help",
    "ChatGPT GST Australia",
    "AI tax help Australia",
    "ChatGPT ATO",
    "tax prompts ChatGPT",
  ],
  openGraph: {
    title: "ChatGPT for Australian Tax: Tips, Prompts & Limitations",
    description: "How to use ChatGPT for Australian tax questions effectively.",
    type: "article",
    publishedTime: "2026-04-24",
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
            <span>April 24, 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            ChatGPT for Australian Tax: Tips, Prompts & Limitations
          </h1>
          <p className="text-xl text-slate-400">
            What ChatGPT can and can't do for your Australian tax questions.
          </p>
        </header>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              ChatGPT is surprisingly useful for Australian tax questions — if you know how to prompt it correctly. But it also makes mistakes that could cost you money.
            </p>
            <p>Here's what works, what doesn't, and how to get better answers.</p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What ChatGPT Gets Right</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Basic GST calculations (10% rate)</li>
              <li>General deduction categories</li>
              <li>Explaining tax concepts in plain English</li>
              <li>Due date reminders (though verify these)</li>
              <li>Comparison of business structures (sole trader vs company)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What ChatGPT Gets Wrong</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tax brackets:</strong> Often uses outdated or US rates</li>
                <li><strong>Super rates:</strong> May not know current SG rate (11.5% for 2024-25)</li>
                <li><strong>Specific deductions:</strong> Makes up rules that don't exist</li>
                <li><strong>Due dates:</strong> Sometimes confuses financial year timing</li>
                <li><strong>State-specific rules:</strong> Mixes up stamp duty between states</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Best Prompts for Australian Tax</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Always Add Context</h3>
            <p>Bad prompt:</p>
            <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-4">
              <p className="font-mono text-red-400">"What can I claim as a deduction?"</p>
            </div>
            
            <p className="mt-4">Good prompt:</p>
            <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-4">
              <p className="font-mono text-green-400">"I'm an Australian sole trader working from home as a graphic designer. What work-related expenses can I claim as tax deductions for the 2024-25 financial year under ATO rules?"</p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">GST Calculations</h3>
            <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-4">
              <p className="font-mono text-green-400">"Calculate the GST on an Australian invoice of $2,200 inclusive. Show the GST amount and GST-exclusive price."</p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">BAS Help</h3>
            <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-4">
              <p className="font-mono text-green-400">"Explain what goes in each field of an Australian BAS statement for a small business that only reports GST quarterly. I'm using the simpler BAS."</p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Verify with Dates</h3>
            <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-4">
              <p className="font-mono text-green-400">"What is the current superannuation guarantee rate in Australia as of 2024? When does it next increase?"</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Better Option: Skills</h2>
            <p>
              Instead of prompting ChatGPT from scratch each time, you can give it persistent Australian tax knowledge using Custom Instructions or Projects.
            </p>
            <p>
              Or use a tool like Claude Code or Cursor where you can install skills that stay loaded:
            </p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
              npx skills-au add ato-bas-expert -a claude
            </div>
            <p className="mt-4">
              This gives the AI up-to-date Australian tax rules without needing perfect prompts every time.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">When to Use a Real Accountant</h2>
            <p>ChatGPT is fine for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Understanding concepts</li>
              <li>Basic calculations</li>
              <li>Preparing questions for your accountant</li>
            </ul>
            <p className="mt-4">See an accountant for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Actual BAS/tax return lodgement</li>
              <li>Complex situations (CGT, trusts, SMSF)</li>
              <li>ATO audits or disputes</li>
              <li>Business structure decisions</li>
            </ul>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mt-12">
              <p className="text-blue-400 font-semibold mb-2">Free Tax Skills</p>
              <p className="text-slate-300 mb-4">
                We have 6 Australian tax skills you can use with ChatGPT, Claude, or Cursor — all free.
              </p>
              <Link
                href="/"
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
