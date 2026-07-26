import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const STICKER_SIZE = 512; // اندازه استاندارد استیکر تلگرام

/**
 * تاریخ امروز رو به فرمت میلادی و شمسی-ساده برمی‌گردونه.
 * برای سادگی و جلوگیری از وابستگی اضافه، از Intl با کلندر فارسی استفاده می‌کنیم.
 */
function getTodayLabel() {
  const now = new Date();

  const persian = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  return persian; // مثل: ۱۴۰۴/۰۵/۰۴
}

/**
 * یک SVG می‌سازه که متن تاریخ رو با استایل دلخواه روی یه لایه‌ی شفاف رسم می‌کنه.
 * این لایه بعداً روی عکس اصلی composite می‌شه.
 */
function buildDateSvg(dateText) {
  return `
  <svg width="${STICKER_SIZE}" height="${STICKER_SIZE}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .date-text {
        font-family: 'DejaVu Sans', 'Arial', sans-serif;
        font-size: 44px;
        font-weight: bold;
        fill: #ffffff;
        paint-order: stroke;
        stroke: #000000;
        stroke-width: 6px;
        stroke-linejoin: round;
      }
    </style>
    <text x="50%" y="92%" text-anchor="middle" class="date-text">${dateText}</text>
  </svg>`;
}

/**
 * عکس نهایی (webp، مربعی، آماده ارسال به‌عنوان استیکر تلگرام) رو می‌سازه.
 * @returns {Promise<Buffer>}
 */
export async function composeDailySticker() {
  const basePath =
    process.env.STICKER_BASE_PATH ||
    path.join(process.cwd(), "assets", "sticker-base.png");

  let baseBuffer;
  try {
    baseBuffer = await fs.readFile(basePath);
  } catch (err) {
    throw new Error(
      `فایل استیکر پایه پیدا نشد: ${basePath}. اول عکس رو داخل assets/sticker-base.png قرار بده.`
    );
  }

  const dateText = getTodayLabel();
  const dateSvg = Buffer.from(buildDateSvg(dateText));

  const finalBuffer = await sharp(baseBuffer)
    .resize(STICKER_SIZE, STICKER_SIZE, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .composite([{ input: dateSvg, top: 0, left: 0 }])
    .webp({ quality: 95 })
    .toBuffer();

  return { buffer: finalBuffer, dateText };
}
