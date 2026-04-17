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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-white p-8 shadow-md"
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
                className="mt-6 inline-block cursor-pointer rounded-full bg-crimson px-6 py-2.5 font-body text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-crimson/90"
              >
                {card.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
