import { FileCheck, Cloud, Lock, ShieldCheck } from 'lucide-react';

const features = [
  { icon: FileCheck, title: 'NDA Compliance', desc: 'We sign Non-Disclosure Agreements before any client data is shared or processed.' },
  { icon: Cloud, title: 'Secure Cloud Access', desc: 'All systems are accessed via secured, access-controlled cloud platforms.' },
  { icon: Lock, title: 'Restricted Permissions', desc: 'Data access is strictly limited to assigned personnel on a need-to-know basis.' },
  { icon: ShieldCheck, title: 'Encrypted File Sharing', desc: 'All file transfers use industry-standard encryption to protect your sensitive data.' },
];

export default function Security() {
  return (
    <section className="py-24 bg-brand-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block px-3 py-1 bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest rounded-full mb-5">
              Security & Confidentiality
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5 leading-tight">
              Your Data is Safe With Us
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              We understand the sensitivity of financial data. Our multi-layer security framework ensures your clients' information is always protected and confidential.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="w-9 h-9 bg-gold-500/20 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-4.5 h-4.5 text-gold-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-1.5">{title}</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right – visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-72 h-72">
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-ping-slow" style={{ animationDuration: '4s' }} />
              <div className="absolute inset-4 rounded-full border border-white/10 animate-ping-slow" style={{ animationDuration: '6s' }} />
              <div className="absolute inset-8 rounded-full border border-white/10 animate-ping-slow" style={{ animationDuration: '8s' }} />
              {/* Center shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-brand-700 rounded-full flex items-center justify-center shadow-xl">
                  <ShieldCheck className="w-16 h-16 text-gold-400" />
                </div>
              </div>
              {/* Badge dots */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-10 h-10 bg-brand-800 border border-white/20 rounded-full flex items-center justify-center"
                  style={{
                    top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 110}px - 20px)`,
                    left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 110}px - 20px)`,
                  }}
                >
                  <span className="text-gold-400 text-xs font-bold">{['NDA', 'SSL', 'MFA', 'AES', '2FA'][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
