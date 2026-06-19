import { ImageResponse } from "next/og"

import { magazines } from "@/lib/content"

export const alt =
  "Synthify student-led STEM magazine covers and publication identity"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
  const latest = magazines.at(-1)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#101828",
          color: "#f8f3ea",
          fontFamily: "Georgia, serif",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "64%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                border: "1px solid rgba(248, 243, 234, 0.35)",
                borderRadius: 999,
                padding: "12px 20px",
                fontFamily: "Arial, sans-serif",
                fontSize: 26,
                letterSpacing: 0,
              }}
            >
              40+ members across 9+ countries
            </div>
            <div style={{ display: "flex", fontSize: 88, lineHeight: 0.92 }}>
              Science magazines, written by teenagers for teenagers.
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 690,
                color: "rgba(248, 243, 234, 0.78)",
                fontFamily: "Arial, sans-serif",
                fontSize: 30,
                lineHeight: 1.35,
              }}
            >
              International student-led STEM publishing for accessible science
              communication.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 30,
              color: "rgba(248, 243, 234, 0.72)",
            }}
          >
            synthify.org
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 310,
              height: 438,
              border: "1px solid rgba(248, 243, 234, 0.35)",
              borderRadius: 30,
              background: "#f8f3ea",
              color: "#101828",
              padding: 32,
              transform: "rotate(3deg)",
              boxShadow: "0 38px 80px rgba(0, 0, 0, 0.34)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: "Arial, sans-serif",
                  fontSize: 21,
                  letterSpacing: 0,
                  color: "#7c2d12",
                }}
              >
                LATEST ISSUE
              </div>
              <div style={{ display: "flex", fontSize: 56, lineHeight: 1 }}>
                {latest?.title}
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Arial, sans-serif",
                  fontSize: 26,
                  lineHeight: 1.2,
                  color: "#475467",
                }}
              >
                {latest?.theme}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontFamily: "Arial, sans-serif",
                fontSize: 24,
                color: "#344054",
              }}
            >
              <div style={{ display: "flex" }}>{latest?.pages} pages</div>
              <div style={{ display: "flex" }}>Synthify Magazine</div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
