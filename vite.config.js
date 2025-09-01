import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// MUST match your repo name exactly:
export default defineConfig({
  base: "/ravi-travels/",
  plugins: [react()],
});
