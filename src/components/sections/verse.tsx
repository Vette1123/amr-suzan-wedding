import { Reveal } from "@/components/motion-primitives";
import { AnimatedDivider } from "@/components/animated-divider";
import { Sprig } from "@/components/ornaments";
import { wedding } from "@/lib/wedding";

export function Verse() {
  return (
    <section id="celebration" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal>
          <Sprig className="mx-auto h-16 w-12 opacity-80" />
        </Reveal>

        <Reveal delay={0.1}>
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic mt-8 text-2xl leading-loose text-gold-deep sm:text-3xl"
          >
            {wedding.verse.arabic}
          </p>
        </Reveal>

        <AnimatedDivider className="mt-8" />

        <Reveal delay={0.3}>
          <p className="mt-8 max-w-xl text-balance font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
            &ldquo;{wedding.verse.english}&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold-deep">
            {wedding.verse.reference}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
