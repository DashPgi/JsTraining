import { composeDailySticker } from "../lib/stickerComposer.js";
import { sendMessage, sendSticker } from "../lib/telegram.js";

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

export default async function handler(req, res) {
  const auth = req.headers["authorization"];
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return sendJson(res, 401, { ok: false, error: "unauthorized" });
  }

  try {
    const { buffer, dateText } = await composeDailySticker();

    const messageTemplate =
      process.env.DAILY_MESSAGE_TEMPLATE || "📅 آپدیت روزانه - {date}";
    const messageText = messageTemplate.replace("{date}", dateText);

    await sendMessage(messageText);
    await sendSticker(buffer);

    return sendJson(res, 200, { ok: true, date: dateText });
  } catch (err) {
    console.error(err);
    return sendJson(res, 500, { ok: false, error: err.message });
  }
}