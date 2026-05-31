import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: `${wedding.couple} — ${wedding.occasion}`,
  description: `${wedding.couple} invite you to their ${wedding.occasion} on ${wedding.date.full} at ${wedding.venue.name}.`,
  openGraph: {
    title: `${wedding.couple} — ${wedding.occasion}`,
    description: `Join us on ${wedding.date.full} at ${wedding.venue.name}.`,
    type: "website",
  },
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
      <body className="grain min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
