import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones para mejor rendimiento
    target: "esnext",
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          framer: ["framer-motion"],
          router: ["react-router-dom"],
        },
      },
    },
    // Optimización de assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // Configuración del servidor de desarrollo
    host: true,
    port: 3000,
  },
  optimizeDeps: {
    // Pre-bundling de dependencias
    include: ["react", "react-dom", "framer-motion", "react-router-dom"],
  },
  css: {
    // Optimización de CSS
    devSourcemap: false,
  },
});
