'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import {
  WEBINAR,
  WEBINAR_API_ENDPOINT,
  buildRegistrationPayload,
} from '../lib/webinar';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WebinarPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    job_title: '',
    consent: false,
  });
  const [emailError, setEmailError] = useState('');
  const [consentError, setConsentError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (name === 'email') setEmailError('');
    if (name === 'consent') setConsentError('');
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(form.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (!form.consent) {
      setConsentError('Please accept to continue.');
      return;
    }

    setSubmitting(true);
    setResult(null);
    try {
      const payload = buildRegistrationPayload(form);
      const res = await fetch(WEBINAR_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed');
      setResult('success');
      setForm({ name: '', email: '', company: '', job_title: '', consent: false });
      setEmailError('');
      setConsentError('');
    } catch {
      setResult('error');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full h-14 rounded-xl px-4 text-base text-gray-900 outline-none transition-all bg-white';
  const inputStyle = { border: '1px solid #e5e7eb' };
  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = '#5ba8b4';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(91,168,180,0.1)';
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = '#e5e7eb';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pb-16 px-5 sm:px-10 bg-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div
            className="pointer-events-none absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(165,208,216,0.18) 0%, transparent 60%)',
            }}
          />

          <div className="relative max-w-6xl mx-auto pt-12 sm:pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              {/* Left: details */}
              <div>
                <Reveal animation="anim-fadeUp" delay={75}>
                  <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-[#5ba8b4]">
                    Free live webinar
                  </p>
                  <h1 className="font-extrabold text-gray-900 tracking-[-0.04em] leading-[1.1] mb-5 text-[2.25rem] sm:text-[3rem]">
                    {WEBINAR.title}
                  </h1>
                  <p className="text-[1.125rem] leading-[1.75] text-gray-500 mb-8">
                    {WEBINAR.subtitle}
                  </p>
                </Reveal>

                <Reveal animation="anim-fadeUp" delay={150}>
                  <div className="flex flex-col gap-3 mb-10">
                    {[
                      { label: 'Date', value: WEBINAR.dateLabel },
                      { label: 'Time', value: `10:00 AM · ${WEBINAR.timezoneLabel}` },
                      { label: 'Duration', value: WEBINAR.durationLabel },
                      { label: 'Format', value: 'Google Meet (link sent by email)' },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex items-start gap-3 rounded-[12px] border bg-[#f8f9fa] px-4 py-3"
                        style={{ borderColor: '#e5e7eb' }}
                      >
                        <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-gray-400 w-20 shrink-0 pt-0.5">
                          {label}
                        </span>
                        <span className="text-[0.9375rem] font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal animation="anim-fadeUp" delay={225}>
                  <h2 className="font-bold text-gray-900 text-[1.25rem] mb-4 tracking-[-0.02em]">
                    What we&apos;ll dig into together
                  </h2>
                  <ul className="flex flex-col gap-3 mb-10">
                    {WEBINAR.agenda.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#5ba8b4]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-[1.0625rem] text-gray-600 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal animation="anim-fadeUp" delay={300}>
                  <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase mb-4 text-gray-400">
                    Speakers
                  </p>
                  <div className="flex flex-col gap-4">
                    {WEBINAR.speakers.map((s) => (
                      <div key={s.name} className="flex items-center gap-4">
                        <div className="relative w-14 h-14 flex-shrink-0">
                          <Image
                            src={s.image}
                            alt={`${s.name} — ${s.role}, FraudPulse`}
                            fill
                            className="rounded-full object-cover object-top"
                            style={{
                              border: '2px solid rgba(61,143,160,0.3)',
                              boxShadow: '0 2px 10px rgba(61,143,160,0.12)',
                            }}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-[0.975rem] leading-tight">
                            {s.name}
                          </p>
                          <p className="text-[0.8125rem] text-gray-400 mt-0.5">{s.role}</p>
                          <a
                            href={s.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-1 text-[0.75rem] font-medium text-[#5ba8b4] hover:underline"
                          >
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Right: form */}
              <Reveal animation="anim-scaleIn" delay={150}>
                <div
                  id="register"
                  className="rounded-2xl p-8 sm:p-10 bg-white border sticky top-28"
                  style={{
                    borderColor: '#e5e7eb',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                  }}
                >
                  {result === 'success' ? (
                    <div className="flex flex-col items-center justify-center text-center gap-4 py-10">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(91,168,180,0.1)',
                          border: '1px solid rgba(91,168,180,0.25)',
                        }}
                      >
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: '#5ba8b4' }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-xl font-bold text-gray-900">You&apos;re registered!</p>
                      <p className="text-base text-gray-500 max-w-sm leading-relaxed">
                        Check your inbox for the confirmation email and Google Meet invite. See you on{' '}
                        {WEBINAR.dateLabel}.
                      </p>
                      <button
                        type="button"
                        onClick={() => setResult(null)}
                        className="text-base text-[#5ba8b4] hover:underline mt-2"
                      >
                        Register another person
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-7">
                        <h2 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-gray-900 tracking-[-0.03em]">
                          Reserve your seat
                        </h2>
                        <p className="text-base text-gray-400 mt-2">
                          Free to join · Confirmation + Meet link by email
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-400"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className={inputClass}
                            style={inputStyle}
                            onFocus={onFocus}
                            onBlur={onBlur}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-400"
                          >
                            Work Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="jane@company.com"
                            className={inputClass}
                            style={inputStyle}
                            onFocus={onFocus}
                            onBlur={onBlur}
                          />
                          {emailError && (
                            <p className="text-sm text-red-500 mt-1">{emailError}</p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-400"
                          >
                            Company *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            className={inputClass}
                            style={inputStyle}
                            onFocus={onFocus}
                            onBlur={onBlur}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="job_title"
                            className="block text-sm font-semibold uppercase tracking-wider mb-2 text-gray-400"
                          >
                            Job Title
                          </label>
                          <input
                            type="text"
                            id="job_title"
                            name="job_title"
                            value={form.job_title}
                            onChange={handleChange}
                            placeholder="Head of Risk"
                            className={inputClass}
                            style={inputStyle}
                            onFocus={onFocus}
                            onBlur={onBlur}
                          />
                        </div>

                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={form.consent}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 rounded accent-[#5ba8b4]"
                          />
                          <span className="text-[0.875rem] leading-[1.55] text-gray-500">
                            I agree to receive the webinar invite and related FraudPulse emails. See
                            our{' '}
                            <Link href="/privacy/" className="text-[#5ba8b4] hover:underline">
                              Privacy Policy
                            </Link>
                            .
                          </span>
                        </label>
                        {consentError && (
                          <p className="text-sm text-red-500 -mt-2">{consentError}</p>
                        )}

                        {result === 'error' && (
                          <p className="text-base text-red-500">
                            Something went wrong. Please try again or{' '}
                            <Link href="/contact/" className="underline">
                              contact us
                            </Link>
                            .
                          </p>
                        )}

                        <button
                          type="submit"
                          disabled={submitting}
                          className="inline-flex h-14 w-full items-center justify-center rounded-[10px] text-base sm:text-lg font-bold transition-all hover:-translate-y-px text-white disabled:opacity-60"
                          style={{
                            background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                            boxShadow: '0 4px 20px rgba(91,168,180,0.3)',
                          }}
                        >
                          {submitting ? 'Registering…' : 'Register for free'}
                        </button>
                      </form>
                    </>
                  )}
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
