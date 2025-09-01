import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  base: "/ravi-travels/",   // EXACT repo name
  plugins: [react()],
});
