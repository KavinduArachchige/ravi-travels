// client/src/lib/api.js
import axios from "axios";

const USE_STATIC = import.meta.env.VITE_USE_STATIC === "true";
const BASE = import.meta.env.BASE_URL || "/"; // e.g. "/ravi-travels/"
const waPhone = (import.meta.env.VITE_WHATSAPP || "").replace(/[^\d+]/g, "");

// prefix base for any local path (JSON or image)
function withBase(p) {
  if (!p) return p;
  if (/^https?:\/\//i.test(p)) return p;        // external URL
  return BASE + p.replace(/^\/+/, "");          // "/images/x.jpg" -> "/ravi-travels/images/x.jpg"
}

function staticUrl(p) { return withBase(`data/${p}`); }

async function staticGet(path) {
  if (path.startsWith("/packages/")) {
    const slug = path.split("/").pop();
    const all = await fetch(staticUrl("packages.json")).then(r => r.json());
    return { data: (all || []).map(normalizePkg).find(p => p.slug === slug) || null };
  }
  if (path === "/packages") {
    const all = await fetch(staticUrl("packages.json")).then(r => r.json());
    return { data: (all || []).map(normalizePkg) };
  }
  if (path.startsWith("/visa")) {
    const all = await fetch(staticUrl("visas.json")).then(r => r.json());
    return { data: all || [] };
  }
  return { data: null };
}

function normalizePkg(p) {
  return {
    ...p,
    gallery: (p.gallery || []).map(withBase),   // fix image paths from JSON
  };
}

const http = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

function openWhatsAppLead(payload = {}) {
  const lines = [
    "New inquiry (Demo on GitHub Pages)",
    `Type: ${payload.type || "-"}`,
    payload.packageSlug ? `Package: ${payload.packageSlug}` : null,
    `Name: ${payload.name || "-"}`,
    `Email: ${payload.email || "-"}`,
    `Phone: ${payload.phone || "-"}`,
    payload.travelers ? `Travelers: ${payload.travelers}` : null,
    payload.startDate ? `Start: ${payload.startDate}` : null,
    payload.notes ? `Notes: ${payload.notes}` : null,
  ].filter(Boolean).join("\n");
  if (waPhone) {
    window.open(`https://wa.me/${waPhone}?text=${encodeURIComponent(lines)}`, "_blank");
  } else {
    alert(lines);
  }
}

export const api = {
  get: (path) => USE_STATIC ? staticGet(path) : http.get(path),
  post: (path, body) => {
    if (USE_STATIC && path === "/leads") {
      openWhatsAppLead(body);
      return Promise.resolve({ data: { ok: true, id: "static" } });
    }
    return http.post(path, body);
  }
};
