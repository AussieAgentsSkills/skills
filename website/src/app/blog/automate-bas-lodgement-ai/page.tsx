import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "How to Automate BAS Lodgement Prep with AI in Australia",
  description: "Use AI to prepare your BAS faster. Automate GST calculations, reconciliation checks, and reporting for Australian small businesses.",
  keywords: [
    "automate BAS Australia",
    "BAS automation",
    "AI BAS lodgement",
    "GST automation software",
    "BAS preparation AI",
    "quarterly BAS help",
  ],
  openGraph: {
    title: "How to Automate BAS Lodgement Prep with AI",
    description: "Use AI to prepare your quarterly BAS faster.",
    type: "article",
    publishedTime: "2026-04-23",
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
            <span className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded">Automation</span>
            <span>April 23, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            How to Automate BAS Lodgement Prep with AI
          </h1>
          <p className="text-xl text-slate-400">
            Stop spending hours on quarterly BAS. Here's how AI can help.
          </p>
        </header>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Every quarter, Australian small businesses spend 5-10 hours preparing their BAS. Gathering receipts, checking GST, reconciling accounts, filling in forms. It's tedious.
            </p>
            <p>
              AI can cut this time by 50-80% — not by lodging for you (that still needs a human or tax agent), but by automating the prep work.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What AI Can Automate</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. GST Categorisation</h3>
            <p>
              AI can review your transactions and flag which ones include GST, which are GST-free, and which are input-taxed. This is the most time-consuming part of BAS prep.
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <p className="font-mono text-green-400">"Review these transactions and categorise each as GST-applicable, GST-free, or input-taxed under Australian rules"</p>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Invoice Verification</h3>
            <p>
              AI can check that your tax invoices have all required elements (ABN, GST amount shown, etc.) before you claim the input credits.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Reconciliation Checks</h3>
            <p>
              AI can compare your bank statements to your accounting software entries and flag discrepancies.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">4. Summary Generation</h3>
            <p>
              AI can generate the totals you need for each BAS label (1A, 1B, G1, G10, G11, etc.)
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">A Simple AI BAS Workflow</h2>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium text-white">Export transactions from Xero/MYOB</p>
                  <p className="text-sm text-slate-400">CSV or connect via API</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-medium text-white">AI reviews and categorises</p>
                  <p className="text-sm text-slate-400">Flags unusual items for human review</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium text-white">AI generates summary</p>
                  <p className="text-sm text-slate-400">Total sales, total GST collected, total credits</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-medium text-white">Human verifies and lodges</p>
                  <p className="text-sm text-slate-400">You or your accountant completes the BAS</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Tools That Work</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-4 text-white">Tool</th>
                    <th className="py-3 px-4 text-white">Best For</th>
                    <th className="py-3 px-4 text-white">Xero/MYOB Integration</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Claude Code</td>
                    <td className="py-3 px-4">Developers, custom workflows</td>
                    <td className="py-3 px-4">Via API scripts</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">ChatGPT + CSV</td>
                    <td className="py-3 px-4">Quick one-off analysis</td>
                    <td className="py-3 px-4">Manual export</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">OpenClaw</td>
                    <td className="py-3 px-4">Automated recurring checks</td>
                    <td className="py-3 px-4">Via Xero skill</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Getting Started</h2>
            <p>
              The easiest way to start is with our BAS skill:
            </p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
              npx skills-au add ato-bas-expert -a claude
            </div>
            <p className="mt-4">
              This teaches your AI agent current BAS rules, GST categories, and lodgement deadlines.
            </p>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-8">
              <p className="text-yellow-400 font-semibold mb-2">⚠️ Important</p>
              <p className="text-slate-300">
                AI helps with prep, but final lodgement should be done by you or your registered tax agent. Always verify AI outputs against your accounting software.
              </p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mt-8">
              <p className="text-blue-400 font-semibold mb-2">Get the BAS Skill Free</p>
              <p className="text-slate-300 mb-4">
                Our BAS skill covers GST, PAYG, and lodgement rules.
              </p>
              <Link
                href="/skills/ato-bas-expert"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Get BAS Skill →
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
