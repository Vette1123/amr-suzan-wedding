import { Reveal } from "@/components/motion-primitives";
import { AnimatedDivider } from "@/components/animated-divider";
import { wedding } from "@/lib/wedding";

export function Footer() {
  return (
    <footer className="relative px-6 pb-16 pt-10 text-center">
      <Reveal>
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic text-xl text-gold-deep"
        >
          {wedding.bismillah}
        </p>
        <AnimatedDivider className="my-8" />
        <p className="font-display text-3xl tracking-luxe text-gold-deep">
          {wedding.monogram}
        </p>
        <p className="mt-4 font-script text-5xl text-gold">
          {wedding.couple}
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-ink-soft">
          {wedding.date.full} · {wedding.venue.name}
        </p>
        <p className="mt-10 text-[11px] text-ink-soft/70">
          Made with love for Amr &amp; Suzan
        </p>
      </Reveal>
    </footer>
  );
}
