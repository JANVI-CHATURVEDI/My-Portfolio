# Janvi Chaturvedi — Portfolio

Personal portfolio site built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion and Lenis.

[Live site](https://janvi-chaturvedi.vercel.app)

## Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + design tokens in `src/app/globals.css`
- **Motion** — Framer Motion, Lenis smooth scroll
- **Icons** — lucide-react, react-icons

## Structure

```
src/
  app/            routes, layout, global styles, icons
  components/     page sections and UI primitives
  data/content.ts single source of truth for all copy and content
  utils/          shared motion primitives
scripts/          route warmup utility
public/images/    project shots, portrait and hero background
```

## Scripts

| Command           | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Start the dev server on http://localhost:3000           |
| `npm run build`   | Production build                                        |
| `npm start`       | Serve the production build                              |
| `npm run warmup`  | Pre-request every route on the running server to warm the compile cache |
| `npm run dev:warm`| Start dev and pre-compile every route                   |

## Content

All text, projects, experience, education, skills and links live in `src/data/content.ts`.
Update that file and every section follows.
