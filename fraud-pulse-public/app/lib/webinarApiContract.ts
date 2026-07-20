/**
 * Backend contract for POST /api/v1/webinar/register
 * (Cloud Run API — same service as contact/demo)
 *
 * Expected request body:
 * {
 *   "webinar_id": "fraudpulse-webinar-2026-08-04",
 *   "name": "Jane Smith",
 *   "email": "jane@company.com",
 *   "company": "Acme Inc.",
 *   "job_title": "Head of Risk",   // optional
 *   "consent": true,
 *   "page_url": "https://fraud-pulse.com/webinar/"
 * }
 *
 * Backend should:
 * 1. Validate fields (email format, consent === true)
 * 2. Append one row to a CSV file (GCS or local disk on the service), e.g.:
 *    webinar_id,name,email,company,job_title,consent,registered_at,page_url
 * 3. Send confirmation via Brevo with:
 *    - webinar title / date / time
 *    - Google Meet link
 *    - optional .ics calendar attachment
 * 4. Return 200 { "ok": true } on success; 4xx/5xx on failure
 *
 * CSV columns (recommended):
 * webinar_id,name,email,company,job_title,consent,registered_at,page_url
 *
 * Deduplicate: skip or 409 if the same email already registered for webinar_id.
 */

export {};
