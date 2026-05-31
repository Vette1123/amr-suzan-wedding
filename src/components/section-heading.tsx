"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/** A consistent, animated section heading: label, title, and a drawn flourish. */
export function SectionHeading({
  label,
  title,
  className,
}: {
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("text-center", className)}
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 12 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7, ease: EASE }}
        className="text-xs uppercase tracking-[0.3em] text-gold-deep"
      >
        {label}
      </motion.p>

      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 18 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="mt-3 text-4xl text-ink sm:text-5xl"
      >
        {title}
      </motion.h2>

      <svg
        width="160"
        height="20"
        viewBox="0 0 160 20"
        fill="none"
        className="mx-auto mt-4 text-gold"
        aria-hidden
      >
        <motion.path
          d="M10 12C40 4 60 4 80 10c20 6 40 6 70-2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
        />
        <motion.path
          d="M80 10l3-6m-3 6-3-6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />
        <motion.circle
          cx="80"
          cy="10"
          r="2"
          fill="currentColor"
          variants={{ hidden: { scale: 0 }, show: { scale: 1 } }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
      </svg>
    </motion.div>
  );
}
