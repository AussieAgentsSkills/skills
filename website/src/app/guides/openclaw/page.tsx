import Link from "next/link";
import Header from "@/components/Header";

export default function OpenClawGuidePage() {
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
            🦎 Using Skills with OpenClaw
          </h1>
          <p className="text-slate-400">
            Install skills for always-on AI agents with Australian expertise.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Setup (10 minutes)</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Download a skill</h3>
                  <p className="text-slate-400 text-sm">
                    Go to any <Link href="/" className="text-blue-400 hover:underline">skill page</Link> and download the OpenClaw format (SKILL.md).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Create the skill folder</h3>
                  <p className="text-slate-400 text-sm mb-2">
                    In your OpenClaw workspace, create a folder:
                  </p>
                  <code className="bg-slate-900 px-3 py-1 rounded text-green-400 text-sm block">
                    ~/.openclaw/workspace/skills/bas-expert/
                  </code>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Add SKILL.md</h3>
                  <p className="text-slate-400 text-sm mb-2">
                    Move the downloaded file into the folder:
                  </p>
                  <code className="bg-slate-900 px-3 py-1 rounded text-green-400 text-sm block">
                    ~/.openclaw/workspace/skills/bas-expert/SKILL.md
                  </code>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">OpenClaw auto-loads it</h3>
                  <p className="text-slate-400 text-sm">
                    OpenClaw scans the skills folder and loads matching skills automatically based on your tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Folder Structure</h2>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300">
              <pre>{`~/.openclaw/workspace/
├── skills/
│   ├── bas-expert/
│   │   └── SKILL.md
│   ├── super-guide/
│   │   └── SKILL.md
│   └── fair-work/
│       ├── SKILL.md
│       └── references/
│           └── modern-awards.md
├── MEMORY.md
└── AGENTS.md`}</pre>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Install via ClawHub (Easy Way)</h2>
            <p className="text-slate-400 mb-4">
              If the skill is published to ClawHub, you can install it with one command:
            </p>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
              <code className="text-green-400">clawhub install aussie/bas-expert</code>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Pro Tips</h2>
            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Add references:</strong> Put supporting docs in a <code className="bg-slate-900 px-1 rounded">references/</code> subfolder.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">SKILL.md description:</strong> The <code className="bg-slate-900 px-1 rounded">description</code> field helps OpenClaw know when to use the skill.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Always-on:</strong> Unlike chat tools, OpenClaw agents run 24/7 with your skills loaded.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">Ready to try?</h2>
            <p className="text-slate-400 mb-4">
              Download a skill and add it to your OpenClaw workspace.
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
