## Goal

Bring every page on the site in line with the brand sheet and website mockup: terracotta + sage palette, SONORAN/SYSTEMS & AI wordmark, bold geometric sans headlines with accent-colored keywords, diagonal color bands in heros, clean white cards, and minimal line icons.

## Foundation (shared)

**Tokens — `src/styles.css`**
- Palette already swapped in last turn: `#C24F34`, `#E07A6B`, `#FBF7F2`, `#E9DFCF`, `#8BA395`, `#1F1F1F`. Add `--charcoal: #1F1F1F` token and a dark surface var for the "Growth Systems Package" band.
- Headings switch to a bold geometric sans (Space Grotesk 600/700 — already loaded). Keep DM Sans for body.
- Add reusable utilities: `text-terracotta`, `text-sage`, `text-rose`, a `diagonal-bands` background utility (terracotta → rose → sand → sage → charcoal stripes at ~-12°), and a `card-soft` style (white fill, 1px sand border, 20px radius, faint shadow).

**Logo lockup component — new `src/components/logo.tsx`**
- SVG recreation of the layered "S" mark (terracotta + adobe rose + sand + sage chevrons), plus the "SONORAN / SYSTEMS & AI" wordmark with the small vertical divider exactly as in the brand sheet. Variants: `mark`, `wordmark`, `lockup`. Used in header, footer, and hero.

**Header / footer — `src/components/site-layout.tsx`**
- Header: replace the text wordmark with `<Logo variant="lockup" />`, add Case Studies link (already done), Insights link optional. Primary CTA pill becomes "Let's Talk" terracotta button with arrow icon.
- Footer: rebuild as 4-column (Services / Company / Resources / "Let's build something great" CTA block) with logo lockup, matching the mockup. Add Instagram + LinkedIn icons.

**Shared building blocks**
- `<AccentHeading>` — splits a headline string and colors specific words terracotta or sage.
- `<PrimaryButton>` / `<SecondaryButton>` — pill buttons with right arrow, terracotta-fill and terracotta-outline variants.
- `<DiagonalBands>` — decorative background element for hero compositions.
- `<FloatingCard>` — white card with icon header, used for the "AI Assistant / Workflow / Daily Summary" stack and similar.

## Page-by-page rebrand

**Home — `src/routes/index.tsx`**
- Hero: left column with kicker, big accent-word headline ("AI **systems** for **businesses** that are ready to move **smarter**." — keywords colored), subcopy, two CTAs (Let's Talk + View Services), and a "BUILT FOR ARIZONA BUSINESSES" row of pill chips (Tucson · Phoenix · Scottsdale · Flagstaff). Right column: `DiagonalBands` background with three stacked `FloatingCard`s (AI Assistant, Workflow, Daily Summary) exactly like the mockup.
- "WHAT WE BUILD" section: 4-card grid (Websites, Workflow Automation, AI Chatbots, Dashboards) with minimal line icons in charcoal/sage and copper "Learn More →" links.
- "REAL DATA. REAL TIME." dashboard preview band: cream surface, left intro, right mock dashboard with KPI tiles and Lead Activity line chart (Recharts).
- "POPULAR PACKAGE" dark charcoal band: Growth Systems Package summary with checklist + price card ($2,950/mo placeholder or align to existing pricing). CTA: Let's Talk.
- Final CTA section (existing component, restyled).

**Services — `src/routes/services.tsx`**
- Hero: short accent headline, subcopy.
- Service grid: full list (AI Consulting, Website Design, Logo & Brand Systems, Workflow Automation, AI Chatbots, Lead Capture & Follow-Up, Email Automation, Booking & Intake, Business Intelligence Dashboards, Business Process Improvement) — each as a card with icon, title, 2-line description, terracotta arrow link.
- "Specialized solutions" sub-section: Law Firm, Restaurant, Contractor, Email Automation cards.
- Final CTA.

**Packages — `src/routes/packages.tsx`**
- Hero with accent headline.
- Featured AI Business Audit card: full-width, "Most Popular Starting Point" badge, $297 in big terracotta, tagline, what's included, primary CTA.
- Project package cards: Website System Launch, Brand + Web Launch, Workflow Automation Setup — three uniform cards, copper price, bullets, "Book a consultation" CTA.
- Specialized solutions row (4 cards).
- Dashboards row (Starter / BI / Full Intelligence Suite).
- Monthly retainer: AI Support Partner card with the two tiers.
- Revision policy small print.
- Final CTA.

**AI Audit — `src/routes/ai-audit.tsx`**
- Hero with $297 prominent, badge, two CTAs.
- "What you get" 6-tile grid.
- "How it works" 3-step timeline.
- FAQ accordion (5 Qs).
- Final CTA.

**Case Studies — `src/routes/case-studies.tsx`** (already created)
- Polish to match new tokens: switch placeholder cards to brand styling, add a "Coming soon — first clients in flight" banner with sage check icon.

**About — `src/routes/about.tsx`**
- Hero: "Built in Tucson. For Arizona businesses." with accent words.
- Shawna intro block + values (Local · Practical · Honest · Modern) 4-tile grid.
- "How we work" 3-step section.
- Service area map-ish band with city pills.
- Final CTA.

**Contact — `src/routes/contact.tsx`**
- Re-skin only: new heading style, terracotta accent words, white cards with sand borders, primary button with arrow, sidebar tiles repainted (cream → sand gradient becomes off-white card with sage icon accents). Form logic unchanged.

## Visual rules applied everywhere

- Page background: `#FBF7F2`. Card surfaces: white with 1px `#E9DFCF` border.
- All headings: Space Grotesk 600/700, tight leading; key 1–2 words per headline take terracotta or sage.
- Primary button: terracotta fill, white text, right arrow. Secondary: terracotta outline, terracotta text, arrow.
- Icons: Lucide line icons in charcoal by default, sage for "nature/positive" contexts, terracotta only for CTAs.
- One dark charcoal section per page max (used for the featured-package band on Home; elsewhere optional).
- Animations: subtle fade-in only (existing rule preserved).

## Out of scope

- No new backend, no auth, no real CRM/booking integration — contact form stays client-side.
- No real case study content yet (placeholders).
- No logo file upload — the S mark is recreated in inline SVG to match the brand sheet.

## Acceptance check

After build, navigate Home → Services → Packages → AI Audit → Case Studies → About → Contact at 690px and ~1280px viewports and confirm: new lockup in header/footer, diagonal-band hero on Home, accent-colored headline words on every page, terracotta arrow buttons, white sand-bordered cards, no leftover copper/Playfair-era styling.
