/**
 * «Desde 1985» — las llaves caen en sus ganchos, de la más antigua a la más moderna, al entrar en pantalla.
 * Con movimiento reducido se quedan colgadas desde el principio.
 */
import { $ } from '../utils/dom.js';

export function initSince() {
  const box = $('[data-keyline]');
  if (!box || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  box.classList.add('is-waiting');
  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    io.disconnect();
    box.classList.remove('is-waiting');
    box.classList.add('is-run');
  }, { threshold: 0.5 });

  io.observe(box);
}
