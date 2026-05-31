"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Dialog as DialogPrimitive } from "radix-ui";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { Sprig } from "@/components/ornaments";

/**
 * To use real photos: drop images into `public/gallery/` and set `src`
 * (e.g. src: "/gallery/1.jpg"). Tiles with no `src` render an elegant
 * watercolor placeholder so the layout looks designed in the meantime.
 */
interface Photo {
  caption: string;
  src?: string;
  /** tailwind grid span classes for a gentle masonry rhythm */
  span?: string;
  tone: string;
}

const swap = {
  enter: (d: number) => ({ opacity: 0, x: d * 40, scale: 0.99 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (d: number) => ({ opacity: 0, x: d * -40, scale: 0.99 }),
};

const photos: Photo[] = [
  { caption: "The proposal", tone: "from-blush to-sand", span: "sm:row-span-2" },
  { caption: "Engagement", tone: "from-sand to-beige/70" },
  { caption: "Family", tone: "from-beige/60 to-blush" },
  { caption: "Together", tone: "from-sand to-blush", span: "sm:col-span-2" },
  { caption: "Henna night", tone: "from-blush to-beige/60" },
  { caption: "Forever", tone: "from-beige/70 to-sand", span: "sm:row-span-2" },
];

function Placeholder({
  caption,
  large = false,
}: {
  caption: string;
  large?: boolean;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
      <Sprig className={large ? "h-20 w-14 text-gold-deep/70" : "h-12 w-9 text-gold-deep/70"} />
      <span
        className={`font-script text-gold-deep ${large ? "text-6xl" : "text-3xl"}`}
      >
        {caption}
      </span>
      <span className="text-[10px] uppercase tracking-[0.25em] text-ink-soft/70">
        Photo coming soon
      </span>
    </div>
  );
}

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const open = index !== null;
  const active = index !== null ? photos[index] : null;

  const go = useCallback(
    (delta: number) => {
      setDir(delta);
      setIndex((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length,
      );
    },
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="Moments we treasure" title="Our Gallery" />

        <StaggerGroup className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3">
          {photos.map((photo, i) => (
            <StaggerItem key={photo.caption} className={photo.span ?? ""}>
              <motion.button
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                onClick={() => {
                  setDir(1);
                  setIndex(i);
                }}
                className="group relative block h-full w-full overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br shadow-sm outline-none transition-shadow duration-500 hover:shadow-[0_14px_44px_rgba(138,109,59,0.18)] focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`Open ${photo.caption}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${photo.tone}`} />
                {photo.src ? (
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
                    <Placeholder caption={photo.caption} />
                  </div>
                )}
                {/* gentle vignette + caption on hover */}
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center bg-gradient-to-t from-ink/40 to-transparent p-3 text-xs uppercase tracking-[0.2em] text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {photo.caption}
                </span>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <DialogPrimitive.Root
        open={open}
        onOpenChange={(o) => !o && setIndex(null)}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
          <DialogPrimitive.Content
            aria-describedby={undefined}
            className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          >
            <DialogPrimitive.Title className="sr-only">
              {active?.caption ?? "Photo"}
            </DialogPrimitive.Title>

            {/* Framed card */}
            <div className="relative rounded-[1.75rem] border border-gold/40 bg-ivory p-3 shadow-[0_30px_90px_rgba(77,64,49,0.45)] sm:p-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={active?.caption}
                    custom={dir}
                    variants={swap}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    {active && (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${active.tone}`} />
                        {active.src ? (
                          <Image
                            src={active.src}
                            alt={active.caption}
                            fill
                            sizes="90vw"
                            className="object-cover"
                          />
                        ) : (
                          <Placeholder caption={active.caption} large />
                        )}
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Caption bar */}
              <div className="flex items-center justify-center gap-3 px-2 pb-1 pt-4">
                <span className="h-px w-8 bg-gold/50" />
                <span className="font-display text-lg tracking-wide text-ink">
                  {active?.caption}
                </span>
                <span className="h-px w-8 bg-gold/50" />
              </div>

              {/* Close */}
              <DialogPrimitive.Close
                className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-ivory text-gold-deep shadow-md outline-none transition-colors hover:bg-gold hover:text-ivory focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={1.6} />
              </DialogPrimitive.Close>

              {/* Prev / Next */}
              <button
                onClick={() => go(-1)}
                aria-label="Previous photo"
                className="absolute left-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/80 text-gold-deep shadow-md backdrop-blur transition-colors hover:bg-gold hover:text-ivory sm:-left-5"
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={1.6} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next photo"
                className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/80 text-gold-deep shadow-md backdrop-blur transition-colors hover:bg-gold hover:text-ivory sm:-right-5"
              >
                <ChevronRight className="h-6 w-6" strokeWidth={1.6} />
              </button>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
}
