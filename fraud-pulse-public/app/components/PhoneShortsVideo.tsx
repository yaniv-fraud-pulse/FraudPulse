'use client';

import { useState } from 'react';
import { captureEvent } from '../lib/posthogClient';

export const SHORTS_VIDEO_ID = 'zxVj7n5iwIk';
export const SHORTS_VIDEO_TITLE = 'First Chargebacks, - Use FraudPulse';

const THUMB = `https://i.ytimg.com/vi/${SHORTS_VIDEO_ID}/maxresdefault.jpg`;
const THUMB_FALLBACK = `https://i.ytimg.com/vi/${SHORTS_VIDEO_ID}/hq2.jpg`;

export default function PhoneShortsVideo({ page = '/faq/' }: { page?: string }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(THUMB);

  function play() {
    setPlaying(true);
    captureEvent('product_video_played', {
      page,
      video_id: SHORTS_VIDEO_ID,
      title: SHORTS_VIDEO_TITLE,
      format: 'shorts',
    });
  }

  return (
    <div className="relative mx-auto w-[300px] sm:w-[348px] lg:w-[392px]">
      <span
        className="pointer-events-none absolute -inset-10 rounded-[4rem] blur-3xl opacity-55"
        style={{ background: 'linear-gradient(180deg, rgba(91,168,180,0.38), rgba(125,107,160,0.2))' }}
        aria-hidden
      />

      {/* Action button */}
      <span
        className="absolute -left-[4px] top-[18%] z-20 h-[22px] w-[4px] rounded-l-sm"
        style={{ background: 'linear-gradient(90deg, #6a6d73, #2a2c31)' }}
        aria-hidden
      />
      {/* Volume rocker */}
      <span
        className="absolute -left-[4px] top-[26%] z-20 h-[64px] w-[4px] rounded-l-sm"
        style={{ background: 'linear-gradient(90deg, #6a6d73, #2a2c31)' }}
        aria-hidden
      />
      {/* Power */}
      <span
        className="absolute -right-[4px] top-[24%] z-20 h-[52px] w-[4px] rounded-r-sm"
        style={{ background: 'linear-gradient(270deg, #6a6d73, #2a2c31)' }}
        aria-hidden
      />
      {/* Camera Control */}
      <span
        className="absolute -right-[5px] top-[48%] z-20 h-[36px] w-[5px] rounded-full"
        style={{ background: 'linear-gradient(270deg, #8a8d93, #3a3c42)' }}
        aria-hidden
      />

      <div
        className="relative rounded-[3.15rem] p-[7px] shadow-[0_48px_100px_-32px_rgba(17,24,39,0.62)]"
        style={{
          background:
            'linear-gradient(145deg, #7a7d84 0%, #3a3c42 14%, #1c1e22 42%, #111318 72%, #2e3036 100%)',
        }}
      >
        <div
          className="pointer-events-none absolute inset-[1px] rounded-[3.05rem]"
          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), inset 0 0 0 1px rgba(255,255,255,0.06)' }}
          aria-hidden
        />
        <div
          className="relative overflow-hidden rounded-[2.65rem] bg-black"
          style={{ aspectRatio: '9 / 19.5' }}
        >
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${SHORTS_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={SHORTS_VIDEO_TITLE}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <button
              type="button"
              onClick={play}
              className="group absolute inset-0 w-full h-full"
              aria-label={`Play ${SHORTS_VIDEO_TITLE}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumb}
                alt=""
                onError={() => {
                  if (thumb !== THUMB_FALLBACK) setThumb(THUMB_FALLBACK);
                }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(11,15,23,0.1) 0%, rgba(11,15,23,0.06) 42%, rgba(11,15,23,0.52) 100%)',
                }}
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="relative grid place-items-center">
                  <span
                    className="absolute h-24 w-24 rounded-full opacity-50 blur-md transition-opacity duration-500 group-hover:opacity-80"
                    style={{ background: 'linear-gradient(135deg, #5ba8b4, #7D6BA0)' }}
                  />
                  <span
                    className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full text-white shadow-[0_10px_28px_-6px_rgba(74,150,163,0.75)] transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #5ba8b4 0%, #4a96a3 55%, #7D6BA0 100%)' }}
                  >
                    <svg className="ml-0.5 h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M8 5.14v13.72L19.12 12 8 5.14z" />
                    </svg>
                  </span>
                </span>
                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white/90">
                  Play short
                </span>
              </span>
            </button>
          )}

          {/* Dynamic Island */}
          <span
            className="pointer-events-none absolute left-1/2 top-[11px] z-10 flex h-[34px] w-[118px] -translate-x-1/2 items-center justify-end rounded-full bg-black px-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
            aria-hidden
          >
            <span className="mr-auto ml-3 h-[9px] w-[9px] rounded-full bg-[#1a1c20] shadow-[inset_0_0_0_1.5px_#0b0d10]" />
            <span className="h-[8px] w-[8px] rounded-full bg-[#12151a] ring-1 ring-[#2a3344]" />
          </span>
          <span
            className="pointer-events-none absolute bottom-2.5 left-1/2 z-10 h-[5px] w-[128px] -translate-x-1/2 rounded-full bg-white/40"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
