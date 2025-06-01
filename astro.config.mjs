import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless"; //rverless"; //

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});