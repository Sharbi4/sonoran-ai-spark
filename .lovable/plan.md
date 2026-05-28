## Goal

Give visitors two clear ways to pay: **buy now (Stripe)** for fixed-price products, or **book a call (Calendly)** for custom-scoped work.

## Step 1 — Enable Lovable's built-in Stripe Payments

Run `enable_stripe_payments`. This provisions a test environment immediately (no Stripe account or API keys required to start). Going live later requires claiming the account.

Tax handling: **Tax calculation & collection only (+0.5%)** — best fit for an Arizona-based studio selling mostly to US customers. You stay responsible for filing, but Stripe calculates correct tax at checkout and alerts you when you hit nexus thresholds.

## Step 2 — Product catalog (pay upfront via Stripe)

Create these as Stripe products:

| Product | Price | Type |
|---|---|---|
| AI Business Audit | $297 | one-time |
| Website System Launch — deposit | $750 (50% of $1,500) | one-time |
| Brand + Web Launch — deposit | $1,250 (50% of $2,500) | one-time |
| Workflow Automation — deposit | $750 (50% of $1,500) | one-time |
| Email Automation Starter — setup | $1,000 | one-time |
| AI Support Partner — 5hr | $500/mo | subscription |
| AI Support Partner — 12hr | $1,000/mo | subscription |
| Dashboard Hosting & Maintenance | $150/mo | subscription |

Deposits let bigger projects start with a real commitment without forcing full payment before scope is locked. Final balance invoiced on delivery.

## Step 3 — Book-a-call only (Calendly, no Stripe)

These stay consultative — pricing depends on scope:
- Full Suite Dashboards (Law Firm, Restaurant, Contractor Command Center)
- Growth Systems / custom integrations
- Anything where the user isn't sure which package fits

## Step 4 — UI changes

**Packages page (`src/routes/packages.tsx`)**
- AI Audit hero card: replace "Book Your Audit" with **Buy Now — $297** (Stripe Checkout) + small "Prefer to talk first? Book a call" Calendly link underneath.
- Project package cards (Website, Brand+Web, Workflow): two buttons — **Reserve with Deposit** (Stripe) and **Book a Call** (Calendly).
- AI Support Partner card: **Start Monthly Plan** (Stripe subscription) + secondary "Ask questions first" Calendly link.
- Specialized solutions (dashboards): keep **Book a Call** only.

**AI Audit page (`src/routes/ai-audit.tsx`)**
- Primary CTA → **Buy Audit — $297** (Stripe).
- Secondary → "Book a free 15-min intro call instead" (Calendly).

**Email Automation page**
- **Buy Setup — $1,000** (Stripe) + Calendly fallback.

**Dashboards page**
- **Book a Call** primary (Calendly). No Stripe — scope varies too much.

**Thank-you page (new — `src/routes/thank-you.tsx`)**
- Stripe Checkout `success_url` lands here.
- Shows the order, then a Calendly inline embed: "Book your kickoff call so we can start within 48 hours."

**Contact page**
- Unchanged. Calendly embed stays as the discovery funnel.

## Step 5 — Checkout wiring

- Server function `createCheckoutSession` accepts a `priceId` + mode (`payment` or `subscription`), returns Stripe Checkout URL.
- Webhook handler at `/api/public/stripe-webhook` verifies signature, marks orders fulfilled, and (for audits) emails the intake questionnaire.
- All "Buy" buttons call the server fn and redirect.

## Technical notes

- Use `payments--enable_stripe_payments` (seamless, no BYOK).
- Tax mode: `automatic_tax: { enabled: true }` on every Checkout session.
- Match every product to a Stripe tax code (consulting/SaaS codes for digital services).
- Calendly stays as the existing inline widget — no changes to its setup.

## What I need from you to proceed

1. Confirm the **deposit model (50% upfront, balance on delivery)** for the three project packages — or tell me you'd prefer "full payment upfront" or "book-a-call only" for those tiers.
2. Confirm the **+0.5% tax calculation** option (vs. no tax automation).

Once you approve, I'll enable Stripe, create the products, and wire up checkout + the thank-you page.