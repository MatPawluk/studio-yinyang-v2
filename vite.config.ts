import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ViteImageOptimizer({
      png: { quality: 75 },
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
      webp: { quality: 75 },
      avif: { quality: 65 },
      svg: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'sortAttrs' },
        ],
      },
    }),
    sitemap({
      hostname: "https://yinyangchina.pl",
      dynamicRoutes: [
        '/',
        '/uslugi',
        '/o-nas',
        '/kontakt',
        '/baza-wiedzy',
        // In a real scenario, we'd fetch these from Sanity or a dedicated data file
        // For now, these represent the main entry points
      ],
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
