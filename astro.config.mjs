import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
