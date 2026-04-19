export default function ConceptSection() {
  return (
    <section className="bg-parchment px-4 py-16 sm:px-6 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center" data-animate>
          <span className="section-kicker">
            The Core Concept
          </span>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-semibold text-crimson lg:text-5xl">
            A Visible Blueprint for How Your Team Wants to Operate
          </h2>
        </div>
        <p
          className="mx-auto mt-8 max-w-4xl text-center font-body text-lg leading-relaxed text-charcoal lg:text-[1.35rem]"
          data-animate
          data-delay="150"
        >
          Culture Quest is leading the shift to Culture Operating Systems
          (COS).
        </p>
        <div
          className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-gold/20 bg-white/80 px-6 py-8 text-center shadow-sm sm:px-10"
          data-animate
          data-delay="200"
        >
          <p className="font-display text-2xl font-semibold leading-tight text-crimson sm:text-3xl lg:text-[2.5rem]">
            A COS is like an operator&apos;s manual for teamwork.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-charcoal lg:text-lg">
            It tells everyone: here&apos;s how we decide, here&apos;s how we
            behave, and here&apos;s how we improve.
          </p>
        </div>
        <p
          className="mx-auto mt-8 max-w-4xl font-body text-base leading-relaxed text-charcoal lg:text-lg"
          data-animate
          data-delay="300"
        >
          Using the Culture Quest COS engine, a team defines exactly how it
          wants its workplace to operate. It draws from the values, judgment,
          experiences, instincts, beliefs, and insights the team already has,
          not from surveys or AI agents. The result is a practical,
          step-by-step system any team can implement without special expertise.
        </p>
      </div>
    </section>
  );
}
