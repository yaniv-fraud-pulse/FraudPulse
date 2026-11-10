# Meta ads: why there is still no new client

Date: 9 November 2026. Source: PostHog project “Default project” (490358), timezone UTC. Test accounts filtered. This is a one-off reading, not a saved metric.

Paid Meta means a pageview with `utm_source` of `fb` or `ig` and `utm_medium` of `paid`.

## Answer

The ads reach the right countries and then die on the landing page. People leave. They do not get stuck, and they do not start a trial.

A paid plan cannot be seen in PostHog. There is no subscription or payment event. An account (`user signed up`) is recorded on the server as a different person from the one who clicked the ad, so a signup would not show up on these visits anyway.

## Last 7 days (2–9 November)

26 people from paid Meta reached a landing page.

| What they did | People |
| --- | --- |
| Landed | 26 |
| Left after one page, no click | 23 |
| Played the product video | 2 |
| Opened the sample report | 0 |
| Rage-clicked | 0 |
| Clicked the trial | 0 |
| Clicked Book a demo | 1 |
| Account tied to that visit | 0 |

Source: 16 Instagram, 10 Facebook. Device: almost all phones (26 mobile, 2 desktop on the paid-ad set). Country: United States and United Kingdom only.

Pages: about 20 on `/lp/meta-demo/`, about 8 on `/lp/meta/`, 2 on the homepage. Three campaigns, all small. The campaign and creative values in the URL are raw Meta IDs, so the ads cannot be told apart by name.

## Last 14 days (26 October–9 November)

38 people landed on an `/lp/` page from paid Meta. 2 clicked the trial. Both clicks were on `/lp/meta/` (2 of 18, about 11%, median 11 seconds). `/lp/meta-demo/` had 20 people and 0 trial clicks. 0 of those visits became an account PostHog can tie to the ad.

Across the whole site in the same 14 days: 1,280 visitors, 34 trial clicks, 3 accounts that can be tied to a visit.

`user signed up` fired 8 times. Those 8 people have no page history, no country, and no ad source. Revenue on them is $0. Two of the eight use a FraudPulse email. None of the eight had also viewed a Meta landing page.

## Why

1. **The page they are sent to asks for a meeting.** `/lp/meta-demo/` says the 14-day trial includes connecting Stripe or Shopify and seeing which rule to change. The button says Book a demo and opens Calendly in a new tab. A cold visitor on a phone does not book a 30-minute call. This week one person clicked it.

2. **The page answers a question they have not asked.** “Connect Stripe or Shopify. See which rule to change.” is a product step. On a phone the first concrete block is labeled “Example, not your data,” and the button under it opens a calendar. Two people watched the video. That is the only sign of interest, and the page does not turn it into a next step.

3. **The ads are buying the wrong action.** Visits are tracked (`fb` / `ig`, `paid`, and a Facebook click id). A trial and a paid plan are not sent back to Meta. If the campaign optimizes for link clicks or landing-page views, Meta is paid to find people who bounce.

4. **An account is not a client.** FraudPulse makes money when someone connects Shopify or Stripe and then pays. PostHog has no event for either. The finish line to watch is “store connected,” then “paid.”

5. **Volume cannot produce a client yet.** Twenty-six people, with almost no clicks, cannot become a customer. The country mix is already the United States and the United Kingdom.

## What to change before spending more

1. On `/lp/meta-demo/`, make the first button “Start 14-day trial,” in the same tab, above the fold on a phone. Leave Book a demo as a text link under it. Until that button is live, point the ads at `/lp/meta/` and pause `/lp/meta-demo/` in the ads so the traffic is not split across two offers.

2. Pass the website visitor into signup so `user signed up` is the same person who clicked the ad. Then optimize the Meta campaign for that account event. Until the link exists, Meta and PostHog will both keep reporting zero conversions.

3. Add events for “store connected” and “paid.” Count a client only when one of those fires.

4. Hold the spend until the trial click rate on the landing page moves.
