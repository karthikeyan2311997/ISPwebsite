import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-brand-700' : 'bg-white/20'}`}>
            <TrendingUp className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-white'}`} />
          </div>
          <div className="leading-tight">
            <span className={`block font-display font-bold text-lg leading-none ${scrolled ? 'text-brand-900' : 'text-white'}`}>
              Infinity Serv Pro
            </span>
            <span className={`block text-xs font-medium tracking-wide ${scrolled ? 'text-brand-600' : 'text-blue-200'}`}>
              Financial Excellence
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                scrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
          >
            Free Consultation
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-4 py-3 bg-gold-500 text-white font-semibold rounded-lg text-center transition-colors hover:bg-gold-600"
              onClick={() => setOpen(false)}
            >
              Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
