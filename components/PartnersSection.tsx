export default function PartnersSection() {
  return (
    <section id="partners" className="bg-crimson px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-body text-xs font-medium uppercase tracking-widest text-gold">
          Associates &amp; Partners
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-white lg:text-5xl">
          Consultants Welcome
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-white/75 lg:text-lg">
          Independent consultants can provide consulting and training to support
          Culture Quest customers and retain 100% of the revenue from their
          engagements.
        </p>
        <a
          href="mailto:jerry.wagner@culturesinaction.com"
          className="mt-8 inline-block cursor-pointer font-body text-base font-medium text-gold underline underline-offset-4 transition-colors duration-200 hover:text-yellow-400"
        >
          Get in touch to learn more
        </a>
      </div>
    </section>
  );
}
