import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import { supabase, supabaseKey, supabaseUrl, type ContactFormData } from '../lib/supabase';

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const services = [
    'Accounting & Bookkeeping',
    'US Tax Preparation',
    'CPA Firm Support',
    'Financial Reporting',
    'Other',
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const { error: databaseError } = await supabase
      .from('contact_form_submissions')
      .insert([form]);

    if (databaseError) {
      console.error('Supabase Error:', databaseError.message, databaseError.details);
      setSubmitError('We could not send your message right now. Please try again.');
      setIsSubmitting(false);
      return;
    }

    try {
      const emailResponse = await fetch(`${supabaseUrl}/functions/v1/resend-email`, {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          data: form,
        }),
      });

      if (!emailResponse.ok) {
        console.error('Failed to send email notification:', await emailResponse.text());
      }
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
    }

    setSubmitted(true);
    setForm({ name: '', email: '', company: '', service: '', message: '' });
    setIsSubmitting(false);

    window.setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Schedule a Free Consultation
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Tell us about your requirements and we'll get back to you within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-brand-900 rounded-2xl p-8 text-white">
              <h3 className="font-display text-xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg flex-shrink-0">
                    <Mail className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-300 font-medium mb-0.5">Email</div>
                    <div className="text-white text-sm">info@infinityservpro.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg flex-shrink-0">
                    <Phone className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-300 font-medium mb-0.5">Phone</div>
                    <div className="text-white text-sm">+91 999 468 6622 </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-300 font-medium mb-0.5">Address</div>
                    <div className="text-white text-sm">1/12 A-1 GCT Nagar 2, Vadavalli, Coimbatore - 41</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg flex-shrink-0">
                    <Linkedin className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-300 font-medium mb-0.5">LinkedIn</div>
                    <div className="text-white text-sm">
                      <a href="https://www.linkedin.com/in/ispvimala/">
                      Infinity Serv Pro
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-3">Response Time</h4>
              <p className="text-sm text-slate-500">We respond to all enquiries within <strong className="text-slate-700">1 business day</strong>. For urgent requirements, please indicate in your message.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500">Thank you for reaching out. We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@firm.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400 text-sm transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Company / Firm Name</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your CPA firm or business"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Required</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-700 text-sm transition-all bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                    <textarea
                      name="message"                      
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements, volume of work, or any specific questions..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder-slate-400 text-sm transition-all resize-none"
                    />
                  </div>
                  {submitError && (
                    <p role="alert" className="text-sm text-red-600">
                      {submitError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand-700 hover:bg-brand-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors shadow-sm text-sm"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
