"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { wedding } from "@/lib/wedding";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Reveals a name with a soft rise. The gold gradient is on the same element
 *  as the transform (no child spans) so the clipped text always renders. */
function AnimatedName({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE, delay }}
      className="text-gradient-gold text-[2.7rem] font-light uppercase leading-none tracking-[0.1em] sm:text-7xl sm:tracking-[0.18em]"
    >
      {text}
    </motion.h1>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: content drifts up & fades, blooms drift at different rates.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bloomA = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const bloomB = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Watercolor blooms */}
      <motion.div
        style={{ y: bloomA }}
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-beige/40 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        aria-hidden
      />
      <motion.div
        style={{ y: bloomB }}
        className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-blush/50 blur-3xl sm:h-[32rem] sm:w-[32rem]"
        aria-hidden
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative flex w-full max-w-xl flex-col items-center text-center"
      >
        {/* Self-drawing gold arch — tall & narrow so it scales on phones */}
        <svg
          viewBox="0 0 300 460"
          preserveAspectRatio="xMidYMid meet"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-auto w-[clamp(280px,86vw,460px)] -translate-x-1/2 -translate-y-1/2 text-gold/60"
          fill="none"
          aria-hidden
        >
          <motion.path
            d="M40 452V180C40 95 90 40 150 40s110 55 110 140v272"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: EASE, delay: 1.3 }}
          />
          <motion.path
            d="M150 40v-16"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 3.2 }}
          />
        </svg>

        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: EASE, delay: 1.8 }}
          className="font-display text-xl tracking-luxe text-gold-deep sm:text-2xl"
        >
          {wedding.monogram}
        </motion.div>

        {/* Bismillah — Arabic calligraphy */}
        <motion.p
          dir="rtl"
          lang="ar"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 2.05 }}
          className="font-arabic mt-5 text-xl leading-relaxed text-gold-deep sm:mt-6 sm:text-3xl"
        >
          {wedding.bismillah}
        </motion.p>

        {/* Names */}
        <div className="mt-6 flex flex-col items-center sm:mt-7">
          <AnimatedName text={wedding.groom} delay={2.3} />

          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 2.55 }}
            className="font-script my-1 text-4xl text-gold sm:text-6xl"
          >
            and
          </motion.span>

          <AnimatedName text={wedding.bride} delay={2.7} />
        </div>

        {/* Invitation line + date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 3.1 }}
          className="mt-7 flex flex-col items-center gap-4 sm:mt-8"
        >
          <p className="max-w-md text-balance text-sm italic text-ink-soft sm:text-lg">
            invite you to our{" "}
            <span className="font-display not-italic uppercase tracking-widest text-ink">
              Katb Ketab
            </span>
          </p>
          <div className="flex items-center gap-3 text-ink sm:gap-4">
            <span className="h-px w-8 bg-gold/60 sm:w-10" />
            <span className="font-display text-base tracking-wide sm:text-lg">
              {wedding.date.weekday}, {wedding.date.month} {wedding.date.day}
            </span>
            <span className="h-px w-8 bg-gold/60 sm:w-10" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#celebration"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.6 }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-deep"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-gold-deep to-transparent"
        />
      </motion.a>
    </section>
  );
}
