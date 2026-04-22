const processItems = [
  {
    title: "Faculty Support",
    body: "We provide lecture materials on organizational culture and why it matters.",
  },
  {
    title: "Student Experience",
    body: "Students are guided through the Culture Quest process and then apply it to live projects with local organizations.",
  },
  {
    title: "Community Impact",
    body: "Participating organizations receive a custom culture blueprint and continued access to the platform at no cost.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function UniversitySupportSection() {
  return (
    <section
      id="universities"
      className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-[2rem] border border-gold/20 bg-cream px-5 py-8 shadow-[0_18px_40px_rgba(107,20,20,0.06)] sm:px-10 sm:py-12 lg:grid-cols-[0.92fr_1.18fr] lg:gap-16">
          <div className="text-center lg:text-left" data-animate>
            <span className="section-kicker lg:mx-0">University Partnerships</span>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-crimson sm:text-3xl lg:text-5xl">
              University Support Program
            </h2>
            <p className="mt-6 font-body text-[15px] leading-relaxed text-charcoal sm:text-base lg:text-lg">
              Culture Quest partners with colleges and universities to prepare
              the next generation of culture builders through real-world
              experience, not classroom simulation.
            </p>

            <div className="mt-8 rounded-3xl border border-gold/15 bg-white/85 px-5 py-5 shadow-sm sm:px-6">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Why It Works
              </p>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-charcoal sm:text-sm">
                This is not an academic exercise. Students work in teams on
                real projects with real stakes. They graduate with meaningful
                culture consulting experience and a portfolio of applied work,
                while organizations gain a practical roadmap for how they want
                their culture to operate.
              </p>
            </div>

            <a
              href="mailto:jerry.wagner@culturesinaction.com?subject=University%20Support%20Program%20Inquiry"
              className="mt-8 inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-crimson px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.16em] text-crimson transition-colors duration-200 hover:bg-crimson hover:text-white sm:w-auto"
            >
              Discuss a Partnership
              <ArrowIcon />
            </a>
          </div>

          <div data-animate data-delay="100">
            <div className="rounded-3xl bg-white/80 px-5 py-5 ring-1 ring-gold/15 shadow-sm sm:px-8 sm:py-7">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                The Process
              </p>
              <div className="mt-5 grid gap-4" data-animate-children>
                {processItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white px-5 py-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:px-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-crimson text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <div className="space-y-2">
                        <h3 className="font-display text-xl font-semibold text-crimson">
                          {item.title}
                        </h3>
                        <p className="font-body text-[15px] leading-relaxed text-charcoal sm:text-sm">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
