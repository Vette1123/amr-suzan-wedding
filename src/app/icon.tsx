import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Gold monogram favicon for Amr & Suzan.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #8a6d3b 0%, #b2945f 55%, #d9b877 100%)",
          color: "#fcf8f0",
          fontSize: 34,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          borderRadius: 14,
        }}
      >
        <span style={{ display: "flex", letterSpacing: "-2px" }}>A&amp;S</span>
      </div>
    ),
    { ...size },
  );
}
