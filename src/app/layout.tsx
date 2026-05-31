import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  EB_Garamond,
  Tangerine,
  Amiri,
} from "next/font/google";
import "./globals.css";
import { wedding } from "@/lib/wedding";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = EB_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const script = Tangerine({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const arabic = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const title = `${wedding.couple} — ${wedding.occasion}`;
const description = `${wedding.couple} joyfully invite you to their ${wedding.occasion} on ${wedding.date.full} at ${wedding.venue.name}. Kindly RSVP.`;

export const metadata: Metadata = {
  metadataBase: new URL(wedding.siteUrl),
  title,
  description,
  applicationName: title,
  keywords: [
    "Amr and Suzan",
    "Katb El-Kitab",
    "Katb Ketab",
    "wedding invitation",
    "Egyptian wedding",
    "El-Mosheer Tantawy Mosque",
    "June 2026",
    "RSVP",
  ],
  authors: [{ name: wedding.couple }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: wedding.siteUrl,
    siteName: title,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f1e5",
  colorScheme: "light",
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: title,
  description,
  startDate: wedding.date.iso,
  endDate: wedding.date.iso.replace("T20:00:00", "T22:00:00"),
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: [`${wedding.siteUrl}/opengraph-image`],
  url: wedding.siteUrl,
  location: {
    "@type": "Place",
    name: wedding.venue.name,
    address: wedding.venue.city,
  },
  organizer: { "@type": "Person", name: wedding.couple },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable} ${arabic.variable} h-full antialiased`}
    >
      <body className="grain min-h-full overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
