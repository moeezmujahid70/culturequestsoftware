const agenda = [
  "Clarify how the team wants to make decisions.",
  "Clarify how the team wants people to behave.",
  "Capture the first version of the Culture Operating Plan.",
  "Leave with a living digital manual your team can keep improving.",
];

export default function KickoffSection() {
  return (
    <section id="kickoff" className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.25fr] lg:gap-16">
          <div className="text-center lg:text-left" data-animate>
            <span className="section-kicker lg:mx-0">Live Kickoff Sessions</span>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-crimson sm:text-3xl lg:text-5xl">
              Stop Talking About Culture and Start Engineering It
            </h2>
          </div>

          <div data-animate data-delay="100">
            <p className="font-body text-[15px] leading-relaxed text-charcoal sm:text-base lg:text-lg">
              The biggest hurdle for most teams is the blank-page problem. Our
              live kickoff session is a real-time working session where we help
              your team move from ideas to a first Culture Operating Plan: a
              living digital manual that defines how you make decisions, behave
              with one another, and continually improve.
            </p>

            <div className="mt-8 rounded-3xl border border-gold/20 bg-parchment px-5 py-5 shadow-sm sm:px-8 sm:py-6">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                First Live Workshop Agenda
              </p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {agenda.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gold" />
                    <span className="font-body text-[15px] leading-relaxed text-charcoal sm:text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              data-inquiry-context="kickoff"
              className="mt-8 inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-crimson/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
            >
              Ask About Kickoff
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
