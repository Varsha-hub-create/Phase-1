import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Specify the port number
    strictPort: true, // Prevents switching to another port if 5173 is in use
    open: true, // Automatically opens the browser
    cors: true, // Enables CORS
  },
  build: {
    outDir: "dist", // Output directory for production build
    sourcemap: true, // Generate source maps for debugging
  },
  resolve: {
    alias: {
      "@": "/src", // Alias for cleaner imports
    },
  },
});
