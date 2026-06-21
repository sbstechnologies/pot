import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Parks on Taylor Apartments Homes",
    short_name: "Parks on Taylor",
    description:
      "Discover spacious 1 & 2-bedroom apartments for rent in Sherman, Texas.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f2ed",
    theme_color: "#1e3872",
    orientation: "portrait",

    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
