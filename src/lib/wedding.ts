/**
 * Single source of truth for all wedding content.
 * Edit here to change names, date, venue, links, etc.
 */

export const wedding = {
  // Live deployed URL (override per-env with NEXT_PUBLIC_SITE_URL). Used for SEO/OG tags.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://amr-suzan-wedding.vercel.app",
  monogram: "A & S",
  groom: "Amr",
  bride: "Suzan",
  couple: "Amr & Suzan",
  occasion: "Katb El-Kitab",
  bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  invitation: "invite you to celebrate the signing of our marriage contract",

  // Friday, 12 June 2026 — 8:00 PM, Cairo (EEST, UTC+3)
  date: {
    full: "Friday, June 12, 2026",
    weekday: "Friday",
    day: "12",
    month: "June",
    year: "2026",
    numeric: "12 / 06 / 2026",
    iso: "2026-06-12T20:00:00+03:00",
  },
  time: {
    start: "8:00 PM",
    end: "10:00 PM",
    range: "8:00 PM — 10:00 PM",
  },
  venue: {
    name: "El-Mosheer Tantawy Mosque",
    city: "New Cairo, Egypt",
    mapsQuery: "El-Mosheer Tantawy Mosque, New Cairo, Egypt",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=El-Mosheer+Tantawy+Mosque+New+Cairo",
    embedUrl:
      "https://www.google.com/maps?q=El-Mosheer+Tantawy+Mosque+New+Cairo&output=embed",
  },
  closing: "A joyous celebration to follow",
  rsvpUrl: "https://rsvp.online/rech8q",

  verse: {
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    english:
      "And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy.",
    reference: "Surah Ar-Rum 30:21",
  },

  story: [
    {
      year: "2021",
      title: "Where it began",
      text: "Two paths crossed by what only felt like chance — a first conversation that neither of them wanted to end.",
    },
    {
      year: "2023",
      title: "Growing together",
      text: "Through every season, laughter and quiet understanding turned a spark into something steady and sure.",
    },
    {
      year: "2025",
      title: "The promise",
      text: "Under the warmth of family and faith, Amr asked Suzan to walk beside him for the rest of their lives.",
    },
    {
      year: "2026",
      title: "Katb El-Kitab",
      text: "And so, with bismillah, two souls become one — and we would be honored to have you there.",
    },
  ],
} as const;

export type Wedding = typeof wedding;
