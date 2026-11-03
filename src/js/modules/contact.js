/**
 * Contacto — validación en cliente y envío a contacto.php, que lo manda por correo a la tienda
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
  privacy: (accepted) => (accepted ? '' : 'Para enviarlo tienes que aceptar la política de privacidad.'),
};

const FIELDS = { name: ['#f-name', '#e-name'], contact: ['#f-contact', '#e-contact'], message: ['#f-msg', '#e-msg'], privacy: ['#f-privacy', '#e-privacy'] };

export function initContactForm() {
  const form = $('[data-form]');
  if (!form) return;
  const done = $('[data-form-done]', form);
  const failed = $('[data-form-failed]', form);
  const submit = $('[data-submit]', form);

  const check = (key) => {
    const [inputSel, errorSel] = FIELDS[key];
    const input = $(inputSel, form);
    const error = $(errorSel, form);
    const msg = RULES[key](input.type === 'checkbox' ? input.checked : input.value);
    input.closest('.field').classList.toggle('has-error', Boolean(msg));
    input.setAttribute('aria-invalid', String(Boolean(msg)));
    input.setAttribute('aria-describedby', error.id);
    error.textContent = msg;
    return !msg;
  };

  Object.keys(FIELDS).forEach((key) => {
    const input = $(FIELDS[key][0], form);
    if (input.type !== 'checkbox') input.addEventListener('blur', () => input.value && check(key));
    input.addEventListener('input', () => input.closest('.field').classList.contains('has-error') && check(key));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const results = Object.keys(FIELDS).map(check);
    if (results.includes(false)) {
      $(FIELDS[Object.keys(FIELDS)[results.indexOf(false)]][0], form).focus();
      return;
    }

    done.hidden = true;
    failed.hidden = true;
    submit.disabled = true;
    submit.textContent = 'Enviando…';

    // Solo se da por enviado si el servidor lo confirma; si falla, el mensaje sigue escrito
    let sent = false;
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}contacto.php`, { method: 'POST', body: new FormData(form), signal: AbortSignal.timeout?.(15000) });
      sent = res.ok && (await res.json()).ok === true;
    } catch {
      sent = false;
    }

    submit.disabled = false;
    submit.textContent = 'Enviar mensaje';
    if (sent) form.reset();
    done.hidden = !sent;
    failed.hidden = sent;
  });
}
