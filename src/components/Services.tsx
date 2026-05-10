import { BookOpen, FileText, Briefcase, Monitor, BarChart2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Accounting & Bookkeeping',
    color: 'blue',
    items: [
      'Daily bookkeeping',
      'Bank & credit card reconciliation',
      'Accounts payable & receivable',
      'General ledger maintenance',
      'Financial statement preparation',
      'Month-end & year-end closing',
    ],
  },
  {
    icon: FileText,
    title: 'US Tax Preparation Support',
    color: 'emerald',
    items: [
      'Individual Tax Returns (Form 1040)',
      'Business Returns (1120, 1120S, 1065)',
      'Schedule preparation',
      'Workpaper preparation',
      'Tax data organization',
      'E-file ready documentation',
    ],
  },
  {
    icon: Briefcase,
    title: 'CPA Firm Support',
    color: 'amber',
    items: [
      'Back-office accounting',
      'Audit support workpapers',
      'Client bookkeeping management',
      'Payroll processing assistance',
      'Cleanup & catch-up accounting',
    ],
  },
  {
    icon: Monitor,
    title: 'Accounting Software Expertise',
    color: 'sky',
    items: [
      'QuickBooks Online / Desktop',
      'Xero',
      'Zoho Books',
      'Wave Accounting',
      'Sage',
    ],
  },
  {
    icon: BarChart2,
    title: 'Financial Reporting',
    color: 'rose',
    items: [
      'MIS Reporting',
      'Budget vs Actual analysis',
      'Cash flow reports',
      'Management reports',
    ],
  },
];

const colorMap: Record<string, { bg: string; badge: string; icon: string; bullet: string }> = {
  blue:    { bg: 'bg-brand-50',   badge: 'bg-brand-100 text-brand-700',   icon: 'bg-brand-600',   bullet: 'bg-brand-400' },
  emerald: { bg: 'bg-emerald-50', badge: 'bg-emerald-100 text-emerald-700', icon: 'bg-emerald-600', bullet: 'bg-emerald-400' },
  amber:   { bg: 'bg-amber-50',   badge: 'bg-amber-100 text-amber-700',   icon: 'bg-amber-500',   bullet: 'bg-amber-400' },
  sky:     { bg: 'bg-sky-50',     badge: 'bg-sky-100 text-sky-700',       icon: 'bg-sky-600',     bullet: 'bg-sky-400' },
  rose:    { bg: 'bg-rose-50',    badge: 'bg-rose-100 text-rose-700',     icon: 'bg-rose-600',    bullet: 'bg-rose-400' },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Accounting Solutions
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            End-to-end accounting and finance support designed for CPA firms and growing businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, color, items }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`group rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden`}
              >
                <div className={`${c.bg} px-6 pt-6 pb-4`}>
                  <div className={`w-11 h-11 ${c.icon} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900">{title}</h3>
                </div>
                <div className="px-6 py-5">
                  <ul className="space-y-2.5 mb-5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className={`flex-shrink-0 w-1.5 h-1.5 ${c.bullet} rounded-full mt-1.5`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors`}
                  >
                    Get Started <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="rounded-2xl bg-brand-900 text-white p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold mb-3">Need a custom solution?</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                We tailor our services to your firm's exact needs. Let's discuss how we can support your practice.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
