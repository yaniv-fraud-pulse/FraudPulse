'use client';

import { useEffect } from 'react';
import { Eyebrow } from '../../components/Brand';

const HUBSPOT_PORTAL_ID = '246448181';
const HUBSPOT_FORM_ID = '74f58041-06fe-4907-922d-b521b48339bf';
const HUBSPOT_EMBED_SRC = `https://js-na2.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`;

export const LP_CONTACT_FORM_ID = 'message-form';

/** Re-inject on every mount so the form renders after client-side navigation too. */
function useHubSpotEmbed() {
  useEffect(() => {
    document.querySelectorAll(`script[src="${HUBSPOT_EMBED_SRC}"]`).forEach((el) => el.remove());
    const script = document.createElement('script');
    script.src = HUBSPOT_EMBED_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
}

export function LpContactForm() {
  useHubSpotEmbed();

  return (
    <div
      id={LP_CONTACT_FORM_ID}
      className="relative scroll-mt-24 rounded-[32px] p-px"
      style={{ background: 'linear-gradient(160deg, rgba(91,168,180,0.55), rgba(125,107,160,0.35) 55%, rgba(229,231,235,0.7))' }}
    >
      <div className="rounded-[31px] bg-white/90 backdrop-blur-xl p-6 sm:p-10 shadow-[0_30px_80px_-40px_rgba(17,24,39,0.35)]">
        <div className="text-center mb-6">
          <Eyebrow>Send a message</Eyebrow>
          <h2 className="font-extrabold text-gray-900 tracking-[-0.03em] text-[1.75rem] sm:text-[2.25rem]">
            Not ready for a call?
          </h2>
          <p className="text-[1.0625rem] leading-[1.7] text-gray-500 mt-2">
            Leave your details and our team will get back to you.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6">
          <div
            className="hs-form-frame min-h-[360px] empty:flex empty:items-center empty:justify-center empty:before:content-['Loading_form…'] empty:before:text-sm empty:before:text-gray-400"
            data-region="na2"
            data-form-id={HUBSPOT_FORM_ID}
            data-portal-id={HUBSPOT_PORTAL_ID}
          />
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
          <svg className="w-4 h-4 text-[#5ba8b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Your details stay private. No spam.
        </p>
      </div>
    </div>
  );
}
