"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { wedding } from "@/lib/wedding";

const EASE = [0.22, 1, 0.36, 1] as const;
const HOLD_MS = 2000;

export function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), HOLD_MS);
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
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: EASE }}
          onAnimationComplete={() => {
            document.body.style.overflow = "";
          }}
        >
          {/* soft bloom behind */}
          <motion.div
            className="pointer-events-none absolute h-[34rem] w-[34rem] rounded-full bg-beige/25 blur-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: EASE }}
          />

          <motion.div
            className="relative flex flex-col items-center"
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {/* Monogram — soft focus-in */}
            <motion.span
              initial={{ opacity: 0, filter: "blur(12px)", letterSpacing: "0.6em" }}
              animate={{ opacity: 1, filter: "blur(0px)", letterSpacing: "0.32em" }}
              transition={{ duration: 1.3, ease: EASE }}
              className="font-display pl-[0.32em] text-5xl font-medium text-gold-deep"
            >
              {wedding.monogram}
            </motion.span>

            {/* Hairline rule that draws from center */}
            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.5 }}
              className="mt-5 block h-px w-32 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
            />

            {/* Couple — fades up */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.9 }}
              className="font-script mt-4 text-4xl text-gold"
            >
              {wedding.couple}
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
