/**
 * Phase B — product app PostHog wiring (copy into the app repo).
 * Use the SAME PostHog project as the marketing site.
 *
 * Env (app):
 *   POSTHOG_PROJECT_TOKEN=phc_...
 *   POSTHOG_HOST=https://us.i.posthog.com
 *
 * 1) Init once on app boot (same options as marketing site, including
 *    cross_subdomain_cookie + cookie_domain: '.fraud-pulse.com' in prod).
 *
 * 2) After login / session restore:
 *      posthog.identify(user.id, {
 *        email: user.email,
 *        name: user.name,
 *        company: user.company,
 *        plan: user.plan,
 *      })
 *
 * 3) On logout:
 *      posthog.reset()
 *
 * 4) On successful signup (once):
 *      posthog.capture('user_signed_up', { auth_method, plan })
 *
 * 5) On first successful Stripe/Shopify (or PSP) connection (once):
 *      posthog.capture('data_connected', { provider, workspace_id })
 *
 * 6) Capture $pageview on in-app route changes (or enable capture_pageview).
 */
export {};
