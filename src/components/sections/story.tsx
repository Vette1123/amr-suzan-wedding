"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Reveal } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { wedding } from "@/lib/wedding";

export function Story() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 65%", "end 60%"],
  });
  const spine = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section id="story" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Our Journey"
          title="Our Story"
          className="mb-16"
        />

        <ol ref={listRef} className="relative">
          {/* Spine: faint track + animated gold fill */}
          <span
            className="absolute bottom-2 left-[15px] top-2 w-px bg-gold/15 sm:left-1/2"
            aria-hidden
          />
          <motion.span
            style={{ scaleY: spine }}
            className="absolute bottom-2 left-[15px] top-2 w-px origin-top bg-gradient-to-b from-gold via-gold-deep to-gold sm:left-1/2"
            aria-hidden
          />

          {wedding.story.map((item, i) => {
            const left = i % 2 === 0;
            return (
              <li key={item.year} className="relative mb-12 last:mb-0">
                <div
                  className={[
                    "flex items-start gap-6 sm:w-1/2",
                    left
                      ? "sm:pr-12"
                      : "sm:ml-auto sm:flex-row-reverse sm:pl-12",
                  ].join(" ")}
                >
                  {/* Node */}
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-ivory"
                  >
                    <span className="h-2 w-2 rounded-full bg-gold-deep" />
                  </motion.span>

                  <Reveal
                    delay={0.05 * i}
                    y={24}
                    className={left ? "sm:text-right" : "sm:text-left"}
                  >
                    <span className="font-script text-4xl leading-none text-gold">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-2xl text-ink">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">
                      {item.text}
                    </p>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
