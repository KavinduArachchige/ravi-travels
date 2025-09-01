import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  const phone = (import.meta.env.VITE_WHATSAPP || "").replace(/[^\d+]/g, "");
  const wa = phone ? `https://wa.me/${phone}` : "#";

  return (
    <footer className="mt-16 bg-slate-900 text-slate-300">
      {/* gradient accent */}
      <div className="h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-rose-500" />

      <div className="container py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/ravi-logo.png"
              alt="Ravi Travels & Tours logo"
              className="h-12 w-auto rounded-md"
            />
            <span className="text-white text-lg font-semibold">
              Ravi Travels & Tours
            </span>
          </Link>
          <p className="text-slate-400">
            Dubai-only trips, visas, and curated experiences for Sri Lankan
            travellers.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3 pt-1">
            <a href={wa} target="_blank" rel="noreferrer" className="footer-social" aria-label="WhatsApp">
              {/* WhatsApp */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0 11.99 11.99 0 0 0 .03 12c0 2.11.55 4.1 1.6 5.88L0 24l6.31-1.63a12.07 12.07 0 0 0 5.69 1.45h.01A11.99 11.99 0 0 0 24.01 12c0-3.2-1.25-6.21-3.49-8.52zM12 22.03h-.01a9.96 9.96 0 0 1-5.08-1.39l-.36-.21-3.74.97.99-3.64-.23-.37A10 10 0 1 1 12 22.03zm5.77-7.41c-.31-.16-1.83-.9-2.11-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.95 1.2-.17.2-.35.23-.65.08-.31-.16-1.29-.48-2.45-1.53-.9-.8-1.51-1.78-1.69-2.09-.17-.31-.02-.48.13-.63.14-.14.31-.37.46-.56.15-.19.2-.31.31-.52.11-.2.05-.39-.03-.55-.08-.16-.68-1.63-.94-2.23-.25-.6-.5-.52-.68-.53l-.58-.01c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.1 4.52.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.83-.75 2.09-1.48.26-.73.26-1.36.18-1.48-.08-.12-.28-.2-.59-.36z"/>
              </svg>
            </a>

            <a href="#" className="footer-social" aria-label="Facebook">
              {/* Facebook */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32V22c4.78-.79 8.44-4.94 8.44-9.94z"/>
              </svg>
            </a>

            <a href="#" className="footer-social" aria-label="Instagram">
              {/* Instagram */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.75 6.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6.5z"/>
              </svg>
            </a>

            <a href="#" className="footer-social" aria-label="YouTube">
              {/* YouTube */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.11 3.5 12 3.5 12 3.5s-7.11 0-9.38.56A3.02 3.02 0 0 0 .5 6.2C0 8.47 0 12 0 12s0 3.53.5 5.8a3.02 3.02 0 0 0 2.12 2.14C4.89 20.5 12 20.5 12 20.5s7.11 0 9.38-.56A3.02 3.02 0 0 0 23.5 17.8C24 15.53 24 12 24 12s0-3.53-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-white font-semibold mb-3">Explore</h4>
          <ul className="space-y-2">
            <li><Link to="/packages" className="footer-link">Packages</Link></li>
            <li><Link to="/dubai-visa" className="footer-link">Dubai Visa</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a className="footer-link" href="#">Privacy Policy</a></li>
            <li><a className="footer-link" href="#">Terms & Conditions</a></li>
            <li><a className="footer-link" href="#">Refund Policy</a></li>
            <li><a className="footer-link" href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li><a className="footer-link" href={`tel:+9477XXXXXXX`}>+94 75 753 5371</a></li>
            <li><a className="footer-link" href="mailto:info@ravitravels.lk">info@ravitravels.lk</a></li>
            <li><span className="text-slate-400">Colombo, Sri Lanka</span></li>
          </ul>
          <a href={wa} target="_blank" rel="noreferrer" className="btn btn-primary mt-4 inline-flex">
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {year} Kavindu Travels & Tours. All rights reserved.</p>
          <p className="text-slate-400">Made with ♥ in Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
