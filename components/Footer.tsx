import CQLogo from "./CQLogo";

export default function Footer() {
  return (
    <footer className="bg-crimson px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left — brand */}
          <div>
            <div className="flex items-center gap-3">
              <CQLogo size={44} />
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

          {/* Right — contact */}
          <div className="md:text-right">
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
              href="mailto:jerry.wagner@culturesinaction.com"
              className="mt-4 inline-block cursor-pointer font-body text-sm font-medium text-gold transition-colors duration-200 hover:text-yellow-400"
            >
              jerry.wagner@culturesinaction.com
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
