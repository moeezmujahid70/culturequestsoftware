const tiers = [
  { employees: "50 or fewer", price: "$199" },
  { employees: "51 \u2013 100", price: "$299" },
  { employees: "101 \u2013 250", price: "$399", highlighted: true },
  { employees: "251 \u2013 500", price: "$599" },
  { employees: "501 or more", price: "$799" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-parchment px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-gold">
            Pricing
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-crimson lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-charcoal">
            Pricing is based on total organization size. No limit on number of
            teams or employees per team within your bracket. Prices are per year.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl bg-white shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-mist">
                <th className="px-6 py-4 text-left font-body text-sm font-medium uppercase tracking-wider text-charcoal/60">
                  Number of Employees
                </th>
                <th className="px-6 py-4 text-right font-body text-sm font-medium uppercase tracking-wider text-charcoal/60">
                  Price Per Year
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mist">
              {tiers.map((tier) => (
                <tr
                  key={tier.employees}
                  className={
                    tier.highlighted
                      ? "border-l-4 border-l-gold bg-gold/10"
                      : ""
                  }
                >
                  <td className="px-6 py-4 font-body text-base text-charcoal">
                    {tier.employees}
                  </td>
                  <td className="px-6 py-4 text-right font-display text-xl font-semibold text-crimson">
                    {tier.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
