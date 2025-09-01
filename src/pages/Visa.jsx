import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import LeadForm from '../components/LeadForm'


export default function Visa(){
const [visas,setVisas]=useState([])
useEffect(()=>{ api.get('/visa').then(r=>setVisas(r.data)) },[])
return (
<div className="container py-10">
<h1 className="text-3xl font-bold">Dubai Tourist Visa</h1>
<p className="text-slate-600">Clear requirements, fees, and processing times.</p>
<div className="grid md:grid-cols-2 gap-6 mt-6">
<div className="space-y-4">
{visas.map(v=> (
<div key={v._id} className="card p-4">
<div className="flex items-center justify-between">
<div className="text-xl font-semibold">{v.name}</div>
<div className="font-bold">LKR {v.feeLKR?.toLocaleString()}</div>
</div>
<div className="text-sm text-slate-600">Processing: {v.processingDays} working days</div>
<h4 className="font-semibold mt-2">Requirements</h4>
<ul className="list-disc list-inside text-sm text-slate-700">
{v.requirements?.map(r=> <li key={r}>{r}</li>)}
</ul>
{v.faqs?.length>0 && (
<details className="mt-2">
<summary className="cursor-pointer font-medium">FAQs</summary>
<ul className="text-sm text-slate-700 list-disc list-inside">
{v.faqs.map(f=> <li key={f.q}><b>{f.q}</b> — {f.a}</li>)}
</ul>
</details>
)}
</div>
))}
</div>
<div>
<LeadForm defaultType="visa"/>
</div>
</div>
</div>
)
}