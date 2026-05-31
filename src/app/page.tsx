import { Hero } from "@/components/sections/hero";
import { Verse } from "@/components/sections/verse";
import { Story } from "@/components/sections/story";
import { Countdown } from "@/components/sections/countdown";
import { Details } from "@/components/sections/details";
import { Location } from "@/components/sections/location";
import { Gallery } from "@/components/sections/gallery";
import { Rsvp } from "@/components/sections/rsvp";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Verse />
      <Story />
      <Countdown />
      <Details />
      <Location />
      <Gallery />
      <Rsvp />
      <Footer />
    </main>
  );
}
