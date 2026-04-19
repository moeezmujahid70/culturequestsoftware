const principles = [
  {
    title: "Treat Culture as a Strategic Discipline",
    body: "Culture is the operating system that determines how effectively your business and project strategies are executed. Culture drives behavior and behavior drives business results. As a critical strategic asset, it demands the same rigor, priority, and disciplined approach as your financial, operational, and project plans.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Build Culture at the Team Level",
    body: "Company-wide culture initiatives often fail because they are too abstract. Real culture lives in teams, in daily interactions, decisions, and behaviors. Culture Quest builds from the ground up, giving each team ownership of their own culture plan.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Make it Human-Led",
    body: "Culture cannot be outsourced to surveys or AI agents. It must be built from the values, instincts, and lived experiences of the people doing the work. Culture Quest draws entirely from what your team already knows.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Make it Visible and Documented",
    body: "A culture that exists only in people's heads is fragile. Culture Quest produces a documented Team Culture Plan, available online and in print, so every team member has a current copy and can hold each other accountable.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Build in Continuous Improvement",
    body: "Culture is not a one-time exercise. Culture Quest includes a defined process for reviewing, measuring, and updating the plan at least twice a year, ensuring the system grows with the team.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
];

export default function PrinciplesSection() {
  return (
    <section className="bg-parchment px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Section header, editorial two-column split */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-end" data-animate>
          <div className="text-center lg:text-left">
            <span className="section-kicker lg:mx-0">
              Principles
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-crimson lg:text-5xl">
              Culture Building Principles Within Culture Quest
            </h2>
          </div>
          <p className="font-body text-base leading-relaxed text-charcoal lg:text-lg lg:pb-1">
            These five principles form the philosophical foundation of everything
            Culture Quest does. They guide how we build, what we build, and why
            it works where generic culture programs fail.
          </p>
        </div>

        {/* Gold rule */}
        <div className="mt-12 h-px bg-gold/30" />

        {/* Principles */}
        <div>
          {principles.map((p, i) => (
            <div key={p.title} data-animate>
              <div className="group grid gap-8 py-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-14">

                {/* Left, number + icon + title */}
                <div className="relative">
                  {/* Decorative oversized number */}
                  <span
                    className="pointer-events-none absolute -top-5 -left-2 select-none font-display font-semibold leading-none text-gold/[0.07] lg:-top-8 lg:-left-4"
                    style={{ fontSize: "clamp(80px, 12vw, 140px)" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon + small number row */}
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-crimson/8 text-crimson transition-colors duration-200 group-hover:bg-crimson group-hover:text-white">
                      {p.icon}
                    </div>
                    <span className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-4 font-display text-2xl font-semibold leading-snug text-crimson lg:text-3xl">
                    {p.title}
                  </h3>
                </div>

                {/* Right, body */}
                <div className="flex flex-col justify-center">
                  {/* Pull-quote bar */}
                  <div className="mb-6 h-px w-12 bg-gold/40 transition-all duration-300 group-hover:w-24 group-hover:bg-gold" />
                  <p className="font-body text-base leading-relaxed text-charcoal lg:text-lg">
                    {p.body}
                  </p>
                </div>
              </div>

              {/* Divider between principles */}
              {i < principles.length - 1 && (
                <div className="h-px bg-mist" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="mt-2 h-px bg-gold/30" />
      </div>
    </section>
  );
}
