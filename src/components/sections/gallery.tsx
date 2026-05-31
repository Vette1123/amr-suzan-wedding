"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  StaggerGroup,
  StaggerItem,
  Reveal,
} from "@/components/motion-primitives";
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

const photos: Photo[] = [
  { caption: "The proposal", tone: "from-blush to-sand", span: "sm:row-span-2" },
  { caption: "Engagement", tone: "from-sand to-beige/70" },
  { caption: "Family", tone: "from-beige/60 to-blush" },
  { caption: "Together", tone: "from-sand to-blush", span: "sm:col-span-2" },
  { caption: "Henna night", tone: "from-blush to-beige/60" },
  { caption: "Forever", tone: "from-beige/70 to-sand", span: "sm:row-span-2" },
];

function Placeholder({ caption }: { caption: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
      <Sprig className="h-12 w-9 text-gold-deep/70" />
      <span className="font-script text-3xl text-gold-deep">{caption}</span>
      <span className="text-[10px] uppercase tracking-[0.25em] text-ink-soft/70">
        Photo coming soon
      </span>
    </div>
  );
}

export function Gallery() {
  const [active, setActive] = useState<Photo | null>(null);

  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
            Moments we treasure
          </p>
          <h2 className="mt-3 text-4xl text-ink sm:text-5xl">Our Gallery</h2>
        </Reveal>

        <Dialog
          open={!!active}
          onOpenChange={(o) => !o && setActive(null)}
        >
          <StaggerGroup className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3">
            {photos.map((photo) => (
              <StaggerItem
                key={photo.caption}
                className={photo.span ?? ""}
              >
                <DialogTrigger asChild>
                  <button
                    onClick={() => setActive(photo)}
                    className="group relative block h-full w-full overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br shadow-sm outline-none transition-shadow duration-500 hover:shadow-[0_14px_44px_rgba(138,109,59,0.18)] focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${photo.tone}`}
                    />
                    {photo.src ? (
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative h-full w-full transition-transform duration-700 group-hover:scale-[1.03]">
                        <Placeholder caption={photo.caption} />
                      </div>
                    )}
                    <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30" />
                  </button>
                </DialogTrigger>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <DialogContent className="max-w-3xl overflow-hidden border-gold/30 bg-ivory p-0">
            <DialogTitle className="sr-only">
              {active?.caption ?? "Photo"}
            </DialogTitle>
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.caption}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[4/3] w-full"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${active.tone}`}
                  />
                  {active.src ? (
                    <Image
                      src={active.src}
                      alt={active.caption}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <Placeholder caption={active.caption} />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
