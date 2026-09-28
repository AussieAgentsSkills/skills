import Link from "next/link";
import Header from "@/components/Header";

export default function ClaudeWebGuidePage() {
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
            ◆ Using Skills with Claude
          </h1>
          <p className="text-slate-400">
            Add skills to Claude Projects for persistent Australian expertise.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Method 1: Quick Paste (2 minutes)</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Copy a skill</h3>
                  <p className="text-slate-400 text-sm">
                    Go to any <Link href="/" className="text-blue-400 hover:underline">skill page</Link> and copy the Claude format.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Open Claude</h3>
                  <p className="text-slate-400 text-sm">
                    Go to <a href="https://claude.ai" target="_blank" className="text-blue-400 hover:underline">claude.ai</a> and start a conversation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Paste and ask</h3>
                  <p className="text-slate-400 text-sm">
                    Paste the skill, then ask your question. Claude will use the knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Method 2: Claude Projects (Recommended)</h2>
            <p className="text-slate-400 mb-4">For repeated use, add skills to a Claude Project:</p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Create a Project</h3>
                  <p className="text-slate-400 text-sm">
                    In Claude, click &quot;Projects&quot; → &quot;New Project&quot; → Name it (e.g., &quot;Aussie Tax Help&quot;)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Add Project Knowledge</h3>
                  <p className="text-slate-400 text-sm">
                    Click &quot;Add content&quot; → Paste the skill text as Project Knowledge
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Start chatting</h3>
                  <p className="text-slate-400 text-sm">
                    Every conversation in this Project now has the skill baked in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Pro Tips</h2>
            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Multiple skills:</strong> Add several skills to one Project for comprehensive help.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Custom instructions:</strong> Add your business details to the Project for personalised advice.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Share with team:</strong> Team members can access the same Project with all skills included.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">Ready to try?</h2>
            <p className="text-slate-400 mb-4">
              Pick a skill and start using it with Claude right now.
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
