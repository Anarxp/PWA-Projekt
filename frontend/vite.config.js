import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import vue from "@vitejs/plugin-vue";
import { URL, fileURLToPath } from "url";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import manifest from "./manifest.js";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [vue(), VitePWA({ registerType: "autoUpdate", manifest })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
