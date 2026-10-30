import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { redact } from "@tanstack/redact/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "#components": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),
      "#data": fileURLToPath(new URL("./src/data", import.meta.url)),
      "#lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
      "#pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "#styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      "#src": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [react(), tailwindcss(), redact()],
  server: {
    host: "0.0.0.0",
  },
  preview: {
    host: "0.0.0.0",
  },
});
