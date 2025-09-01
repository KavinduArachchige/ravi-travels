import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// replace repo-name with your repository (e.g., ravi-travels)
export default defineConfig({
  base: "/repo-name/",
  plugins: [react()],
});
