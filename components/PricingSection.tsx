const tiers = [
  {
    employees: "50 or fewer",
    price: "$199",
    perMonth: "~$17/mo",
    featured: false,
  },
  {
    employees: "51-100",
    price: "$299",
    perMonth: "~$25/mo",
    featured: false,
  },
  {
    employees: "101-250",
    price: "$399",
    perMonth: "~$33/mo",
    featured: true,
    badge: "Most Popular",
  },
  {
    employees: "251-500",
    price: "$599",
    perMonth: "~$50/mo",
    featured: false,
    highlight: true,
    badge: "Best Value",
  },
  {
    employees: "501 or more",
    price: "$799",
    perMonth: "~$67/mo",
    featured: false,
  },
];

const included = [
  "Unlimited teams within your organization",
  "All five COS pillars, fully documented",
  "Annual culture plan for every team",
  "Bi-annual review & update process",
  "No consultants or special expertise needed",
  "Online + printable team culture plan",
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
    <section id="pricing" className="bg-parchment px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-gold">
            Pricing
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-crimson lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-charcoal">
            One flat annual price based on total organization size. Unlimited
            teams, no hidden fees, no per-user charges.
          </p>
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {[
            "Unlimited teams included",
            "No setup fees",
            "All features, every plan",
          ].map((signal) => (
            <div key={signal} className="flex items-center gap-2">
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
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" data-animate-children>
          {tiers.map((tier) =>
            tier.featured ? (
              /* Featured card, crimson / Most Popular */
              <div
                key={tier.employees}
                className="relative flex flex-col rounded-2xl bg-crimson px-6 py-8 shadow-xl shadow-crimson/20 lg:-my-4 lg:py-12"
              >
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-body text-xs font-semibold uppercase tracking-widest text-crimson shadow">
                  {tier.badge}
                </span>
                <p className="font-body text-xs font-medium uppercase tracking-widest text-white/50">
                  {tier.employees} employees
                </p>
                <p className="mt-4 font-display text-5xl font-semibold text-gold">
                  {tier.price}
                </p>
                <p className="mt-1 font-body text-sm text-white/60">
                  per year &middot; {tier.perMonth}
                </p>
                <div className="mt-1 h-px w-full bg-white/10" />
                <a
                  href="mailto:jerry.wagner@culturesinaction.com"
                  className="mt-6 cursor-pointer rounded-full bg-gold px-5 py-2.5 text-center font-body text-sm font-semibold tracking-wide text-crimson transition-colors duration-200 hover:bg-yellow-400"
                >
                  Get Started
                </a>
              </div>
            ) : tier.highlight ? (
              /* Highlighted card, gold-tinted / Best Value */
              <div
                key={tier.employees}
                className="relative flex flex-col rounded-2xl border-2 border-gold/50 bg-gradient-to-b from-amber-50 to-yellow-50 px-6 py-8 shadow-md shadow-gold/20 transition-shadow duration-200 hover:shadow-lg hover:shadow-gold/25"
              >
                {/* Bubble badge */}
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-body text-xs font-semibold uppercase tracking-widest text-white shadow-sm">
                  {tier.badge}
                </span>

                {/* Decorative gold circle accent */}
                <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-gold/10" />
                <div className="absolute top-7 right-7 h-10 w-10 rounded-full bg-gold/15" />

                <p className="relative font-body text-xs font-medium uppercase tracking-widest text-gold/70">
                  {tier.employees} employees
                </p>
                <p className="relative mt-4 font-display text-4xl font-semibold text-amber-700">
                  {tier.price}
                </p>
                <p className="relative mt-1 font-body text-sm text-amber-600/70">
                  per year &middot; {tier.perMonth}
                </p>

                <div className="mt-auto pt-6">
                  <a
                    href="mailto:jerry.wagner@culturesinaction.com"
                    className="block cursor-pointer rounded-full bg-gold px-5 py-2.5 text-center font-body text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-amber-600"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ) : (
              /* Standard card */
              <div
                key={tier.employees}
                className="flex flex-col rounded-2xl border border-mist bg-white px-6 py-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="font-body text-xs font-medium uppercase tracking-widest text-charcoal/50">
                  {tier.employees} employees
                </p>
                <p className="mt-4 font-display text-4xl font-semibold text-crimson">
                  {tier.price}
                </p>
                <p className="mt-1 font-body text-sm text-charcoal/50">
                  per year &middot; {tier.perMonth}
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
            )
          )}
        </div>

        {/* All plans include */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-mist bg-white px-8 py-10 shadow-sm">
          <p className="font-display text-xl font-semibold text-crimson">
            Every plan includes
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
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
        <p className="mt-8 text-center font-body text-sm text-charcoal/50">
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
