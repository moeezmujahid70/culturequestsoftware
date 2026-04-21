const pillars = [
  {
    name: "Decisions",
    description: "The decisions (rules) the team wants.",
  },
  {
    name: "Behaviors",
    description: "The behaviors (rules) the team expects.",
  },
  {
    name: "Reinforcement",
    description: "What specific actions will reinforce those choices.",
  },
  {
    name: "Ownership",
    description: "Clear identification of who owns each action.",
  },
  {
    name: "Improvement",
    description:
      "A defined process for how the system is improved over time.",
  },
];

export default function PillarsSection() {
  return (
    <section id="principles" className="bg-crimson px-4 py-14 sm:px-6 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="section-kicker section-kicker--inverse">
            The Five Pillars
          </span>
          <h2 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-white sm:text-3xl lg:text-5xl">
            Everything Your Culture Needs, in One System
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5" data-animate-children>
          {pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="group cursor-pointer rounded-[1.6rem] border border-gold/20 bg-parchment px-5 py-6 shadow-[0_14px_32px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(0,0,0,0.12)] sm:px-6 sm:py-7"
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-gold/75 transition-all duration-200 group-hover:w-16 group-hover:bg-gold" />
              <h3 className="font-display text-[1.65rem] font-semibold text-crimson transition-colors duration-200 group-hover:text-crimson/90 sm:text-2xl">
                {pillar.name}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/85 transition-colors duration-200 group-hover:text-charcoal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
