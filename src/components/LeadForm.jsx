import { useState } from 'react'
import { api } from '../lib/api'


export default function LeadForm({ defaultType='custom', packageSlug }){
const [form,setForm]=useState({ type:defaultType, name:'', email:'', phone:'', travelers:1, startDate:'', notes:'', packageSlug })
const [done,setDone]=useState(false)


async function submit(e){
e.preventDefault()
const payload = { ...form, travelers: Number(form.travelers)||undefined, startDate: form.startDate||undefined }
await api.post('/leads', payload)
setDone(true)
}


if(done) return <div className="p-4 card">Thank you! We will contact you shortly.</div>


return (
<form onSubmit={submit} className="card p-4 grid gap-3">
<div className="grid md:grid-cols-2 gap-3">
<input className="input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
<input className="input" placeholder="Email (optional)" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
<input className="input" placeholder="Phone (optional)" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
<input className="input" type="number" min="1" placeholder="Travelers" value={form.travelers} onChange={e=>setForm({...form,travelers:e.target.value})} />
<input className="input" type="date" value={form.startDate} onChange={e=>setForm({...form,startDate:e.target.value})} />
</div>
<textarea className="input min-h-28" placeholder="Notes / interests (e.g., Desert Safari, Burj, yacht)" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})}/>
<button className="btn-primary">Send Inquiry</button>
</form>
)
}