import { rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Dos destinos: la prueba en GitHub Pages (npm run build) y el dominio definitivo (npm run build:dominio)
const SITES = {
  production: 'https://bellit.github.io/Web-Ferreteria/',
  dominio: 'https://ferreteriapino.es/',
};
const PAGES = ['', 'aviso-legal/', 'politica-de-privacidad/', 'politica-de-cookies/'];

function site(url, isPreview) {
  const noindex = '<meta name="robots" content="noindex">';
  return {
    name: 'ferreteria-site',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html
        .replaceAll('%SITE%', url)
        .replaceAll('%BASE%', new URL(url).pathname)
        .replace('%ROBOTS%', isPreview ? noindex : ''),
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${url}sitemap.xml\n` });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${PAGES.map((p) => `  <url><loc>${url}${p}</loc></url>`).join('\n')}\n</urlset>\n`,
      });
    },
    // GitHub Pages no ejecuta PHP ni lee .htaccess: esos archivos solo van al hosting del dominio
    closeBundle() {
      if (!isPreview) return;
      rmSync(resolve(__dirname, 'dist/contacto.php'), { force: true });
      rmSync(resolve(__dirname, 'dist/.htaccess'), { force: true });
    },
  };
}

export default defineConfig(({ command, mode }) => {
  const url = SITES[mode] ?? SITES.production;
  return {
    // En local, la raíz; al compilar, la ruta del destino
    base: command === 'build' ? new URL(url).pathname : '/',
    plugins: [site(url, mode !== 'dominio')],
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
          404: resolve(__dirname, '404.html'),
        },
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
