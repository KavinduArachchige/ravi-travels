import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../lib/api'
import LeadForm from '../components/LeadForm'


export default function PackageDetails(){
const { slug } = useParams()
const [pkg,setPkg]=useState(null)
useEffect(()=>{ api.get(`/packages/${slug}`).then(r=>setPkg(r.data)) },[slug])
if(!pkg) return null
return (
<div className="container py-10 grid md:grid-cols-3 gap-8">
<div className="md:col-span-2">
<img src={pkg.gallery?.[0] || '/images/placeholder.jpg'} className="w-full h-80 object-cover rounded-2xl"/>
<h1 className="text-3xl font-bold mt-4">{pkg.title}</h1>
<p className="text-slate-600">{pkg.shortDescription}</p>
<div className="mt-4 flex flex-wrap gap-2">
{pkg.highlights?.map(h=> <span key={h} className="px-3 py-1 rounded-full bg-slate-100">{h}</span>)}
</div>
<h3 className="text-xl font-semibold mt-6">Itinerary</h3>
<ol className="mt-2 space-y-2">
{pkg.itinerary?.map(i=> (
<li key={i.day} className="card p-3"><b>Day {i.day}: {i.title}</b><div>{i.description}</div></li>
))}
</ol>
</div>
<div>
<div className="card p-4">
<div className="text-2xl font-bold">From LKR {pkg.priceFromLKR?.toLocaleString()}</div>
<div className="text-sm">{pkg.days} Days / {pkg.nights} Nights</div>
</div>
<div className="mt-4">
<LeadForm defaultType="package" packageSlug={pkg.slug}/>
</div>
</div>
</div>
)
}