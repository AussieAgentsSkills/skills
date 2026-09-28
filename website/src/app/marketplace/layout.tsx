import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace - Premium AI Skills for Trading & Making Money",
  description: "Premium AI skills for ASX trading, crypto, forex, dropshipping, affiliate marketing and property investment in Australia.",
  openGraph: {
    title: "AI Skills Marketplace - Money-Making Skills",
    description: "Premium AI skills for trading and making money in Australia.",
  }
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
