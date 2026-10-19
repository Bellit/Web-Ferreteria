/**
 * Catálogo — etiquetas colgadas de un riel por sección, con filtro
 */
import products from '../../data/products.json';
import { $, $$ } from '../utils/dom.js';

// Ruta de las fotos según dónde se publique la web (raíz en local, /Web-Ferreteria/ en GitHub Pages)
const IMG = `${import.meta.env.BASE_URL}img/`;

const SECTIONS = {
  todas:        { img: IMG + 'llaves-panel.jpg', alt: 'Llaves vírgenes colgadas en ganchos sobre un panel', caption: 'Todo cuelga de su gancho y tiene su código.' },
  herramientas: { img: IMG + 'herramientas.jpg', alt: 'Martillos y guantes de trabajo sobre un banco de madera', caption: 'Herramienta de mano y eléctrica.' },
  pinturas:     { img: IMG + 'pinturas.jpg', alt: 'Botes de pintura, brocha y rodillo sobre papel de embalar', caption: 'Pintura, esmaltes y todo para aplicarla.' },
  fontaneria:   { img: IMG + 'fontaneria.jpg', alt: 'Dos grifos de latón con maneta roja en una pared blanca', caption: 'Grifería, tubo y recambios.' },
  electricidad: { img: IMG + 'electricidad.jpg', alt: 'Multímetro digital rojo con sus puntas sobre la mesa de trabajo', caption: 'Cable, mecanismos y medición.' },
  llaves:       { img: IMG + 'llaves-panel.jpg', alt: 'Llaves vírgenes colgadas en ganchos sobre un panel', caption: 'Copias al momento, mientras esperas.' },
};

const LABEL = {
  herramientas: 'Herramientas', pinturas: 'Pintura', fontaneria: 'Fontanería', electricidad: 'Electricidad', llaves: 'Llaves',
};

const MOBILE_LIMIT = 6;
const mobile = window.matchMedia('(max-width: 860px)');

const price = (n) => {
  const [euros, cents] = n.toFixed(2).split('.');
  return `${euros},<small>${cents} €</small>`;
};

const escape = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const tag = (p, i, animate) => `
  <li class="tag${animate ? ' is-entering' : ''}" style="--d:${Math.min(i, 8) * 40}ms">
    <span class="tag__code">${p.code}</span>
    <span class="tag__name">${escape(p.name)}</span>
    <span class="tag__desc">${escape(p.description)}</span>
    <span class="tag__price">${price(p.price)}</span>
  </li>`;

export function initCatalog() {
  const list = $('[data-products]');
  const count = $('[data-count]');
  const more = $('[data-more]');
  const tabs = $$('[data-filter]');
  const img = $('[data-shelf-img]');
  const caption = $('[data-shelf-caption]');
  if (!list) return;

  let current = 'todas';
  let expanded = false;

  function render(animate) {
    const items = current === 'todas' ? products : products.filter((p) => p.category === current);
    const limit = mobile.matches && !expanded ? MOBILE_LIMIT : Infinity;
    const shown = items.slice(0, limit);

    // Agrupar por sección: cada una tiene su riel
    const groups = shown.reduce((acc, p) => ((acc[p.category] ||= []).push(p), acc), {});
    let n = 0;
    list.innerHTML = Object.entries(groups).map(([cat, ps]) => `
      <li class="hanger">
        <h3 class="hanger__title">${LABEL[cat]}</h3>
        <ul class="hanger__rail" role="list">${ps.map((p) => tag(p, n++, animate)).join('')}</ul>
      </li>`).join('');

    if (count) count.textContent = `${items.length} ${items.length === 1 ? 'artículo' : 'artículos'}`;
    if (more) {
      more.hidden = shown.length >= items.length;
      more.textContent = `Ver los ${items.length} artículos`;
    }
  }

  function swapPhoto() {
    const s = SECTIONS[current];
    if (!img || !s) return;
    if (caption) caption.textContent = s.caption;
    if (img.getAttribute('src') === s.img) return;
    img.classList.add('is-swapping');
    const next = new Image();
    next.src = s.img;
    next.decode?.().catch(() => {}).finally(() => {
      img.src = s.img;
      img.alt = s.alt;
      requestAnimationFrame(() => img.classList.remove('is-swapping'));
    });
  }

  function select(tab, focus) {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    if (focus) tab.focus();
    current = tab.dataset.filter;
    expanded = false;
    render(true);
    swapPhoto();
  }

  tabs.forEach((tab, i) => {
    tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
    tab.setAttribute('aria-controls', 'productos');
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (e) => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (step) {
        e.preventDefault();
        select(tabs[(i + step + tabs.length) % tabs.length], true);
      } else if (e.key === 'Home' || e.key === 'End') {
        e.preventDefault();
        select(tabs[e.key === 'Home' ? 0 : tabs.length - 1], true);
      }
    });
  });

  more?.addEventListener('click', () => {
    expanded = true;
    render(false);
  });

  mobile.addEventListener('change', () => render(false));
  render(false);
}
