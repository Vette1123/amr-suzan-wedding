import { ImageResponse } from "next/og";
import { wedding } from "@/lib/wedding";

export const alt = `${wedding.couple} — ${wedding.occasion}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT = "https://cdn.jsdelivr.net/npm/@fontsource/cormorant-garamond/files";

/** Fetch a woff so the card renders in an elegant serif (Satori supports woff). */
async function loadFont(file: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(`${FONT}/${file}`);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [normal, italic] = await Promise.all([
    loadFont("cormorant-garamond-latin-500-normal.woff"),
    loadFont("cormorant-garamond-latin-400-italic.woff"),
  ]);

  const fonts = [
    normal && { name: "Cormorant", data: normal, weight: 500 as const, style: "normal" as const },
    italic && { name: "Cormorant", data: italic, weight: 400 as const, style: "italic" as const },
  ].filter(Boolean) as {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 500;
    style: "normal" | "italic";
  }[];

  const serif = fonts.length ? "Cormorant" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f1e5",
          color: "#4d4031",
          fontFamily: serif,
          position: "relative",
        }}
      >
        {/* Watercolor-ish blooms */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "rgba(216,189,150,0.45)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -140,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(236,217,201,0.6)",
            display: "flex",
          }}
        />

        {/* Gold frame (explicit size so Satori renders the border) */}
        <div
          style={{
            position: "relative",
            width: 1120,
            height: 550,
            border: "2px solid #b2945f",
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* inner hairline */}
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              width: 1096,
              height: 526,
              border: "1px solid rgba(178,148,95,0.45)",
              borderRadius: 8,
              display: "flex",
            }}
          />

          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 12,
              textTransform: "uppercase",
              color: "#8a6d3b",
            }}
          >
            {wedding.occasion}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 14,
              fontSize: 128,
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            <span style={{ display: "flex" }}>{wedding.groom}</span>
            <span
              style={{
                display: "flex",
                fontStyle: "italic",
                color: "#b2945f",
                margin: "0 26px",
              }}
            >
              &amp;
            </span>
            <span style={{ display: "flex" }}>{wedding.bride}</span>
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 30,
              color: "#b2945f",
            }}
          >
            <div style={{ display: "flex", width: 100, height: 1, background: "#b2945f" }} />
            <div
              style={{
                display: "flex",
                width: 10,
                height: 10,
                margin: "0 12px",
                transform: "rotate(45deg)",
                background: "#b2945f",
              }}
            />
            <div style={{ display: "flex", width: 100, height: 1, background: "#b2945f" }} />
          </div>

          <div style={{ display: "flex", marginTop: 28, fontSize: 40 }}>
            {wedding.date.weekday}, {wedding.date.month} {wedding.date.day},{" "}
            {wedding.date.year}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 6,
              fontSize: 30,
              fontStyle: "italic",
              color: "#8a6d3b",
            }}
          >
            {wedding.venue.name}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
