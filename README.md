# Culture Quest Software

Marketing website for Culture Quest, a Culture Operating System for teams. The site presents the product value proposition, the five core pillars, pricing, partner information, and contact/demo calls to action.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Features

- Responsive landing page optimized for desktop and mobile
- Fixed navigation with mobile menu
- Animated hero section and scroll-reveal transitions
- Pricing, partner, CTA, and contact sections
- App icons and favicon generated from the transparent Culture Quest logo

## Project Structure

- `app/` App Router entrypoints, metadata, global styles, and app icons
- `components/` Section components and shared UI pieces
- `public/` Static brand assets and images
- `scripts/` Local utility scripts such as favicon generation

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` Start the local development server
- `npm run build` Create a production build
- `npm run start` Start the production server
- `npm run lint` Run ESLint

## Branding and Content

- Primary website: `https://culturequestsoftware.net`
- Demo link: `https://www.teamculturesystem.com`
- Contact: `jerry.wagner@culturesinaction.com`

Brand assets used by the site live under `public/`.

## Ownership and Usage

This repository contains proprietary client work. Review [LICENSE](/Users/moeezmujahid/Projects/culturequestsoftware/LICENSE) before copying, modifying, distributing, or reusing any portion of the codebase or design assets.

## Notes

- The repository currently uses standard `<img>` elements in a few places for logo rendering. Next.js lint reports warnings suggesting `next/image` for further optimization.
- `scripts/generate-favicons.mjs` rebuilds `app/favicon.ico` from generated PNG favicon sizes.
