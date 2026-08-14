import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Piccone Estudio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#0b1c3a",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(184,150,79,0.18), transparent 45%), radial-gradient(circle at 80% 80%, rgba(107,91,149,0.16), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#b8964f",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              color: "#d4b878",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            Estudio Profesional
          </div>
        </div>
        <div
          style={{
            fontSize: 92,
            color: "#faf8f4",
            fontFamily: "serif",
            letterSpacing: 2,
          }}
        >
          PICCONE ESTUDIO
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 26,
            color: "#e7e2d6",
            fontFamily: "sans-serif",
            maxWidth: 820,
            textAlign: "center",
          }}
        >
          Asesoramiento integral para personas y empresas en Uruguay
        </div>
      </div>
    ),
    { ...size }
  );
}
