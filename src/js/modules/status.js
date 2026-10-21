/**
 * ¿Está abierto? — calcula el estado con la hora peninsular (Europe/Madrid, también Barcelona)
 */
import { $, $$ } from '../utils/dom.js';

// Tramos en minutos desde medianoche. 0 = domingo.
const HOURS = {
  0: [],
  1: [[570, 810], [1020, 1200]],
  2: [[570, 810], [1020, 1200]],
  3: [[570, 810], [1020, 1200]],
  4: [[570, 810], [1020, 1200]],
  5: [[570, 810], [1020, 1200]],
  6: [[540, 810]],
};

const DAY_NAMES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

const fmt = (min) => `${Math.floor(min / 60)}:${String(min % 60).padStart(2, '0')}`;

function madridNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Madrid', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t)?.value;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, minutes: (Number(get('hour')) % 24) * 60 + Number(get('minute')) };
}

export function getStatus({ day, minutes } = madridNow()) {
  const open = HOURS[day].find(([a, b]) => minutes >= a && minutes < b);
  if (open) {
    const left = open[1] - minutes;
    return {
      open: true,
      html: left <= 30
        ? `<strong>Abierto</strong> · cerramos en ${left} min`
        : `<strong>Abierto ahora</strong> · hasta las ${fmt(open[1])}`,
    };
  }

  const laterToday = HOURS[day].find(([a]) => a > minutes);
  if (laterToday) return { open: false, html: `<strong>Cerrado</strong> · abrimos hoy a las ${fmt(laterToday[0])}` };

  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    if (HOURS[d].length) {
      const when = i === 1 ? 'mañana' : `el ${DAY_NAMES[d]}`;
      return { open: false, html: `<strong>Cerrado</strong> · abrimos ${when} a las ${fmt(HOURS[d][0][0])}` };
    }
  }
  return { open: false, html: '<strong>Cerrado</strong>' };
}

export function initStatus() {
  const paint = () => {
    const now = madridNow();
    const status = getStatus(now);
    $$('[data-status]').forEach((el) => {
      el.classList.toggle('is-open', status.open);
      el.classList.toggle('is-closed', !status.open);
      $('.status__text', el).innerHTML = el.classList.contains('status--compact')
        ? `<strong>${status.open ? 'Abierto' : 'Cerrado'}</strong>`
        : status.html;
    });
    $$('[data-hours] tr').forEach((tr) => tr.classList.toggle('is-today', Number(tr.dataset.day) === now.day));
  };

  paint();
  setInterval(paint, 60_000);
}
