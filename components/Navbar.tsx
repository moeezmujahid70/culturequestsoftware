"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const primaryNavLinks = [
  { label: "Concept", href: "#concept" },
  { label: "Pillars", href: "#pillars" },
  { label: "Design", href: "#design" },
  { label: "Kickoff", href: "#kickoff" },
  { label: "Pricing", href: "#pricing" },
  { label: "Example", href: "#example" },
];

const moreNavLinks = [
  { label: "Universities", href: "#universities" },
  { label: "Inner Circle", href: "#inner-circle" },
  { label: "Partners", href: "#partners" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

const mobileNavLinks = [
  ...primaryNavLinks,
  { label: "Get Started", href: "#get-started" },
  ...moreNavLinks,
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMoreMenu = () => {
    if (moreCloseTimer.current) {
      clearTimeout(moreCloseTimer.current);
    }
    setMoreOpen(true);
  };

  const closeMoreMenu = () => {
    if (moreCloseTimer.current) {
      clearTimeout(moreCloseTimer.current);
    }
    moreCloseTimer.current = setTimeout(() => setMoreOpen(false), 180);
  };

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3">
        {/* Logo + wordmark */}
        <a
          href="#"
          className="flex max-w-[calc(100vw-5.5rem)] flex-shrink items-center gap-2 rounded-full border border-white/18 bg-white/8 px-2.5 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-colors duration-200 hover:bg-white/12 sm:max-w-none sm:flex-shrink-0 sm:gap-3 sm:px-3 sm:py-2"
        >
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-black/5 sm:h-12 sm:w-12 sm:rounded-[1rem]">
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
          <span className="min-w-0 flex flex-col leading-none">
            <span className="truncate font-display text-[1rem] font-semibold tracking-[0.01em] text-white sm:text-[1.22rem] xl:text-[1.18rem]">
              Culture Quest
            </span>
            <span className="mt-1 truncate font-body text-[0.54rem] font-medium uppercase tracking-[0.16em] text-[#F8E8BE] sm:text-[0.62rem] sm:tracking-[0.22em]">
              Software
            </span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden min-w-0 flex-1 items-center justify-end gap-1 pl-3 lg:flex xl:gap-1.5 xl:pl-4">
          <div className="flex min-w-0 items-center justify-end gap-0.5 xl:gap-1">
            {primaryNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="cursor-pointer whitespace-nowrap rounded-full px-2 py-1.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#F8E8BE] transition-colors duration-200 hover:bg-white/10 hover:text-white xl:px-2.5 xl:text-[0.76rem]"
              >
                {link.label}
              </a>
            ))}

            <div
              className="relative"
              onMouseEnter={openMoreMenu}
              onMouseLeave={closeMoreMenu}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null,
                  )
                ) {
                  closeMoreMenu();
                }
              }}
            >
              <button
                type="button"
                className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-full px-2 py-1.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#F8E8BE] transition-colors duration-200 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none xl:px-2.5 xl:text-[0.76rem]"
                aria-haspopup="true"
                aria-expanded={moreOpen}
                onClick={openMoreMenu}
                onFocus={openMoreMenu}
              >
                More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                onMouseEnter={openMoreMenu}
                onMouseLeave={closeMoreMenu}
                className={`absolute right-0 top-full z-50 w-52 pt-2 transition-all duration-200 ${
                  moreOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible pointer-events-none -translate-y-1 opacity-0"
                }`}
              >
                <div className="rounded-2xl border border-white/12 bg-crimson p-2 shadow-[0_20px_45px_rgba(0,0,0,0.24)]">
                  {moreNavLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block cursor-pointer rounded-xl px-3 py-2.5 font-body text-[0.76rem] font-semibold uppercase tracking-[0.11em] text-[#F8E8BE] transition-colors duration-200 hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a
            href="#get-started"
            className="ml-1 flex-shrink-0 cursor-pointer rounded-full bg-gold px-3.5 py-2 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-crimson transition-colors duration-200 hover:bg-yellow-400 xl:px-4 xl:text-[0.76rem]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-3 inline-flex min-h-11 min-w-11 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
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
          {mobileNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block cursor-pointer rounded-2xl px-3 py-3.5 font-body text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-[#F8E8BE] transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
