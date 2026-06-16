import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // Served from https://<user>.github.io/purity-test/ on GitHub Pages.
  base: "/purity-test/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon.svg", "icon-maskable.svg"],
      manifest: {
        name: "Purity Test",
        short_name: "Purity",
        description:
          "Test d'expérience : sexe, drogue, alcool, moral, hygiène. 100% privé.",
        lang: "fr",
        theme_color: "#0f0f12",
        background_color: "#0f0f12",
        display: "standalone",
        start_url: "./",
        scope: "./",
        icons: [
          { src: "icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
          {
            src: "icon-maskable.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
