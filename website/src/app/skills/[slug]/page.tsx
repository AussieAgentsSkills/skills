import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { skills, agents, getSkillBySlug } from "@/data/skills";

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

function AgentTabs({ skillAgents, skillId }: { skillAgents: string[], skillId: string }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex flex-wrap gap-2 mb-4">
        {agents.map((agent) => (
          <button
            key={agent.id}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              skillAgents.includes(agent.id)
                ? "bg-slate-700 text-white"
                : "bg-slate-900 text-slate-500 cursor-not-allowed"
            }`}
            disabled={!skillAgents.includes(agent.id)}
          >
            {agent.icon} {agent.name}
          </button>
        ))}
      </div>
      
      <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
        <div className="flex items-center justify-between">
          <code className="text-green-400">
            npx skills-au add skills-au/{skillId} -a openclaw
          </code>
          <button className="text-slate-400 hover:text-white px-3 py-1 rounded border border-slate-600 text-xs">
            Copy
          </button>
        </div>
      </div>
      
      <p className="text-slate-500 text-sm mt-4">
        <span className="inline-block mr-2">💬</span>
        Installation via Claude.ai, Claude Desktop, ChatGPT and more platforms
      </p>
      <a href="/guides" className="text-blue-400 text-sm hover:text-blue-300">
        📖 Not sure how? Read the guide
      </a>
    </div>
  );
}

export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  
  if (!skill) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-28">
      <Header navLinks={[
        { href: "/", label: "Skills" },
        { href: "/submit", label: "Submit" },
        { href: "https://github.com/AussieAgentsSkills/skills", label: "GitHub", external: true },
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/#skills" className="hover:text-white">Skills</Link>
          <span className="mx-2">›</span>
          <Link href={`/#${skill.categorySlug}`} className="hover:text-white">{skill.category}</Link>
        </nav>

        {/* Title Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-3xl font-bold text-white">{skill.name}</h1>
            <Link
              href={`/chat?skill=${skill.slug}`}
              className="text-slate-400 hover:text-white flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-600 text-sm"
            >
              ✨ Ask the Skill
            </Link>
          </div>
          
          {/* Trust Score */}
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              ✓ Trusted
            </span>
            <span className="text-white font-bold">{skill.trustScore}/100</span>
          </div>
          
          <p className="text-slate-300 text-lg">{skill.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-slate-400 text-sm">📅 Updated: {skill.updatedAt}</span>
            <span className="text-slate-400 text-sm mx-2">•</span>
            <span className="text-slate-400 text-sm">🏷️ Tags:</span>
            {skill.tags.map((tag) => (
              <span key={tag} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Agent Installation Tabs */}
        <AgentTabs skillAgents={skill.agents} skillId={skill.id} />

        {/* Problem & Solution */}
        <div className="mt-8 space-y-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              💡 The Problem
            </h2>
            <p className="text-slate-300">{skill.problem}</p>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              ✅ The Solution
            </h2>
            <p className="text-slate-300">{skill.solution}</p>
          </div>
        </div>

        {/* Example Prompts */}
        <div className="mt-8 bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            📝 Try These Prompts
          </h2>
          <div className="space-y-3">
            {skill.prompts.map((prompt, i) => (
              <div key={i} className="bg-slate-900 rounded-lg p-4 flex items-start justify-between group">
                <p className="text-slate-300">{prompt}</p>
                <button className="text-slate-500 hover:text-white opacity-0 group-hover:opacity-100 transition ml-4">
                  📋 Copy
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Related Skills placeholder */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-white mb-4">Related Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills
              .filter(s => s.categorySlug === skill.categorySlug && s.id !== skill.id)
              .slice(0, 2)
              .map((related) => (
                <Link 
                  key={related.id} 
                  href={`/skills/${related.slug}`}
                  className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-blue-500 transition"
                >
                  <h3 className="text-white font-medium">{related.name}</h3>
                  <p className="text-slate-400 text-sm mt-1 line-clamp-2">{related.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Sticky Newsletter */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">📧</span>
            <div>
              <p className="text-white font-medium">Stay Updated</p>
              <p className="text-slate-400 text-sm">Get notified about new Australian AI skills</p>
            </div>
          </div>
          <Link 
            href="/newsletter" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}
