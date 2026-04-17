const questions = [
  {
    label: "Co-created",
    body: "Was it built with input from every team member?",
  },
  {
    label: "Documented",
    body: "Does everyone have a current copy?",
  },
  {
    label: "Framework",
    body: "Was it developed using a rigorous model?",
  },
  {
    label: "Measured",
    body: "Is progress formally reviewed at least twice a year?",
  },
  {
    label: "Current",
    body: "Is it updated annually to reflect the team\u2019s growth?",
  },
];

export default function VisionSection() {
  return (
    <section id="vision" className="bg-cream px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[800px]">

        <div data-animate>
          <span className="font-body text-xs font-medium uppercase tracking-widest text-gold">
            Vision
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-crimson lg:text-5xl">
            Culture Plans Should Hold the Same Strategic Stature as Business Plans
          </h2>
        </div>

        <div data-animate data-delay="100">
          <p className="mt-8 font-body text-base leading-relaxed text-charcoal">
            To achieve this, culture plans cannot be generic, top-down mandates.
            They must be built at the individual team level, where culture is lived
            and executed every day.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-charcoal">
            A team&apos;s culture plan is only truly effective if every member can
            answer &ldquo;yes&rdquo; to five vital questions:
          </p>
        </div>

        <ol className="mt-8 space-y-3" data-animate-children>
          {questions.map((q, i) => (
            <li
              key={q.label}
              className="group flex gap-4 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-gold/5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 font-body text-sm font-medium text-gold transition-colors duration-200 group-hover:bg-gold group-hover:text-white">
                {i + 1}
              </span>
              <p className="font-body text-base leading-relaxed text-charcoal">
                <strong className="font-medium text-crimson">{q.label}:</strong>{" "}
                {q.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 font-body text-base leading-relaxed text-charcoal" data-animate data-delay="200">
          When every team in an organization can answer &ldquo;yes,&rdquo;
          culture transforms from an abstract concept into a tangible,
          competitive advantage.
        </p>
      </div>
    </section>
  );
}
