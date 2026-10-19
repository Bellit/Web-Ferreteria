import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.js',
    devSourcemap: false,
  },
  build: {
    cssMinify: 'esbuild',
  },
  server: {
    port: 3000,
    open: true,
  },
});
