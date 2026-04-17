"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Live Demo", href: "https://www.teamculturesystem.com" },
  { label: "Pricing", href: "#pricing" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-crimson transition-shadow duration-200 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo + wordmark */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-sm">
            <img
              src="/cq-logo.jpg"
              alt="Culture Quest logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          </span>
          <span className="font-display text-lg font-semibold text-white">
            Culture Quest
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer font-body text-sm font-medium tracking-wide text-white/80 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="cursor-pointer font-body text-sm font-medium tracking-wide text-white/80 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="mailto:jerry.wagner@culturesinaction.com"
            className="cursor-pointer rounded-full bg-gold px-5 py-2 font-body text-sm font-medium tracking-wide text-crimson transition-colors duration-200 hover:bg-yellow-500"
          >
            DEMO
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-crimson px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="block cursor-pointer py-3 font-body text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:jerry.wagner@culturesinaction.com"
            className="mt-2 inline-block cursor-pointer rounded-full bg-gold px-5 py-2 font-body text-sm font-medium text-crimson"
          >
            DEMO
          </a>
        </div>
      )}
    </nav>
  );
}
