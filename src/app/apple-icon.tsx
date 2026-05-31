import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — monogram framed in gold on cream.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f1e5",
          color: "#8a6d3b",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 16,
            border: "2px solid #b2945f",
            borderRadius: 28,
            display: "flex",
          }}
        />
        <span style={{ display: "flex", fontSize: 74, letterSpacing: "-3px" }}>
          A&amp;S
        </span>
        <span
          style={{
            display: "flex",
            fontSize: 16,
            letterSpacing: 4,
            marginTop: 4,
            color: "#b2945f",
          }}
        >
          2026
        </span>
      </div>
    ),
    { ...size },
  );
}
