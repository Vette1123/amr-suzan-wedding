import { Heart } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import { Button } from "@/components/ui/button";
import { CornerLeaf } from "@/components/ornaments";
import { wedding } from "@/lib/wedding";

export function Rsvp() {
  return (
    <section id="rsvp" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <Reveal y={36}>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-ivory/70 px-8 py-16 text-center shadow-[0_20px_70px_rgba(138,109,59,0.14)] backdrop-blur-sm sm:px-16 sm:py-20">
            <CornerLeaf className="pointer-events-none absolute -left-4 -top-4 h-40 w-40 opacity-50" />
            <CornerLeaf className="pointer-events-none absolute -bottom-4 -right-4 h-40 w-40 -scale-100 opacity-50" />

            <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
              Will you join us?
            </p>
            <h2 className="mx-auto mt-4 max-w-md text-balance text-4xl text-ink sm:text-5xl">
              Kindly let us know
            </h2>
            <p className="mx-auto mt-5 max-w-md text-balance leading-relaxed text-ink-soft">
              Your presence would make our day complete. Please confirm your
              attendance so we can save a special place for you.
            </p>

            <Button
              asChild
              size="lg"
              className="group mt-10 rounded-full bg-gold-deep px-9 py-6 text-base text-ivory shadow-lg transition-all duration-300 hover:scale-[1.04] hover:bg-gold"
            >
              <a
                href={wedding.rsvpUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart
                  className="mr-1 h-4 w-4 transition-transform duration-300 group-hover:scale-125"
                  fill="currentColor"
                  strokeWidth={0}
                />
                RSVP Now
              </a>
            </Button>

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-ink-soft/80">
              {wedding.date.weekday} · {wedding.date.numeric}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
