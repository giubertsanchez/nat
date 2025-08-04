// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://giubertsanchez.github.io/nat'
  

  // For GitHub Pages deployment
  // This is the repository name where the site will be hosted
 

  vite: {
    plugins: [tailwindcss()],
  },
});
