const cards = [
  {
    title: "Request a Demo",
    body: "Join a Zoom demo to see the system\u2019s capabilities firsthand.",
    action: "Book a Demo",
    href: "mailto:jerry.wagner@culturesinaction.com",
    external: false,
  },
  {
    title: "See It in Action",
    body: "View a short interactive example and explore the system yourself.",
    action: "Visit Demo Site",
    href: "https://www.teamculturesystem.com",
    external: true,
  },
  {
    title: "Free Pilot",
    body: "Pilot a real-world implementation together at no cost. Keep it if it works \u2014 no obligation.",
    action: "Start Free Pilot",
    href: "mailto:jerry.wagner@culturesinaction.com",
    external: false,
  },
];

export default function CtaSection() {
  return (
    <section className="bg-gold px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-display text-3xl font-semibold text-crimson lg:text-5xl">
          Ready to Get Started?
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3" data-animate-children>
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-xl bg-white p-8 shadow-md transition-all duration-200 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="font-display text-xl font-semibold text-crimson">
                {card.title}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-charcoal">
                {card.body}
              </p>
              <a
                href={card.href}
                {...(card.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-crimson px-6 py-2.5 font-body text-sm font-medium tracking-wide text-white transition-all duration-200 hover:bg-crimson/90 hover:gap-3"
              >
                {card.action}
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
