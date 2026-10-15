import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Assembly of the Saints Tabernacle",
    short_name: "Saints Tabernacle",
    description: "The Church with the End-Time Message of the Bride of Jesus Christ.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf6ed",
    theme_color: "#351016",
    icons: [{ src: "/church-logo.png", sizes: "1152x2048", type: "image/png" }]
  };
}
