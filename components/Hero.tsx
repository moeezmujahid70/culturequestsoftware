const CYCLE = 7.5; // full cycle duration in seconds
const ACTIVE = 1.5; // each node is active for this long

// Pentagon vertices (center 200,200, radius 140)
const nodes = [
  { cx: 200, cy: 60,  label: "Decisions",     labelDx: 0,    labelDy: -26 },
  { cx: 333, cy: 157, label: "Behaviors",      labelDx: 46,   labelDy: -6  },
  { cx: 282, cy: 313, label: "Reinforcement",  labelDx: 18,   labelDy: 30  },
  { cx: 118, cy: 313, label: "Ownership",      labelDx: -18,  labelDy: 30  },
  { cx: 67,  cy: 157, label: "Improvement",    labelDx: -46,  labelDy: -6  },
];

// Pentagon perimeter: 5 sides × 2×140×sin(36°) ≈ 823
const PENT_PERIMETER = 823;
const SPOKE_LEN = 140;

export default function Hero() {
  return (
    <section className="pt-16">
      <style>{`
        /* ── Draw-in on load ── */
        @keyframes drawPent {
          from { stroke-dashoffset: ${PENT_PERIMETER}; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes drawSpoke {
          0%   { stroke-dashoffset: ${SPOKE_LEN}; }
          100% { stroke-dashoffset: 0; }
        }

        /* ── Center node ── */
        @keyframes centerBreath {
          0%, 100% { transform: scale(1);    }
          50%       { transform: scale(1.1); }
        }
        @keyframes centerRing {
          0%   { r: 32px; opacity: 0.3; }
          100% { r: 56px; opacity: 0;   }
        }

        /* ── Sequential vertex glow (${CYCLE}s cycle) ── */
        /* Active window = first ${(ACTIVE / CYCLE * 100).toFixed(1)}% of cycle   */
        @keyframes nodeGlow {
          0%              { fill: #6B1414; filter: none; }
          8%              { fill: #C4992A; filter: drop-shadow(0 0 10px #C4992A99); }
          ${(ACTIVE / CYCLE * 100).toFixed(1)}%  { fill: #C4992A; filter: drop-shadow(0 0 10px #C4992A99); }
          ${(ACTIVE / CYCLE * 100 + 5).toFixed(1)}% { fill: #6B1414; filter: none; }
          100%            { fill: #6B1414; filter: none; }
        }
        @keyframes labelGlow {
          0%              { fill: #2C2C2C; font-weight: 500; }
          8%              { fill: #C4992A; font-weight: 700; }
          ${(ACTIVE / CYCLE * 100).toFixed(1)}%  { fill: #C4992A; font-weight: 700; }
          ${(ACTIVE / CYCLE * 100 + 5).toFixed(1)}% { fill: #2C2C2C; font-weight: 500; }
          100%            { fill: #2C2C2C; font-weight: 500; }
        }
        @keyframes ringPulse {
          0%   { r: 20px; opacity: 0; }
          8%   { opacity: 0.35; }
          20%  { r: 34px; opacity: 0; }
          100% { r: 34px; opacity: 0; }
        }

        /* Respect user motion preference */
        @media (prefers-reduced-motion: reduce) {
          .cos-anim * { animation: none !important; }
        }
      `}</style>

      <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        {/* ── Left — crimson panel ── */}
        <div className="flex flex-col justify-center bg-crimson px-8 py-20 lg:px-16 xl:px-24">
          <span className="mb-4 inline-block font-body text-xs font-medium uppercase tracking-widest text-gold">
            Culture Operating System
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Your Team Deserves a Better Operating System
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/75 lg:text-lg">
            Teams can intentionally design how they want their workplace to
            operate. A Culture Operating System (COS) gives you a clear, visible
            blueprint — built from your team&apos;s own values and insights.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:jerry.wagner@culturesinaction.com"
              className="cursor-pointer rounded-full bg-gold px-8 py-3 font-body text-sm font-medium tracking-wide text-crimson transition-colors duration-200 hover:bg-yellow-500"
            >
              Request a Demo
            </a>
            <a
              href="https://www.teamculturesystem.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border-2 border-white px-8 py-3 font-body text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-white/10"
            >
              See It in Action
            </a>
          </div>
        </div>

        {/* ── Right — cream panel ── */}
        <div className="cos-anim flex items-center justify-center bg-cream px-4 py-16 lg:px-8 lg:py-0">
          <svg
            viewBox="-60 -30 520 460"
            className="h-auto w-full max-w-[540px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Culture Operating System diagram with five pillars: Decisions, Behaviors, Reinforcement, Ownership, and Improvement"
          >
            <defs>
              {/* Spoke paths for animateMotion — center to each vertex */}
              {nodes.map((n, i) => (
                <path
                  key={i}
                  id={`spoke-path-${i}`}
                  d={`M 200 200 L ${n.cx} ${n.cy}`}
                />
              ))}
            </defs>

            {/* ── Pentagon outline — draws in over 2s ── */}
            <polygon
              points="200,60 333,157 282,313 118,313 67,157"
              stroke="#C4992A"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray={PENT_PERIMETER}
              style={{
                animation: `drawPent 2s ease-out forwards`,
                strokeDashoffset: PENT_PERIMETER,
              }}
            />

            {/* ── Spoke lines — staggered draw-in ── */}
            {nodes.map((n, i) => (
              <line
                key={i}
                x1="200" y1="200"
                x2={n.cx} y2={n.cy}
                stroke="#C4992A"
                strokeWidth="1.5"
                strokeDasharray={SPOKE_LEN}
                opacity="0.55"
                style={{
                  animation: `drawSpoke 1.5s ${0.8 + i * 0.15}s ease-out forwards`,
                  strokeDashoffset: SPOKE_LEN,
                }}
              />
            ))}

            {/* ── Traveling pulse dots along spokes ── */}
            {nodes.map((_, i) => (
              <circle key={i} r="4" fill="#C4992A" opacity="0">
                {/* Position: travels from center to vertex during active window */}
                <animateMotion
                  dur={`${CYCLE}s`}
                  begin={`${i * ACTIVE}s`}
                  repeatCount="indefinite"
                  keyPoints="0; 1; 1; 0"
                  keyTimes={`0; ${(ACTIVE / CYCLE - 0.001).toFixed(4)}; ${(ACTIVE / CYCLE).toFixed(4)}; 1`}
                  calcMode="linear"
                >
                  <mpath href={`#spoke-path-${i}`} />
                </animateMotion>
                {/* Opacity: fade in/out during travel */}
                <animate
                  attributeName="opacity"
                  dur={`${CYCLE}s`}
                  begin={`${i * ACTIVE}s`}
                  repeatCount="indefinite"
                  values="0; 0; 1; 1; 0; 0"
                  keyTimes={`0; 0.01; 0.04; ${(ACTIVE / CYCLE - 0.04).toFixed(4)}; ${(ACTIVE / CYCLE).toFixed(4)}; 1`}
                />
              </circle>
            ))}

            {/* ── Center COS node ── */}
            <g>
              {/* Outer glow ring */}
              <circle
                cx="200" cy="200" r="32"
                fill="#C4992A"
                style={{ animation: `centerRing 2.5s ease-out infinite` }}
              />
              {/* Main circle */}
              <circle
                cx="200" cy="200" r="30"
                fill="#6B1414"
                style={{
                  animation: `centerBreath 3s ease-in-out infinite`,
                  transformOrigin: "200px 200px",
                }}
              />
              <text
                x="200" y="205"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="700"
                fontFamily="Cormorant Garamond, serif"
                letterSpacing="1"
              >
                COS
              </text>
            </g>

            {/* ── Vertex nodes (sequential glow) ── */}
            {nodes.map((n, i) => {
              const delay = `${i * ACTIVE}s`;
              return (
                <g key={n.label}>
                  {/* Pulse ring on activation */}
                  <circle
                    cx={n.cx} cy={n.cy} r="18"
                    fill="#C4992A"
                    opacity="0"
                    style={{
                      animation: `ringPulse ${CYCLE}s ${delay} ease-out infinite`,
                      transformOrigin: `${n.cx}px ${n.cy}px`,
                    }}
                  />
                  {/* Main node */}
                  <circle
                    cx={n.cx} cy={n.cy} r="18"
                    fill="#6B1414"
                    style={{
                      animation: `nodeGlow ${CYCLE}s ${delay} ease-in-out infinite`,
                    }}
                  />
                  {/* Label */}
                  <text
                    x={n.cx + n.labelDx}
                    y={n.cy + n.labelDy}
                    textAnchor="middle"
                    fontSize="13"
                    fontFamily="Instrument Sans, sans-serif"
                    style={{
                      animation: `labelGlow ${CYCLE}s ${delay} ease-in-out infinite`,
                      fill: "#2C2C2C",
                    }}
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
