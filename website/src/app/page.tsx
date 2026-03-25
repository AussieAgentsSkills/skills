import Link from "next/link";

const skills = [
  {
    name: "ATO BAS Helper",
    slug: "ato-bas-helper",
    category: "Tax & Finance",
    description: "BAS preparation, GST calculations, and ATO compliance",
    tags: ["ato", "bas", "gst", "tax"],
  },
  {
    name: "ABN Lookup",
    slug: "abn-lookup", 
    category: "Government",
    description: "ABN validation and business registry search",
    tags: ["abn", "acn", "business"],
  },
  {
    name: "Fair Work Australia",
    slug: "fair-work",
    category: "Legal",
    description: "Employment law, awards, NES, and workplace relations",
    tags: ["employment", "awards", "minimum-wage"],
  },
  {
    name: "Superannuation Guide",
    slug: "superannuation",
    category: "Tax & Finance",
    description: "Super rules, contributions, SMSF, and retirement",
    tags: ["super", "smsf", "retirement"],
  },
  {
    name: "Australian English",
    slug: "aussie-english",
    category: "Localization",
    description: "Australian spelling, terminology, and cultural context",
    tags: ["english", "spelling", "localization"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <header className="border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇦🇺</span>
            <span className="text-xl font-bold text-white">Aussie Agent Skills</span>
          </div>
          <nav className="flex gap-6">
            <Link href="/skills" className="text-slate-300 hover:text-white">Skills</Link>
            <Link href="/contribute" className="text-slate-300 hover:text-white">Contribute</Link>
            <a 
              href="https://github.com/AussieAgentsSkills/skills" 
              target="_blank"
              className="text-slate-300 hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          AI Agent Skills for Australia
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Open-source skills for Claude Code, Cursor, OpenClaw and more. 
          Built for Australian business, tax, and government.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#skills"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Browse Skills
          </a>
          <a 
            href="https://github.com/AussieAgentsSkills/skills"
            target="_blank"
            className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="text-4xl font-bold text-blue-400">5</div>
            <div className="text-slate-400">Skills</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="text-4xl font-bold text-green-400">4</div>
            <div className="text-slate-400">Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="text-4xl font-bold text-yellow-400">100%</div>
            <div className="text-slate-400">Free & Open Source</div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Available Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.slug}
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition border border-slate-700 hover:border-blue-500"
            >
              <div className="text-sm text-blue-400 mb-2">{skill.category}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Install Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Install</h2>
          <p className="text-slate-400 mb-6">
            Clone the skills you need directly into your project:
          </p>
          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400">
            git clone https://github.com/AussieAgentsSkills/skills.git
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Contribute?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            We welcome Australian-specific skills. Submit a PR on GitHub 
            and get your name featured as a contributor.
          </p>
          <a 
            href="https://github.com/AussieAgentsSkills/skills/pulls"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium inline-block"
          >
            Submit a Skill
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-slate-400">
          <p>Made in Australia 🇦🇺 | Open Source on GitHub</p>
          <p className="mt-2 text-sm">
            aussieagentskills.com | aussieagentskills.com.au | agentskills.com.au
          </p>
        </div>
      </footer>
    </div>
  );
}
