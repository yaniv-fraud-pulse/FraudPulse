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

  const inputClass = "w-full h-14 rounded-xl px-4 text-base text-gray-900 outline-none transition-all bg-white";
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
                Send us a message — we respond to every inquiry personally.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Contact form ── */}
        <section className="py-20 px-5 sm:px-10 bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto">
            <Reveal animation="anim-scaleIn" delay={0} className="flex flex-col">
              <div className="rounded-2xl p-10 sm:p-12 bg-white border h-full flex flex-col" style={{ borderColor: '#e5e7eb' }}>
                <div className="mb-8">
                  <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-gray-900 tracking-[-0.03em]">Send Us a Message</h2>
                  <p className="text-base sm:text-lg text-gray-400 mt-2">We&apos;ll get back to you within 24 hours.</p>
                </div>

                {result === 'success' ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-8">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(91,168,180,0.1)', border: '1px solid rgba(91,168,180,0.25)' }}>
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#5ba8b4' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">Message sent!</p>
                    <p className="text-base text-gray-400">We&apos;ll be in touch shortly.</p>
                    <button onClick={() => setResult(null)} className="text-base text-[#5ba8b4] hover:underline">Send another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-400">Full Name *</label>
                        <input type="text" id="name" name="name" required
                          value={form.name} onChange={handleChange} placeholder="Jane Smith"
                          className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-400">Work Email *</label>
                        <input type="email" id="email" name="email" required
                          value={form.email} onChange={handleChange} placeholder="jane@company.com"
                          className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                        {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company_website" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-400">Company Website</label>
                      <input type="url" id="company_website" name="company_website"
                        value={form.company_website} onChange={handleChange} placeholder="https://yourcompany.com"
                        className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="enquiry" className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-400">Tell us about your fraud challenge</label>
                      <textarea id="enquiry" name="enquiry" rows={5}
                        value={form.enquiry} onChange={handleChange}
                        placeholder="e.g. We process ~10K transactions/month and are seeing high chargeback rates on Shopify..."
                        className="w-full rounded-xl px-4 py-3 text-base text-gray-900 outline-none transition-all resize-none bg-white"
                        style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    {result === 'error' && (
                      <p className="text-base text-red-500">Something went wrong. Please try again or email us directly.</p>
                    )}
                    <button type="submit" disabled={submitting}
                      className="inline-flex h-14 w-full items-center justify-center rounded-[10px] text-base sm:text-lg font-bold transition-all hover:-translate-y-px text-white disabled:opacity-60"
                      style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)', boxShadow: '0 4px 20px rgba(91,168,180,0.3)' }}>
                      {submitting ? 'Sending…' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
