const contactEmail = "jerry.wagner@culturequestsoftware.net";

export default function Footer() {
  return (
    <footer className="bg-crimson px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left, brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm">
                <img
                  src="/cq-logo.jpg"
                  alt="Culture Quest logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <div>
                <p className="font-display text-xl font-semibold text-white">
                  Culture Quest
                </p>
                <p className="font-body text-sm text-white/60">
                  Culture Operating System
                </p>
              </div>
            </div>
          </div>

          {/* Right, contact */}
          <div className="text-center md:text-right">
            <p className="font-display text-lg font-semibold text-white">
              Gerald (Jerry) Wagner, PhD
            </p>
            <div className="mt-2 space-y-0.5">
              <p className="font-body text-sm text-white/60">
                Gallup Senior Scientist
              </p>
              <p className="font-body text-sm text-white/60">
                Employee Wellbeing Institute
              </p>
              <p className="font-body text-sm text-white/60">
                Professor | Entrepreneur
              </p>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-4 inline-block break-all cursor-pointer font-body text-sm font-medium text-gold transition-colors duration-200 hover:text-yellow-400"
            >
              {contactEmail}
            </a>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="font-body text-center text-sm text-white/40">
            &copy; 2025 Culture Quest Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
