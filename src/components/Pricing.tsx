import { Clock, User, Package, Wrench, CheckCircle } from 'lucide-react';

const models = [
  {
    icon: Clock,
    title: 'Hourly Model',
    ideal: 'Ideal for variable or ad-hoc work',
    desc: 'Pay only for the hours worked. Perfect for projects with fluctuating volumes or one-time tasks.',
    features: ['Flexible engagement', 'Detailed time tracking', 'No minimum commitment', 'Scale up or down anytime'],
    highlight: false,
  },
  {
    icon: User,
    title: 'Dedicated Resource',
    ideal: 'Ideal for steady, ongoing workflows',
    desc: 'A full-time or part-time professional dedicated exclusively to your firm at a fixed monthly cost.',
    features: ['Exclusive resource', 'Deep client familiarity', 'Consistent quality', 'Direct communication'],
    highlight: true,
  },
  {
    icon: Package,
    title: 'Monthly Fixed Package',
    ideal: 'Ideal for predictable monthly work',
    desc: 'A bundled scope of services at a fixed monthly price — budgeting made simple.',
    features: ['Predictable costs', 'Defined deliverables', 'Priority support', 'Regular reporting'],
    highlight: false,
  },
  {
    icon: Wrench,
    title: 'Project-Based Pricing',
    ideal: 'Ideal for defined one-time projects',
    desc: 'Scoped, priced, and delivered. Great for catch-up accounting, tax season bursts, or cleanups.',
    features: ['Clear deliverables', 'Fixed price agreed upfront', 'No ongoing commitment', 'Fast turnaround'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Engagement Models
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Flexible Engagement Options
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Choose the model that best suits your workflow and budget. We adapt to how you work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map(({ icon: Icon, title, ideal, desc, features, highlight }) => (
            <div
              key={title}
              className={`relative rounded-2xl p-6 flex flex-col ${
                highlight
                  ? 'bg-brand-900 text-white shadow-xl ring-2 ring-gold-500'
                  : 'bg-slate-50 border border-slate-100 text-slate-900'
              }`}
            >
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gold-500 text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${highlight ? 'bg-white/15' : 'bg-brand-100'}`}>
                <Icon className={`w-5 h-5 ${highlight ? 'text-gold-400' : 'text-brand-700'}`} />
              </div>
              <h3 className={`font-display text-lg font-bold mb-1 ${highlight ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
              <p className={`text-xs font-medium mb-3 ${highlight ? 'text-gold-300' : 'text-brand-600'}`}>{ideal}</p>
              <p className={`text-sm leading-relaxed mb-5 ${highlight ? 'text-blue-200' : 'text-slate-500'}`}>{desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${highlight ? 'text-gold-400' : 'text-emerald-500'}`} />
                    <span className={highlight ? 'text-blue-100' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  highlight
                    ? 'bg-gold-500 hover:bg-gold-600 text-white'
                    : 'bg-brand-700 hover:bg-brand-800 text-white'
                }`}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
