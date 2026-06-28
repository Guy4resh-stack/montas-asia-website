const REQUIRED_FIELDS = ['name', 'email', 'company', 'market', 'service'];

function clean(value, maxLength = 1200) {
  return String(value ?? '').trim().slice(0, maxLength);
}

function validate(payload) {
  const errors = {};

  for (const field of REQUIRED_FIELDS) {
    if (!clean(payload[field])) errors[field] = 'Required field.';
  }

  const email = clean(payload.email, 320);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email address.';
  }

  return errors;
}

function buildTelegramMessage(payload) {
  const submittedAt = new Date().toISOString();
  const description = clean(payload.description, 2000) || 'Not provided';

  return [
    'New project request from Montas Asia',
    '',
    `Name: ${clean(payload.name)}`,
    `Email: ${clean(payload.email, 320)}`,
    `Company / project: ${clean(payload.company)}`,
    `Market: ${clean(payload.market)}`,
    `Service: ${clean(payload.service)}`,
    '',
    'Description:',
    description,
    '',
    `Submitted: ${submittedAt}`,
  ].join('\n');
}

async function sendTelegramMessage(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error('Telegram environment variables are not configured.');
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || data?.ok === false) {
    throw new Error(data?.description || 'Telegram API request failed.');
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const errors = validate(payload);

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: 'Please check the form fields.', errors });
    }

    await sendTelegramMessage(buildTelegramMessage(payload));

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      message: 'The request could not be sent. Please try again or email hello@montas.co.',
    });
  }
}
