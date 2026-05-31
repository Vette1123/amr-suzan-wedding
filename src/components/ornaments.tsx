import { cn } from "@/lib/utils";

/** A delicate gold floral divider — center diamond flanked by leafy sprigs. */
export function FloralDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 text-gold",
        className,
      )}
      aria-hidden
    >
      <svg
        width="120"
        height="16"
        viewBox="0 0 120 16"
        fill="none"
        className="opacity-80"
      >
        <path
          d="M0 8H44"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M44 8c4-4 8-4 12 0-4 4-8 4-12 0Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M30 8c2-3 5-3 8-1m-8 1c2 3 5 3 8 1"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.7"
        />
      </svg>
      <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0">
        <path
          d="M7 0 9 5l5 2-5 2-2 5-2-5-5-2 5-2 2-5Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
      <svg
        width="120"
        height="16"
        viewBox="0 0 120 16"
        fill="none"
        className="opacity-80 -scale-x-100"
      >
        <path
          d="M0 8H44"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M44 8c4-4 8-4 12 0-4 4-8 4-12 0Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M30 8c2-3 5-3 8-1m-8 1c2 3 5 3 8 1"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}

/** A small leafy sprig used as a section flourish. */
export function Sprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 80"
      className={cn("text-gold", className)}
      fill="none"
      aria-hidden
    >
      <path
        d="M30 78V12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="0.9" opacity="0.85">
        <path d="M30 60c-10-2-16-8-18-18 10 1 16 7 18 18Z" fill="currentColor" fillOpacity="0.12" />
        <path d="M30 60c10-2 16-8 18-18-10 1-16 7-18 18Z" fill="currentColor" fillOpacity="0.12" />
        <path d="M30 44c-9-2-14-7-16-16 9 1 14 6 16 16Z" fill="currentColor" fillOpacity="0.12" />
        <path d="M30 44c9-2 14-7 16-16-9 1-14 6-16 16Z" fill="currentColor" fillOpacity="0.12" />
        <path d="M30 30c-7-1-11-6-12-13 7 1 11 5 12 13Z" fill="currentColor" fillOpacity="0.12" />
        <path d="M30 30c7-1 11-6 12-13-7 1-11 5-12 13Z" fill="currentColor" fillOpacity="0.12" />
      </g>
      <circle cx="30" cy="10" r="3" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

/** A flowing corner branch for framing sections. */
export function CornerLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("text-beige", className)}
      fill="none"
      aria-hidden
    >
      <path
        d="M2 2C60 20 110 60 150 120c8 12 14 26 18 42"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <g fill="currentColor" opacity="0.5">
        <path d="M40 22c14 0 22 8 24 22-14 0-22-8-24-22Z" />
        <path d="M78 50c14 2 21 11 21 25-14-2-21-11-21-25Z" />
        <path d="M112 84c13 3 19 13 18 27-13-3-19-13-18-27Z" />
        <path d="M140 122c12 4 17 14 15 28-12-4-17-14-15-28Z" />
        <path d="M30 40c12-6 22-3 30 9-12 6-22 3-30-9Z" opacity="0.7" />
        <path d="M66 72c12-5 22-1 29 11-12 5-22 1-29-11Z" opacity="0.7" />
      </g>
    </svg>
  );
}

/** The arched frame motif from the invitation. Paths are exposed for animation. */
export const ARCH_PATHS = {
  arch: "M20 280V150C20 75 76 20 150 20s130 55 130 130v130",
};
