import { ImageResponse } from "next/og";

export const alt = "First Gen Chronicles — guidance for first-generation students and Hispanic families";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fbf8f6",
          backgroundImage:
            "radial-gradient(circle at 18% 20%, #f6ebe6 0%, transparent 42%), radial-gradient(circle at 88% 78%, #f3eeea 0%, transparent 38%)",
          padding: "64px 72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "18px",
              backgroundColor: "#d98b7e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#faf7f5",
              fontSize: "22px",
              fontWeight: 700,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            FGC
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#7d7671",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            by Stacy Lomeli
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              fontSize: "72px",
              lineHeight: 1.05,
              color: "#2f2c2a",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            First Gen Chronicles
          </div>
          <div
            style={{
              fontSize: "28px",
              lineHeight: 1.4,
              color: "#7d7671",
              fontFamily: "system-ui, sans-serif",
              maxWidth: "820px",
              fontWeight: 500,
            }}
          >
            Guidance for first-generation students and Hispanic families navigating school, college, and beyond.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                backgroundColor: "#f6ebe6",
                color: "#c97a6d",
                fontSize: "18px",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 600,
              }}
            >
              English + Español
            </div>
            <div
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                backgroundColor: "#ffffff",
                border: "1px solid #ebe3dd",
                color: "#4a4542",
                fontSize: "18px",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 600,
              }}
            >
              First-gen · Pre-med · GT
            </div>
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#a39c96",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            first-gen-website.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
