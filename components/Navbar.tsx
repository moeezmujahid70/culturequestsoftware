"use client";

import Image from "next/image";
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo + wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition-colors duration-200 hover:bg-white/10 sm:gap-3 sm:px-2.5 sm:py-2"
        >
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-black/5 sm:h-12 sm:w-12">
            <Image
              src="/cq-logo.jpg"
              alt="Culture Quest logo"
              width={34}
              height={34}
              className="h-7 w-7 object-contain sm:h-[2.15rem] sm:w-[2.15rem]"
              unoptimized
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-[0.02em] text-white sm:text-[1.35rem]">
              Culture Quest
            </span>
            <span className="mt-1 font-body text-[0.62rem] font-medium uppercase tracking-[0.22em] text-white/55 sm:text-[0.68rem] sm:tracking-[0.26em]">
              Software
            </span>
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
          className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
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
        <div className="border-t border-white/10 bg-crimson px-4 pb-5 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="block cursor-pointer rounded-2xl px-3 py-3.5 font-body text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:jerry.wagner@culturesinaction.com"
            className="mt-3 inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full bg-gold px-5 py-2.5 font-body text-sm font-medium text-crimson"
          >
            DEMO
          </a>
        </div>
      )}
    </nav>
  );
}
