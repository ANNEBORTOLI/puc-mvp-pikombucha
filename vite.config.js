import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Set the correct base path for GitHub Pages
  plugins: [react()]
});
