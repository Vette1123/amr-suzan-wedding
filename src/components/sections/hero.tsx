"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { wedding } from "@/lib/wedding";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Reveals a name letter-by-letter with a gentle rise. */
function AnimatedName({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.h1
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
      aria-label={text}
      className="text-gradient-gold flex text-5xl font-light uppercase leading-none tracking-[0.18em] sm:text-7xl"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 26, rotateX: -40 },
            show: { opacity: 1, y: 0, rotateX: 0 },
          }}
          transition={{ duration: 0.8, ease: EASE }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
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
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6"
    >
      {/* Watercolor blooms */}
      <motion.div
        style={{ y: bloomA }}
        className="pointer-events-none absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-beige/40 blur-3xl"
        aria-hidden
      />
      <motion.div
        style={{ y: bloomB }}
        className="pointer-events-none absolute -bottom-32 -right-24 h-[32rem] w-[32rem] rounded-full bg-blush/50 blur-3xl"
        aria-hidden
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative flex flex-col items-center text-center"
      >
        {/* Self-drawing gold arch */}
        <svg
          viewBox="0 0 300 320"
          className="absolute left-1/2 top-1/2 -z-10 h-[125%] w-auto -translate-x-1/2 -translate-y-[52%] text-gold/70"
          fill="none"
          aria-hidden
        >
          <motion.path
            d="M28 312V150C28 80 82 26 150 26s122 54 122 124v162"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: EASE, delay: 0.2 }}
          />
          <motion.path
            d="M150 26c0-8 0-8 0-14"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 2.2 }}
          />
        </svg>

        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.5 }}
          className="font-display text-2xl tracking-luxe text-gold-deep"
        >
          {wedding.monogram}
        </motion.div>

        {/* Bismillah — Arabic calligraphy */}
        <motion.p
          dir="rtl"
          lang="ar"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
          className="font-arabic mt-6 text-2xl leading-relaxed text-gold-deep sm:text-3xl"
        >
          {wedding.bismillah}
        </motion.p>

        {/* Names */}
        <div className="mt-7 flex flex-col items-center [perspective:600px]">
          <AnimatedName text={wedding.groom} delay={1.2} />

          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 1.5 }}
            className="font-script my-1 text-5xl text-gold sm:text-6xl"
          >
            and
          </motion.span>

          <AnimatedName text={wedding.bride} delay={1.7} />
        </div>

        {/* Invitation line + date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 2.3 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <p className="max-w-md text-balance text-base italic text-ink-soft sm:text-lg">
            invite you to our{" "}
            <span className="font-display not-italic uppercase tracking-widest text-ink">
              Katb Ketab
            </span>
          </p>
          <div className="flex items-center gap-4 text-ink">
            <span className="h-px w-10 bg-gold/60" />
            <span className="font-display text-lg tracking-wide">
              {wedding.date.weekday}, {wedding.date.month} {wedding.date.day}
            </span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-deep"
        aria-label="Scroll to read our story"
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
