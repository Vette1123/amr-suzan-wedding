# Amr & Suzan — Katb El-Kitab Website — Design

**Date:** 2026-05-31
**Status:** Approved & implemented

## Purpose

A stunning, fully-animated single-page invitation website for Amr & Suzan's
Katb El-Kitab (Islamic marriage contract ceremony), based on their watercolor
invitation card.

## Decisions

- **Language:** English only. The Bismillah stays in Arabic script as the
  decorative centerpiece (rendered in Amiri calligraphy).
- **Aesthetic:** "Faithful Watercolor" — cream & beige washes, soft gold,
  watercolor florals, warm serif typography. True to the invitation card.
- **Format:** Single-page vertical scroll with motion on every section.

## Tech stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 with a custom warm palette (CSS variables → Tailwind tokens)
- shadcn/ui (button, card, carousel, dialog, separator)
- Motion (framer-motion) for all animation
- Fonts: Cormorant Garamond (display), EB Garamond (body), Tangerine (script
  accents), Amiri (Arabic)

## Visual system

Palette: cream `#f7f1e5` · ivory `#fcf8f0` · sand `#ece0cc` · blush `#ecd9c9`
· beige `#d8bd96` · gold `#b2945f` · gold-deep `#8a6d3b` · ink `#4d4031`.
Atmosphere: layered watercolor-bloom radial gradients (fixed), a fine
paper-grain overlay, gold floral SVG ornaments, gold-gradient text.
`prefers-reduced-motion` disables animation.

## Sections (in order)

1. **Hero** — self-drawing gold arch (SVG `pathLength`), monogram, Arabic
   Bismillah, names with orchestrated load reveal, date, parallax blooms,
   animated scroll cue.
2. **Quran verse** — Ar-Rum 30:21 (Arabic + English), floral divider.
3. **Our Story** — 4-step alternating timeline with reveal-on-scroll.
4. **Countdown** — live timer to 2026-06-12T20:00+03:00 with animated digit swaps.
5. **Event Details** — date / time / venue cards, staggered reveal, hover lift.
6. **Location & Map** — embedded Google Map + "Get Directions" button.
7. **Gallery** — hover-zoom grid + lightbox dialog; watercolor placeholders
   swappable with real photos.
8. **RSVP** — framed CTA linking to https://rsvp.online/rech8q.
9. **Footer** — Bismillah, monogram, names, date & venue.

## Architecture

- `src/lib/wedding.ts` — single source of truth for all content.
- `src/components/motion-primitives.tsx` — `Reveal`, `StaggerGroup/Item`.
- `src/components/ornaments.tsx` — reusable gold SVG flourishes.
- `src/components/sections/*` — one file per section (client where animated).
- `src/app/page.tsx` — composition; `layout.tsx` — fonts + metadata.

## Out of scope (future)

Real photos, bilingual/RTL mode, guest message wall.
