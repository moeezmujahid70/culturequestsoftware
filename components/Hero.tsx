import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[4.5rem] sm:pt-16">
      <div className="grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        {/* Left, crimson panel */}
        <div className="flex flex-col justify-center bg-crimson px-4 py-10 text-center sm:px-8 sm:py-12 lg:px-16 lg:py-14 lg:text-left xl:px-24">
          <span className="section-kicker section-kicker--inverse mb-5 mx-auto lg:mx-0">
            Culture Operating System
          </span>
          <h1 className="mx-auto max-w-[11ch] font-display text-[2.1rem] font-semibold leading-[0.95] text-white sm:max-w-[13ch] sm:text-[2.4rem] lg:mx-0 lg:max-w-[9.5ch] lg:text-[3.8rem]">
            Your Team Deserves a Better Operating System
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-body text-[15px] leading-relaxed text-white/75 sm:text-base lg:mx-0 lg:text-lg">
            Teams can intentionally design how they want their workplace to
            operate. A Culture Operating System (COS) gives you a clear, visible
            blueprint, built from your team&apos;s own values and insights.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
            <a
              href="mailto:jerry.wagner@culturesinaction.com"
              className="min-h-11 cursor-pointer rounded-full bg-gold px-8 py-3 text-center font-body text-sm font-medium tracking-wide text-crimson transition-colors duration-200 hover:bg-yellow-500 sm:min-w-[11rem]"
            >
              Request a Demo
            </a>
            <a
              href="https://www.teamculturesystem.com"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 cursor-pointer rounded-full border-2 border-white px-8 py-3 text-center font-body text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-white/10 sm:min-w-[11rem]"
            >
              See It in Action
            </a>
          </div>
        </div>

        {/* Right, softened team photo */}
        <div className="relative min-h-[360px] overflow-hidden bg-cream sm:min-h-[420px] lg:min-h-full">
          <Image
            src="/assets/images/hero.jpg"
            alt="A team gathered together in discussion"
            fill
            unoptimized
            priority
            className="scale-[1.03] object-cover object-center opacity-76 saturate-[0.86] sepia-[0.04]"
          />

          {/* Soften the image so it sits behind the message instead of shouting */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,242,231,0.5)_0%,rgba(247,242,231,0.24)_36%,rgba(247,242,231,0.48)_100%)] lg:bg-[linear-gradient(90deg,rgba(247,242,231,0.9)_0%,rgba(247,242,231,0.64)_20%,rgba(247,242,231,0.24)_46%,rgba(247,242,231,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_24%,rgba(255,255,255,0.22),transparent_40%)]" />
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-crimson/12 to-transparent lg:w-24" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream via-cream/60 to-transparent sm:h-32" />

          {/* Subtle framing accent */}
          <div className="absolute inset-4 rounded-[1.75rem] border border-white/35 sm:inset-7 sm:rounded-[2rem] lg:inset-10" />

          {/* Editorial quote overlay */}
          <div className="absolute inset-x-4 bottom-5 sm:inset-x-8 sm:bottom-8 lg:bottom-10 lg:left-10 lg:right-auto lg:max-w-[27rem]">
            <div className="rounded-[1.75rem] border border-white/55 bg-parchment/88 px-5 py-5 shadow-[0_18px_40px_rgba(107,20,20,0.08)] backdrop-blur-[2px] sm:rounded-[2rem] sm:px-7 sm:py-7">
              <p className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-gold">
                The Culture Shift
              </p>
              <p className="mt-4 font-display text-[1.85rem] font-semibold leading-tight text-crimson sm:text-3xl lg:text-[2.35rem]">
                Stop settling for the culture you inherited.
              </p>
              <p className="mt-2 font-display text-[1.85rem] font-semibold leading-tight text-crimson sm:text-3xl lg:text-[2.35rem]">
                Design the one you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
