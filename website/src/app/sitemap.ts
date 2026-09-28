import { MetadataRoute } from "next";
import { skills } from "@/data/skills";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agentskill.com.au";
  
  // Static pages
  const staticPages = [
    "",
    "/marketplace",
    "/plugins",
    "/bundles",
    "/premium",
    "/enterprise",
    "/guides",
    "/guides/chatgpt",
    "/guides/claude-web",
    "/guides/cursor",
    "/guides/claude-code",
    "/guides/openclaw",
    "/creators",
    "/community",
    "/submit",
    "/newsletter",
    "/affiliate",
    "/blog"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  // Blog posts
  const blogPosts = [
    "best-ai-agents-australian-business-2026",
    "how-to-use-claude-code-bas-gst",
    "cursor-ai-rules-australian-developers",
    "ai-agents-vs-chatbots-small-business",
    "fair-work-compliance-ai-assistant",
    "chatgpt-australian-tax-tips",
    "automate-bas-lodgement-ai",
    "best-ai-tools-australian-accountants"
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  // Skill pages
  const skillPages = skills.map((skill) => ({
    url: `${baseUrl}/skills/${skill.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticPages, ...blogPosts, ...skillPages];
}
