/**
 * La llave — una fresa recorre la paleta y talla el dentado.
 * El primer corte es 1·9·8·5, el año de apertura. "Cortar otra" talla un código al azar.
 */
import { $ } from '../utils/dom.js';

const NS = 'http://www.w3.org/2000/svg';
const TOP = 110;           // canto superior de la paleta sin cortar
const START = 428;         // donde empieza la paleta
const END = 960;           // donde empieza la punta
const WHEEL = 62;

// Cortes juntos y paleta corta, como una llave real.
// El dibujo deja sitio arriba para la fresa completa (y = -40) y va de la cabeza a la punta,
// con el mismo margen a cada lado para que la llave quede centrada.
const VIEW_TOP = -40;
const VIEW_H = 340;
const TIP = 85;            // largo de la punta, desde END
const CUTS = [500, 625, 750, 875];
const HALF = 52;
const FLAT = 10;
const DURATION = 2900;

const depth = (digit) => 8 + digit * 6;

function profileY(x, code) {
  for (let i = 0; i < CUTS.length; i++) {
    const dx = Math.abs(x - CUTS[i]);
    const d = depth(code[i]);
    if (dx <= FLAT) return TOP + d;
    if (dx < HALF) return TOP + d * (HALF - dx) / (HALF - FLAT);
  }
  return TOP;
}

function profilePoints(code) {
  const pts = [[START, TOP]];
  CUTS.forEach((c, i) => {
    const y = TOP + depth(code[i]);
    pts.push([c - HALF, TOP], [c - FLAT, y], [c + FLAT, y], [c + HALF, TOP]);
  });
  pts.push([END, TOP]);
  return pts;
}

const toPath = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join('');

const el = (name, attrs) => {
  const node = document.createElementNS(NS, name);
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
};

const ease = (t) => 0.5 - Math.cos(Math.PI * t) / 2;

// Dientes de sierra de la fresa
function sawPath(teeth = 24, root = 53) {
  const step = (Math.PI * 2) / teeth;
  const at = (r, a) => [+(r * Math.cos(a)).toFixed(2), +(r * Math.sin(a)).toFixed(2)];
  const pts = [];
  for (let i = 0; i < teeth; i++) {
    pts.push(at(WHEEL, i * step), at(root, i * step + step * 0.15));
  }
  return `${toPath(pts)}Z`;
}

export function initKeyCutter() {
  const svg = $('[data-key-svg]');
  if (!svg) return;

  const blade = $('[data-blade]', svg);
  const bevel = $('[data-bevel]', svg);
  const groove = $('[data-groove]', svg);
  const grooveLit = $('[data-groove-lit]', svg);
  const grooveFine = $('[data-groove-fine]', svg);
  const tipTop = $('[data-tip-top]', svg);
  const tipLow = $('[data-tip-low]', svg);
  const chamfer = $('[data-chamfer]', svg);
  const uncut = $('[data-uncut]', svg);
  const uncutRect = $('[data-uncut-rect]', svg);
  const edge = $('[data-edge]', svg);
  const chips = $('[data-chips]', svg);
  const mill = $('[data-mill]', svg);
  const wheel = $('[data-mill-wheel]', svg);
  const arm = $('.mill__arm', svg);
  const again = $('[data-cut-again]');

  $('[data-mill-teeth]', svg).setAttribute('d', sawPath());

  // Recorte del brillo: solo se ve lo ya cortado
  const cutRect = el('rect', { x: 0, y: VIEW_TOP, width: 0, height: VIEW_H });
  const cutClip = el('clipPath', { id: 'cut-clip' });
  cutClip.append(cutRect);
  $('defs', svg).append(cutClip);
  edge.setAttribute('clip-path', 'url(#cut-clip)');
  chamfer.setAttribute('clip-path', 'url(#cut-clip)');

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  let running = false;

  function setup(code) {
    const pts = profilePoints(code);
    const tip = END + TIP;
    blade.setAttribute('d', `${toPath(pts)}L${tip} 180L${tip - 25} 230H${START}Z`);
    // Los canales van por debajo del corte más hondo (y = 172 + bisel)
    bevel.setAttribute('d', `M${START} 220H${tip - 37}L${tip - 25} 230H${START}Z`);
    groove.setAttribute('d', `M${START} 182H${END + 18}L${END + 34} 190L${END + 18} 198H${START}Z`);
    grooveLit.setAttribute('d', `M${START} 198H${END + 18}L${END + 15} 201H${START}Z`);
    grooveFine.setAttribute('d', `M${START} 208H${END + 8}V212H${START}Z`);
    tipTop.setAttribute('d', `M${END} ${TOP}L${tip} 180L${tip - 13} 183L${END - 6} ${TOP + 7}Z`);
    tipLow.setAttribute('d', `M${tip} 180L${tip - 25} 230L${tip - 37} 220L${tip - 13} 183Z`);
    const lit = [...pts].reverse().map(([x, y]) => [x, y + 7]);
    chamfer.setAttribute('d', `${toPath(pts)}${toPath(lit).replace(/^M/, 'L')}Z`);
    uncut.setAttribute('d', `M${START} ${TOP}H${END}${toPath([...pts].reverse()).replace(/^M/, 'L')}Z`);
    edge.setAttribute('d', toPath(pts));
  }

  function place(x, code) {
    uncutRect.setAttribute('x', x);
    cutRect.setAttribute('width', Math.max(0, x));
    const cy = profileY(x, code) - WHEEL - 4;
    mill.setAttribute('transform', `translate(${x} ${cy})`);
    arm.setAttribute('y1', VIEW_TOP - cy - 10);
  }

  function finish() {
    place(1600, [0, 0, 0, 0]);
    mill.classList.add('is-parked');
  }

  function cut(code) {
    lastCode = code;
    setup(code);

    if (reduce.matches) { finish(); return; }

    running = true;
    if (again) again.disabled = true;
    mill.classList.remove('is-parked');
    chips.replaceChildren();

    const particles = [];
    let start = null;
    let last = null;
    let angle = 0;

    const frame = (now) => {
      if (start === null) { start = now; last = now; }
      const dt = Math.min(now - last, 40);
      last = now;
      const t = Math.min((now - start) / DURATION, 1);
      const x = START - 20 + (END - START + 40) * ease(t);

      place(x, code);
      angle = (angle + dt * 0.9) % 360;
      wheel.setAttribute('transform', `rotate(${angle})`);

      // Virutas de latón mientras la fresa muerde
      const y = profileY(x, code);
      if (y > TOP + 1 && particles.length < 70) {
        for (let k = 0; k < 2; k++) {
          const node = el('rect', { width: 3 + Math.random() * 4, height: 2 + Math.random() * 2 });
          chips.append(node);
          particles.push({
            node, x: x + (Math.random() * 14 - 7), y,
            vx: Math.random() * 0.4 - 0.12, vy: -(0.05 + Math.random() * 0.25),
            r: Math.random() * 360, vr: Math.random() * 0.8 - 0.4, life: 0,
          });
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;
        p.vy += 0.0016 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.r += p.vr * dt;
        if (p.y > VIEW_TOP + VIEW_H || p.life > 1100) {
          p.node.remove();
          particles.splice(i, 1);
        } else {
          p.node.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(${p.r})`);
          p.node.setAttribute('opacity', String(1 - p.life / 1100));
        }
      }

      if (t < 1 || particles.length) {
        requestAnimationFrame(frame);
      } else {
        mill.classList.add('is-parked');
        running = false;
        if (again) again.disabled = false;
      }
      if (t >= 1) mill.classList.add('is-parked');
    };

    requestAnimationFrame(frame);
  }

  const first = [1, 9, 8, 5];
  let lastCode = first;
  setup(first);
  place(START - 20, first);

  again?.addEventListener('click', () => {
    if (running) return;
    const code = CUTS.map(() => 1 + Math.floor(Math.random() * 9));
    cut(code);
  });

  setTimeout(() => cut(first), 450);
}
