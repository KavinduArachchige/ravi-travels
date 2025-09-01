import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import PackageCard from '../components/PackageCard'


export default function Packages(){
const [items,setItems]=useState([])
const [theme,setTheme]=useState('')
useEffect(()=>{ api.get('/packages').then(r=>setItems(r.data)) },[])
const filtered = theme? items.filter(i=>i.themes?.includes(theme)) : items
return (
<div className="container py-10">
<div className="flex items-center justify-between">
<h1 className="text-3xl font-bold">Dubai Packages</h1>
<select className="input w-44" value={theme} onChange={e=>setTheme(e.target.value)}>
<option value="">All themes</option>
<option value="desert">Desert</option>
<option value="city">City</option>
<option value="family">Family</option>
<option value="luxury">Luxury</option>
</select>
</div>
<div className="grid md:grid-cols-3 gap-6 mt-6">
{filtered.map(p=> <PackageCard key={p._id} p={p}/>) }
</div>
</div>
)
}