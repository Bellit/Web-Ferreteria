/**
 * Mapa — Google Maps solo se carga cuando el visitante lo pide (sin cookies de terceros antes)
 */
import { $ } from '../utils/dom.js';

export function initMap() {
  const map = $('[data-map]');
  const load = $('[data-map-load]', map ?? document);
  if (!map || !load) return;

  load.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.title = map.dataset.mapTitle;
    iframe.src = map.dataset.mapSrc;
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    map.replaceChildren(iframe);
    map.classList.add('is-loaded');
  });
}
