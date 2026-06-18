# Synthify

Public website for Synthify, a student-led STEM publication organization. The site is built with Next.js App Router, shadcn/ui, Tailwind CSS, DM Serif Text headings, and Inter body text.

## Pages

- `/` - home page with mission, issues, team preview, and join CTA
- `/about` - mission, publication model, and impact
- `/publications` - local PDF magazine library with a link to Issuu
- `/team` - executive board profiles
- `/join` - recruitment details and application CTA
- `/connect` - email, Instagram, publication library, and application links

## Content

Structured site content lives in `lib/content.ts`.

Static assets live in `public/`:

- `public/logo.jpg`
- `public/exec_photos/`
- `public/magazines/`
- `public/magazine-covers/`

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Checks

```bash
pnpm typecheck
pnpm lint
pnpm build
```

