/**
 * Panel de llaves — las llaves se balancean una vez al entrar en pantalla
 */
import { $ } from '../utils/dom.js';

export function initBoard() {
  const board = $('[data-board]');
  if (!board || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    board.classList.add('is-swaying');
    io.disconnect();
    setTimeout(() => board.classList.remove('is-swaying'), 2600);
  }, { threshold: 0.45 });

  io.observe(board);
}
