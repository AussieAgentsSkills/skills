import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aussie Agent Skills - AI Skills for Australia",
  description: "Open-source AI agent skills for Australian business, tax, and government. Works with Claude Code, Cursor, OpenClaw and more.",
  keywords: ["AI", "agent", "skills", "Australia", "ATO", "BAS", "GST", "Claude", "Cursor"],
  openGraph: {
    title: "Aussie Agent Skills",
    description: "AI Agent Skills for Australia",
    url: "https://aussieagentskills.com",
    siteName: "Aussie Agent Skills",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aussie Agent Skills - AI Skills for Australia",
    description: "Open-source AI agent skills for Australian business, tax, and government.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
