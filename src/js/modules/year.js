/**
 * Pie — el año del copyright se actualiza solo
 */
import { $$ } from '../utils/dom.js';

export function initYear() {
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
}
