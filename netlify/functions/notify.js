export default async (req, context) => {
  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const ip = context.ip;

  let location = "Unknown";
  try {
    const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
    const geo = await geoRes.json();
    if (geo.status === "success") {
      location = `${geo.city}, ${geo.regionName}, ${geo.country}`;
    }
  } catch (_) {}

  const { userAgent, language, referrer, screen } = await req.json();

  const os = /iPhone|iPad/.test(userAgent) ? "iOS"
    : /Android/.test(userAgent) ? "Android"
    : /Windows/.test(userAgent) ? "Windows"
    : /Mac/.test(userAgent) ? "macOS"
    : /Linux/.test(userAgent) ? "Linux" : "Unknown";

  const browser = /Edg/.test(userAgent) ? "Edge"
    : /Chrome/.test(userAgent) ? "Chrome"
    : /Safari/.test(userAgent) ? "Safari"
    : /Firefox/.test(userAgent) ? "Firefox" : "Unknown";

  const message = `
👀 *New Portfolio Visit!*

📍 Location: ${location}
🖥️ ${os} · ${browser}
🌍 Language: ${language}
📱 Screen: ${screen}
🔗 From: ${referrer || "Direct"}
🕐 ${new Date().toLocaleString("en-EG", { timeZone: "Africa/Cairo" })}
  `.trim();

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    }),
  });

  return new Response("ok", { status: 200 });
};

export const config = { path: "/api/notify" };