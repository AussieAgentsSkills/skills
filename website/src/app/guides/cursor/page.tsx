import Link from "next/link";
import Header from "@/components/Header";

export default function CursorGuidePage() {
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
            ▲ Using Skills with Cursor
          </h1>
          <p className="text-slate-400">
            Add skills to your Cursor rules for Australian-aware AI coding assistance.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Setup (5 minutes)</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Download a skill</h3>
                  <p className="text-slate-400 text-sm">
                    Go to any <Link href="/" className="text-blue-400 hover:underline">skill page</Link> and download the Cursor format (.mdc file).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Create the rules folder</h3>
                  <p className="text-slate-400 text-sm mb-2">
                    In your project root, create:
                  </p>
                  <code className="bg-slate-900 px-3 py-1 rounded text-cyan-400 text-sm">
                    .cursor/rules/
                  </code>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Add the skill file</h3>
                  <p className="text-slate-400 text-sm mb-2">
                    Move the downloaded .mdc file into the rules folder:
                  </p>
                  <code className="bg-slate-900 px-3 py-1 rounded text-cyan-400 text-sm block">
                    .cursor/rules/bas-expert.mdc
                  </code>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Use it</h3>
                  <p className="text-slate-400 text-sm">
                    Cursor automatically loads rules. Just start coding and ask questions!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Folder Structure</h2>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300">
              <pre>{`your-project/
├── .cursor/
│   └── rules/
│       ├── bas-expert.mdc
│       ├── super-guide.mdc
│       └── fair-work.mdc
├── src/
└── package.json`}</pre>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Pro Tips</h2>
            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Global rules:</strong> Put skills in <code className="bg-slate-900 px-1 rounded">~/.cursor/rules/</code> to use across all projects.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Project-specific:</strong> Put in <code className="bg-slate-900 px-1 rounded">.cursor/rules/</code> for project-only skills.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Combine skills:</strong> Add multiple .mdc files — Cursor loads them all.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">Ready to try?</h2>
            <p className="text-slate-400 mb-4">
              Download a skill and add it to your Cursor project.
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
