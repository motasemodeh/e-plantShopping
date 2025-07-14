// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-plantShopping/', // 👈 Your GitHub repo name goes here
  plugins: [react()],
});
