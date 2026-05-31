import { Reveal } from "@/components/motion-primitives";
import { wedding } from "@/lib/wedding";

export function Story() {
  return (
    <section id="story" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
            Our Journey
          </p>
          <h2 className="mt-3 text-4xl text-ink sm:text-5xl">Our Story</h2>
        </Reveal>

        <ol className="relative">
          {/* Vertical line */}
          <span
            className="absolute bottom-2 left-[15px] top-2 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent sm:left-1/2"
            aria-hidden
          />

          {wedding.story.map((item, i) => {
            const left = i % 2 === 0;
            return (
              <li key={item.year} className="relative mb-12 last:mb-0">
                <div
                  className={[
                    "flex items-start gap-6 sm:w-1/2",
                    left ? "sm:pr-12" : "sm:ml-auto sm:flex-row-reverse sm:pl-12",
                  ].join(" ")}
                >
                  {/* Node */}
                  <span className="relative z-10 mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-ivory">
                    <span className="h-2 w-2 rounded-full bg-gold-deep" />
                  </span>

                  <Reveal
                    delay={0.05 * i}
                    y={24}
                    className={left ? "sm:text-right" : "sm:text-left"}
                  >
                    <span className="font-script text-4xl leading-none text-gold">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-2xl text-ink">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">
                      {item.text}
                    </p>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
