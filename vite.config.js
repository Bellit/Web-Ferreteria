import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  // En GitHub Pages la web vive en /Web-Ferreteria/; en local, en la raíz
  base: command === 'build' ? '/Web-Ferreteria/' : '/',
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
}));
