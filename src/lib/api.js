import axios from "axios";

const USE_STATIC = import.meta.env.VITE_USE_STATIC === "true";
const BASE = import.meta.env.BASE_URL || "/";

function withBase(p) {
  if (!p) return p;
  if (/^https?:\/\//i.test(p)) return p;
  return BASE + p.replace(/^\/+/, "");
}
function staticUrl(p) { return withBase(`data/${p}`); }

async function staticGet(path) {
  if (path === "/packages") {
    const all = await fetch(staticUrl("packages.json")).then(r => r.json());
    return { data: (all || []).map(p => ({ ...p, gallery: (p.gallery || []).map(withBase) })) };
  }
  if (path.startsWith("/packages/")) {
    const slug = path.split("/").pop();
    const all = await fetch(staticUrl("packages.json")).then(r => r.json());
    const item = (all || []).map(p => ({ ...p, gallery: (p.gallery || []).map(withBase) })).find(p => p.slug === slug) || null;
    return { data: item };
  }
  if (path.startsWith("/visa")) {
    const all = await fetch(staticUrl("visas.json")).then(r => r.json());
    return { data: all || [] };
  }
  return { data: null };
}

const http = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

export const api = {
  get: (path) => USE_STATIC ? staticGet(path) : http.get(path),
};
