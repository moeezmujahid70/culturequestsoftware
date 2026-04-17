# Culture Quest Software — Website Project Spec

> **For Claude Code**: Read this file fully before writing any code. All decisions are pre-made. Do not deviate from stack, structure, or content unless explicitly told to. Ask before adding features not listed here.

---

## Project Identity

| Field | Value |
|---|---|
| Project name | Culture Quest Software |
| Domain | culturequestsoftware.net |
| Client | Gerald (Jerry) Wagner, PhD |
| Client email | jerry.wagner@culturesinaction.com |
| Client credentials | Gallup Senior Scientist, Employee Wellbeing Institute, Professor, Entrepreneur |
| Reference site | www.teamculturesystem.com |

---

## Stack — LOCKED

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | Use `app/` directory, not `pages/` |
| Language | TypeScript | Strict mode on |
| Styling | Tailwind CSS | No custom CSS files unless Tailwind cannot do it |
| Deployment | Vercel | Connect GitHub repo, auto-deploy on push to main |
| Rendering | Static export | Set `output: 'export'` in `next.config.ts` |
| Fonts | Google Fonts via `next/font` | See design tokens below |
| Images | SVG illustrations only | No stock photos, no external image dependencies |
| Forms | mailto link for now | `mailto:jerry.wagner@culturesinaction.com` — no backend needed |
| Package manager | npm | |

---

## Page Type

Single page (one-pager). All content lives in `app/page.tsx`. Sections are scroll-linked anchors, no routing needed.

---

## Project Structure

```
culturequestsoftware/
├── app/
│   ├── layout.tsx          # metadata, fonts, global Tailwind base
│   ├── page.tsx            # imports and assembles all sections
│   └── globals.css         # Tailwind directives only
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── VisionSection.tsx
│   ├── ConceptSection.tsx
│   ├── PillarsSection.tsx
│   ├── PrinciplesSection.tsx
│   ├── WhySection.tsx
│   ├── PricingSection.tsx
│   ├── PartnersSection.tsx
│   ├── CtaSection.tsx
│   └── Footer.tsx
├── public/
│   └── (empty for now, no images needed)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── PROJECT_SPEC.md         # this file
```

---

## Design Direction

**Aesthetic**: Modern Executive Consultancy. The existing brand (crimson + gold + CQ monogram logo) has real personality — we evolve it, not replace it. The goal is to take what Jerry already has and make it look like it belongs on a premium professional services site, not a 2012 WordPress theme.

**Tone**: Refined and authoritative with warmth. Generous whitespace, large editorial typography, clean grid. One deliberate diagonal or split section as a design feature (not 3 like the current site). Everything breathes.

**What makes it memorable**: Crimson and gold is uncommon in the HR/culture tech space (everyone uses blue or purple). We lean into it fully and make it feel intentional and premium rather than dated.

**Logo**: The existing CQ monogram (red C, gray Q) is kept. All design decisions must complement it. Do not generate a new logo.

---

## Design Tokens

```ts
// Colors — LOCKED, derived from existing brand identity
const colors = {
  crimson: '#6B1414',  // primary dark — hero bg, nav, footer, dark sections. Deeper/richer than current #8B1A1A
  gold:    '#C4992A',  // accent — CTA buttons, card accents, section labels. Cleaner than current muddy gold
  cream:   '#FAF8F4',  // main page background — warm, not sterile white
  parchment: '#F2EDE4', // alternating section background
  charcoal: '#2C2C2C', // body text — not harsh black
  mist:    '#E8E2D9',  // borders, dividers, card backgrounds
  white:   '#FFFFFF',  // card interiors, contrast areas
}

// Fonts — load via next/font/google, LOCKED
// Display: Cormorant Garamond — weights 600, 700
//   Use for: H1, H2, section headings, hero title
//   Character: editorial authority — matches the CQ brand's existing serif sensibility but refined
// Body: Instrument Sans — weights 400, 500
//   Use for: body text, labels, nav, buttons, captions
//   Character: clean and modern, not generic
```

### Tailwind Config additions

Add these custom colors into `tailwind.config.ts` under `theme.extend.colors`:

```ts
crimson:    '#6B1414',
gold:       '#C4992A',
cream:      '#FAF8F4',
parchment:  '#F2EDE4',
charcoal:   '#2C2C2C',
mist:       '#E8E2D9',
```

### Typography Scale (Tailwind classes to use consistently)

| Element | Classes |
|---|---|
| Hero H1 | `font-display text-5xl lg:text-7xl font-semibold leading-tight text-white` |
| Section H2 | `font-display text-3xl lg:text-5xl font-semibold text-crimson` |
| Section label | `font-body text-xs tracking-widest uppercase text-gold` |
| Body text | `font-body text-base leading-relaxed text-charcoal` |
| Card title | `font-display text-xl font-semibold text-crimson` |
| Button | `font-body text-sm font-medium tracking-wide` |

Add to `tailwind.config.ts`:
```ts
fontFamily: {
  display: ['Cormorant Garamond', 'serif'],
  body: ['Instrument Sans', 'sans-serif'],
}
```

### Nav

Horizontal top nav bar. Background: crimson. Logo (CQ monogram image) on the left. Nav links centered or right-aligned in white. DEMO button on far right — gold background, crimson text. Sticky on scroll with slight shadow.

---

## Section-by-Section Content and Layout

### 0. Navbar

**Purpose**: Site-wide navigation. Sticky on scroll.

**Layout**: Full-width horizontal bar. Crimson background. Three zones: left (CQ logo), center (nav links), right (DEMO button).

**Nav links** (scroll to anchor on click):
`Vision` | `Principles` | `Live Demo` | `Pricing` | `Partners` | `Contact`

**DEMO button**: Gold background, crimson text, rounded. Links to `mailto:jerry.wagner@culturesinaction.com`.

**Behavior**: Sticky top. On scroll past 60px add a subtle drop shadow. On mobile: hamburger menu collapses all nav links into a dropdown.

---

### 1. Hero

**Purpose**: First impression. Communicate the core idea instantly.

**Layout**: Two columns on desktop. Left: crimson (`#6B1414`) background with text. Right: cream (`#FAF8F4`) background with the COS SVG diagram.

**Content:**
- Badge text: `CULTURE OPERATING SYSTEM`
- Headline: `Your Team Deserves a Better Operating System`
- Subheadline: `Teams can intentionally design how they want their workplace to operate. A Culture Operating System (COS) gives you a clear, visible blueprint — built from your team's own values and insights.`
- CTA button 1 (primary — gold bg, crimson text): `Request a Demo` — links to `mailto:jerry.wagner@culturesinaction.com`
- CTA button 2 (outline — white border, white text): `See It in Action` — links to `https://www.teamculturesystem.com`

**SVG Diagram (right panel)**: Five labeled nodes in a pentagon arrangement connected by lines. Labels: Decisions, Behaviors, Reinforcement, Ownership, Improvement. Center label: COS. Crimson nodes, gold connecting lines, cream background. Clean and geometric.

---

### 2. Vision Section

**Purpose**: Set the strategic framing. Answer "why does culture even matter at this level?"

**Anchor**: `id="vision"`

**Layout**: Single column, centered, cream background (`#FAF8F4`). Max-width 800px. Generous top/bottom padding.

**Content:**
- Section label: `VISION`
- Heading: `Culture Plans Should Hold the Same Strategic Stature as Business Plans`
- Body paragraph 1: `To achieve this, culture plans cannot be generic, top-down mandates. They must be built at the individual team level, where culture is lived and executed every day.`
- Body paragraph 2: `A team's culture plan is only truly effective if every member can answer "yes" to five vital questions:`
- Numbered list (bold label + description):
  1. **Co-created:** Was it built with input from every team member?
  2. **Documented:** Does everyone have a current copy?
  3. **Framework:** Was it developed using a rigorous model?
  4. **Measured:** Is progress formally reviewed at least twice a year?
  5. **Current:** Is it updated annually to reflect the team's growth?
- Closing line: `When every team in an organization can answer "yes," culture transforms from an abstract concept into a tangible, competitive advantage.`

---

### 3. Concept Section

**Purpose**: Explain what a COS is in plain language.

**Layout**: Single column, centered, parchment background (`#F2EDE4`). Wide content max-width of 760px.

**Content:**
- Section label: `THE CORE CONCEPT`
- Heading: `A Visible Blueprint for How Your Team Works`
- Body: `Using the Culture Quest COS engine, a team defines the blueprint for their environment. It draws from the values, judgment, experiences, instincts, beliefs, and insights your team already has — not from surveys or AI agents. The result is a practical, step-by-step system any team can implement without special expertise.`

---

### 4. Pillars Section

**Purpose**: Show the five pillars of a COS.

**Anchor**: `id="principles"` (shares anchor with Principles — these are sub-parts of the same topic)

**Layout**: Crimson (`#6B1414`) background. Heading centered at top in white. Below: 5 cards in a horizontal row on desktop, 2-col grid on tablet, 1-col on mobile.

**Content:**

| Pillar | Description |
|---|---|
| Decisions | How the team chooses to make decisions. |
| Behaviors | How the team expects people to behave. |
| Reinforcement | What specific actions will reinforce those choices. |
| Ownership | Clear identification of who owns each action. |
| Improvement | A defined process for how the system is improved over time. |

- Section label: `THE FIVE PILLARS`
- Heading: `Everything Your Culture Needs, in One System`
- Each card: top border accent in gold, pillar name in gold using display font, description in `rgba(255,255,255,0.75)`
- Card background: `rgba(255,255,255,0.06)`, subtle hover lift, gold top border grows on hover

---

### 5. Principles Section

**Purpose**: Show the culture building principles that underpin Culture Quest.

**Anchor**: `id="principles"` (same scroll target as pillars — they are one continuous section visually)

**Layout**: Parchment background (`#F2EDE4`). Single column, max-width 800px, centered.

**Content:**
- Section label: `PRINCIPLES`
- Heading: `Culture Building Principles Within Culture Quest`
- Five principles, each as a titled block:

| # | Title | Body |
|---|---|---|
| 1 | Treat Culture as a Strategic Discipline | Culture is the operating system that determines how effectively your business and project strategies are executed. Culture drives behavior and behavior drives business results. As a critical strategic asset, it demands the same rigor, priority, and disciplined approach as your financial, operational, and project plans. |
| 2 | Build Culture at the Team Level | Company-wide culture initiatives often fail because they are too abstract. Real culture lives in teams — in daily interactions, decisions, and behaviors. Culture Quest builds from the ground up, giving each team ownership of their own culture plan. |
| 3 | Make it Human-Led | Culture cannot be outsourced to surveys or AI agents. It must be built from the values, instincts, and lived experiences of the people doing the work. Culture Quest draws entirely from what your team already knows. |
| 4 | Make it Visible and Documented | A culture that exists only in people's heads is fragile. Culture Quest produces a documented Team Culture Plan — available online and in print — so every team member has a current copy and can hold each other accountable. |
| 5 | Build in Continuous Improvement | Culture is not a one-time exercise. Culture Quest includes a defined process for reviewing, measuring, and updating the plan at least twice a year, ensuring the system grows with the team. |

---

### 6. Why Section

**Purpose**: Address the "why this over alternatives" question.

**Layout**: Cream background (`#FAF8F4`). 3 points side by side on desktop, stacked on mobile. Each point has a small inline SVG icon (gold color), a bold display-font title in crimson, and a short body paragraph in charcoal.

**Content:**

| Title | Body |
|---|---|
| Human-Led | Draws from the values, judgment, experiences, instincts, beliefs, and insights your team already has — the real building blocks for culture. Not data from surveys or AI agents. |
| Practical Design | The engine's self-guided structure helps you organize what already exists and add what is missing. No consultants required. |
| Step-by-Step | The process is readily accessible and can be implemented by any team without special expertise. |

- Section label: `WHY CULTURE QUEST WORKS`
- Heading: `Built for Real Teams, Not Ideal Ones`

---

### 7. Pricing Section

**Purpose**: Show pricing tiers clearly.

**Anchor**: `id="pricing"`

**Layout**: Parchment background (`#F2EDE4`). Centered heading in crimson. Clean pricing table in a white card with shadow — 5 rows, 2 columns (Employee Count, Annual Price). Highlight the 101-250 row with a gold left border and slightly warmer background. Table has rounded corners and clean row dividers in mist.

**Content:**
- Section label: `PRICING`
- Heading: `Simple, Transparent Pricing`
- Subtext: `Pricing is based on total organization size. No limit on number of teams or employees per team within your bracket. Prices are per year.`

| Number of Employees | Price Per Year |
|---|---|
| 50 or fewer | $199 |
| 51 – 100 | $299 |
| 101 – 250 | $399 |
| 251 – 500 | $599 |
| 501 or more | $799 |

---

### 8. Partners Section

**Purpose**: Attract independent consultants.

**Anchor**: `id="partners"`

**Layout**: Crimson dark background, centered, minimal.

**Content:**
- Section label: `ASSOCIATES & PARTNERS`
- Heading: `Consultants Welcome`
- Body: `Independent consultants can provide consulting and training to support Culture Quest customers and retain 100% of the revenue from their engagements.`
- CTA link (gold color): `Get in touch to learn more` — links to `mailto:jerry.wagner@culturesinaction.com`

---

### 9. CTA Section

**Purpose**: Convert visitors to leads. Final push before footer.

**Layout**: Gold background (`#C4992A`). Centered. Three action cards side by side on white/cream card backgrounds.

**Content:**
- Heading: `Ready to Get Started?`
- Three cards:

| Card | Title | Body | Action |
|---|---|---|---|
| 1 | Request a Demo | Join a Zoom demo to see the system's capabilities firsthand. | `Book a Demo` — mailto link |
| 2 | See It in Action | View a short interactive example and explore the system yourself. | `Visit Demo Site` — https://www.teamculturesystem.com |
| 3 | Free Pilot | Pilot a real-world implementation together at no cost. Keep it if it works — no obligation. | `Start Free Pilot` — mailto link |

---

### 10. Footer

**Anchor**: `id="contact"`

**Layout**: Crimson dark background. Two columns: left has the CQ logo + tagline, right has contact info.

**Content:**
- Brand name: `Culture Quest`
- Tagline: `Culture Operating System`
- Contact name: `Gerald (Jerry) Wagner, PhD`
- Credentials (each on its own line, muted text, smaller font):
  - Gallup Senior Scientist
  - Employee Wellbeing Institute
  - Professor | Entrepreneur
- Email: `jerry.wagner@culturesinaction.com` (clickable mailto)
- Copyright: `© 2025 Culture Quest Software. All rights reserved.`

---

## Responsive Breakpoints

Use Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

All 2-column desktop layouts collapse to single column at `md` and below. The pricing table stays as a table on all screen sizes (it is narrow enough).

---

## SEO Metadata (in layout.tsx)

```ts
export const metadata = {
  title: 'Culture Quest | Culture Operating System for Teams',
  description:
    'Culture Quest gives your team a visible, human-led blueprint for how you work — covering decisions, behaviors, reinforcement, ownership, and improvement.',
  metadataBase: new URL('https://culturequestsoftware.net'),
  openGraph: {
    title: 'Culture Quest | Culture Operating System',
    description: 'Design how your team works, intentionally.',
    url: 'https://culturequestsoftware.net',
    siteName: 'Culture Quest Software',
    type: 'website',
  },
}
```

---

## Vercel Deployment Checklist

1. Push repo to GitHub (name: `culturequestsoftware`)
2. Import project in Vercel dashboard
3. Framework preset: Next.js (auto-detected)
4. Build command: `next build` (default)
5. Output directory: `out` (because of static export)
6. Add domain `culturequestsoftware.net` in Vercel > Domains
7. Point domain DNS to Vercel nameservers (or add A/CNAME records as Vercel instructs)

---

## What Is NOT in Scope (do not build)

- Blog or CMS
- User auth or login
- Database or API routes
- Analytics (can be added later)
- Cookie banner (no tracking, not needed)
- Multi-language support
- Contact form with backend (use mailto for now)

---

## Mailjet Email Version

A separate `email.html` file will be built after the website is complete. It will use the same copy and color tokens but with table-based HTML layout for email client compatibility. Do not build this yet.
