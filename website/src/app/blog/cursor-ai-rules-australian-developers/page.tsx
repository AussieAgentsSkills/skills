import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Cursor AI Rules for Australian Developers",
  description: "Custom Cursor rules for Australian coding standards, date formats, currency, and local compliance. Make Cursor work like an Aussie.",
  keywords: [
    "Cursor AI Australia",
    "Cursor rules Australian",
    "Cursor AI date format",
    "Australian coding standards AI",
    "Cursor settings Australia",
  ],
  openGraph: {
    title: "Cursor AI Rules for Australian Developers",
    description: "Custom Cursor rules for Australian coding standards and compliance.",
    type: "article",
    publishedTime: "2026-04-27",
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
            <span>April 27, 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Cursor AI Rules for Australian Developers
          </h1>
          <p className="text-xl text-slate-400">
            Stop Cursor from using American date formats and USD symbols.
          </p>
        </header>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Cursor's AI is trained mostly on American codebases. That means it defaults to MM/DD/YYYY dates, USD currency, and American spelling. Annoying if you're building for Australian users.
            </p>
            <p>Here's how to fix it with custom rules.</p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Australian English Rule</h2>
            <p>Create <code className="bg-slate-700 px-2 py-1 rounded">.cursor/rules/aussie-english.md</code>:</p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
{`# Australian English Standards

## Date Format
- Use DD/MM/YYYY (e.g., 29/04/2026)
- Never use MM/DD/YYYY
- For display: "29 April 2026" or "29 Apr 2026"

## Currency
- Use $AUD or just $ with Australian context
- Format: $1,234.56 (comma thousands, period decimal)
- GST-inclusive pricing is standard

## Spelling
- colour, honour, favourite (not color, honor, favorite)
- organisation, realise, analyse (not -ization, -ize)
- centre, metre, litre (not center, meter, liter)

## Terminology
- "mobile" not "cell phone"
- "postcode" not "zip code"
- "surname" not "last name"
- "car park" not "parking lot"
- "footpath" not "sidewalk"

## Time Zones
- Default to AEST/AEDT (Sydney/Melbourne)
- Be aware of state-based time zone differences
- SA and NT have half-hour offsets`}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Quick Install</h2>
            <p>Or just run:</p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
              npx skills-au add aussie-english -a cursor
            </div>
            <p className="mt-4">This installs a complete Australian English skill with all the rules above plus more.</p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Testing It Works</h2>
            <p>After adding the rule, ask Cursor:</p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-3">
              <p className="font-mono text-green-400">"Generate a date picker component"</p>
              <p className="text-slate-400">→ Should default to DD/MM/YYYY format</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-3 mt-4">
              <p className="font-mono text-green-400">"Format this price for display"</p>
              <p className="text-slate-400">→ Should use $1,234.56 format</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Bonus: State-Specific Rules</h2>
            <p>If you're building for a specific state, add context:</p>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
{`# NSW-Specific Rules

- Stamp duty thresholds for NSW property
- NSW Fair Trading requirements
- Sydney time zone (AEST/AEDT)
- NSW public holidays`}
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mt-12">
              <p className="text-blue-400 font-semibold mb-2">More Cursor Skills</p>
              <p className="text-slate-300 mb-4">
                We have 23 Australian skills that work with Cursor — tax, compliance, government services.
              </p>
              <Link
                href="/guides/cursor"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Cursor Setup Guide →
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
