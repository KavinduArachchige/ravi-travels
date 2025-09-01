import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import Hero from '../components/Hero'
import PackageCard from '../components/PackageCard'


export default function Home(){
const [items,setItems]=useState([])
useEffect(()=>{ api.get('/packages?featured=true').then(r=>setItems(r.data)) },[])
return (
<>
<Hero/>
<section id="featured" className="container py-12">
<h2 className="text-2xl md:text-3xl font-bold">Top Dubai Packages</h2>
<p className="text-slate-600">Hand‑picked experiences loved by our travelers.</p>
<div className="grid md:grid-cols-3 gap-6 mt-6">
{items.map(p=> <PackageCard key={p._id} p={p}/>) }
</div>
</section>


<section className="bg-gradient-brand text-white py-14">
<div className="container grid md:grid-cols-3 gap-6">
<div className="card p-6 bg-white/10 text-white">
<div className="text-3xl font-bold">Fast Visa</div>
<p className="text-white/90">Quick processing for 30 & 60 days tourist visas.</p>
</div>
<div className="card p-6 bg-white/10 text-white">
<div className="text-3xl font-bold">Curated Tours</div>
<p className="text-white/90">From desert thrills to skyline views.</p>
</div>
<div className="card p-6 bg-white/10 text-white">
<div className="text-3xl font-bold">Transparent Prices</div>
<p className="text-white/90">No hidden fees. Clear inclusions.</p>
</div>
</div>
</section>
</>
)
}