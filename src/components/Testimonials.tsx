import { Quote, Star,  } from 'lucide-react';

const testimonials = [
  {
    quote: 'Professional, reliable, and accurate accounting support. Infinity Serv Pro has been a game-changer for our firm during tax season.',
    author: 'Managing Partner',
    company: 'CA Firm, India',
    rating: 4.5,
  },
  {
    quote: 'The team handled our bookkeeping backlog in record time. Quality was exceptional and communication was always clear.',
    author: 'Finance Director',
    company: 'Real Estate Group, India',
    rating: 5,
  },
  {
    quote: 'We outsourced our client bookkeeping to Infinity Serv Pro and cut costs by over 50%. Highly recommend their dedicated resource model.',
    author: 'Founder',
    company: 'Automobile Dealer, India',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Trusted by CPA firms and businesses across the US and globally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, author, company, rating }) => (
            <div key={company} className="relative bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-md transition-all duration-300">
              <Quote className="w-8 h-8 text-brand-200 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{author[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{author}</div>
                  <div className="text-slate-500 text-xs">{company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust logos row */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-widest mb-8">Software Expertise</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['QuickBooks', 'Xero', 'Zoho Books', 'Wave', 'Sage', 'Tally'].map((name) => (
              <div key={name} className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-semibold text-slate-600 text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
