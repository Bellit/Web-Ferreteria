<?php
/**
 * Formulario de contacto — valida los datos y los envía por correo a la tienda. No guarda los mensajes.
 * Mantiene las mismas reglas que src/js/modules/contact.js.
 */
ini_set('display_errors', '0');

const TO = 'ferreteriapino@ferreteriapino.es';
const FROM = 'web@ferreteriapino.es';
const MAX_PER_HOUR = 5;

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

// Máximo de envíos por hora y por visitante. Solo se guarda una huella de la IP, y se borra pasada una hora.
function tooMany() {
  $ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '';
  $prefix = sys_get_temp_dir() . '/pino-contacto-';
  foreach (glob($prefix . '*') ?: [] as $old) {
    if (filemtime($old) < time() - 3600) @unlink($old);
  }
  $file = $prefix . sha1(__FILE__ . $ip);
  $handle = fopen($file, 'c+');
  if (!$handle) return false;
  flock($handle, LOCK_EX);
  $now = time();
  $sent = array_filter(array_map('intval', explode(',', (string) stream_get_contents($handle))), function ($t) use ($now) {
    return $t > $now - 3600;
  });
  $limited = count($sent) >= MAX_PER_HOUR;
  if (!$limited) $sent[] = $now;
  ftruncate($handle, 0);
  rewind($handle);
  fwrite($handle, implode(',', $sent));
  flock($handle, LOCK_UN);
  fclose($handle);
  return $limited;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(405, false);

// Solo se acepta desde la propia web
$origin = isset($_SERVER['HTTP_ORIGIN']) ? parse_url($_SERVER['HTTP_ORIGIN'], PHP_URL_HOST) : null;
$host = isset($_SERVER['HTTP_HOST']) ? preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST']) : '';
if (!$origin || $origin !== $host) reply(403, false);

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

if (tooMany()) reply(429, false);

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
