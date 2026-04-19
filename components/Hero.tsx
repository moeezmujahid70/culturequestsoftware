import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-14 sm:pt-16">
      <div className="grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        {/* Left, crimson panel */}
        <div className="flex flex-col justify-center bg-crimson px-5 py-14 sm:px-8 sm:py-[4.5rem] lg:px-16 lg:py-20 xl:px-24">
          <span className="section-kicker section-kicker--inverse mb-5">
            Culture Operating System
          </span>
          <h1 className="font-display text-[2.4rem] font-semibold leading-[1.02] text-white sm:text-5xl lg:text-7xl">
            Your Team Deserves a Better Operating System
          </h1>
          <p className="mt-5 max-w-2xl font-display text-2xl font-semibold leading-tight text-gold sm:mt-6 sm:text-3xl lg:text-[2.4rem]">
            Stop settling for the culture you inherited. Design the one you
            want.
          </p>
          <p className="mt-5 max-w-lg font-body text-[15px] leading-relaxed text-white/75 sm:mt-6 sm:text-base lg:text-lg">
            Teams can intentionally design how they want their workplace to
            operate. A Culture Operating System (COS) gives you a clear, visible
            blueprint, built from your team&apos;s own values and insights.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="mailto:jerry.wagner@culturesinaction.com"
              className="cursor-pointer rounded-full bg-gold px-8 py-3 text-center font-body text-sm font-medium tracking-wide text-crimson transition-colors duration-200 hover:bg-yellow-500"
            >
              Request a Demo
            </a>
            <a
              href="https://www.teamculturesystem.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border-2 border-white px-8 py-3 text-center font-body text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
            >
              See It in Action
            </a>
          </div>
        </div>

        {/* Right, softened team photo */}
        <div className="relative min-h-[320px] overflow-hidden bg-cream sm:min-h-[420px] lg:min-h-full">
          <Image
            src="/assets/images/hero.jpg"
            alt="A team gathered together in discussion"
            fill
            unoptimized
            priority
            className="scale-[1.03] object-cover object-center opacity-80 saturate-[0.84] sepia-[0.05]"
          />

          {/* Soften the image so it sits behind the message instead of shouting */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,242,231,0.88)_0%,rgba(247,242,231,0.66)_22%,rgba(247,242,231,0.38)_48%,rgba(247,242,231,0.56)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_30%,rgba(255,255,255,0.18),transparent_42%)]" />
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-crimson/12 to-transparent lg:w-24" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream via-cream/60 to-transparent sm:h-32" />

          {/* Subtle framing accent */}
          <div className="absolute inset-5 rounded-[2rem] border border-white/35 sm:inset-7 lg:inset-10" />
        </div>
      </div>
    </section>
  );
}
