import { Intro } from "@/components/sections/intro";
import { Hero } from "@/components/sections/hero";
import { Verse } from "@/components/sections/verse";
import { Countdown } from "@/components/sections/countdown";
import { Details } from "@/components/sections/details";
import { Location } from "@/components/sections/location";
import { Rsvp } from "@/components/sections/rsvp";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Intro />
      <Hero />
      <Verse />
      <Countdown />
      <Details />
      <Location />
      <Rsvp />
      <Footer />
    </main>
  );
}
