"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";

interface CommunitySkill {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  downloads: number;
  rating_avg: number;
  rating_count: number;
  creator: {
    name: string;
    x_handle: string;
  };
}

export default function CommunityPage() {
  const [skills, setSkills] = useState<CommunitySkill[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"rating" | "downloads" | "newest">("rating");

  useEffect(() => {
    fetchSkills();
  }, [sortBy]);

  const fetchSkills = async () => {
    try {
      const response = await fetch(`/api/community-skills?sort=${sortBy}`);
      const data = await response.json();
      setSkills(data.skills || []);
    } catch (error) {
      console.error("Failed to fetch skills:", error);
    }
    setLoading(false);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-slate-600"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      <Header navLinks={[
        { href: "/", label: "Free Skills" },
        { href: "/marketplace", label: "Paid Skills" },
        { href: "/creators", label: "Sell a Skill", className: "text-purple-400 hover:text-purple-300" },
      ]} />

      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
          👥 COMMUNITY SKILLS
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Skills by the Community
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          AI skills created by developers like you. Ranked by ratings and downloads.
        </p>
        <Link 
          href="/creators"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-3 rounded-lg font-bold"
        >
          Submit Your Skill — Earn 70%
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-slate-400">{skills.length} skills available</p>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
            >
              <option value="rating">Top Rated</option>
              <option value="downloads">Most Downloads</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-400">Loading skills...</div>
        ) : skills.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 mb-4">No community skills yet. Be the first!</p>
            <Link 
              href="/creators"
              className="inline-block bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium"
            >
              Submit a Skill
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.id}
                className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {index < 3 && (
                        <span className={`text-lg ${index === 0 ? "text-yellow-400" : index === 1 ? "text-slate-300" : "text-amber-600"}`}>
                          {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                        </span>
                      )}
                      <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-green-400 font-bold">${skill.price}</span>
                  </div>
                  
                  <h3 className="text-white font-semibold text-lg mb-2">{skill.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{skill.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(Math.round(skill.rating_avg))}
                      <span className="text-slate-500 text-sm ml-1">({skill.rating_count})</span>
                    </div>
                    <span className="text-slate-500 text-sm">{skill.downloads} downloads</span>
                  </div>
                  
                  <div className="text-slate-500 text-sm">
                    by {skill.creator?.name || "Anonymous"}
                    {skill.creator?.x_handle && (
                      <a 
                        href={`https://x.com/${skill.creator.x_handle.replace("@", "")}`}
                        target="_blank"
                        className="text-blue-400 ml-1 hover:underline"
                      >
                        {skill.creator.x_handle}
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="border-t border-slate-700 p-4">
                  <Link
                    href={`/community/${skill.slug}`}
                    className="block w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg font-medium text-center"
                  >
                    View Skill
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
