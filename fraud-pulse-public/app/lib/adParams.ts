/** App signup entry. `?method=google` skips the email step and opens Google sign-in. */
export const APP_SIGNUP_URL = 'https://app.fraud-pulse.com/signup';
export const APP_GOOGLE_SIGNUP_URL = `${APP_SIGNUP_URL}?method=google`;

/** Same list the app keeps through Auth0 (`fp_ads_query` in sessionStorage). */
export const AD_PARAM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'fbclid',
  'gclid',
] as const;

/** Calendly only reads the UTM tags. */
const UTM_KEYS = AD_PARAM_KEYS.filter((key) => key.startsWith('utm_'));

/**
 * First paid touch, shared with app.fraud-pulse.com so signups can be attributed
 * after the visitor browses other pages or comes back later.
 */
const ATTRIB_COOKIE = 'fp_attrib';
const ATTRIB_MAX_AGE_SECONDS = 90 * 24 * 60 * 60;

type Attribution = Partial<Record<(typeof AD_PARAM_KEYS)[number], string>> & {
  landing_path?: string;
  ts?: number;
};

function adParamsFrom(search: string): Attribution {
  const params = new URLSearchParams(search);
  const found: Attribution = {};
  for (const key of AD_PARAM_KEYS) {
    const value = params.get(key);
    if (value) found[key] = value;
  }
  return found;
}

function readAttributionCookie(): Attribution | null {
  const raw = document.cookie
    .split('; ')
    .find((part) => part.startsWith(`${ATTRIB_COOKIE}=`))
    ?.slice(ATTRIB_COOKIE.length + 1);
  if (!raw) return null;
  try {
    return JSON.parse(decodeURIComponent(raw)) as Attribution;
  } catch {
    return null;
  }
}

/** Writes `fp_attrib` on the first visit that carries ad parameters. Later visits never overwrite it. */
export function saveFirstTouchAttribution() {
  if (typeof window === 'undefined') return;
  const ad = adParamsFrom(window.location.search);
  if (Object.keys(ad).length === 0 || readAttributionCookie()) return;

  const value: Attribution = { ...ad, landing_path: window.location.pathname, ts: Date.now() };
  const domain = window.location.hostname.endsWith('fraud-pulse.com') ? '; domain=.fraud-pulse.com' : '';
  const secure = window.location.protocol === 'https:' ? '; secure' : '';
  document.cookie =
    `${ATTRIB_COOKIE}=${encodeURIComponent(JSON.stringify(value))}` +
    `; max-age=${ATTRIB_MAX_AGE_SECONDS}; path=/; samesite=lax${domain}${secure}`;
}

/**
 * Adds the visitor's ad parameters to an outbound URL: from the current page URL,
 * or else from the first-touch cookie. Parameters already on `url` are kept.
 */
export function withAdParams(url: string, only: 'all' | 'utm' = 'all'): string {
  if (typeof window === 'undefined') return url;
  const fromPage = adParamsFrom(window.location.search);
  const source = Object.keys(fromPage).length > 0 ? fromPage : (readAttributionCookie() ?? {});
  const keys = only === 'utm' ? UTM_KEYS : AD_PARAM_KEYS;

  const target = new URL(url);
  for (const key of keys) {
    const value = source[key];
    if (value && !target.searchParams.has(key)) target.searchParams.set(key, value);
  }
  return target.toString();
}
