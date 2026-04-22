export default function InnerCircleSection() {
  return (
    <section id="inner-circle" className="bg-cream px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl" data-animate>
        <div className="rounded-[1.5rem] border border-gold/20 bg-white px-4 py-7 text-left shadow-[0_18px_40px_rgba(107,20,20,0.08)] sm:rounded-[2rem] sm:px-10 sm:py-12">
          <span className="section-kicker lg:mx-0">Private Invitations</span>
          <h2 className="mt-4 font-display text-[1.8rem] font-semibold leading-tight text-crimson sm:mt-5 sm:text-3xl lg:text-5xl">
            Join the Inner Circle
          </h2>
          <p className="mt-6 max-w-2xl font-body text-[15px] leading-relaxed text-charcoal sm:text-base lg:text-lg">
            We occasionally convene a small group of founders, consultants, and
            culture leaders for candid Zoom conversations about what it really
            takes to design a high-performing Culture Operating System.
          </p>
          <p className="mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-charcoal sm:text-base lg:text-lg">
            If the ideas behind{" "}
            <a
              href="https://www.teamculturesystem.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline cursor-pointer font-medium text-crimson transition-colors duration-200 hover:text-gold"
            >
              the live example
            </a>{" "}
            or{" "}
            <a
              href="https://www.amazon.com/dp/B0GL2G94BH"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline cursor-pointer font-medium text-crimson transition-colors duration-200 hover:text-gold"
            >
              Culture by Design
            </a>{" "}
            resonate with your work, introduce yourself. We do not send generic
            newsletters, only occasional notes when a high-value session opens.
          </p>
          <div className="mt-7 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
            <a
              href="https://www.teamculturesystem.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline cursor-pointer font-body text-sm font-medium text-crimson transition-colors duration-200 hover:text-gold"
            >
              Explore the example
            </a>
            <a
              href="https://www.amazon.com/dp/B0GL2G94BH"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline cursor-pointer font-body text-sm font-medium text-crimson transition-colors duration-200 hover:text-gold"
            >
              Read the book
            </a>
            <a
              href="#contact"
              data-inquiry-context="inner_circle"
              className="link-underline cursor-pointer font-body text-sm font-medium text-crimson transition-colors duration-200 hover:text-gold"
            >
              Go to contact
            </a>
          </div>
          <a
            href="#contact"
            data-inquiry-context="inner_circle"
            className="mt-7 inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full bg-crimson px-6 py-3 font-body text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-crimson/90 sm:mt-8 sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.16em]"
          >
            Introduce Yourself
          </a>
        </div>
      </div>
    </section>
  );
}
