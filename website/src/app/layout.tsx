import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Aussie Agent Skills - AI Skills for Australian Business",
    template: "%s | Aussie Agent Skills"
  },
  description: "Open-source AI agent skills for Australian business, tax, super, and compliance. Works with ChatGPT, Claude, Cursor, and more. BAS, GST, Fair Work, property investment skills.",
  keywords: [
    "AI agent skills Australia",
    "Claude skills Australian tax",
    "Cursor rules Australia",
    "ChatGPT Australian business",
    "BAS GST AI assistant",
    "Australian AI tools",
    "superannuation AI",
    "Fair Work AI helper",
    "ATO compliance AI",
    "property investment AI Australia",
    "tradie AI assistant",
    "small business AI Australia"
  ],
  authors: [{ name: "Aussie Agent Skills" }],
  creator: "Aussie Agent Skills",
  publisher: "Aussie Agent Skills",
  metadataBase: new URL("https://agentskill.com.au"),
  alternates: {
    canonical: "https://agentskill.com.au"
  },
  openGraph: {
    title: "Aussie Agent Skills - AI Skills for Australian Business",
    description: "Open-source AI agent skills for Australian business, tax, super, and compliance. BAS, GST, Fair Work, property investment and more.",
    url: "https://agentskill.com.au",
    siteName: "Aussie Agent Skills",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aussie Agent Skills - AI Skills for Australia"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aussie Agent Skills - AI Skills for Australian Business",
    description: "Open-source AI agent skills for Australian business, tax, super, and compliance.",
    creator: "@Joyjacobs42",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body className={inter.className}>
        <MetaPixel />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aussie Agent Skills",
              "url": "https://agentskill.com.au",
              "logo": "https://agentskill.com.au/logo.png",
              "description": "Open-source AI agent skills for Australian business, tax, and compliance",
              "sameAs": [
                "https://x.com/Joyjacobs42",
                "https://github.com/AussieAgentsSkills"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
