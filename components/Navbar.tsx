"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Concept", href: "#concept" },
  { label: "Pillars", href: "#pillars" },
  { label: "Design", href: "#design" },
  { label: "Kickoff", href: "#kickoff" },
  { label: "Pricing", href: "#pricing" },
  { label: "Universities", href: "#universities" },
  { label: "Inner Circle", href: "#inner-circle" },
  { label: "Partners", href: "#partners" },
  { label: "Speaking", href: "#speaking" },
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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-crimson transition-shadow duration-200 ${
        scrolled ? "shadow-[0_14px_34px_rgba(0,0,0,0.18)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
        {/* Logo + wordmark */}
        <a
          href="#"
          className="flex flex-shrink-0 items-center gap-2 rounded-full border border-white/18 bg-white/8 px-2 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-colors duration-200 hover:bg-white/12 sm:gap-2.5 sm:px-2.5 sm:py-1.5"
        >
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-black/5 sm:h-11 sm:w-11">
            <Image
              src="/cq-logo.jpg"
              alt="Culture Quest logo"
              width={34}
              height={34}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
              unoptimized
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[0.96rem] font-semibold tracking-[0.01em] text-white sm:text-[1.1rem] xl:text-[1.18rem]">
              Culture Quest
            </span>
            <span className="mt-1 font-body text-[0.56rem] font-medium uppercase tracking-[0.18em] text-[#F8E8BE] sm:text-[0.6rem] sm:tracking-[0.22em]">
              Software
            </span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden min-w-0 flex-1 items-center pl-3 lg:flex xl:pl-4">
          <div className="no-scrollbar flex min-w-0 flex-1 items-center overflow-x-auto">
            <div className="flex min-w-max items-center gap-0.5 pr-2 xl:gap-1 xl:pr-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="cursor-pointer whitespace-nowrap rounded-full px-2 py-1.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#F8E8BE] transition-colors duration-200 hover:bg-white/10 hover:text-white xl:px-2.5 xl:text-[0.76rem]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <a
            href="mailto:jerry.wagner@culturesinaction.com"
            className="ml-2 flex-shrink-0 cursor-pointer rounded-full bg-gold px-3.5 py-2 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-crimson transition-colors duration-200 hover:bg-yellow-400 xl:px-4 xl:text-[0.76rem]"
          >
            DEMO
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
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
        <div className="border-t border-white/10 bg-crimson px-4 pb-5 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block cursor-pointer rounded-2xl px-3 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.12em] text-[#F8E8BE] transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:jerry.wagner@culturesinaction.com"
            className="mt-3 inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full bg-gold px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-[0.12em] text-crimson"
          >
            DEMO
          </a>
        </div>
      )}
    </nav>
  );
}
