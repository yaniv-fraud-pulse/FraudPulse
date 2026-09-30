/** Meta Pixel ID for /lp/ ad pages. Public by design (same as a GA measurement ID). */
export const META_PIXEL_ID = '1687276626252810';

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

/** Standard Meta events used on landing pages: PageView, Lead (trial), Schedule (demo). */
export function trackMetaEvent(event: 'PageView' | 'Lead' | 'Schedule', params?: Record<string, string>) {
  if (typeof window === 'undefined' || !isMetaPixelEnabled || typeof window.fbq !== 'function') return;
  if (params) window.fbq('track', event, params);
  else window.fbq('track', event);
}
