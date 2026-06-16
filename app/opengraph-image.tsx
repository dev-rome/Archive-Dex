import { ImageResponse } from "next/og";

export const alt = "archive-dex — field specimen catalog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#14110E",
        padding: "80px",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          letterSpacing: "0.15em",
          color: "#948B7B",
          textTransform: "uppercase",
        }}
      >
        field specimen catalog · est. 2026
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 130,
            color: "#EDE6DA",
            lineHeight: 1,
          }}
        >
          archive-dex
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#948B7B",
            marginTop: 24,
          }}
        >
          AI-powered · 1,025 specimens · natural-language search
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: 4,
          width: 120,
          backgroundColor: "#E0492E",
        }}
      />
    </div>,
    { ...size },
  );
}
