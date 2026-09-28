import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "AI Agents vs Chatbots: What Australian Small Businesses Need",
  description: "Understanding the difference between chatbots and AI agents. Which is right for Australian small business automation?",
  keywords: [
    "AI agents vs chatbots",
    "AI automation small business Australia",
    "chatbot vs AI agent difference",
    "small business AI Australia",
    "AI for Australian business",
  ],
  openGraph: {
    title: "AI Agents vs Chatbots: What Australian Small Businesses Need",
    description: "Understanding the difference between chatbots and AI agents for business.",
    type: "article",
    publishedTime: "2026-04-26",
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
            <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">Guides</span>
            <span>April 26, 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            AI Agents vs Chatbots: What Australian Small Businesses Need
          </h1>
          <p className="text-xl text-slate-400">
            Not all AI is the same. Here's what actually helps small business.
          </p>
        </header>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              "We need an AI chatbot" is something I hear from small business owners every week. But often what they actually need is an AI agent — and understanding the difference can save you thousands of dollars and months of frustration.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Quick Difference</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-4 text-white">Feature</th>
                    <th className="py-3 px-4 text-white">Chatbot</th>
                    <th className="py-3 px-4 text-white">AI Agent</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Responds to questions</td>
                    <td className="py-3 px-4 text-green-400">✓</td>
                    <td className="py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Takes actions</td>
                    <td className="py-3 px-4 text-red-400">✗</td>
                    <td className="py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Uses external tools</td>
                    <td className="py-3 px-4 text-red-400">✗</td>
                    <td className="py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Works autonomously</td>
                    <td className="py-3 px-4 text-red-400">✗</td>
                    <td className="py-3 px-4 text-green-400">✓</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-4">Remembers context</td>
                    <td className="py-3 px-4 text-yellow-400">Limited</td>
                    <td className="py-3 px-4 text-green-400">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What's a Chatbot?</h2>
            <p>
              A chatbot answers questions. You ask, it responds. That's it.
            </p>
            <p>
              <strong>Example:</strong> "What are your opening hours?" → "We're open Monday to Friday, 9am to 5pm."
            </p>
            <p>
              Good chatbots handle FAQs well. They reduce support tickets for common questions. But they can't DO anything — they can't book appointments, update records, or make decisions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What's an AI Agent?</h2>
            <p>
              An AI agent can think AND act. It uses tools, makes decisions, and completes multi-step tasks.
            </p>
            <p>
              <strong>Example:</strong> "Book me a meeting with John next week" → Agent checks John's calendar, finds available slots, sends an invite, and confirms the booking.
            </p>
            <p>
              Agents can:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Look up information in databases</li>
              <li>Send emails and notifications</li>
              <li>Calculate quotes and invoices</li>
              <li>Update CRM records</li>
              <li>Generate reports</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Real Examples for Aussie Businesses</h2>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Tradie Business</h3>
            <p><strong>Chatbot:</strong> "Our call-out fee is $80"</p>
            <p><strong>AI Agent:</strong> Checks availability, gives a quote based on job type and location, books the job into your calendar, sends the customer a confirmation</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Accounting Firm</h3>
            <p><strong>Chatbot:</strong> "You can email documents to info@..."</p>
            <p><strong>AI Agent:</strong> Logs into Xero, checks the client's BAS status, calculates GST owing, flags any issues before lodgement</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Retail Store</h3>
            <p><strong>Chatbot:</strong> "That item is in stock"</p>
            <p><strong>AI Agent:</strong> Checks inventory, processes the order, applies loyalty discounts, sends tracking info</p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">When to Use Each</h2>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 space-y-4">
              <p><strong>Use a chatbot if:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You just need to answer common questions</li>
                <li>Budget is very limited (&lt;$100/mo)</li>
                <li>You don't need the AI to take actions</li>
              </ul>
              
              <p className="mt-4"><strong>Use an AI agent if:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You want to automate actual tasks</li>
                <li>You need integration with your existing tools</li>
                <li>You're spending hours on repetitive work</li>
                <li>You want the AI to work while you sleep</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Getting Started with AI Agents</h2>
            <p>
              You don't need to build from scratch. AI agents like Claude Code, Cursor, and OpenClaw can be enhanced with skills — pre-built knowledge for specific tasks.
            </p>
            <p>
              For Australian businesses, we've built skills covering tax, compliance, government services, and business operations. Install a skill, and your agent instantly knows Australian rules.
            </p>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mt-12">
              <p className="text-blue-400 font-semibold mb-2">Start Free</p>
              <p className="text-slate-300 mb-4">
                Browse 23+ free Australian skills for AI agents. Tax, compliance, government — ready to install.
              </p>
              <Link
                href="/"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Browse Skills →
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
