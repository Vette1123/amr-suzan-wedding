"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { wedding } from "@/lib/wedding";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }
    // Lock scroll while the intro plays.
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 2200);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-cream"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          onAnimationComplete={() => {
            document.body.style.overflow = "";
          }}
        >
          {/* soft bloom behind */}
          <div className="pointer-events-none absolute h-[36rem] w-[36rem] rounded-full bg-beige/30 blur-3xl" />

          <motion.div
            className="relative flex flex-col items-center"
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <svg
              viewBox="0 0 200 200"
              className="absolute -z-0 h-48 w-48 text-gold/70"
              fill="none"
              aria-hidden
            >
              <motion.circle
                cx="100"
                cy="100"
                r="86"
                stroke="currentColor"
                strokeWidth="1.2"
                initial={{ pathLength: 0, rotate: -90 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: EASE }}
                style={{ transformOrigin: "center" }}
              />
            </svg>

            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.4 }}
              className="font-display text-5xl tracking-luxe text-gold-deep"
            >
              {wedding.monogram}
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-script mt-2 text-3xl text-gold"
            >
              {wedding.couple}
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
