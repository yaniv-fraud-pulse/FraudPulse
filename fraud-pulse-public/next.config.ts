import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Inlines into the client bundle at build time (static export has no server runtime).
  // PostHog project tokens are public by design (like GA measurement IDs).
  env: {
    POSTHOG_PROJECT_TOKEN: process.env.POSTHOG_PROJECT_TOKEN ?? '',
    POSTHOG_HOST: process.env.POSTHOG_HOST ?? 'https://us.i.posthog.com',
  },
};

export default nextConfig;
