import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://zmilla93.github.io/sim-list/',
  server: {
    port: 8000,
  },
});
