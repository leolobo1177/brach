<?php
declare(strict_types=1);

const CONTACT_EMAIL = 'agenciabrach@gmail.com';
const CONTACT_PAGE = 'index.html';

function redirect_to(string $hash): void
{
    header('Location: ' . CONTACT_PAGE . $hash, true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_to('#contato');
}

$honeypot = trim((string) ($_POST['website'] ?? ''));
if ($honeypot !== '') {
    redirect_to('#contato-enviado');
}

$nome = trim((string) ($_POST['nome'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$mensagem = trim((string) ($_POST['mensagem'] ?? ''));

$nome = preg_replace('/\s+/', ' ', $nome) ?? '';
$mensagem = preg_replace("/\r\n|\r|\n/", PHP_EOL, $mensagem) ?? '';
$headerSafeName = str_replace(["\r", "\n"], ' ', $nome);
$headerSafeEmail = str_replace(["\r", "\n"], '', $email);
$safeEmail = filter_var($headerSafeEmail, FILTER_SANITIZE_EMAIL) ?: '';

$isValid =
    $headerSafeName !== '' &&
    strlen($headerSafeName) >= 2 &&
    strlen($headerSafeName) <= 120 &&
    $mensagem !== '' &&
    strlen($mensagem) >= 10 &&
    strlen($mensagem) <= 3000 &&
    filter_var($safeEmail, FILTER_VALIDATE_EMAIL);

if (!$isValid) {
    redirect_to('#contato-invalido');
}

$subject = 'Novo contato pelo site - ' . $headerSafeName;
$bodyLines = [
    'Nome: ' . $headerSafeName,
    'Email: ' . $safeEmail,
    '',
    'Mensagem:',
    $mensagem,
];
$body = implode(PHP_EOL, $bodyLines);

$headers = [
    'From: Brach Site <' . CONTACT_EMAIL . '>',
    'Reply-To: ' . $safeEmail,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail(CONTACT_EMAIL, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    redirect_to('#contato-erro');
}

redirect_to('#contato-enviado');
