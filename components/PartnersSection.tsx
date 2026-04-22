export default function PartnersSection() {
  return (
    <section id="partners" className="bg-crimson px-4 py-12 sm:px-6 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-2xl text-left" data-animate>
        <span className="section-kicker section-kicker--inverse lg:mx-0">
          Associates &amp; Partners
        </span>
        <h2 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-white sm:text-3xl lg:text-5xl">
          Consultants Welcome
        </h2>
        <p className="mt-6 font-body text-[15px] leading-relaxed text-white/75 sm:text-base lg:text-lg">
          Independent consultants can provide consulting and training to support
          Culture Quest customers and retain 100% of the revenue from their
          engagements.
        </p>
        <a
          href="#contact"
          data-inquiry-context="partners"
          className="link-underline mt-8 inline-flex min-h-11 w-full cursor-pointer items-center justify-start font-body text-base font-medium text-gold transition-colors duration-200 hover:text-yellow-300 sm:w-auto"
        >
          Get in touch to learn more
        </a>
      </div>
    </section>
  );
}
