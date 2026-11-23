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

/** Standard Meta events: PageView, Contact (enquiry), Schedule (demo booked). Lead is not fired on this site. */
export function trackMetaEvent(
  event: 'PageView' | 'Contact' | 'Schedule',
  params?: Record<string, string>,
) {
  if (typeof window === 'undefined' || !isMetaPixelEnabled) return;

  fireWhenReady('track', event, params);
}

/** Custom Meta events: TrialCtaClick (trial button tap). Not used for ad optimization. */
export function trackMetaCustomEvent(event: 'TrialCtaClick', params?: Record<string, string>) {
  if (typeof window === 'undefined' || !isMetaPixelEnabled) return;
  fireWhenReady('trackCustom', event, params);
}

/** Fires now, or retries for up to 5s while the pixel script loads. */
function fireWhenReady(method: 'track' | 'trackCustom', event: string, params?: Record<string, string>) {
  const fire = () => {
    if (typeof window.fbq !== 'function') return false;
    if (params) window.fbq(method, event, params);
    else window.fbq(method, event);
    return true;
  };

  if (fire()) return;

  const started = Date.now();
  const id = window.setInterval(() => {
    if (fire() || Date.now() - started > 5000) window.clearInterval(id);
  }, 50);
}
