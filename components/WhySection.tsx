const reasons = [
  {
    title: "Human-Led",
    body: "Draws from the values, judgment, experiences, instincts, beliefs, and insights your team already has \u2014 the real building blocks for culture. Not data from surveys or AI agents.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C4992A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Practical Design",
    body: "The engine\u2019s self-guided structure helps you organize what already exists and add what is missing. No consultants required.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C4992A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
      </svg>
    ),
  },
  {
    title: "Step-by-Step",
    body: "The process is readily accessible and can be implemented by any team without special expertise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#C4992A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
];

export default function WhySection() {
  return (
    <section className="bg-cream px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-gold">
            Why Culture Quest Works
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-crimson lg:text-5xl">
            Built for Real Teams, Not Ideal Ones
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="text-center md:text-left">
              <div className="mb-4 flex justify-center md:justify-start">
                {r.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-crimson">
                {r.title}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-charcoal">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
