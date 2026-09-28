"use client";

import { useState } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
  className?: string;
  external?: boolean;
}

const defaultNavLinks: NavLink[] = [
  { href: "/marketplace", label: "Marketplace", className: "text-green-400 hover:text-green-300" },
  { href: "/plugins", label: "Plugins", className: "text-blue-400 hover:text-blue-300" },
  { href: "/bundles", label: "Bundles", className: "text-purple-400 hover:text-purple-300" },
  { href: "/premium", label: "Premium", className: "text-yellow-400 hover:text-yellow-300 font-medium" },
  { href: "/learn", label: "Learn", className: "text-orange-400 hover:text-orange-300 font-medium" },
  { href: "/guides", label: "Guides", className: "text-slate-300 hover:text-white" },
  { href: "/blog", label: "Blog", className: "text-slate-300 hover:text-white" },
  { href: "/community", label: "Community", className: "text-slate-300 hover:text-white" },
];

interface HeaderProps {
  navLinks?: NavLink[];
  backLink?: { href: string; label: string };
}

export default function Header({ navLinks = defaultNavLinks, backLink }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-700 sticky top-0 bg-slate-900/95 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🇦🇺</span>
          <span className="text-xl font-bold text-white">Aussie Agent Skills</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          {backLink && (
            <Link href={backLink.href} className="text-slate-300 hover:text-white text-sm">
              {backLink.label}
            </Link>
          )}
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${link.className ?? "text-slate-300 hover:text-white"}`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${link.className ?? "text-slate-300 hover:text-white"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-slate-700 bg-slate-900 px-4 py-3">
          <div className="flex flex-col gap-3">
            {backLink && (
              <Link
                href={backLink.href}
                className="text-slate-300 hover:text-white text-sm py-1"
                onClick={() => setMenuOpen(false)}
              >
                {backLink.label}
              </Link>
            )}
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm py-1 ${link.className ?? "text-slate-300 hover:text-white"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm py-1 ${link.className ?? "text-slate-300 hover:text-white"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
