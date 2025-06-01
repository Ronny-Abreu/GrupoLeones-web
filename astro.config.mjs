import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  output: 'static', // Cambia a static
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});