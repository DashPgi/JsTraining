import { composeDailySticker } from "../lib/stickerComposer.js";
import { sendMessage, sendSticker } from "../lib/telegram.js";

export default async function handler(req, res) {
  // امنیت ساده: فقط درخواستی که secret درستی داره اجرا میشه
  // Vercel Cron خودش هدر Authorization: Bearer <CRON_SECRET> رو ست میکنه اگه در env تنظیمش کنی
  const auth = req.headers["authorization"];
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ ok: false, error: "unauthorized" });
  }

  try {
    const { buffer, dateText } = await composeDailySticker();

    const messageTemplate =
      process.env.DAILY_MESSAGE_TEMPLATE || "📅 آپدیت روزانه - {date}";
    const messageText = messageTemplate.replace("{date}", dateText);

    await sendMessage(messageText);
    await sendSticker(buffer);

    return res.status(200).json({ ok: true, date: dateText });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
