import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones para mejor rendimiento
    target: "esnext",
    minify: "esbuild",
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
    host: 'localhost',
    port: 5173,
    open: true
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
