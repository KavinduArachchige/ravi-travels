import { Link } from "react-router-dom";

export default function About(){
  const phone = (import.meta.env.VITE_WHATSAPP || "").replace(/[^\d+]/g, "");
  const wa = phone ? `https://wa.me/${phone}?text=${encodeURIComponent("Hi Ravi Travels & Tours, I’m planning a Dubai trip!")}` : "#";

  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <section className="relative h-[42vh] md:h-[54vh] overflow-hidden">
        <img src="/images/about-hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container pb-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">About Ravi Travels & Tours</h1>
            <p className="mt-3 max-w-2xl text-white/90">
              Dubai-only specialists for Sri Lankan travellers — transparent pricing, curated experiences, and fast visa processing.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="container py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Our story</h2>
          <p className="mt-3 text-slate-600">
            We started Ravi Travels & Tours to make Dubai simple: clear itineraries, real prices, and quick support on WhatsApp.
            Every package is hand-picked with trusted partners in Dubai.
          </p>

          <ul className="mt-5 space-y-3">
            {[
              "Clear inclusions — no hidden fees",
              "Fast visa processing (typ. 3–5 working days)",
              "Trusted partners in Dubai",
              "Custom trips for families, couples & groups",
              "Friendly WhatsApp support",
            ].map((t)=>(
              <li key={t} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate-700">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img src="/images/about-collage.jpg" alt="Ravi Travels & Tours" className="w-full h-80 md:h-[420px] object-cover rounded-2xl shadow-xl"/>
          <div className="absolute -bottom-5 -left-5 hidden md:block rounded-2xl bg-white/80 backdrop-blur card p-4">
            <div className="text-sm text-slate-600">Since</div>
            <div className="text-2xl font-bold">2019</div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-12 bg-white">
        <div className="container">
          <h3 className="text-2xl font-bold">Why choose us</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <Feature title="Dubai-only experts" desc="Focused knowledge & the best partners."/>
            <Feature title="Transparent pricing" desc="Know exactly what’s included."/>
            <Feature title="Fast visa help" desc="Tourist visas for 30/60 days."/>
            <Feature title="Curated tours" desc="Desert, city, theme parks, luxury."/>
            <Feature title="Flexible for families" desc="We tailor plans to your dates & budget."/>
            <Feature title="WhatsApp support" desc="Quick replies before & during your trip."/>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container py-12 grid md:grid-cols-3 gap-6">
        <Stat number="1,200+" label="Happy travellers"/>
        <Stat number="3–5 days" label="Typical visa time"/>
        <Stat number="4.8★" label="Average reviews"/>
      </section>

      {/* CTA */}
      <section className="container pb-16">
        <div className="card p-6 md:p-8 md:flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Plan your Dubai trip with an expert</h3>
            <p className="text-slate-600 mt-1">Tell us your dates, travellers, and interests — we’ll propose a plan in hours.</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Link to="/contact" className="btn bg-slate-900 text-white">Get a Quote</Link>
            <a href={wa} target="_blank" rel="noreferrer" className="btn btn-primary">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* SEO: Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"TravelAgency",
            "name":"Ravi Travels & Tours",
            "areaServed":"Dubai, UAE",
            "address":{"@type":"PostalAddress","addressCountry":"LK","addressLocality":"Colombo"},
            "sameAs": [],
            "url": "https://example.com"
          })
        }}
      />
    </div>
  );
}

/* Small presentational helpers (no extra libs) */
function CheckIcon(){
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-emerald-500 mt-0.5" fill="currentColor">
      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
    </svg>
  );
}

function Feature({title, desc}){
  return (
    <div className="card p-5 hover:-translate-y-0.5 hover:shadow-2xl transition">
      <div className="text-lg font-semibold">{title}</div>
      <p className="text-slate-600 mt-1">{desc}</p>
    </div>
  );
}

function Stat({number, label}){
  return (
    <div className="card p-6 text-center">
      <div className="text-4xl font-extrabold tracking-tight">{number}</div>
      <div className="mt-1 text-slate-600">{label}</div>
    </div>
  );
}
