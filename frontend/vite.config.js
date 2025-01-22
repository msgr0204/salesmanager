import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; 

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/ 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets', 
    },
  }, css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer], 
    },
  },
  server: {
    host: true, 
    port: 5175, 
  },
});