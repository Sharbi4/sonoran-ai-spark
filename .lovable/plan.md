## Goal

Rebuild the offer ladder, pricing, and CTAs across the site to match the corrected consulting-firm model:

> **Project inquiry is free. Strategy is paid. Implementation is scoped. Support is monthly.**

## 1. New offer ladder (replaces current Packages page)

### Start Here — direct purchase (Stripe)
| Offer | Price | Type |
|---|---|---|
| Project Inquiry | Free | Form |
| Business Systems Strategy Call | $250/hr | Stripe (pay-to-book → Calendly) |
| Website + AI Readiness Review | $197 | Stripe one-time |
| Automation Opportunity Map | $297 | Stripe one-time |
| **AI Business Systems Audit** | **$497** | Stripe one-time (flagship) |

### Build the System — scoped, intake only (no Buy Now)
| Offer | Starting at |
|---|---|
| Starter Website | $1,750+ |
| Website System Launch | $2,500+ |
| Brand Starter Kit | $1,000+ |
| Brand + Web Launch | $3,000+ |
| Lead Capture + Follow-Up System | $1,500+ |
| Workflow Automation Setup | $1,750+ |
| Email Automation System | $1,500+ |
| AI Customer Response System | $2,000+ |
| Connected Business Dashboard | $2,500+ |
| Full Intelligence Dashboard | $4,500+ |

CTA: **Request Project Quote** → intake form / Calendly.

### Keep It Running — application first (no Buy Now)
| Retainer | Price | Overage |
|---|---|---|
| AI Support Partner Lite | $500/mo (3 small requests + monthly call) | n/a |
| AI Support Partner | $750/mo (up to 5 hrs) | $150/hr |
| Growth Systems Partner | $1,500/mo (up to 10 hrs) | $150/hr |
| Custom Systems Partner | $2,500+/mo | Custom |

CTA: **Apply for Retainer** → intake form.

## 2. AI Audit page (`src/routes/ai-audit.tsx`)
- Reprice to **$497**.
- Rename to **AI Business Systems Audit**.
- Update "Includes" list to: 60-min strategy call, website + customer journey review, workflow/tools review, AI opportunity map, prioritized written action plan, recommended project roadmap.
- Primary CTA: **Buy Audit — $497** (Stripe).
- Secondary: "Not ready? Start with a Strategy Call ($250)" or "Submit a free project inquiry."

## 3. Packages page (`src/routes/packages.tsx`) — full rewrite into 3 sections
- **Start Here**: 4 cards with prices + Buy Now buttons (Stripe), audit highlighted.
- **Build the System**: 10 cards grouped by category (Web · Brand · Automation · Dashboards), all with "Request Project Quote" CTA → `/contact`.
- **Keep It Running**: 4 retainer cards with "Apply" CTA → `/contact`.
- Remove the old Specialized Solutions section (folded into Build the System).
- Remove "2 rounds of revisions" blanket promise (moved to fine print).

## 4. Dashboards page (`src/routes/dashboards.tsx`)
- Restructure into 3 tiers: Starter Dashboard ($1,500+), Connected Business Dashboard ($2,500+), Full Intelligence Dashboard ($4,500+).
- All CTAs → "Request Project Quote" (Calendly + form). No direct purchase.

## 5. Email Automation page (`src/routes/email-automation.tsx`)
- Update floor to $1,500+.
- CTA → "Request Project Quote".

## 6. Services page (`src/routes/services.tsx`)
- Update overview to mirror the new 3-tier ladder.

## 7. Contact page (`src/routes/contact.tsx`)
- Keep Calendly inline widget.
- Adjust intake form copy to "Submit a Project Inquiry — free" vs "Book a Paid Strategy Call ($250/hr)".

## 8. New: Terms & Fine Print page (`src/routes/terms.tsx`)
- Verbatim from the corrected fine-print language you provided (pricing terms, revisions, third-party fees, AI disclaimers, no legal/medical/financial advice, etc.).
- Linked from footer and from the bottom of Packages page.

## 9. Stripe enablement (deferred — needs Cloud)

Lovable Cloud must be enabled before built-in Stripe payments can be turned on. **Not part of this plan** — once you confirm enabling Cloud, I'll:
- Run `enable_stripe_payments` (tax: calculation-only, +0.5%).
- Create Stripe products for the 4 Start Here offers ($250 call, $197 review, $297 map, $497 audit).
- Add `createCheckoutSession` server fn + `/api/public/stripe-webhook` route.
- Add `/thank-you` route with Calendly kickoff embed.

For now all "Buy Now" buttons render with the correct price/label but point to `/contact` as a placeholder. Swapping them to Stripe is a one-line change per button once products exist.

## Implementation order
1. Rewrite `packages.tsx` with the new 3-tier structure.
2. Update `ai-audit.tsx` ($497, new copy).
3. Restructure `dashboards.tsx` into 3 tiers.
4. Update `email-automation.tsx` floor + CTA.
5. Adjust `services.tsx` overview.
6. Adjust `contact.tsx` intake copy.
7. Create `terms.tsx` and link from footer.

## What I need from you
1. **Strategy Call billing**: $250 flat per 60-min session, or true hourly with min 30 min ($125)? (Calendly handles fixed-duration cleaner.)
2. **Brand Snapshot Review $149** — include it in launch set or skip? You marked it Optional.
3. **Confirm**: defer Stripe wiring until after Lovable Cloud is enabled (CTAs route to `/contact` for now).