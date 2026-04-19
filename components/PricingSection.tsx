const tiers = [
  {
    employees: "50 or fewer",
    price: "$199",
  },
  {
    employees: "51-100",
    price: "$299",
  },
  {
    employees: "101-250",
    price: "$399",
  },
  {
    employees: "251-500",
    price: "$599",
  },
  {
    employees: "501 or more",
    price: "$799",
  },
];

const included = [
  "Unlimited employees per team",
  "Hosting on a commercial server",
  "Online start up training",
  "Online help",
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4992A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-parchment px-4 py-16 sm:px-6 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <span className="section-kicker">
            Pricing
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold text-crimson lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-charcoal">
            One flat annual price based on total organization size. Unlimited
            teams, no hidden fees, no per-user charges.
          </p>
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-10">
          {[
            "Unlimited teams included",
            "No setup fees",
            "All features, every plan",
          ].map((signal) => (
            <div key={signal} className="flex w-full items-center justify-center gap-2 sm:w-auto">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C4992A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="font-body text-sm font-medium text-charcoal">
                {signal}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing cards */}
        <div
          className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5"
          data-animate-children
        >
          {tiers.map((tier) => (
            <div
              key={tier.employees}
              className="flex min-w-[260px] snap-start flex-col rounded-2xl border border-mist bg-white px-5 py-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:min-w-0 sm:px-6 sm:py-8"
            >
              <p className="font-body text-xs font-medium uppercase tracking-widest text-charcoal/50">
                {tier.employees} employees
              </p>
              <p className="mt-4 font-display text-4xl font-semibold text-crimson">
                {tier.price}
              </p>
              <p className="mt-1 font-body text-sm text-charcoal/50">
                per year
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="mailto:jerry.wagner@culturesinaction.com"
                  className="block cursor-pointer rounded-full border-2 border-crimson px-5 py-2.5 text-center font-body text-sm font-semibold tracking-wide text-crimson transition-colors duration-200 hover:bg-crimson hover:text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* All plans include */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-mist bg-white px-5 py-8 shadow-sm sm:mt-16 sm:px-8 sm:py-10">
          <p className="font-display text-xl font-semibold text-crimson">
            Every plan includes
          </p>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:mt-6 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span className="font-body text-sm leading-relaxed text-charcoal">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer note */}
        <p className="mt-7 text-center font-body text-sm text-charcoal/50 sm:mt-8">
          Pricing is based on total organization size, not number of teams or
          users.{" "}
          <a
            href="mailto:jerry.wagner@culturesinaction.com"
            className="cursor-pointer text-crimson underline underline-offset-2 transition-colors duration-200 hover:text-gold"
          >
            Questions? Let&apos;s talk.
          </a>
        </p>
      </div>
    </section>
  );
}
