"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/motion-primitives";
import { AnimatedDivider } from "@/components/animated-divider";
import { wedding } from "@/lib/wedding";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  const display = value.toString().padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-gold/30 bg-ivory/70 shadow-[0_2px_20px_rgba(138,109,59,0.08)] backdrop-blur-sm sm:h-28 sm:w-28">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            initial={{ y: "60%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-60%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-light tabular-nums text-gold-deep sm:text-6xl"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-3 text-[10px] uppercase tracking-[0.25em] text-ink-soft sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const target = new Date(wedding.date.iso).getTime();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: time?.days ?? 0 },
    { label: "Hours", value: time?.hours ?? 0 },
    { label: "Minutes", value: time?.minutes ?? 0 },
    { label: "Seconds", value: time?.seconds ?? 0 },
  ];

  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
            Counting the moments
          </p>
          <h2 className="mt-3 text-4xl text-ink sm:text-5xl">
            Until we say <span className="font-script text-gold">yes</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-12" >
          <div
            className="flex gap-3 sm:gap-6"
            // Reserve visual space before client time resolves
            style={{ visibility: time ? "visible" : "hidden" }}
          >
            {units.map((u) => (
              <Unit key={u.label} value={u.value} label={u.label} />
            ))}
          </div>
        </Reveal>

        <AnimatedDivider className="mt-12" />
      </div>
    </section>
  );
}
