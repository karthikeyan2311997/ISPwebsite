import { ArrowRight, CheckCircle } from 'lucide-react';

const highlights = [
  'Reduce costs up to 60%',
  'Dedicated accounting team',
  'US GAAP & Tax expertise',
  'Secure & confidential',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional accounting workspace"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/92 via-brand-900/80 to-brand-800/60" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-60 h-60 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-textclr-primary/10 border border-textclr-accent/20 rounded-full text-sm text-textclr-primary font-medium mb-6">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            Trusted by CPA Firms Globally
          </div>

          <h1 className="font-display text-shadow-sm text-4xl sm:text-5xl lg:text-6xl font-bold text-textclr-primary leading-tight mb-6">
            Your Financial Success,{' '}
            <span className="text-gold-400">Our Infinite Commitment.</span>
          </h1>

          <p className="text-lg sm:text-xl text-textclr-primary leading-relaxed mb-8 max-w-2xl">
            Reliable accounting outsourcing partner for global CPA firms &amp; businesses.
            We handle your back-office finance so you can focus on growth.
          </p>

          {/* Highlights */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-textclr-primary text-sm">
                <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-textclr-primary font-semibold rounded-lg transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-3 gap-4">
          {[
            { value: '60%', label: 'Cost Reduction' },            
            { value: '20+', label: 'Years Experience' },
            { value: '99%', label: 'Accuracy Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold text-gold-400">{stat.value}</div>
              <div className="text-xs text-textclr-primary font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
