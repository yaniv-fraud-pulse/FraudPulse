/** Meta Pixel ID. Public by design (same as a GA measurement ID). */
export const META_PIXEL_ID = '1084443864186051';

export const isMetaPixelEnabled = Boolean(META_PIXEL_ID);

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

/** Standard Meta events: PageView, Lead (trial click), Contact (enquiry), Schedule (demo booked). */
export function trackMetaEvent(
  event: 'PageView' | 'Lead' | 'Contact' | 'Schedule',
  params?: Record<string, string>,
) {
  if (typeof window === 'undefined' || !isMetaPixelEnabled) return;

  const fire = () => {
    if (typeof window.fbq !== 'function') return false;
    if (params) window.fbq('track', event, params);
    else window.fbq('track', event);
    return true;
  };

  if (fire()) return;

  const started = Date.now();
  const id = window.setInterval(() => {
    if (fire() || Date.now() - started > 5000) window.clearInterval(id);
  }, 50);
}
