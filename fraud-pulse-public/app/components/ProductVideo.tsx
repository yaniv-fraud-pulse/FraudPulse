'use client';

import { useEffect, useRef, useState } from 'react';
import { captureEvent } from '../lib/posthogClient';

export const PRODUCT_VIDEO_ID = '7R01645JR1I';
export const PRODUCT_VIDEO_TITLE = 'FraudPulse Intro';
export const PRODUCT_VIDEO_URL = `https://www.youtube.com/watch?v=${PRODUCT_VIDEO_ID}`;

export const RULES_VIDEO_ID = 'hGeoMsnuqKA';
export const RULES_VIDEO_TITLE =
  'Your Fraud Rules Are Blocking Good Customers. Here’s Which One to Change.';

export default function ProductVideo({
  page = '/',
  videoId = PRODUCT_VIDEO_ID,
  title = PRODUCT_VIDEO_TITLE,
  playLabel = 'Play intro',
  autoPlayOnScroll = false,
}: {
  page?: string;
  videoId?: string;
  title?: string;
  playLabel?: string;
  autoPlayOnScroll?: boolean;
}) {
  const thumbSd = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;
  const thumbHq = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(thumbSd);
  const trayRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  function start(trigger: 'scroll' | 'click') {
    if (started.current) return;
    started.current = true;
    setPlaying(true);
    captureEvent('product_video_played', {
      page,
      video_id: videoId,
      title,
      trigger,
      muted: autoPlayOnScroll,
    });
  }

  useEffect(() => {
    if (!autoPlayOnScroll || playing) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = trayRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start('scroll');
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoPlayOnScroll, playing, videoId, page, title]);

  const mute = autoPlayOnScroll ? '&mute=1' : '';
  const embed = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1${mute}&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div className="product-tray" ref={trayRef}>
      <div className="flex items-center gap-1.5 px-3 pt-1 pb-3" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 truncate rounded-md bg-gray-900/[0.04] px-3 py-0.5 text-[0.6875rem] font-medium text-gray-400">
          {title}
        </span>
      </div>

      <div
        className="relative overflow-hidden rounded-[20px] bg-[#0b0f17]"
        style={{ aspectRatio: '16 / 9' }}
      >
        {playing ? (
          <iframe
            src={embed}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : autoPlayOnScroll ? (
          <button
            type="button"
            onClick={() => start('click')}
            className="absolute inset-0 w-full h-full"
            aria-label={`Play ${title} (muted)`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt=""
              onLoad={(e) => {
                if (e.currentTarget.naturalWidth < 480 && thumb !== thumbHq) setThumb(thumbHq);
              }}
              onError={() => {
                if (thumb !== thumbHq) setThumb(thumbHq);
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => start('click')}
            className="group absolute inset-0 w-full h-full text-left"
            aria-label={`Play ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt=""
              onLoad={(e) => {
                if (e.currentTarget.naturalWidth < 480 && thumb !== thumbHq) setThumb(thumbHq);
              }}
              onError={() => {
                if (thumb !== thumbHq) setThumb(thumbHq);
              }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(11,15,23,0.08) 0%, rgba(11,15,23,0.18) 45%, rgba(11,15,23,0.62) 100%)',
              }}
            />
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="relative grid place-items-center">
                <span
                  className="absolute h-24 w-24 rounded-full opacity-40 blur-md transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: 'linear-gradient(135deg, #5ba8b4, #7D6BA0)' }}
                />
                <span
                  className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full text-white shadow-[0_12px_40px_-8px_rgba(74,150,163,0.7)] transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 55%, #7D6BA0 100%)' }}
                >
                  <svg className="ml-1 h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5.14v13.72L19.12 12 8 5.14z" />
                  </svg>
                </span>
              </span>
              <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-white/90">
                {playLabel}
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
