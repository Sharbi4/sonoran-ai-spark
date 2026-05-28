## Sonoran Systems & AI — full site build

Incremental upgrade on top of the existing app. Keeps the current design tokens (terracotta/sage/sand/charcoal already in `src/styles.css`), site shell (`site-layout.tsx`, logo, nav), Stripe/Calendly/webhook plumbing, and `purchases` table. Replaces or rebuilds pages per the brief and adds the missing ones.

### Brand audit (before any pages)
- Verify CSS tokens in `src/styles.css` match brief exactly: `#FBF7F2` bg, `#1F1F1F` charcoal, `#C24F34` terracotta, `#E07A6B` adobe rose, `#8BA395` sage, `#E9DFCF` sand, `#FFFFFF` card. Add any missing semantic token (`--rose`, `--sand`, `--copper`/`--terracotta`).
- Confirm fonts: bold geometric sans for headings, clean sans for body. Add via `<link>` if not already loaded.
- Audit `Button`, section labels (11px uppercase tracked), card border style — extend variants once, reuse everywhere.

### Shared building blocks (`src/components/`)
- `nav-mega.tsx` — Services mega dropdown (2 cols + sand CTA strip) and Industries dropdown. Replaces current header nav. Mobile sheet variant.
- `start-here-cards.tsx` — 3-card chooser (Inquiry / Strategy Call / AI Audit) used on Home and Contact, with payment CTAs wired through `useStripeCheckout`.
- `process-steps.tsx` — 5-step horizontal flow with animated connecting line.
- `services-grid.tsx` — 4×2 service cards with sage icons + spring hover.
- `dashboard-preview.tsx` — animated stats with count-up on scroll, terracotta line + bar charts.
- `industry-cards.tsx` — reusable 5-card row + per-industry detail template.
- `integrations-marquee.tsx` — auto-scrolling chip row, pauses on hover.
- `who-this-is-for.tsx` — two-column comparison block.
- `package-teaser.tsx`, `portal-teaser.tsx`, `faq.tsx` (Radix Accordion), `final-cta.tsx`.
- `floating-ui-cards.tsx` — hero AI Assistant / Workflow / Daily Summary cards with framer-motion spring entrances.
- `count-up.tsx` — viewport-triggered animated number.
- Motion primitives already exist (`Reveal`, `StaggerGroup`, `ParallaxLayer`) — extend with a `Curtain` reveal (clip-path lift) since the brief specifies curtain, not fade.

### Routes (all 21, built in this order)
1. Rebuild `routes/index.tsx` — Hero, Start Here, Process, Services Grid, Dashboard Preview, Industries, Integrations marquee, Who-this-is-for, Package teaser, Portal teaser, FAQ, Final CTA.
2. Rebuild `routes/packages.tsx` — comparison table, featured Audit card, Strategy Call card, 4 project packages, retainer, revision policy, not-sure block.
3. Rebuild `routes/contact.tsx` — keep working Calendly + intake form, add Start Here cards, booking-flow explanation box (3 flows), full intake form per spec.
4. Rebuild `routes/about.tsx` — firm voice, founder section, Tucson roots, principles, capabilities.
5. Rebuild `routes/ai-audit.tsx` — audit-specific landing with checkout CTA + intake explainer.
6. `routes/services.tsx` — services overview.
7. Service detail pages: `services.ai-consulting`, `services.websites`, `services.brand-design`, `services.workflow-automation`, `services.ai-chatbots`, `services.dashboards`, `services.email-automation`, `services.lead-capture` (use existing `dashboards.tsx` / `email-automation.tsx` as starting points, restructure under `/services/*`).
8. `routes/industries.tsx` — industries overview.
9. Full industry pages: `industries.law-firms`, `industries.restaurants`, `industries.contractors`, `industries.salons-wellness`, `industries.real-estate`, `industries.consultants-coaches`. Each: hero, pain points, recommended systems, tool integrations, sample workflow, case study placeholder, CTA.
10. `routes/portal.tsx` — Client Portal teaser (no auth yet, marketing page only).
11. Update `routes/__root.tsx` / `site-layout.tsx` for new mega-nav.

Every route gets distinct `head()` metadata (title, description, og:title, og:description). Leaf pages get og:image where there's a hero asset.

### Payments wiring (Strategy Call + AI Audit)
- Create two Stripe products via `payments--batch_create_product`:
  - `strategy_call` → price `strategy_call_60min`, $250 one-time, qty 1.
  - `ai_audit` → price `ai_audit_497`, $497 one-time, qty 1.
- Both digital services → tax code `txcd_20030000` (consulting services) — confirm at build time.
- **Tax decision:** I'll ask at the start of build whether to enable Stripe-managed compliance handling (+3.5%), tax calculation only (+0.5%), or no tax automation. Default recommendation: managed compliance handling since this is digital consulting and the seller is US-based.
- Wire `Pay & Book →` (Strategy Call) and `Buy Audit →` (Audit) via existing `useStripeCheckout` hook → embedded checkout dialog.
- Return URL: `/thank-you?type=strategy|audit&session_id={CHECKOUT_SESSION_ID}`. `thank-you.tsx` branches:
  - Strategy: shows Calendly embed + short pre-call intake form.
  - Audit: shows full Audit intake form, then Calendly.
- Webhook (`api/public/payments/webhook.ts`) already records to `purchases` — extend to stamp `product_name` and route metadata from session.

### Motion system
- Lenis already wired.
- Add `Curtain` reveal primitive (clip-path inset from top) — used for section headlines per "curtain lifting, never a fade".
- Spring config: `{ stiffness: 110, damping: 22, mass: 0.9 }` (already in `primitives.tsx`).
- Stagger 0.15s on card groups.
- Hover: scale 1.02, shadow expansion, arrow translate-x on buttons.
- Buttons press-in on tap (`whileTap={{ scale: 0.97 }}`).
- Number count-up via `useInView` + `animate` on scroll into viewport.
- Page transitions: existing route transitions stay; add fade-slide overlay in `__root.tsx` via `AnimatePresence` keyed by `pathname`.

### SEO + a11y
- Single H1 per route, semantic landmarks, alt on every illustration.
- JSON-LD: `LocalBusiness` on Home + Contact (Tucson, AZ).
- Open Graph + Twitter cards per route.
- All interactive elements keyboard-accessible (already shadcn).

### Out of scope (this pass)
- Real client portal auth/dashboard — only the marketing teaser route.
- Case study detail pages beyond the existing `case-studies.tsx` (industry pages reference placeholders).
- Email templates — already pending separate domain setup (`sonoransystemsai.com`).

### Technical notes
- ~25 new files, ~10 rewrites. No new dependencies needed (framer-motion, lenis, stripe, calendly all present).
- Will run in batches: (a) shared components + Home + nav, (b) Packages + Contact + Audit + payments wiring, (c) Services overview + 8 service detail pages, (d) Industries overview + 6 industry pages, (e) About + Portal + polish pass.
- After each batch, verify build and spot-check the preview before moving on.
