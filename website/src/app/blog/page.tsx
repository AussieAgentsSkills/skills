import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Blog - AI Agent Tips & Tutorials",
  description: "Learn how to use AI agents for Australian business. Tutorials on Claude Code, Cursor, ChatGPT, and more for tax, compliance, and automation.",
  keywords: ["AI agents Australia", "Claude Code tutorial", "Cursor AI tips", "ChatGPT business Australia", "AI automation guide"],
};

const posts = [
  {
    slug: "best-ai-agents-australian-business-2026",
    title: "Best AI Agents for Australian Business in 2026",
    excerpt: "Compare Claude Code, Cursor, ChatGPT, and OpenClaw for Australian tax, compliance, and business automation.",
    date: "2026-04-29",
    readTime: "8 min",
    category: "Guides",
  },
  {
    slug: "how-to-use-claude-code-bas-gst",
    title: "How to Use Claude Code for BAS & GST in Australia",
    excerpt: "Step-by-step guide to setting up Claude Code with Australian tax skills for quarterly BAS lodgement.",
    date: "2026-04-28",
    readTime: "6 min",
    category: "Tutorials",
  },
  {
    slug: "cursor-ai-rules-australian-developers",
    title: "Cursor AI Rules for Australian Developers",
    excerpt: "Custom Cursor rules for Australian coding standards, date formats, and local compliance.",
    date: "2026-04-27",
    readTime: "5 min",
    category: "Tutorials",
  },
  {
    slug: "ai-agents-vs-chatbots-small-business",
    title: "AI Agents vs Chatbots: What Australian Small Businesses Need",
    excerpt: "Understanding the difference between simple chatbots and full AI agents for business automation.",
    date: "2026-04-26",
    readTime: "7 min",
    category: "Guides",
  },
  {
    slug: "fair-work-compliance-ai-assistant",
    title: "Using AI for Fair Work Compliance in Australia",
    excerpt: "How to use AI agents to navigate Modern Awards, NES entitlements, and employment law.",
    date: "2026-04-25",
    readTime: "6 min",
    category: "Compliance",
  },
  {
    slug: "chatgpt-australian-tax-tips",
    title: "ChatGPT for Australian Tax: Tips, Prompts & Limitations",
    excerpt: "How to use ChatGPT for Australian tax questions. Best prompts for BAS, GST, and what it gets wrong.",
    date: "2026-04-24",
    readTime: "7 min",
    category: "Tutorials",
  },
  {
    slug: "automate-bas-lodgement-ai",
    title: "How to Automate BAS Lodgement Prep with AI",
    excerpt: "Use AI to prepare your BAS faster. Automate GST calculations and reconciliation checks.",
    date: "2026-04-23",
    readTime: "6 min",
    category: "Automation",
  },
  {
    slug: "best-ai-tools-australian-accountants",
    title: "Best AI Tools for Australian Accountants in 2026",
    excerpt: "AI tools comparison for Australian accounting firms. What's useful vs. what's hype.",
    date: "2026-04-22",
    readTime: "8 min",
    category: "Guides",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header navLinks={[
        { href: "/", label: "Skills" },
        { href: "/guides", label: "Guides" },
        { href: "/premium", label: "Premium", className: "text-yellow-400 hover:text-yellow-300" },
      ]} />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AI Agent Blog</h1>
          <p className="text-xl text-slate-400">
            Tips, tutorials, and guides for using AI agents in Australian business
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-500 transition"
            >
              <div className="flex items-center gap-3 text-sm text-slate-400 mb-2">
                <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">{post.category}</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} read</span>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-slate-400">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">Want updates on new posts?</p>
          <Link
            href="/newsletter"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </main>

      <footer className="border-t border-slate-700 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-500">
          © 2026 Aussie Agent Skills
        </div>
      </footer>
    </div>
  );
}
