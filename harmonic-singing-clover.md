# Culture Quest Software — Website Build Plan

## Context

Starting from a blank `create-next-app` template (Next.js 16.2.4, React 19, Tailwind v4). Building the full single-page website per `PROJECT_SPEC.md`. The user has chosen to downgrade to Tailwind v3 (to use `tailwind.config.ts` as the spec describes), keep the locked spec fonts (Cormorant Garamond + Instrument Sans), and have the CQ logo designed as a new SVG.

---

## Phase 0 — Tailwind v3 Downgrade

**Why**: The spec assumes `tailwind.config.ts` (a Tailwind v3 pattern). Current setup is v4 which uses `@theme` in CSS and has no config file.

Steps:
1. Uninstall `tailwindcss@^4` and `@tailwindcss/postcss`
2. Install `tailwindcss@^3`, `autoprefixer`, `postcss`
3. Create `tailwind.config.ts` with custom colors + fonts
4. Rewrite `postcss.config.mjs` → standard v3 PostCSS config
5. Rewrite `app/globals.css` → v3 directives + `html { scroll-behavior: smooth; }`

---

## Phase 1 — Config & Foundation

### `next.config.ts`
- Add `output: 'export'` for static site generation → outputs to `out/`

### `tailwind.config.ts` (new file)
```ts
theme.extend.colors: {
  crimson: '#6B1414',
  gold: '#C4992A',
  cream: '#FAF8F4',
  parchment: '#F2EDE4',
  charcoal: '#2C2C2C',
  mist: '#E8E2D9',
}
theme.extend.fontFamily: {
  display: ['Cormorant Garamond', 'serif'],
  body: ['Instrument Sans', 'sans-serif'],
}
```
Content paths: `['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}']`

### `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
```

### `app/layout.tsx`
- Load `Cormorant_Garamond` (weights 600, 700) and `Instrument_Sans` (weights 400, 500) via `next/font/google`
- Apply font CSS variables to `<html>` className
- Export full SEO metadata from spec (title, description, metadataBase, openGraph)

---

## Phase 2 — Shared Assets

### `components/CQLogo.tsx`
Inline SVG component. Design: large serif "C" in crimson (`#6B1414`), "Q" in charcoal (`#2C2C2C`), both using a Garamond-style letterform path. Clean, minimal, no decorative frame. Accepts a `size` prop (default 40px). Used in Navbar and Footer.

### Pentagon SVG (inline in `components/Hero.tsx`)
Five nodes at pentagon vertices (Decisions, Behaviors, Reinforcement, Ownership, Improvement) + "COS" center label. Crimson circles, gold connecting lines, labels in charcoal. Cream background panel.

---

## Phase 3 — Components (build in order)

### `components/Navbar.tsx`
- `id`: none (sticky, full-width)
- Background: `bg-crimson`, sticky with `shadow-md` on scroll past 60px (via `useState` + `useEffect` scroll listener — needs `'use client'`)
- Left: `<CQLogo />` + "Culture Quest" wordmark in white
- Center/right: nav links (`Vision`, `Principles`, `Live Demo`, `Pricing`, `Partners`, `Contact`) — white text, smooth scroll anchors
- Far right: "DEMO" button — `bg-gold text-crimson rounded` → mailto link
- Mobile: hamburger → dropdown reveals all links. State managed locally.

### `components/Hero.tsx`
- Two columns: left crimson bg (text + CTAs), right cream bg (COS pentagon SVG)
- Content per spec: badge, H1, subheadline, two CTA buttons
- Note: `pt-20` or `pt-16` on first section to compensate for sticky nav height

### `components/VisionSection.tsx`
- `id="vision"`, cream bg
- Centered single column, max-w-[800px]
- Numbered list with bold label pattern
- Section label → H2 → paragraphs → numbered items → closing line

### `components/ConceptSection.tsx`
- Parchment bg, max-w-[760px] centered
- Section label → H2 → single body paragraph

### `components/PillarsSection.tsx`
- `id="principles"` (anchor shared with principles nav link)
- Crimson bg, 5 cards: `grid-cols-5` on lg, `grid-cols-2` on md, `grid-cols-1` on mobile
- Each card: gold top border (grows on hover), pillar name in gold using `font-display`, description in `rgba(255,255,255,0.75)`
- Card bg: `bg-white/[0.06]`, hover: slight `translate-y` lift + thicker gold border
- Transition: `transition-all duration-200`

### `components/PrinciplesSection.tsx`
- No separate anchor ID (follows Pillars, same scroll target)
- Parchment bg, max-w-[800px] centered
- Five principle blocks: numbered label in gold, title in crimson `font-display`, body in charcoal

### `components/WhySection.tsx`
- Cream bg, 3-column on desktop, stacked on mobile
- Each: inline SVG icon in gold (use Heroicons-style paths — unique per column), bold display-font title in crimson, body in charcoal
- Section label + H2 above grid

### `components/PricingSection.tsx`
- `id="pricing"`, parchment bg
- White card with shadow: `bg-white rounded-xl shadow-lg overflow-hidden`
- Table: 2 columns (Employee Count, Annual Price), 5 rows
- Highlighted row (101–250): `border-l-4 border-gold bg-amber-50` or `bg-gold/10`
- Row dividers via `divide-y divide-mist`

### `components/PartnersSection.tsx`
- `id="partners"`, crimson bg, centered
- Section label → H2 → body → gold-colored mailto link

### `components/CtaSection.tsx`
- Gold bg (`bg-gold`), 3 white/cream cards side by side on desktop
- Each card: title in crimson `font-display`, body in charcoal, action button
- Card 1 & 3: mailto links. Card 2: external link to teamculturesystem.com

### `components/Footer.tsx`
- `id="contact"`, crimson bg
- Two columns: left (CQLogo + "Culture Quest" + "Culture Operating System" tagline), right (contact block)
- Contact: Jerry Wagner PhD name, credentials in `text-white/60` smaller font, mailto link in gold
- Copyright bar below in `text-white/40`

---

## Phase 4 — Assembly

### `app/page.tsx`
Import and render all sections in order:
```tsx
<Navbar />
<Hero />
<VisionSection />
<ConceptSection />
<PillarsSection />
<PrinciplesSection />
<WhySection />
<PricingSection />
<PartnersSection />
<CtaSection />
<Footer />
```

---

## Critical Notes

- **`'use client'` boundary**: Only `Navbar.tsx` needs it (scroll listener + hamburger state). All other components are Server Components.
- **No Next.js `<Image>`**: All visuals are inline SVGs. Use `<img>` only if needed.
- **Duplicate anchor**: Nav "Principles" link → `href="#principles"` → scrolls to `<PillarsSection id="principles">`. PrinciplesSection immediately follows. No duplicate IDs.
- **Tailwind v3 classes**: `bg-crimson`, `text-gold`, `font-display`, `font-body` all work via `tailwind.config.ts` tokens.
- **Mobile hamburger**: Pure React state, no external library.
- **`scroll-behavior: smooth`** + `prefers-reduced-motion` override both set in globals.css.

---

## Files Modified / Created

| File | Action |
|---|---|
| `next.config.ts` | Edit — add `output: 'export'` |
| `tailwind.config.ts` | Create — v3 config with colors + fonts |
| `postcss.config.mjs` | Edit — v3 PostCSS plugins |
| `app/globals.css` | Rewrite — v3 directives + smooth scroll |
| `app/layout.tsx` | Rewrite — fonts, metadata |
| `app/page.tsx` | Rewrite — assemble all sections |
| `components/CQLogo.tsx` | Create |
| `components/Navbar.tsx` | Create |
| `components/Hero.tsx` | Create |
| `components/VisionSection.tsx` | Create |
| `components/ConceptSection.tsx` | Create |
| `components/PillarsSection.tsx` | Create |
| `components/PrinciplesSection.tsx` | Create |
| `components/WhySection.tsx` | Create |
| `components/PricingSection.tsx` | Create |
| `components/PartnersSection.tsx` | Create |
| `components/CtaSection.tsx` | Create |
| `components/Footer.tsx` | Create |

---

## Verification

1. `npm run build` → must produce `out/` directory with no TypeScript or build errors
2. `npx serve out` → open in browser and scroll through all sections
3. Test nav anchor links: all 6 scroll targets resolve correctly
4. Test hamburger menu at 375px viewport width
5. Verify `mailto:` links open email client
6. Verify external link to `teamculturesystem.com` opens in new tab
7. Check responsive at 375px / 768px / 1024px / 1440px — no horizontal scroll
8. Visually confirm: crimson nav sticky, two-col hero, gold CTA buttons, 5 pillar cards, pricing table highlight, gold footer links
