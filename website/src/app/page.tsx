import Link from "next/link";
import Header from "@/components/Header";
import { skills, categories } from "@/data/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-28">
      <Header navLinks={[
        { href: "/marketplace", label: "Marketplace", className: "text-green-400 hover:text-green-300" },
        { href: "/bundles", label: "Bundles", className: "text-purple-400 hover:text-purple-300" },
        { href: "/premium", label: "Premium", className: "text-yellow-400 hover:text-yellow-300 font-medium" },
        { href: "/learn", label: "Learn", className: "text-orange-400 hover:text-orange-300 font-medium" },
        { href: "/guides", label: "Guides", className: "text-slate-300 hover:text-white" },
        { href: "/blog", label: "Blog", className: "text-slate-300 hover:text-white" },
        { href: "/community", label: "Community", className: "text-slate-300 hover:text-white" },
        { href: "/affiliate", label: "Affiliates", className: "text-emerald-400 hover:text-emerald-300" },
        { href: "/submit", label: "Submit", className: "text-slate-300 hover:text-white" },
        { href: "https://github.com/AussieAgentsSkills/skills", label: "GitHub", className: "text-slate-300 hover:text-white", external: true },
      ]} />

      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Australian AI Agent Skills
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Open-source skills for Cursor, Claude Code, OpenClaw, and Codex. 
          Built by Aussies, for Aussie businesses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#skills" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
            Browse Free Skills
          </a>
          <Link href="/premium" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black px-6 py-3 rounded-lg font-bold">
            ⭐ Premium Packs
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <div className="text-3xl font-bold text-white">{skills.length}</div>
            <div className="text-slate-400 text-sm">Free Skills</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <div className="text-3xl font-bold text-yellow-400">14</div>
            <div className="text-slate-400 text-sm">Premium Packs</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <div className="text-3xl font-bold text-white">4</div>
            <div className="text-slate-400 text-sm">Agent Platforms</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-slate-400 text-sm">Open Source</div>
          </div>
        </div>
      </section>

      {/* Premium Banner */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <Link href="/premium" className="block bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500/50 transition">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg">⭐ Premium Power Tools</h3>
              <p className="text-slate-400 text-sm">14 skill packs, 145K+ GitHub stars, MIT licensed — $49/mo</p>
            </div>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 rounded-lg font-bold whitespace-nowrap">
              View Premium →
            </span>
          </div>
        </Link>
      </section>

      {/* Enterprise Banner */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <Link href="/enterprise" className="block bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-xl p-6 hover:border-amber-500/50 transition">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg">🏢 Enterprise Package</h3>
              <p className="text-slate-400 text-sm">All skills + implementation of 5 AI agents for your business — $3,525 AUD</p>
            </div>
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-2 rounded-lg font-bold whitespace-nowrap">
              Learn More →
            </span>
          </div>
        </Link>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-4 py-8">
        {categories.map((category) => (
          <div key={category.slug} id={category.slug} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              {category.name}
              <span className="text-slate-500 text-base font-normal">({category.count} skills)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills
                .filter((skill) => skill.categorySlug === category.slug)
                .map((skill) => (
                  <Link 
                    key={skill.id} 
                    href={`/skills/${skill.slug}`}
                    className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-blue-500 transition group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-white font-semibold group-hover:text-blue-400 transition">
                        {skill.name}
                      </h3>
                      <span className="bg-green-600/20 text-green-400 px-2 py-0.5 rounded text-xs">
                        {skill.trustScore}/100
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-3">
                      {skill.description}
                    </p>
                    <div className="flex items-center gap-2">
                      {skill.agents.slice(0, 3).map((agentId) => (
                        <span key={agentId} className="bg-slate-700 text-slate-300 px-2 py-0.5 rounded text-xs">
                          {agentId === "cursor" && "▲ Cursor"}
                          {agentId === "claude-code" && "◆ Claude"}
                          {agentId === "openclaw" && "🦎 OpenClaw"}
                          {agentId === "codex" && "◎ Codex"}
                        </span>
                      ))}
                      {skill.agents.length > 3 && (
                        <span className="text-slate-500 text-xs">+{skill.agents.length - 3}</span>
                      )}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Got Australian Expertise?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Share your knowledge with the community. Submit a skill and help other Aussie businesses succeed with AI.
          </p>
          <Link 
            href="/submit" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Submit a Skill
          </Link>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 py-8 border-t border-slate-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© 2026 Aussie Agent Skills. Open source under MIT license.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/AussieAgentsSkills/skills" className="hover:text-white">GitHub</a>
            <Link href="/marketplace" className="text-green-400 hover:text-green-300 text-sm">💰 Marketplace</Link>
            <Link href="/premium" className="text-yellow-400 hover:text-yellow-300">Premium</Link>
            <Link href="/newsletter" className="hover:text-white">Newsletter</Link>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur border-t border-slate-700 p-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">📧</span>
            <div>
              <p className="text-white font-medium">Stay Updated</p>
              <p className="text-slate-400 text-sm">Get notified about new Australian AI skills</p>
            </div>
          </div>
          <Link 
            href="/newsletter" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium whitespace-nowrap"
          >
            Subscribe Free
          </Link>
        </div>
      </div>
    </div>
  );
}
