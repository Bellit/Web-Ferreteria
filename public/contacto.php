<?php
/**
 * Formulario de contacto — valida los datos y los envía por correo a la tienda. No guarda nada.
 * Mantiene las mismas reglas que src/js/modules/contact.js.
 */
ini_set('display_errors', '0');

const TO = 'ferreteriapino@ferreteriapino.es';
const FROM = 'web@ferreteriapino.es';

function reply($status, $ok) {
  http_response_code($status);
  header('Content-Type: application/json; charset=utf-8');
  header('X-Content-Type-Options: nosniff');
  echo json_encode(['ok' => $ok]);
  exit;
}

function field($key, $max) {
  $value = isset($_POST[$key]) && is_string($_POST[$key]) ? trim($_POST[$key]) : '';
  return strlen($value) > $max ? null : $value;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(405, false);

// Solo se acepta desde la propia web
$origin = isset($_SERVER['HTTP_ORIGIN']) ? parse_url($_SERVER['HTTP_ORIGIN'], PHP_URL_HOST) : null;
$host = isset($_SERVER['HTTP_HOST']) ? preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST']) : '';
if ($origin !== null && $origin !== $host) reply(403, false);

// Campo trampa: solo lo rellenan los robots. Se les responde como si nada y no se envía.
if (!empty($_POST['website'])) reply(200, true);

$name = field('name', 120);
$contact = field('contact', 120);
$message = field('message', 5000);

$isEmail = $contact !== null && filter_var($contact, FILTER_VALIDATE_EMAIL) !== false;
$isPhone = $contact !== null && preg_match('/^[+]?[\d\s()-]{9,20}$/', $contact) === 1;

if (
  $name === null || strlen($name) < 2 ||
  (!$isEmail && !$isPhone) ||
  $message === null || strlen($message) < 6 ||
  empty($_POST['privacy'])
) reply(400, false);

$body = "Nombre: $name\nContacto: $contact\n\nMensaje:\n$message\n";

$headers = [
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: base64',
  'From: =?UTF-8?B?' . base64_encode('Web Ferretería Pino') . '?= <' . FROM . '>',
];
if ($isEmail) $headers[] = "Reply-To: $contact";

$sent = mail(TO, 'Mensaje desde la web', chunk_split(base64_encode($body)), implode("\r\n", $headers));
reply($sent ? 200 : 500, $sent);
