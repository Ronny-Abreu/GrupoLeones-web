/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
                        'purple-light': '#e8e5f3',
                        'purple-medium': '#8b7fb8',
                        'purple-dark': '#6b5b95'
                    }
    },
  },
  plugins: [],
}