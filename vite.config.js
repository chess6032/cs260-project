import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': `http://localhost:${process.env.VITE_PROXY_PORT || 4000}`,
    },
  },
});