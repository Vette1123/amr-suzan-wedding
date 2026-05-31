import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import { Button } from "@/components/ui/button";
import { wedding } from "@/lib/wedding";

export function Location() {
  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
            Find your way
          </p>
          <h2 className="mt-3 text-4xl text-ink sm:text-5xl">The Location</h2>
        </Reveal>

        <Reveal y={36}>
          <div className="overflow-hidden rounded-3xl border border-gold/25 bg-ivory/60 shadow-[0_20px_60px_rgba(138,109,59,0.12)]">
            <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
              <iframe
                title={`Map to ${wedding.venue.name}`}
                src={wedding.venue.embedUrl}
                className="absolute inset-0 h-full w-full grayscale-[25%] sepia-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col items-center justify-between gap-5 px-6 py-7 sm:flex-row sm:px-9">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-deep">
                  <MapPin className="h-5 w-5" strokeWidth={1.4} />
                </span>
                <div>
                  <p className="font-display text-xl text-ink">
                    {wedding.venue.name}
                  </p>
                  <p className="text-sm text-ink-soft">{wedding.venue.city}</p>
                </div>
              </div>

              <Button
                asChild
                className="rounded-full bg-gold-deep px-7 text-ivory transition-transform duration-300 hover:scale-[1.03] hover:bg-gold"
              >
                <a
                  href={wedding.venue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-1 h-4 w-4" strokeWidth={1.6} />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
