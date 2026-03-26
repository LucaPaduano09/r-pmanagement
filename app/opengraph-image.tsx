import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoSvg = await readFile(join(process.cwd(), "public", "logo2.svg"), "utf8");
  const sanitizedLogoSvg = logoSvg
    .replace(/<defs>[\s\S]*?<\/defs>/g, "")
    .replace(/\sfilter="url\(#.*?\)"/g, "")
    .replace(/\sclip-path="url\(#.*?\)"/g, "");
  const logoDataUrl = `data:image/svg+xml;base64,${Buffer.from(sanitizedLogoSvg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at top, rgba(125,211,252,0.30), transparent 34%), linear-gradient(180deg, #f8fbff 0%, #ffffff 40%, #eef6ff 100%)",
          color: "#0f172a",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "68px 68px",
            inset: 0,
            maskImage: "linear-gradient(180deg, rgba(255,255,255,0.92), transparent 100%)",
            position: "absolute",
          }}
        />
        <div
          style={{
            alignItems: "center",
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(255,255,255,0.85)",
            borderRadius: 40,
            boxShadow: "0 30px 90px rgba(15,23,42,0.10)",
            display: "flex",
            gap: 34,
            padding: "38px 46px",
            position: "relative",
          }}
        >
          <img alt="RP Management logo" height={220} src={logoDataUrl} width={220} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxWidth: 620,
            }}
          >
            <div
              style={{
                color: "#0369a1",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
              }}
            >
              RP Management
            </div>
            <div
              style={{
                fontSize: 68,
                fontWeight: 700,
                letterSpacing: "-0.06em",
                lineHeight: 1,
              }}
            >
              Social media, marketplace e customer area
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
