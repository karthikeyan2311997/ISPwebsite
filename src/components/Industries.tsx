import { Building2, Home, ShoppingCart, Briefcase, Store, Calculator } from 'lucide-react';

const industries = [
  {
    icon: Calculator,
    title: 'CPA & Accounting Firms',
    desc: 'Back-office support so your firm can serve more clients without increasing headcount.',
    img: 'https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Building2,
    title: 'Construction Companies',
    desc: 'Job costing, progress billing, and contractor-specific bookkeeping handled with precision.',
    img: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Home,
    title: 'Real Estate Businesses',
    desc: 'Property management accounting, rental income tracking, and real estate tax compliance.',
    img: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    desc: 'Multi-channel sales reconciliation, inventory accounting, and sales tax management.',
    img: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    desc: 'Clean financials and billing support for consultants, agencies, and service businesses.',
    img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Store,
    title: 'Small & Medium Enterprises',
    desc: 'Scalable outsourced accounting giving SMEs the financial clarity of a larger organisation.',
    img: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Industries
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Specialised accounting support tailored to the unique requirements of your industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, title, desc, img }) => (
            <div
              key={title}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/3] cursor-default"
            >
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-gold-500/20 rounded-lg">
                    <Icon className="w-4 h-4 text-gold-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg leading-tight">{title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
