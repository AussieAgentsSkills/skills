import Link from "next/link";

const skills = [
  { name: "ATO BAS Helper", slug: "ato-bas-helper", category: "Tax & Finance", description: "BAS preparation, GST calculations, and ATO compliance", tags: ["ato", "bas", "gst"] },
  { name: "Superannuation Guide", slug: "superannuation", category: "Tax & Finance", description: "Super rules, contributions, SMSF, and retirement", tags: ["super", "smsf"] },
  { name: "NSW Stamp Duty", slug: "nsw-stamp-duty", category: "Tax & Finance", description: "NSW transfer duty and first home buyer exemptions", tags: ["stamp-duty", "property"] },
  { name: "QLD Transfer Duty", slug: "qld-stamp-duty", category: "Tax & Finance", description: "QLD transfer duty and first home concessions", tags: ["stamp-duty", "qld"] },
  { name: "Australian Invoicing", slug: "australian-invoicing", category: "Tax & Finance", description: "Tax invoice requirements and e-invoicing", tags: ["invoice", "gst"] },
  { name: "Capital Gains Tax", slug: "capital-gains-tax", category: "Tax & Finance", description: "CGT calculations, exemptions, and discounts", tags: ["cgt", "property", "shares"] },
  { name: "ABN Lookup", slug: "abn-lookup", category: "Government", description: "ABN validation and business registry search", tags: ["abn", "acn"] },
  { name: "myGov Services", slug: "mygov-services", category: "Government", description: "Medicare, Centrelink, and myGov services", tags: ["mygov", "medicare"] },
  { name: "ASIC Company Search", slug: "asic-company-search", category: "Government", description: "Company and director information lookup", tags: ["asic", "company"] },
  { name: "Business Registration", slug: "business-registration", category: "Government", description: "Register ABN, business names, companies, GST", tags: ["abn", "registration"] },
  { name: "Fair Work Australia", slug: "fair-work", category: "Legal", description: "Employment law, awards, NES, workplace relations", tags: ["employment", "awards"] },
  { name: "Privacy Act", slug: "privacy-act", category: "Legal", description: "Privacy Act 1988, APPs, data breach notification", tags: ["privacy", "data"] },
  { name: "VIC Rental Laws", slug: "vic-rental-laws", category: "Legal", description: "Victorian tenancy laws, bonds, disputes", tags: ["rental", "victoria"] },
  { name: "NSW Rental Laws", slug: "nsw-rental-laws", category: "Legal", description: "NSW tenancy laws, bonds, disputes", tags: ["rental", "nsw"] },
  { name: "WA Rental Laws", slug: "wa-rental-laws", category: "Legal", description: "WA tenancy laws, bonds, disputes", tags: ["rental", "wa"] },
  { name: "SA Rental Laws", slug: "sa-rental-laws", category: "Legal", description: "SA tenancy laws, bonds, disputes", tags: ["rental", "sa"] },
  { name: "Consumer Law", slug: "consumer-law", category: "Legal", description: "ACL consumer guarantees and refund rights", tags: ["acl", "refunds"] },
  { name: "Workers Compensation", slug: "workers-compensation", category: "Legal", description: "WorkCover requirements across all states", tags: ["workcover", "injury"] },
  { name: "Food Safety", slug: "food-safety", category: "Legal", description: "FSANZ standards and food business compliance", tags: ["food", "fsanz"] },
  { name: "Xero Basics", slug: "xero-basics", category: "Business", description: "Xero for BAS, payroll, and invoicing", tags: ["xero", "accounting"] },
  { name: "MYOB Basics", slug: "myob-basics", category: "Business", description: "MYOB for BAS, payroll, and compliance", tags: ["myob", "accounting"] },
  { name: "Import/Export", slug: "import-export", category: "Business", description: "Customs, duties, GST on imports/exports", tags: ["import", "customs"] },
  { name: "Australian English", slug: "aussie-english", category: "Localization", description: "Australian spelling, terminology, and context", tags: ["english", "spelling"] },
];

const categories = [...new Set(skills.map(s => s.category))];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header - Fixed alignment */}
      <header className="border-b border-slate-700 sticky top-0 bg-slate-900/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🇦🇺</span>
            <span className="text-lg font-bold text-white leading-tight">Aussie<br className="sm:hidden" /><span className="sm:inline"> Agent Skills</span></span>
          </Link>
          <nav className="flex items-center gap-3 sm:gap-5 text-sm">
            <a href="#skills" className="text-slate-300 hover:text-white">Skills</a>
            <Link href="/submit" className="text-slate-300 hover:text-white hidden sm:inline">Contribute</Link>
            <a href="https://github.com/AussieAgentsSkills/skills" target="_blank" className="text-slate-300 hover:text-white">GitHub</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">AI Agent Skills for Australia</h1>
        <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Open-source skills for Claude Code, Cursor, OpenClaw and more. Built for Australian business, tax, legal, and government.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#skills" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm sm:text-base">
            Browse {skills.length} Skills
          </a>
          <Link href="/submit" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm sm:text-base">
            Submit a Skill
          </Link>
          <a href="https://github.com/AussieAgentsSkills/skills" target="_blank" className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm sm:text-base">
            ⭐ Star on GitHub
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="bg-slate-800 rounded-xl p-4">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">{skills.length}</div>
            <div className="text-slate-400 text-xs sm:text-sm">Skills</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-4">
            <div className="text-2xl sm:text-3xl font-bold text-green-400">{categories.length}</div>
            <div className="text-slate-400 text-xs sm:text-sm">Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-4">
            <div className="text-2xl sm:text-3xl font-bold text-yellow-400">100%</div>
            <div className="text-slate-400 text-xs sm:text-sm">Free</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-4">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">5+</div>
            <div className="text-slate-400 text-xs sm:text-sm">AI Agents</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <span key={cat} className="bg-slate-700 text-slate-200 px-3 py-1.5 rounded-full text-xs sm:text-sm">
              {cat} ({skills.filter(s => s.category === cat).length})
            </span>
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Available Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {skills.map((skill) => (
            <div key={skill.slug} className="bg-slate-800 rounded-xl p-4 sm:p-5 border border-slate-700 hover:border-blue-500 transition">
              <div className="text-xs text-blue-400 mb-1">{skill.category}</div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5">{skill.name}</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-2">{skill.description}</p>
              <div className="flex flex-wrap gap-1">
                {skill.tags.map((tag) => (
                  <span key={tag} className="bg-slate-700 text-slate-300 px-2 py-0.5 rounded text-xs">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Install */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Quick Install</h2>
          <div className="bg-slate-900 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-green-400 overflow-x-auto">
            git clone https://github.com/AussieAgentsSkills/skills.git
          </div>
          <p className="text-slate-500 mt-3 text-xs sm:text-sm">Works with Claude Code, Cursor, GitHub Copilot, Windsurf, and OpenClaw.</p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-slate-700 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Join the Community</h2>
          <p className="text-slate-300 mb-4 text-sm sm:text-base max-w-md mx-auto">
            Get notified when we add new skills. Be part of building AI tools for Australia.
          </p>
          <Link href="/newsletter" className="bg-white hover:bg-slate-100 text-slate-900 px-5 py-2.5 rounded-lg font-medium inline-block text-sm sm:text-base">
            Join Now →
          </Link>
        </div>
      </section>

      {/* Contribute */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="sm:flex sm:items-center sm:justify-between text-center sm:text-left">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Have Australian expertise?</h2>
              <p className="text-slate-400 text-sm">Submit a skill and get featured as a contributor.</p>
            </div>
            <Link href="/submit" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium inline-block text-sm sm:text-base">
              Submit a Skill
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-8">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
            <div className="text-slate-400 text-sm">
              Made in Australia 🇦🇺 | Open Source
            </div>
            <div className="flex gap-4 justify-center text-sm">
              <Link href="/submit" className="text-slate-400 hover:text-white">Submit</Link>
              <Link href="/newsletter" className="text-slate-400 hover:text-white">Join</Link>
              <a href="https://github.com/AussieAgentsSkills/skills" target="_blank" className="text-slate-400 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
