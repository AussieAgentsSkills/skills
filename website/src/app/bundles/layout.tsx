import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skill Bundles - Themed AI Skill Packs for Australian Business",
  description: "Get themed AI skill bundles for tradies, real estate, small business, hospitality and e-commerce. Save up to 50% with bundled skills.",
  openGraph: {
    title: "AI Skill Bundles for Australian Business",
    description: "Themed skill packs for tradies, real estate, small business and more. Save up to 50%.",
  }
};

export default function BundlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
