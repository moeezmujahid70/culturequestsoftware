export default function Hero() {
  return (
    <section className="pt-16">
      <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        {/* Left — crimson panel */}
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

        {/* Right — cream panel with COS pentagon */}
        <div className="flex items-center justify-center bg-cream px-8 py-16 lg:py-0">
          <svg
            viewBox="0 0 400 400"
            className="h-auto w-full max-w-[360px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Culture Operating System diagram showing five pillars: Decisions, Behaviors, Reinforcement, Ownership, and Improvement"
          >
            {/* Pentagon vertices (center 200,200, radius 140):
                Top:         200, 60
                Upper-right: 333, 157
                Lower-right: 282, 313
                Lower-left:  118, 313
                Upper-left:   67, 157
            */}

            {/* Connecting lines — gold */}
            <polygon
              points="200,60 333,157 282,313 118,313 67,157"
              stroke="#C4992A"
              strokeWidth="2"
              fill="none"
            />
            {/* Star lines to center */}
            <line x1="200" y1="60" x2="200" y2="200" stroke="#C4992A" strokeWidth="1.5" opacity="0.5" />
            <line x1="333" y1="157" x2="200" y2="200" stroke="#C4992A" strokeWidth="1.5" opacity="0.5" />
            <line x1="282" y1="313" x2="200" y2="200" stroke="#C4992A" strokeWidth="1.5" opacity="0.5" />
            <line x1="118" y1="313" x2="200" y2="200" stroke="#C4992A" strokeWidth="1.5" opacity="0.5" />
            <line x1="67" y1="157" x2="200" y2="200" stroke="#C4992A" strokeWidth="1.5" opacity="0.5" />

            {/* Center node */}
            <circle cx="200" cy="200" r="30" fill="#6B1414" />
            <text
              x="200"
              y="206"
              textAnchor="middle"
              className="font-display text-lg font-semibold"
              fill="white"
              fontSize="18"
            >
              COS
            </text>

            {/* Vertex nodes */}
            {[
              { cx: 200, cy: 60, label: "Decisions", ty: -18 },
              { cx: 333, cy: 157, label: "Behaviors", ty: -18 },
              { cx: 282, cy: 313, label: "Reinforcement", ty: 32 },
              { cx: 118, cy: 313, label: "Ownership", ty: 32 },
              { cx: 67, cy: 157, label: "Improvement", ty: -18 },
            ].map((node) => (
              <g key={node.label}>
                <circle cx={node.cx} cy={node.cy} r="18" fill="#6B1414" />
                <text
                  x={node.cx}
                  y={node.cy + node.ty}
                  textAnchor="middle"
                  fill="#2C2C2C"
                  fontSize="13"
                  className="font-body"
                  fontWeight="500"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
