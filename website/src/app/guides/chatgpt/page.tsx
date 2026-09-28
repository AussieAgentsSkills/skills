import Link from "next/link";
import Header from "@/components/Header";

export default function ChatGPTGuidePage() {
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
            🤖 Using Skills with ChatGPT
          </h1>
          <p className="text-slate-400">
            The easiest way to use Australian AI skills — no setup required.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Quick Start (2 minutes)</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Download a skill</h3>
                  <p className="text-slate-400 text-sm">
                    Go to any <Link href="/" className="text-blue-400 hover:underline">skill page</Link> and copy the skill content.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Open ChatGPT</h3>
                  <p className="text-slate-400 text-sm">
                    Go to <a href="https://chat.openai.com" target="_blank" className="text-blue-400 hover:underline">chat.openai.com</a> and start a new conversation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Paste the skill</h3>
                  <p className="text-slate-400 text-sm">
                    Paste the skill content and add: &quot;Use this knowledge to help me.&quot;
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Ask your question</h3>
                  <p className="text-slate-400 text-sm">
                    ChatGPT now has Australian expertise. Ask away!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Example</h2>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto">
              <p className="text-slate-500 mb-2"># Paste the BAS skill, then ask:</p>
              <p className="text-green-400">&quot;I&apos;m a sole trader making $120k/year. Walk me through my BAS obligations and what I need to report each quarter.&quot;</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Pro Tips</h2>
            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Use Custom GPTs:</strong> Create a Custom GPT with the skill baked in for repeated use.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Combine skills:</strong> Paste multiple skills for complex questions (e.g., BAS + Superannuation).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span><strong className="text-white">Be specific:</strong> Include your state, business type, and income for better answers.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">Ready to try?</h2>
            <p className="text-slate-400 mb-4">
              Pick a skill and start using it with ChatGPT right now.
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
