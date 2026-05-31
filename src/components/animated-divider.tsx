"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function Line({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="120"
      height="16"
      viewBox="0 0 120 16"
      fill="none"
      className={flip ? "-scale-x-100 opacity-85" : "opacity-85"}
    >
      <motion.path
        d="M0 8H56"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
        transition={{ duration: 0.9, ease: EASE }}
      />
      <motion.path
        d="M30 8c2-3 5-3 8-1m-8 1c2 3 5 3 8 1"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.7"
        variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
      />
    </svg>
  );
}

/** A gold floral divider whose lines draw in and center diamond blooms. */
export function AnimatedDivider({ className }: { className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={cn(
        "flex items-center justify-center gap-3 text-gold",
        className,
      )}
      aria-hidden
    >
      <Line />
      <motion.svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        className="shrink-0"
        variants={{
          hidden: { scale: 0, rotate: -90, opacity: 0 },
          show: { scale: 1, rotate: 0, opacity: 1 },
        }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
      >
        <path
          d="M7 0 9 5l5 2-5 2-2 5-2-5-5-2 5-2 2-5Z"
          fill="currentColor"
          opacity="0.9"
        />
      </motion.svg>
      <Line flip />
    </motion.div>
  );
}
