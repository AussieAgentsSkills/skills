import Link from "next/link";
import Header from "@/components/Header";

export default function ClaudeCodeGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      <Header backLink={{ href: "/guides", label: "← Guides" }} navLinks={[
        { href: "/", label: "Skills" },
        { href: "/guides", label: "Guides" },
      ]} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/guides" className="text-blue-400 hover:underline text-sm mb-4 inline-block">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">
            ⌨️ Using Skills with Claude Code
          </h1>
          <p className="text-slate-400">
            Add skills to CLAUDE.md for terminal-based AI coding with Australian context.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Setup (5 minutes)</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Download a skill</h3>
                  <p className="text-slate-400 text-sm">
                    Go to any <Link href="/" className="text-blue-400 hover:underline">skill page</Link> and copy the Claude Code format.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Create or edit CLAUDE.md</h3>
                  <p className="text-slate-400 text-sm mb-2">
                    In your project root, create a file called:
                  </p>
                  <code className="bg-slate-900 px-3 py-1 rounded text-orange-400 text-sm">
                    CLAUDE.md
                  </code>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Paste the skill</h3>
                  <p className="text-slate-400 text-sm">
                    Add the skill content to your CLAUDE.md file. You can add multiple skills.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Run Claude Code</h3>
                  <p className="text-slate-400 text-sm mb-2">
                    Start Claude Code in your terminal:
                  </p>
                  <code className="bg-slate-900 px-3 py-1 rounded text-orange-400 text-sm">
                    claude
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Example CLAUDE.md</h2>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto">
              <pre>{`# CLAUDE.md

## Project Context
This is an Australian business application.

## Skills

### BAS Expert
[Paste BAS skill content here]

### Fair Work Guide  
[Paste Fair Work skill content here]

## Instructions
- Always consider Australian tax law
- Use ATO guidelines for compliance
- Reference Fair Work Act for employment`}</pre>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Pro Tips</h2>
            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Global config:</strong> Put skills in <code className="bg-slate-900 px-1 rounded">~/.claude/CLAUDE.md</code> for all projects.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Combine with project context:</strong> Add your business details above the skills.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Keep it organised:</strong> Use headers to separate different skills.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">Ready to try?</h2>
            <p className="text-slate-400 mb-4">
              Download a skill and add it to your CLAUDE.md file.
            </p>
            <Link 
              href="/"
              className="inline-block bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium"
            >
              Browse Skills →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
