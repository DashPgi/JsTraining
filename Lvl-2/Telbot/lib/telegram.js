const TELEGRAM_API = "https://api.telegram.org";

function getBotToken() {
  const token = process.env.BOT_TOKEN;
  if (!token) throw new Error("BOT_TOKEN تنظیم نشده است.");
  return token;
}

function getChatId() {
  const chatId = process.env.CHAT_ID;
  if (!chatId) throw new Error("CHAT_ID تنظیم نشده است.");
  return chatId;
}

export async function sendMessage(text) {
  const token = getBotToken();
  const chatId = getChatId();

  const res = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  const data = await res.json();
  if (!data.ok) {
    throw new Error(`sendMessage failed: ${JSON.stringify(data)}`);
  }
  return data;
}

export async function sendSticker(webpBuffer) {
  const token = getBotToken();
  const chatId = getChatId();

  const form = new FormData();
  form.append("chat_id", chatId);
  form.append(
    "sticker",
    new Blob([webpBuffer], { type: "image/webp" }),
    "daily-sticker.webp"
  );

  const res = await fetch(`${TELEGRAM_API}/bot${token}/sendSticker`, {
    method: "POST",
    body: form,
  });

  const data = await res.json();
  if (!data.ok) {
    throw new Error(`sendSticker failed: ${JSON.stringify(data)}`);
  }
  return data;
}
