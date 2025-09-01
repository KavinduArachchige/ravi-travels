import axios from "axios";
const USE_STATIC = import.meta.env.VITE_USE_STATIC === "true";
const BASE = import.meta.env.BASE_URL || "/";
const http = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

const withBase = (p)=> !p||/^https?:\/\//i.test(p) ? p : BASE + p.replace(/^\/+/, "");
const staticUrl = (p)=> withBase(`data/${p}`);

async function staticGet(path){
  if(path==="/packages"){
    const all = await fetch(staticUrl("packages.json")).then(r=>r.json());
    return { data: (all||[]).map(p=>({...p, gallery:(p.gallery||[]).map(withBase)})) };
  }
  if(path.startsWith("/packages/")){
    const slug = path.split("/").pop();
    const all = await fetch(staticUrl("packages.json")).then(r=>r.json());
    const item=(all||[]).map(p=>({...p, gallery:(p.gallery||[]).map(withBase)})).find(p=>p.slug===slug)||null;
    return { data:item };
  }
  if(path.startsWith("/visa")){
    const all = await fetch(staticUrl("visas.json")).then(r=>r.json());
    return { data: all||[] };
  }
  return { data:null };
}
export const api = { get: (p)=> USE_STATIC ? staticGet(p) : http.get(p) };
