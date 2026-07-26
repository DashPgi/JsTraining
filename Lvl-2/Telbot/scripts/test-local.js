// اجرای دستی و محلی برای تست، بدون نیاز به دیپلوی روی Vercel
// استفاده: node scripts/test-local.js
import "dotenv/config";
import { composeDailySticker } from "../lib/stickerComposer.js";
import { sendMessage, sendSticker } from "../lib/telegram.js";

async function main() {
  const { buffer, dateText } = await composeDailySticker();
  console.log("تاریخ ساخته‌شده:", dateText);

  const messageTemplate =
    process.env.DAILY_MESSAGE_TEMPLATE || "📅 آپدیت روزانه - {date}";
  await sendMessage(messageTemplate.replace("{date}", dateText));
  await sendSticker(buffer);

  console.log("✅ پیام و استیکر با موفقیت ارسال شد.");
}
main().catch((err) => {
  console.error("❌ خطا:", err.message);
  if (err.cause) {
    console.error("جزئیات فنی خطا (cause):", err.cause);
  }
  process.exit(1);
});