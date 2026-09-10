# Tapiwa John — Portfolio (v2)

Rebuilt with React + TypeScript + Vite + Tailwind CSS v4.

## Setup

```bash
npm install
cp .env.example .env   # then paste your web3forms access key
npm run dev
```

## Before you deploy — things I couldn't fill in for you

- `public/resume.pdf` — the "My resume" button in Hero.tsx links to
  `/resume.pdf`, which doesn't exist yet. Drop your resume PDF into
  `public/` with that filename, or change the href.
- `.env` — the contact form needs `VITE_WEB3FORMS_ACCESS_KEY` set
  (see `.env.example`). I moved your key out of the source code —
  don't commit `.env`.
- `src/data.ts` — the 6 work-sample images kept their original
  filenames but got placeholder titles ("Project One", "Project
  Two"...) and tags since I didn't have real names for them. Swap
  in your actual project names, tags, and add a `link` field +
  href in Work.tsx if you want them clickable.
- Footer GitHub/LinkedIn links are `href="#"` placeholders — add
  your real URLs in `Footer.tsx`.
- "View all projects" in Work.tsx is also a placeholder link.

## What changed from the old version

- Full Tailwind rewrite — no more separate `.css` files per
  component, no inline styles.
- Actually responsive: mobile nav menu, fluid type scale, grid
  layouts that reflow instead of fixed pixel widths.
- Accessibility: alt text on every image, semantic `<header>`,
  `<main>`, `<section>`, `<footer>`, proper `<label htmlFor>` on
  form fields, visible focus states.
- New visual identity: deep navy base with an electric-blue
  accent, Space Grotesk + Inter type pairing, a light contrast
  band for the contact section instead of dark-on-dark all the
  way down.
- web3forms access key moved to an environment variable instead
  of being hardcoded.
- Fixed `<title>`, meta description, and the `rel="stysheet"` typo
  from the original `index.html`.
