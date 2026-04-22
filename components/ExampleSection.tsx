export default function ExampleSection() {
  return (
    <section
      id="example"
      className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl" data-animate>
        <div className="overflow-hidden rounded-[2rem] border border-gold/20 bg-cream shadow-[0_18px_40px_rgba(107,20,20,0.06)]">
          <div className="mx-auto max-w-6xl bg-white px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center font-display text-[2.2rem] font-semibold leading-none text-crimson sm:text-[3rem]">
                Example
              </h2>

              <div className="mt-12 space-y-10">
                <p className="font-body text-[15px] leading-relaxed text-charcoal sm:text-[1.05rem]">
                  This short, interactive example gives you a hands-on view of
                  what a Team Culture System provides. The data and process are
                  realistic, but not from an actual case.
                </p>

                <p className="font-body text-[15px] leading-relaxed text-charcoal sm:text-[1.05rem]">
                  The example includes (1) two Decision Principles, each with
                  two Actions, and (2) two Behavioral Principles, each with two
                  Actions.
                </p>
              </div>

              <div className="mt-12">
                <div className="mx-auto max-w-3xl rounded-3xl border border-crimson/15 bg-parchment px-6 py-5 text-center shadow-sm">
                  <p className="font-body text-[15px] font-semibold leading-relaxed text-crimson sm:text-[1.05rem]">
                    You can&apos;t mess up anything or get in trouble. Just
                    mouse over and click as you would in any application.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="https://www.teamculturesystem.com/overview/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-[10rem] cursor-pointer items-center justify-center rounded-full bg-[#11c85b] px-8 py-3 font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-[#0fad4f]"
                >
                  Start
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
