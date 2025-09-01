export default function Hero(){
return (
<section className="relative h-[70vh] md:h-[78vh] overflow-hidden">
<video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
<source src="/media/dubai-hero.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-black/30"/>
<div className="relative z-10 h-full flex items-center">
<div className="container text-white">
<h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">Dubai tours & visa assistance for Sri Lankans</h1>
<p className="mt-4 max-w-2xl text-white/90">Hand‑picked experiences, transparent pricing, and fast visa processing.</p>
<div className="mt-6 flex flex-wrap gap-3">
<a href="#featured" className="btn-primary">Explore Packages</a>
<a href="/dubai-visa" className="btn bg-white text-slate-900">Visa Information</a>
</div>
</div>
</div>
</section>
)
}