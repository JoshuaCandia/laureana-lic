// vite.config.js
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
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
          router: ["react-router-dom"]
        }
      }
    },
    // Optimización de assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1e3
  },
  server: {
    // Configuración del servidor de desarrollo
    host: true,
    port: 3e3
  },
  optimizeDeps: {
    // Pre-bundling de dependencias
    include: ["react", "react-dom", "framer-motion", "react-router-dom"]
  },
  css: {
    // Optimización de CSS
    devSourcemap: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBidWlsZDoge1xuICAgIC8vIE9wdGltaXphY2lvbmVzIHBhcmEgbWVqb3IgcmVuZGltaWVudG9cbiAgICB0YXJnZXQ6IFwiZXNuZXh0XCIsXG4gICAgbWluaWZ5OiBcImVzYnVpbGRcIixcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgdmVuZG9yOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcbiAgICAgICAgICBmcmFtZXI6IFtcImZyYW1lci1tb3Rpb25cIl0sXG4gICAgICAgICAgcm91dGVyOiBbXCJyZWFjdC1yb3V0ZXItZG9tXCJdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE9wdGltaXphY2lcdTAwRjNuIGRlIGFzc2V0c1xuICAgIGFzc2V0c0lubGluZUxpbWl0OiA0MDk2LFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgLy8gQ29uZmlndXJhY2lcdTAwRjNuIGRlbCBzZXJ2aWRvciBkZSBkZXNhcnJvbGxvXG4gICAgaG9zdDogdHJ1ZSxcbiAgICBwb3J0OiAzMDAwLFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICAvLyBQcmUtYnVuZGxpbmcgZGUgZGVwZW5kZW5jaWFzXG4gICAgaW5jbHVkZTogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJmcmFtZXItbW90aW9uXCIsIFwicmVhY3Qtcm91dGVyLWRvbVwiXSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgLy8gT3B0aW1pemFjaVx1MDBGM24gZGUgQ1NTXG4gICAgZGV2U291cmNlbWFwOiBmYWxzZSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixPQUFPLFdBQVc7QUFDM08sU0FBUyxvQkFBb0I7QUFHN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQTtBQUFBLElBRUwsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osUUFBUSxDQUFDLFNBQVMsV0FBVztBQUFBLFVBQzdCLFFBQVEsQ0FBQyxlQUFlO0FBQUEsVUFDeEIsUUFBUSxDQUFDLGtCQUFrQjtBQUFBLFFBQzdCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsbUJBQW1CO0FBQUEsSUFDbkIsdUJBQXVCO0FBQUEsRUFDekI7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGNBQWM7QUFBQTtBQUFBLElBRVosU0FBUyxDQUFDLFNBQVMsYUFBYSxpQkFBaUIsa0JBQWtCO0FBQUEsRUFDckU7QUFBQSxFQUNBLEtBQUs7QUFBQTtBQUFBLElBRUgsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
