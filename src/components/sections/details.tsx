import { CalendarHeart, Clock, MapPin } from "lucide-react";
import {
  StaggerGroup,
  StaggerItem,
  Reveal,
} from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { wedding } from "@/lib/wedding";

const cards = [
  {
    icon: CalendarHeart,
    label: "The Date",
    lines: [wedding.date.weekday, `${wedding.date.month} ${wedding.date.day}, ${wedding.date.year}`],
  },
  {
    icon: Clock,
    label: "The Time",
    lines: [wedding.time.start, `until ${wedding.time.end}`],
  },
  {
    icon: MapPin,
    label: "The Venue",
    lines: [wedding.venue.name, wedding.venue.city],
  },
];

export function Details() {
  return (
    <section className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="With joy, we invite you"
          title="The Celebration"
          className="mb-16"
        />

        <StaggerGroup className="grid gap-6 sm:grid-cols-3">
          {cards.map(({ icon: Icon, label, lines }) => (
            <StaggerItem key={label}>
              <div className="group relative flex h-full flex-col items-center rounded-2xl border border-gold/20 bg-ivory/60 px-6 py-10 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_12px_40px_rgba(138,109,59,0.12)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-colors duration-500 group-hover:bg-gold/10">
                  <Icon className="h-6 w-6" strokeWidth={1.4} />
                </span>
                <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-gold-deep">
                  {label}
                </p>
                <div className="mt-3 space-y-1">
                  {lines.map((line, i) => (
                    <p
                      key={line}
                      className={
                        i === 0
                          ? "font-display text-2xl text-ink"
                          : "text-sm text-ink-soft"
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2} className="mt-14 text-center">
          <p className="font-script text-4xl text-gold sm:text-5xl">
            {wedding.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
