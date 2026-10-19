/**
 * Navegación — riel fijo, menú móvil y sección activa
 */
import { $, $$ } from '../utils/dom.js';

export function initNavigation() {
  const rail = $('[data-rail]');
  const btn = $('[data-menu-btn]');
  const menu = $('[data-menu]');

  // Línea bajo el riel al hacer scroll
  const onScroll = () => rail?.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menú móvil
  const setMenu = (open) => {
    if (!btn || !menu) return;
    btn.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) $('a', menu)?.focus();
  };

  btn?.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      btn.focus();
    }
  });
  window.matchMedia('(min-width: 1081px)').addEventListener('change', (e) => e.matches && setMenu(false));

  // El botón flotante se retira donde la página ya muestra WhatsApp (inicio y Visítanos)
  const dock = $('.dock');
  const zones = [$('#inicio'), $('#visitanos')].filter(Boolean);
  if (dock && zones.length && 'IntersectionObserver' in window) {
    const visible = new Set();
    const zoneIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      dock.classList.toggle('is-hidden', visible.size > 0);
    }, { rootMargin: '0px 0px -25% 0px' });
    zones.forEach((z) => zoneIO.observe(z));
  }

  // El estado del riel releva al de la portada cuando este sale de pantalla
  const heroStatus = $('.hero [data-status]');
  if (rail && heroStatus && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => rail.classList.toggle('show-status', !entry.isIntersecting), {
      rootMargin: `-${rail.offsetHeight}px 0px 0px 0px`,
    }).observe(heroStatus);
  }

  // Sección activa
  const links = $$('[data-nav] a');
  const sections = links.map((a) => $(a.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window) || !sections.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => {
        const match = a.getAttribute('href') === `#${entry.target.id}`;
        if (match) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach((s) => io.observe(s));
}
