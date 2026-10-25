"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/lab", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/sample", label: "✨ New Concepts" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg)]/95 backdrop-blur-sm border-b border-[var(--line)]">
      <div className="wrap flex items-center justify-between h-[76px]">
        {/* Brand */}
        <Link
          href="/"
          className="brand text-[15px] font-[850] tracking-[-0.045em] text-[var(--ink)] hover:opacity-85 transition-opacity"
        >
          Yogesh Bhavsar <span className="text-[#168c67]">●</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[25px] text-[13px] text-[var(--muted)]" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-[var(--blue)] ${
                  isActive ? "text-[var(--ink)] font-[750]" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="contact text-white bg-[var(--forest)] px-[15px] py-[10px] rounded-[3px] font-[700] hover:bg-[#1f4f43] transition-colors"
          >
            Get in touch ↗
          </Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[var(--ink)] hover:bg-[#e2e8dc] rounded transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-6 border-b border-[var(--line)] flex flex-col gap-4 bg-[var(--bg)]">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-1.5 ${
                  isActive ? "text-[var(--forest)] font-bold" : "text-[var(--muted)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="contact text-center text-white bg-[var(--forest)] py-2.5 rounded-[3px] font-[700] text-sm mt-2"
          >
            Get in touch ↗
          </Link>
        </div>
      )}
    </header>
  );
}
