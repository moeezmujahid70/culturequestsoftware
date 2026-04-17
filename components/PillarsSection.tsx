const pillars = [
  {
    name: "Decisions",
    description: "How the team chooses to make decisions.",
  },
  {
    name: "Behaviors",
    description: "How the team expects people to behave.",
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
    <section id="principles" className="bg-crimson px-4 py-16 sm:px-6 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-gold">
            The Five Pillars
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white lg:text-5xl">
            Everything Your Culture Needs, in One System
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5" data-animate-children>
          {pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="group cursor-pointer rounded-lg border-t-2 border-gold bg-white/[0.06] p-5 transition-all duration-200 hover:-translate-y-2 hover:border-t-4 hover:bg-white/[0.12] hover:shadow-lg hover:shadow-black/20 sm:p-6"
            >
              <h3 className="font-display text-xl font-semibold text-gold transition-colors duration-200 group-hover:text-yellow-300">
                {pillar.name}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/75 transition-colors duration-200 group-hover:text-white/90">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
