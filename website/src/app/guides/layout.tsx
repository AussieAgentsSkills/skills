import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides - How to Use AI Skills (No Code Required)",
  description: "Step-by-step tutorials for using AI skills with ChatGPT, Claude, Cursor, Claude Code and OpenClaw. No coding required.",
  openGraph: {
    title: "How to Use AI Skills - No Code Guides",
    description: "Step-by-step tutorials for ChatGPT, Claude, Cursor and more.",
  }
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
