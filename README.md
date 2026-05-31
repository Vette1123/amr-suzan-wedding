# Amr & Suzan — Katb El-Kitab

An elegant, fully-animated single-page invitation website for Amr & Suzan's
Katb El-Kitab on **Friday, June 12, 2026** at **El-Mosheer Tantawy Mosque**.

Built with care: a warm watercolor-and-gold aesthetic, a self-drawing gold
arch, an Arabic Bismillah centerpiece, scroll-triggered motion on every
section, a live countdown, and an RSVP call-to-action.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (button, card, carousel, dialog, separator)
- [Motion](https://motion.dev) for animation
- Fonts: Cormorant Garamond, EB Garamond, Tangerine, Amiri (Arabic)

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All wedding details (names, date, venue, RSVP link, story, verse) live in a
single file: **`src/lib/wedding.ts`**. Edit there — nothing else needs to change.

## Adding real photos

The gallery (`src/components/sections/gallery.tsx`) uses tasteful watercolor
placeholders. To use real photos:

1. Drop images into `public/gallery/` (e.g. `1.jpg`, `2.jpg`).
2. In `gallery.tsx`, set the `src` field on each photo (e.g. `src: "/gallery/1.jpg"`).

## Sections

Hero (Bismillah + names) · Quran verse · Our Story · Countdown ·
Event Details · Location & Map · Gallery · RSVP · Footer
