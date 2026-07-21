# HubSpot webinar registration — implementation plan

## Constraint (important)

`fraud-pulse-public` uses `output: 'export'` (static site). That means **no Next.js API routes** on Vercel. We cannot proxy through `/api/...` unless we drop static export.

So the right path is HubSpot’s **public Forms Submit API** from the browser (CORS-friendly, no secret key). Emails stay in HubSpot workflows.

---

## Goal

Keep the current webinar UI → on submit, create/update a HubSpot contact via a Marketing Form → HubSpot workflow sends confirmation + Meet link.

---

## Phase 1 — HubSpot setup (you)

1. **Create a Marketing form** (Marketing → Forms), e.g. `Webinar Registration Aug 2026`.
2. **Fields** (match the page):

   | Site field | HubSpot property |
   |---|---|
   | Full Name | `firstname` (or split first/last) |
   | Work Email | `email` |
   | Company | `company` |
   | Job Title | `jobtitle` |
   | Consent checkbox | custom boolean or legal consent field |
   | (hidden) | `webinar_id` or a note property |
   | (hidden) | page URL / `hs_context` pageUri |

3. Copy **Portal ID** and **Form ID** (GUID).
4. **Workflow** (Automation → Workflows):
   - Trigger: form submission on that form
   - Action: send confirmation email with date, time, timezone, Google Meet link
   - Optional: internal email to you / Idan
5. Test submit once from HubSpot’s form preview to confirm the workflow fires.

---

## Phase 2 — Code changes

### 1. Config (`app/lib/webinar.ts`)
- Remove Cloud Run `WEBINAR_API_ENDPOINT`
- Add:
  - `HUBSPOT_PORTAL_ID`
  - `HUBSPOT_FORM_ID`
- Prefer env vars via `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` / `NEXT_PUBLIC_HUBSPOT_FORM_ID` (safe to expose — public form submit)

### 2. Submit helper (new `app/lib/hubspotWebinar.ts`)
- Map form → HubSpot payload:

```ts
{
  fields: [
    { name: 'email', value },
    { name: 'firstname', value },
    { name: 'company', value },
    { name: 'jobtitle', value },
    // consent + webinar_id if configured
  ],
  context: {
    pageUri: 'https://www.fraud-pulse.com/webinar/',
    pageName: WEBINAR.title,
  },
}
```

- `POST` to  
  `https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}`

### 3. Webinar page (`app/webinar/page.tsx`)
- Swap Cloud Run `fetch` for the HubSpot helper
- Keep existing validation, loading, success/error UI
- Success copy stays: “Check your inbox for confirmation + Meet link”

### 4. Cleanup
- Update or remove `webinarApiContract.ts` (Cloud Run contract obsolete)
- Document env vars in README or `.env.example`

---

## Phase 3 — Env / deploy

```bash
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=xxxxxx
NEXT_PUBLIC_HUBSPOT_FORM_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

- Local: `.env.local`
- Production: Vercel project env vars, then redeploy

---

## Phase 4 — Test plan

- [ ] Local submit → contact appears in HubSpot
- [ ] Fields mapped correctly (name, email, company, title)
- [ ] Confirmation email arrives with Meet link
- [ ] Duplicate email behaves as expected (HubSpot updates contact)
- [ ] Invalid email / missing consent still blocked in UI
- [ ] Production submit from `fraud-pulse.com/webinar/` works (no CORS)

---

## Out of scope / later (optional)

- Calendar `.ics` attachment (HubSpot email limits — may need link instead)
- Syncing registrations to a Google Sheet
- Switching off static export to use a private HubSpot token (not needed for forms)

---

## What we need before coding

1. HubSpot **Portal ID**
2. HubSpot **Form ID** (GUID)
3. Exact internal names of form fields (especially consent + any custom `webinar_id`)
4. Confirmation the workflow email is ready (or ship collection first, emails second)
