import Link from "next/link";
import Header from "@/components/Header";

const guides = [
  {
    slug: "chatgpt",
    title: "Using Skills with ChatGPT",
    description: "Copy and paste skills into ChatGPT for instant Australian expertise",
    icon: "🤖",
    difficulty: "Beginner",
    time: "2 min"
  },
  {
    slug: "claude-web",
    title: "Using Skills with Claude",
    description: "Add skills to Claude's Projects feature for persistent context",
    icon: "◆",
    difficulty: "Beginner",
    time: "3 min"
  },
  {
    slug: "cursor",
    title: "Using Skills with Cursor",
    description: "Add skills to your .cursor/rules folder for coding assistance",
    icon: "▲",
    difficulty: "Easy",
    time: "5 min"
  },
  {
    slug: "claude-code",
    title: "Using Skills with Claude Code",
    description: "Add skills to CLAUDE.md for terminal-based AI coding",
    icon: "⌨️",
    difficulty: "Easy",
    time: "5 min"
  },
  {
    slug: "openclaw",
    title: "Using Skills with OpenClaw",
    description: "Install skills in your OpenClaw workspace for always-on agents",
    icon: "🦎",
    difficulty: "Intermediate",
    time: "10 min"
  }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      <Header navLinks={[
        { href: "/", label: "Skills" },
        { href: "/marketplace", label: "Marketplace" },
        { href: "/premium", label: "Premium", className: "text-yellow-400 hover:text-yellow-300" },
      ]} />

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
            📚 GUIDES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How to Use AI Skills
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Step-by-step tutorials for adding skills to your favourite AI tools. No coding required.
          </p>
        </div>

        <div className="grid gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition flex items-center gap-6"
            >
              <div className="text-4xl">{guide.icon}</div>
              <div className="flex-1">
                <h2 className="text-white font-semibold text-lg mb-1">{guide.title}</h2>
                <p className="text-slate-400 text-sm">{guide.description}</p>
              </div>
              <div className="text-right">
                <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs block mb-1">
                  {guide.difficulty}
                </span>
                <span className="text-slate-500 text-xs">{guide.time}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Which tool should I use?</h2>
          <div className="space-y-4 text-slate-400">
            <p>
              <strong className="text-white">Just want to try a skill?</strong> → Use <Link href="/guides/chatgpt" className="text-blue-400 hover:underline">ChatGPT</Link> or <Link href="/guides/claude-web" className="text-blue-400 hover:underline">Claude</Link>. Copy, paste, done.
            </p>
            <p>
              <strong className="text-white">Building software?</strong> → Use <Link href="/guides/cursor" className="text-blue-400 hover:underline">Cursor</Link> or <Link href="/guides/claude-code" className="text-blue-400 hover:underline">Claude Code</Link>. Skills become part of your coding assistant.
            </p>
            <p>
              <strong className="text-white">Want an always-on AI agent?</strong> → Use <Link href="/guides/openclaw" className="text-blue-400 hover:underline">OpenClaw</Link>. Skills run 24/7 in the background.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
