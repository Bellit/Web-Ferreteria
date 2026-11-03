/**
 * Panel de llaves — las llaves se balancean una vez al entrar en pantalla,
 * y cada una cada vez que entra el puntero. El balanceo termina aunque el puntero se vaya,
 * y si vuelve a entrar arranca de nuevo desde donde esté la llave, sin saltos.
 */
import { $, $$ } from '../utils/dom.js';

// Oscilación amortiguada, los mismos pasos que @keyframes sway
const SWING = [[0.12, 9], [0.3, -6], [0.48, 3.5], [0.66, -1.8], [0.84, 0.6], [1, 0]];
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

function angleOf(el) {
  const m = new DOMMatrixReadOnly(getComputedStyle(el).transform);
  return (Math.atan2(m.b, m.a) * 180) / Math.PI;
}

function swing(key) {
  const from = angleOf(key);
  key.getAnimations().forEach((a) => a.cancel());
  key.animate([
    { offset: 0, transform: `rotate(${from}deg)`, easing: EASE },
    ...SWING.map(([offset, deg]) => ({ offset, transform: `rotate(${deg}deg)`, easing: EASE })),
  ], 1800);
}

export function initBoard() {
  const board = $('[data-board]');
  if (!board) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  $$('.blank:not(.blank--more)', board).forEach((blank) => {
    const key = $('.blank__key', blank);
    blank.addEventListener('pointerenter', () => {
      if (!reduce.matches && !board.classList.contains('is-swaying')) swing(key);
    });
  });

  if (!('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    board.classList.add('is-swaying');
    io.disconnect();
    setTimeout(() => board.classList.remove('is-swaying'), 2600);
  }, { threshold: 0.45 });

  io.observe(board);
}
