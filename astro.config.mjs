// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://giubertphone.github.io',
  //removing base to see if it is casuing link issues
  // base: 'nat',

  // For GitHub Pages deployment
  // This is the repository name where the site will be hosted
 

  vite: {
    plugins: [tailwindcss()],
  },
});
