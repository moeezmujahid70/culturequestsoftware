const cards = [
  {
    title: "Request a Demo",
    body: "Join a Zoom demo to see the system\u2019s capabilities firsthand.",
    action: "Book a Demo",
    href: "#contact",
    inquiryContext: "book_demo",
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
    body: "Do a free pilot with your actual team for 3 months. We’ll do it together.",
    action: "Start Free Pilot",
    href: "#contact",
    inquiryContext: "free_pilot",
    external: false,
  },
];

export default function CtaSection() {
  return (
    <section className="bg-gold px-4 py-14 sm:px-6 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mx-auto max-w-4xl text-center font-display text-[1.9rem] font-semibold leading-tight text-crimson sm:text-3xl lg:text-4xl">
          Stop settling for the culture you inherited. Design the one you want.
        </p>
        <h2 className="mt-5 text-center font-display text-[2rem] font-semibold leading-tight text-crimson sm:text-3xl lg:text-5xl">
          Ready to Get Started?
        </h2>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3 md:gap-8" data-animate-children>
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-2 hover:shadow-xl sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold text-crimson">
                {card.title}
              </h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-charcoal sm:text-base">
                {card.body}
              </p>
              <a
                href={card.href}
                {...(card.inquiryContext
                  ? { "data-inquiry-context": card.inquiryContext }
                  : {})}
                {...(card.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mt-6 inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-crimson px-6 py-2.5 font-body text-sm font-medium tracking-wide text-white transition-all duration-200 hover:bg-crimson/90 hover:gap-3 sm:w-auto"
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
