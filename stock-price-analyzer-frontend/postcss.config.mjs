import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const config = {
  plugins: ["@tailwindcss/postcss"],
};


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
