/**
 * Contacto — validación en cliente (no hay servidor: el envío es simulado)
 */
import { $ } from '../utils/dom.js';

const RULES = {
  name: (v) => (v.trim().length < 2 ? 'Escribe tu nombre para saber a quién contestamos.' : ''),
  contact: (v) => {
    const s = v.trim();
    if (!s) return 'Déjanos un teléfono o un email para responderte.';
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
    const phone = /^[+]?[\d\s()-]{9,20}$/.test(s);
    return email || phone ? '' : 'No parece un teléfono ni un email válidos. Revísalo.';
  },
  message: (v) => (v.trim().length < 6 ? 'Cuéntanos un poco más: qué necesitas o qué quieres arreglar.' : ''),
};

const FIELDS = { name: ['#f-name', '#e-name'], contact: ['#f-contact', '#e-contact'], message: ['#f-msg', '#e-msg'] };

export function initContactForm() {
  const form = $('[data-form]');
  if (!form) return;
  const done = $('[data-form-done]', form);
  const submit = $('[data-submit]', form);

  const check = (key) => {
    const [inputSel, errorSel] = FIELDS[key];
    const input = $(inputSel, form);
    const error = $(errorSel, form);
    const msg = RULES[key](input.value);
    input.closest('.field').classList.toggle('has-error', Boolean(msg));
    input.setAttribute('aria-invalid', String(Boolean(msg)));
    input.setAttribute('aria-describedby', error.id);
    error.textContent = msg;
    return !msg;
  };

  Object.keys(FIELDS).forEach((key) => {
    const input = $(FIELDS[key][0], form);
    input.addEventListener('blur', () => input.value && check(key));
    input.addEventListener('input', () => input.closest('.field').classList.contains('has-error') && check(key));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const results = Object.keys(FIELDS).map(check);
    if (results.includes(false)) {
      $(FIELDS[Object.keys(FIELDS)[results.indexOf(false)]][0], form).focus();
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Enviando…';
    await new Promise((r) => setTimeout(r, 900));
    form.reset();
    submit.disabled = false;
    submit.textContent = 'Enviar mensaje';
    done.hidden = false;
  });
}
