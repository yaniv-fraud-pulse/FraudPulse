'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Reveal } from '../components/Reveal';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const API_ENDPOINT = 'https://fraudpulse-api-z67v4dmava-uc.a.run.app/api/v1/contact/demo';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company_website: '', enquiry: '' });
  const [emailError, setEmailError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'email') setEmailError('');
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(form.email)) { setEmailError('Please enter a valid email address'); return; }
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setResult('success');
      setForm({ name: '', email: '', company_website: '', enquiry: '' });
      setEmailError('');
    } catch {
      setResult('error');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full h-11 rounded-xl px-4 text-sm text-gray-900 outline-none transition-all bg-white";
  const inputStyle = { border: '1px solid #e5e7eb' };
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#5ba8b4';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(91,168,180,0.1)';
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#e5e7eb';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-8 pb-16 px-5 sm:px-10 bg-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />
          <div className="pointer-events-none absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
            style={{ background: 'radial-gradient(ellipse at center, rgba(165,208,216,0.15) 0%, transparent 60%)' }} />

          <div className="relative max-w-4xl mx-auto text-center">
            <Reveal animation="anim-fadeUp" delay={75}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-[-0.04em] mb-5 mt-20">
                Talk Directly With the Team{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 50%, #5ba8b4 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  Behind FraudPulse
                </span>
              </h1>
            </Reveal>
            <Reveal animation="anim-fadeUp" delay={150}>
              <p className="text-lg max-w-xl mx-auto text-gray-500">
                Book a live walkthrough or send us a message — we respond to every inquiry personally.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Two columns: Contact form + Book Demo ── */}
        <section className="py-20 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* ── Contact Us (sends email) ── */}
              <Reveal animation="anim-slideLeft" delay={0} className="flex flex-col">
                <div className="rounded-2xl p-8 sm:p-10 bg-white border h-full flex flex-col" style={{ borderColor: '#e5e7eb' }}>
                  <div className="mb-7">
                    <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-2 text-[#5ba8b4]">Contact Us</p>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-[-0.03em]">Send Us a Message</h2>
                    <p className="text-sm text-gray-400 mt-1">We&apos;ll get back to you within 24 hours.</p>
                  </div>

                  {result === 'success' ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-8">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(91,168,180,0.1)', border: '1px solid rgba(91,168,180,0.25)' }}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#5ba8b4' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-900">Message sent!</p>
                      <p className="text-sm text-gray-400">We&apos;ll be in touch shortly.</p>
                      <button onClick={() => setResult(null)} className="text-sm text-[#5ba8b4] hover:underline">Send another</button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-400">Full Name *</label>
                          <input type="text" id="name" name="name" required
                            value={form.name} onChange={handleChange} placeholder="Jane Smith"
                            className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-400">Work Email *</label>
                          <input type="email" id="email" name="email" required
                            value={form.email} onChange={handleChange} placeholder="jane@company.com"
                            className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                          {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="company_website" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-400">Company Website</label>
                        <input type="url" id="company_website" name="company_website"
                          value={form.company_website} onChange={handleChange} placeholder="https://yourcompany.com"
                          className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="enquiry" className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-400">Tell us about your fraud challenge</label>
                        <textarea id="enquiry" name="enquiry" rows={5}
                          value={form.enquiry} onChange={handleChange}
                          placeholder="e.g. We process ~10K transactions/month and are seeing high chargeback rates on Shopify..."
                          className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition-all resize-none bg-white"
                          style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                      {result === 'error' && (
                        <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly.</p>
                      )}
                      <button type="submit" disabled={submitting}
                        className="inline-flex h-12 w-full items-center justify-center rounded-[10px] text-sm font-bold transition-all hover:-translate-y-px text-white disabled:opacity-60"
                        style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)', boxShadow: '0 4px 20px rgba(91,168,180,0.3)' }}>
                        {submitting ? 'Sending…' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>

              {/* ── Book a Demo (cal.com) ── */}
              <Reveal animation="anim-slideRight" delay={75} className="flex flex-col">
                <div className="rounded-2xl p-8 sm:p-10 bg-white border h-full flex flex-col" style={{ borderColor: '#e5e7eb' }}>
                  <div className="mb-7">
                    <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-2 text-[#7d6ba0]">Book a Demo</p>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-[-0.03em]">See It Live on Your Data</h2>
                    <p className="text-sm text-gray-400 mt-1">30-minute walkthrough with Yaniv — no prep required.</p>
                  </div>

                  <div className="flex flex-col gap-5 flex-1">
                    <div className="space-y-5">
                      {[
                    
                        { n: '1', text: 'Live walkthrough of the AI advisor surfacing patterns and recommendations.' },
                        { n: '2', text: 'Explain How FRaudPulse can help you reduce chargebacks and increase conversions.' },
                        { n: '3', text: 'Answer any questions you have about FraudPulse.' },
                        { n: '4', text: 'Get a 14-day free trial, no credit card required.' },
                      ].map(({ n, text }) => (
                        <div key={n} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{ background: 'rgba(125,107,160,0.08)', border: '1px solid rgba(125,107,160,0.25)', color: '#7d6ba0' }}>{n}</span>
                          <p className="text-sm leading-relaxed text-gray-500">{text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 flex flex-col gap-4">
                      <a
                        href="https://cal.com/yaniv-hayun/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] text-sm font-bold transition-all hover:-translate-y-px text-white"
                        style={{ background: 'linear-gradient(135deg, #7d6ba0 0%, #6455a0 100%)', boxShadow: '0 4px 20px rgba(125,107,160,0.3)' }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Book a 30-Minute Demo
                      </a>
                      <div className="text-center">
                        <p className="text-xs text-gray-400">Or email us directly at{' '}
                          <a href="mailto:hello@fraud-pulse.com" className="text-[#5ba8b4] hover:underline">hello@fraud-pulse.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
