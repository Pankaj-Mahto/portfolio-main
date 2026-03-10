import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";   // ← add this

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // ← this handles Tailwind v4 processing optimally
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});