import { TrendingUp, Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';

const services = [
  'Accounting & Bookkeeping',
  'US Tax Preparation',
  'CPA Firm Support',
  'Financial Reporting',
  'Accounting Software',
];

const industries = [
  'CPA & Accounting Firms',
  'Construction',
  'Real Estate',
  'E-Commerce',
  'Professional Services',
  'SMEs',
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <div className="py-12 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-1">Ready to reduce your accounting costs?</h3>
            <p className="text-slate-400 text-sm">Schedule a free, no-obligation consultation today.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Main footer grid */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-brand-700 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white">Infinity Serv Pro</div>
                <div className="text-xs text-slate-400">Financial Excellence</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Your trusted accounting outsourcing partner for CPA firms and businesses worldwide.
            </p>
            <div className="space-y-2">
              <a href="mailto:info@infinityservpro.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-gold-400 transition-colors">
                <Mail className="w-4 h-4" /> info@infinityservpro.com
              </a>
              <a href="tel:+919994686622" className="flex items-center gap-2 text-sm text-slate-400 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4" /> +91 999 468 6622
              </a>
              <a href="https://www.linkedin.com/in/infinity-serv-pro/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-gold-400 transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-slate-400 hover:text-gold-400 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Industries</h4>
            <ul className="space-y-2.5">
              {industries.map((ind) => (
                <li key={ind}>
                  <a href="#industries" className="text-sm text-slate-400 hover:text-gold-400 transition-colors">
                    {ind}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Our Process', href: '#process' },
                { label: 'Contact', href: '#contact' },
                
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-slate-400 hover:text-gold-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} Infinity Serv Pro. All rights reserved.</span>
          <span>Your Financial Success, Our Infinite Commitment.</span>
        </div>
      </div>
    </footer>
  );
}
