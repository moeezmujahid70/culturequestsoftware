const principles = [
  {
    title: "Treat Culture as a Strategic Discipline",
    body: "Culture is the operating system that determines how effectively your business and project strategies are executed. Culture drives behavior and behavior drives business results. As a critical strategic asset, it demands the same rigor, priority, and disciplined approach as your financial, operational, and project plans.",
  },
  {
    title: "Build Culture at the Team Level",
    body: "Company-wide culture initiatives often fail because they are too abstract. Real culture lives in teams \u2014 in daily interactions, decisions, and behaviors. Culture Quest builds from the ground up, giving each team ownership of their own culture plan.",
  },
  {
    title: "Make it Human-Led",
    body: "Culture cannot be outsourced to surveys or AI agents. It must be built from the values, instincts, and lived experiences of the people doing the work. Culture Quest draws entirely from what your team already knows.",
  },
  {
    title: "Make it Visible and Documented",
    body: "A culture that exists only in people\u2019s heads is fragile. Culture Quest produces a documented Team Culture Plan \u2014 available online and in print \u2014 so every team member has a current copy and can hold each other accountable.",
  },
  {
    title: "Build in Continuous Improvement",
    body: "Culture is not a one-time exercise. Culture Quest includes a defined process for reviewing, measuring, and updating the plan at least twice a year, ensuring the system grows with the team.",
  },
];

export default function PrinciplesSection() {
  return (
    <section className="bg-parchment px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[800px]">
        <span className="font-body text-xs font-medium uppercase tracking-widest text-gold">
          Principles
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-crimson lg:text-5xl">
          Culture Building Principles Within Culture Quest
        </h2>

        <div className="mt-14 space-y-12">
          {principles.map((p, i) => (
            <div key={p.title}>
              <span className="font-body text-sm font-medium text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-1 font-display text-xl font-semibold text-crimson lg:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-charcoal">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
