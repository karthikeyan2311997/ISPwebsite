import { Target, Eye, ShieldCheck, Zap, Users, DollarSign, Clock } from 'lucide-react';

const whyUs = [
  { icon: Users, title: 'Experienced Professionals', desc: 'Qualified accountants with deep domain knowledge across industries.' },
  { icon: ShieldCheck, title: 'Data Security', desc: 'NDA compliance, encrypted transfers, and restricted access protocols.' },
  { icon: Zap, title: 'Quick Turnaround', desc: 'Fast, reliable delivery without compromising accuracy.' },
  { icon: DollarSign, title: 'Cost-Effective', desc: 'Significantly reduce overhead while maintaining premium quality.' },
  { icon: Clock, title: 'Dedicated Support', desc: 'A dedicated team always available when you need them.' },
  { icon: Target, title: 'US Tax Expertise', desc: 'In-depth knowledge of US GAAP, tax codes, and compliance.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Who We Are
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            A team of qualified accounting professionals specializing in outsourced accounting and tax support, serving international clients and US CPA firms.
          </p>
        </div>

        {/* Mission / Vision cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-brand-900 text-white p-8">
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -left-6 w-32 h-32 rounded-full bg-white/5" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-gold-500/20 rounded-lg">
                  <Target className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-bold">Our Mission</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                To deliver accurate, secure, and cost-effective accounting solutions that help clients scale efficiently and focus on strategic growth.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-slate-800 text-white p-8">
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -left-6 w-32 h-32 rounded-full bg-white/5" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-gold-500/20 rounded-lg">
                  <Eye className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-bold">Our Vision</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To become a trusted global outsourcing partner for accounting and finance services, recognised for reliability and precision.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
            Why Choose Infinity Serv Pro
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex gap-4 p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 p-2.5 bg-brand-100 group-hover:bg-brand-600 rounded-lg transition-colors">
                  <Icon className="w-5 h-5 text-brand-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
