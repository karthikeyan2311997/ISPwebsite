import { TrendingDown, UserCheck, Zap, Layers, Target } from 'lucide-react';

const benefits = [
  { icon: TrendingDown, value: 'Up to 60%', label: 'Cost Reduction', desc: 'Slash overhead dramatically without compromising on service quality or accuracy.' },
  { icon: UserCheck, value: 'Expert Team', label: 'Skilled Professionals', desc: 'Instant access to qualified accountants trained in US GAAP and global standards.' },
  { icon: Zap, value: 'Faster', label: 'Turnaround Times', desc: 'Streamlined workflows ensure your deliverables arrive on time, every time.' },
  { icon: Layers, value: 'Scalable', label: 'Flexible Capacity', desc: 'Ramp up or down based on your workload — no hiring delays or severance costs.' },
  { icon: Target, value: 'Focused', label: 'Core Business Growth', desc: 'Free your team from back-office tasks to concentrate on revenue-generating work.' },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Client Benefits
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            The Infinity Serv Pro Advantage
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Our clients consistently report measurable improvements in efficiency, cost, and quality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {benefits.map(({ icon: Icon, value, label, desc }) => (
            <div
              key={label}
              className="group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-brand-200 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-brand-50 group-hover:bg-brand-700 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <Icon className="w-6 h-6 text-brand-700 group-hover:text-white transition-colors" />
              </div>
              <div className="font-display text-2xl font-bold text-brand-700 mb-1">{value}</div>
              <div className="font-semibold text-slate-900 text-sm mb-2">{label}</div>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
