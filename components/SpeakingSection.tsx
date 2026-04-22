export default function SpeakingSection() {
  return (
    <section id="speaking" className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl" data-animate>
        <div className="grid gap-10 rounded-[2rem] border border-gold/20 bg-parchment px-5 py-8 shadow-[0_18px_40px_rgba(107,20,20,0.06)] sm:px-10 sm:py-12 lg:grid-cols-[0.95fr_1.25fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="section-kicker lg:mx-0">Speaking Engagements</span>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-crimson sm:text-3xl lg:text-5xl">
              Interactive Sessions for Organizations and Professional Groups
            </h2>
          </div>

          <div>
            <p className="font-body text-[15px] leading-relaxed text-charcoal sm:text-base lg:text-lg">
              We engage with organizations and professional groups through
              interactive, on-site speaking sessions focused on Culture
              Operating Systems.
            </p>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-charcoal sm:text-base lg:text-lg">
              Audiences leave with a clear understanding of how
              decision-making, behavior, accountability, and measurement can be
              intentionally designed and why that matters for performance.
            </p>

            <div className="mt-8 rounded-3xl bg-white/85 px-5 py-5 ring-1 ring-gold/15 sm:px-6">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Nonprofit Policy
              </p>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-charcoal sm:text-sm">
                For nonprofit organizations, there is no honorarium. We simply
                ask that travel expenses be covered.
              </p>
            </div>

            <a
              href="mailto:jerry.wagner@culturesinaction.com?subject=Speaking%20Engagement%20Inquiry"
              className="mt-8 inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full border-2 border-crimson px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.16em] text-crimson transition-colors duration-200 hover:bg-crimson hover:text-white sm:w-auto"
            >
              Ask About Speaking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
