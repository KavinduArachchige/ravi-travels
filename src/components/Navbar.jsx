import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  const item = ({ isActive }) =>
    `nav-link ${isActive ? 'bg-slate-100 text-slate-900' : ''}`

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
      <div className="container flex items-center justify-between py-3">
        {/* Brand (logo + wordmark) */}
        <Link to="/" className="flex items-center gap-2" aria-label="Ravi Travels & Tours — Home">
          <img
            src="/images/ravi-logo.png"
            alt="Ravi Travels & Tours logo"
            className="h-10 w-auto rounded-md"
          />
          <span className="hidden sm:inline text-lg font-bold text-slate-900">
            Ravi Travels & Tours
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={item}>Home</NavLink>
          <NavLink to="/packages" className={item}>Packages</NavLink>
          <NavLink to="/dubai-visa" className={item}>Dubai Visa</NavLink>
          <NavLink to="/about" className={item}>About</NavLink>
          <NavLink to="/contact" className="btn btn-primary">Get a Quote</NavLink>
        </nav>

        {/* Mobile toggle */}
        <button onClick={()=>setOpen(v=>!v)} className="md:hidden p-2 rounded-lg hover:bg-slate-100" aria-label="Menu">
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden container pb-3">
          <div className="card p-3 flex flex-col gap-2">
            <NavLink to="/" onClick={()=>setOpen(false)} className={item}>Home</NavLink>
            <NavLink to="/packages" onClick={()=>setOpen(false)} className={item}>Packages</NavLink>
            <NavLink to="/dubai-visa" onClick={()=>setOpen(false)} className={item}>Dubai Visa</NavLink>
            <NavLink to="/about" onClick={()=>setOpen(false)} className={item}>About</NavLink>
            <NavLink to="/contact" onClick={()=>setOpen(false)} className="btn btn-primary">Get a Quote</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
