export default function InnerCircleSection() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl" data-animate>
        <div className="rounded-[2rem] border border-gold/20 bg-white px-6 py-10 text-center shadow-[0_18px_40px_rgba(107,20,20,0.08)] sm:px-10 sm:py-12">
          <span className="section-kicker">
            Private Invitations
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold text-crimson lg:text-5xl">
            Join the Inner Circle
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-charcoal lg:text-lg">
            We occasionally open a limited number of private live kickoff
            sessions for early backers and serious participants. When we do, we
            send direct invitations for candid Zoom conversations. No marketing
            fluff or generic newsletters, just occasional notes when a
            high-value session opens up.
          </p>
          <a
            href="mailto:jerry.wagner@culturesinaction.com?subject=Inner%20Circle%20Invite%20Request"
            className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-full bg-crimson px-7 py-3 font-body text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-crimson/90"
          >
            Request an Invite
          </a>
        </div>
      </div>
    </section>
  );
}
