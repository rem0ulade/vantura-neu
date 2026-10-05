import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const ALLOWED_ORIGINS = new Set([
  "https://rem0ulade.github.io",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:5500",
  "http://127.0.0.1:5500",
]);

const LABELS: Record<string, Record<string, string>> = {
  housing: { apartment: "Wohnung", house: "Haus" },
  rooms: { "1-2": "1–2 Räume", "3-4": "Mehrere Räume", "5-7": "Fast das ganze Zuhause", "8plus": "Vollständiges System" },
  people: { solo: "Eine Person", couple: "Zwei Personen", family: "Familie", shared: "Mehrere Personen" },
  wishes: { lighting: "Licht und Szenen", climate: "Klima und Raumkomfort", security: "Sicherheit und Status", media: "Musik und Medien", calendar: "Kalender und Organisation", packages: "Pakete und Meldungen", overview: "Zentrale Gesamtübersicht", unsure: "Beratung gewünscht" },
  priority: { overview: "Zentrale Oberfläche", family: "Familienalltag", comfort: "Komfort", security: "Sicherheit", rooms: "Raumsteuerung" },
  automation: { manual: "Hauptsächlich manuell", some: "Ausgewählte Automationen", comfy: "So automatisch wie sinnvoll" },
  timeline: { exploring: "Erst orientieren", soon: "In den nächsten Wochen", planned: "In 1–3 Monaten", flexible: "Flexibel" },
  existing: { voice: "Sprachassistent", lights: "Lampen/Steckdosen", climate: "Heizung/Klima", cameras: "Kameras/Sensoren", tablet: "Tablet/Display", none: "Noch nichts", unsure: "Unklar" },
  roomCount: { "2": "2 Räume", "3-4": "3–4 Räume", "5plus": "5+ Räume" },
};

type InquiryPayload = { email?: string; phone?: string; source?: string; answers?: Record<string, unknown>; tier?: { title?: string; id?: string }; score?: number; honeypot?: string };

function corsHeaders(origin: string | null): Record<string, string> {
  const allowed = origin && ALLOWED_ORIGINS.has(origin) ? origin : ALLOWED_ORIGINS.values().next().value!;
  return { "Access-Control-Allow-Origin": allowed, "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Access-Control-Allow-Methods": "POST, OPTIONS" };
}
function jsonResponse(body: Record<string, unknown>, status: number, origin: string | null) { return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } }); }
function isValidEmail(value: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
function label(group: string, key: string | null | undefined) { return key ? LABELS[group]?.[key] ?? key : "—"; }
function formatAnswers(answers: Record<string, unknown>, tier?: InquiryPayload["tier"], score?: number) {
  const list = (group: string, value: unknown) => Array.isArray(value) ? (value as string[]).map(v => label(group, v)).join(", ") : "—";
  return [
    "--- Home Assessment ---",
    `Systemprofil: ${tier?.title ?? "—"}${typeof score === "number" ? ` (Score: ${score})` : ""}`,
    `Wohnform: ${label("housing", answers.housing as string)}`,
    `Umfang: ${label("rooms", answers.rooms as string)}`,
    `Nutzer: ${label("people", answers.people as string)}`,
    `Module: ${list("wishes", answers.wishes)}`,
    `Priorität: ${label("priority", answers.priority as string)}`,
    answers.roomCount ? `Raum-Anzahl: ${label("roomCount", answers.roomCount as string)}` : null,
    `Vorhanden: ${list("existing", answers.existing)}`,
    `Automatisierung: ${label("automation", answers.automation as string)}`,
    `Zeitrahmen: ${label("timeline", answers.timeline as string)}`,
  ].filter(Boolean).join("\n");
}
function buildEmailBody(payload: InquiryPayload) {
  const lines = ["Neue H.O.M.E. Projektanfrage", "", `Quelle: ${payload.source || "unknown"}`, `E-Mail: ${payload.email?.trim() || "—"}`, `Telefon: ${payload.phone?.trim() || "—"}`, ""];
  lines.push(payload.answers && payload.tier ? formatAnswers(payload.answers, payload.tier, payload.score) : "Home Assessment nicht ausgefüllt — direkter Kontakt gewünscht.");
  return lines.join("\n");
}
function buildSubject(payload: InquiryPayload) { return payload.answers && payload.tier ? "H.O.M.E. — Projektanfrage mit Systemprofil" : "H.O.M.E. — Neue Projektanfrage"; }

Deno.serve(async (req) => {
  const origin = req.headers.get("Origin");
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin) });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405, origin);
  if (origin && !ALLOWED_ORIGINS.has(origin)) return jsonResponse({ error: "Origin not allowed" }, 403, origin);
  let payload: InquiryPayload;
  try { payload = await req.json(); } catch { return jsonResponse({ error: "Invalid JSON" }, 400, origin); }
  if (payload.honeypot) return jsonResponse({ ok: true }, 200, origin);
  const email = payload.email?.trim() || "";
  const phone = payload.phone?.trim() || "";
  if (!email && !phone) return jsonResponse({ error: "E-Mail oder Telefon erforderlich" }, 400, origin);
  if (email && !isValidEmail(email)) return jsonResponse({ error: "Ungültige E-Mail-Adresse" }, 400, origin);
  const resendKey = Deno.env.get("RESEND_API_KEY");
  const toEmail = Deno.env.get("INQUIRY_TO_EMAIL") ?? "jk@vantura-studios.com";
  const fromEmail = Deno.env.get("RESEND_FROM_EMAIL") ?? "H.O.M.E. <anfragen@vantura-studios.com>";
  if (!resendKey) return jsonResponse({ error: "Server configuration error" }, 500, origin);
  const resendRes = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: fromEmail, to: [toEmail], reply_to: email || undefined, subject: buildSubject(payload), text: buildEmailBody(payload) }) });
  if (!resendRes.ok) return jsonResponse({ error: "E-Mail konnte nicht gesendet werden" }, 502, origin);
  return jsonResponse({ ok: true }, 200, origin);
});