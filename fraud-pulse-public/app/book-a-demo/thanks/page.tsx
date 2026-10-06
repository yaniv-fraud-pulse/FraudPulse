'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Reveal } from '../../components/Reveal';
import { captureEvent } from '../../components/PostHogProvider';
import { HeroBackdrop, PulseMark } from '../../components/Brand';

function DemoBookedTracker() {
  const searchParams = useSearchParams();
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const email =
      searchParams.get('invitee_email') ||
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
      searchParams.get('invitee_full_name') ||
      searchParams.get('attendeeName') ||
      composedName ||
      undefined;
    const uid =
      searchParams.get('invitee_uuid') || searchParams.get('uid') || undefined;
    const title =
      searchParams.get('event_type_name') ||
      searchParams.get('title') ||
      undefined;

    captureEvent('demo_booked', {
      page: '/book-a-demo/thanks/',
      source: 'calendly',
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

      <main className="flex-grow overflow-x-clip">
        <section className="relative overflow-x-clip pt-8 pb-20 px-5 sm:px-10">
          <HeroBackdrop />
          <div className="relative max-w-xl mx-auto py-20 sm:py-28 text-center">
            <Reveal animation="anim-fadeUp">
              <PulseMark id="thanksPulse" className="w-12 h-12 mx-auto mb-6" />
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-[-0.04em] mb-4">
                You&apos;re <span className="text-gradient-flow">booked</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                Thanks for scheduling a FraudPulse demo. Check your email for the calendar invite
                and meeting details.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-full px-6 font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 100%)',
                  }}
                >
                  Back to home
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex h-12 items-center justify-center rounded-full px-6 font-bold text-gray-700 border border-gray-200 bg-white/80 backdrop-blur"
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
