import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Package - All Skills + 5 Agent Implementation",
  description: "Complete AI skills package with hands-on implementation of 5 AI agents for your Australian business. All current and future skills included.",
  openGraph: {
    title: "Enterprise AI Package for Australian Business",
    description: "All skills + implementation of 5 AI agents. $3,525 AUD.",
  }
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
