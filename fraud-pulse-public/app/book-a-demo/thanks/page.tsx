'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Reveal } from '../../components/Reveal';
import { captureEvent } from '../../components/PostHogProvider';

function DemoBookedTracker() {
  const searchParams = useSearchParams();
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const email =
      searchParams.get('email') ||
      searchParams.get('booker_email') ||
      undefined;
    const composedName = [
      searchParams.get('attendeeFirstName'),
      searchParams.get('attendeeLastName'),
    ]
      .filter(Boolean)
      .join(' ')
      .trim();
    const name =
      searchParams.get('attendeeName') || composedName || undefined;
    const uid = searchParams.get('uid') || undefined;
    const title = searchParams.get('title') || undefined;

    captureEvent('demo_booked', {
      page: '/book-a-demo/thanks/',
      source: 'cal.com',
      email: email || undefined,
      name: name || undefined,
      booking_uid: uid || undefined,
      event_title: title || undefined,
    });
  }, [searchParams]);

  return null;
}

export default function BookADemoThanks() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Suspense fallback={null}>
        <DemoBookedTracker />
      </Suspense>

      <main className="flex-grow">
        <section className="relative overflow-hidden pt-8 pb-20 px-5 sm:px-10 bg-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(165,208,216,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(165,208,216,0.8) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="relative max-w-xl mx-auto py-20 sm:py-28 text-center">
            <Reveal animation="anim-fadeUp">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: 'rgba(91,168,180,0.1)',
                  border: '1px solid rgba(91,168,180,0.25)',
                }}
              >
                <svg
                  className="w-7 h-7 text-[#5ba8b4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-[-0.03em] mb-4">
                You&apos;re booked
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                Thanks for scheduling a FraudPulse demo. Check your email for the calendar invite
                and meeting details.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-[10px] px-6 font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                  }}
                >
                  Back to home
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex h-12 items-center justify-center rounded-[10px] px-6 font-bold text-gray-700 border"
                  style={{ borderColor: '#e5e7eb' }}
                >
                  View pricing
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
