import { resolve } from 'node:path';
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
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'aviso-legal': resolve(__dirname, 'aviso-legal/index.html'),
        'politica-de-privacidad': resolve(__dirname, 'politica-de-privacidad/index.html'),
        'politica-de-cookies': resolve(__dirname, 'politica-de-cookies/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
}));
