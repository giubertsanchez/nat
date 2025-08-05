// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
  export default defineConfig({
  site: 'https://giubertsanchez.github.io',
  base:"https://giubertsanchez.github.io/nat/",
  
  vite: {
    plugins: [tailwindcss()],
  },
});
