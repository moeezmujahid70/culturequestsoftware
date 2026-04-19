const agenda = [
  "Clarify how the team wants to make decisions.",
  "Define expected behaviors and working norms.",
  "Capture the first version of the Culture Operating Plan.",
  "Leave with a living digital manual your team can keep improving.",
];

export default function KickoffSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.25fr] lg:gap-16">
          <div className="text-center lg:text-left" data-animate>
            <span className="section-kicker lg:mx-0">
              Live Kickoff Sessions
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-crimson lg:text-5xl">
              Stop Talking About Culture and Start Engineering It
            </h2>
          </div>

          <div data-animate data-delay="100">
            <p className="font-body text-base leading-relaxed text-charcoal lg:text-lg">
              The biggest hurdle for most teams is the blank-page problem. Our
              live kickoff session is a real-time working session where we help
              your team move from ideas to a first Culture Operating Plan: a
              living digital manual that defines how you make decisions, behave
              with one another, and continually improve.
            </p>

            <div className="mt-8 rounded-3xl border border-gold/20 bg-parchment px-6 py-6 shadow-sm sm:px-8">
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
                    <span className="font-body text-sm leading-relaxed text-charcoal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
