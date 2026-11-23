import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/**
 * Reads a browser-only value (URL, cookie, time zone) without setState in an effect.
 * Renders `serverValue` on the server and during hydration, then the browser value.
 * `getValue` must return the same value (by ===) for the same browser state.
 */
export function useClientValue<T>(getValue: () => T, serverValue: T): T {
  return useSyncExternalStore(subscribe, getValue, () => serverValue);
}
