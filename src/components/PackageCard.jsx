import { Link } from 'react-router-dom'
export default function PackageCard({p}){
return (
<Link to={`/packages/${p.slug}`} className="card overflow-hidden hover:shadow-2xl transition">
<img src={p.gallery?.[0] || '/images/placeholder.jpg'} alt={p.title} className="h-48 w-full object-cover"/>
<div className="p-4">
<h3 className="text-lg font-semibold">{p.title}</h3>
<p className="text-sm text-slate-600 line-clamp-2">{p.shortDescription}</p>
<div className="mt-3 flex items-center justify-between">
<span className="font-bold">From LKR {p.priceFromLKR?.toLocaleString()}</span>
<span className="text-sm">{p.days}D/{p.nights}N</span>
</div>
</div>
</Link>
)
}