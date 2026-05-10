import { MessageSquare, Upload, Users, CheckSquare, Send } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Requirement Discussion',
    desc: "We begin with a detailed conversation to understand your firm's needs, volume, software, and timelines.",
  },
  {
    icon: Upload,
    step: '02',
    title: 'Secure Data Transfer',
    desc: 'You share files through our encrypted, secure channels. NDA is signed before any data is received.',
  },
  {
    icon: Users,
    step: '03',
    title: 'Task Allocation',
    desc: 'Work is assigned to dedicated professionals with domain expertise matching your requirements.',
  },
  {
    icon: CheckSquare,
    step: '04',
    title: 'Review & Quality Check',
    desc: 'Every deliverable goes through a rigorous internal review process before it reaches you.',
  },
  {
    icon: Send,
    step: '05',
    title: 'Delivery & Feedback',
    desc: 'Timely delivery with full documentation. We welcome feedback to continuously improve.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            How We Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            A structured, transparent workflow designed to deliver quality outcomes every time.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-100" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="relative flex flex-col items-center text-center">
                {/* Circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-white border-4 border-brand-100 flex items-center justify-center shadow-md group-hover:border-brand-600 mb-5">
                  <div className="w-14 h-14 bg-brand-700 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-gold-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.replace('0', '')}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile steps */}
        <div className="lg:hidden space-y-4">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="flex gap-4 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="flex-shrink-0">
                <div className="relative w-14 h-14 bg-brand-700 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gold-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.replace('0', '')}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
