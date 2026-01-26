import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['ka-icon.svg', 'profile.jpg', 'profile.webp'],
      manifest: {
        name: 'Kaysarul Anas Portfolio',
        short_name: 'KA Portfolio',
        description: 'Portfolio of Kaysarul Anas - Backend Developer',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    watch: {
      usePolling: true,   // 🔥 fixes HMR not triggering
      interval: 100,     // check for changes every 100ms
    },
  },
  test: {
    globals: true,        // ✅ enables expect, describe, test
    environment: "jsdom",
  },
});
