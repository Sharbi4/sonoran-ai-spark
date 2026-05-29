## Goal

Make Sonoran Systems & AI more findable (humans + AI search), add a high-converting interactive lead tool, fill in the legal/career pages required by Stripe and prospects, and ship 3 real blog posts. Keep current pricing untouched.

---

## 1. SEO — make every page findable & AI-citable

**Per-route metadata (TanStack `head()`):** audit every route in `src/routes/` and confirm unique `title`, `description`, `og:title`, `og:description`, `og:url`, and a leaf-only canonical. Routes missing or sharing meta will be fixed: `index.tsx`, `services.tsx`, `packages.tsx`, `about.tsx`, `contact.tsx`, `ai-audit.tsx`, `email-automation.tsx`, `dashboards.tsx`, `case-studies.tsx`, `industries.*`, `demo.$slug`, `dashboard.$slug`, plus new pages below.

**JSON-LD structured data** (the biggest unlock for AI / LLM citation):
- `__root.tsx` → `Organization` + `WebSite` with `SearchAction`
- `services.tsx`, `packages.tsx`, `ai-audit.tsx`, `email-automation.tsx` → `Service` + `Offer`
- `contact.tsx` → `LocalBusiness` (Tucson AZ, areaServed: Arizona)
- `index.tsx` → `FAQPage` for the FAQ section
- `blog.tsx` → `Blog`; `posts/$slug` → `Article` + `BreadcrumbList`
- `industries.$slug` → `Service` scoped to that industry

**robots.txt & sitemap:**
- Migrate `public/sitemap.xml` → dynamic `src/routes/sitemap[.]xml.ts` so new pages (blog posts, industries, careers, legal) are auto-included.
- Keep `robots.txt` allow-all; add `Sitemap:` line pointing to sonoransystemsai.com/sitemap.xml.

**AI search optimization (LLMs / Perplexity / ChatGPT search):**
- Add `public/llms.txt` summarizing the company, services, pricing, and how to contact — emerging convention LLM crawlers use.
- Ensure every page has a clear H1, plain-language summary in the first paragraph, and an explicit "What we do / Who we serve / How to start" trio. LLM extractors weight these heavily.

**Run** `seo--trigger_scan` after edits and resolve findings.

---

## 2. Interactive "Preview your site" AI tool (2-step flow)

New route `src/routes/preview.tsx` + entry CTA on `index.tsx` ("See what your site could look like →") and a sticky bottom-right launcher (Sheet) site-wide.

**Step 1 — Instant AI critique**
- User enters their current site URL + industry.
- Server fn `src/lib/site-preview.functions.ts` → fetches the URL (HTML head + visible text, capped), sends to `google/gemini-3.5-flash` via Lovable AI Gateway with a structured-output schema returning:
  - 3 strengths, 3 gaps, 3 quick wins, an overall score 0–100, a one-line headline rewrite.
- Renders as a clean report card. Email capture appears after report to "send a PDF copy" (writes to existing `contacts` flow / new `site_previews` table).

**Step 2 — AI mockup image**
- After they read the critique, "Generate a mockup of your redesigned hero →" button.
- Server fn calls `google/gemini-3-flash-image-preview` with a prompt built from their industry + headline rewrite + brand vibe → returns a hero mockup image.
- Image displays inline with "Book a strategy call to build this" CTA → routes into existing `$250` Strategy Call checkout.

**Rate-limit & abuse:** simple per-IP throttle (5 critiques/day) stored in a `site_preview_runs` table; mockup gated behind email capture.

**New table** (migration): `site_previews(id, url, email, industry, report jsonb, mockup_url, created_at, ip_hash)`. RLS: insert open to anon (rate-limited at app layer), select restricted to service_role.

---

## 3. Legal & company pages

All new routes get full SEO metadata + are added to the sitemap.

- **`/privacy`** — `src/routes/privacy.tsx`. Standard policy: data collected (email, contact form, Stripe metadata), cookies (none beyond essentials), third parties (Stripe, Supabase, Lovable AI), user rights (access/deletion via contact form), Arizona jurisdiction.
- **`/refund-policy`** — `src/routes/refund-policy.tsx`. Strategy Call: refundable up to 24h before. Website Review & AI Audit: refundable within 7 days if deliverable not started; non-refundable after delivery. Required by Stripe.
- **`/terms`** — expand existing. Add: scope of services, payment terms, IP ownership of deliverables, confidentiality, limitation of liability, AZ governing law, dispute resolution.
- **`/careers`** — `src/routes/careers.tsx`. Values, "how we work" section, current openings list (empty state: "No open roles right now — but we always want to meet sharp operators. Apply anyway."), application form posting to existing `/api/public/contact` with `topic=careers`.

Footer in `site-layout.tsx` gets a "Legal" column linking all four.

---

## 4. Blog — 3 real seed posts

Convert `blog.tsx` from teasers → working post pages.

- New `src/lib/blog/posts.ts` — typed data source with frontmatter (slug, title, excerpt, date, readTime, category, author, heroImage, body as MDX-ish JSX/React nodes or markdown rendered with `react-markdown`).
- New route `src/routes/posts.$slug.tsx` with loader pulling the post, full `Article` + `BreadcrumbList` JSON-LD, per-post canonical & og.
- Update `blog.tsx` to map over `posts.ts` (drop hardcoded array) and link cards to `/posts/$slug`. Featured post becomes first entry.
- **Write 3 posts** (full body, ~1000 words each, SEO-optimized for Arizona AI / automation searches):
  1. *How AI Automation Is Transforming Small Business Operations in 2025* (featured)
  2. *The ROI of Workflow Automation: What Arizona Business Owners Need to Know*
  3. *5 Business Intelligence Dashboards Every Growing Company Needs*
- Generate one hero image per post via `imagegen` (standard quality, photographic).
- Remaining titles stay as "Coming soon" cards (no broken links).

---

## 5. Pricing & Stripe

**No changes.** Per your answer, keeping `$197` / `$497` charm pricing and the `$250` strategy call. No Stripe product/price updates needed.

---

## Technical notes

- All server-side logic uses `createServerFn` (no edge functions). AI calls hit Lovable AI Gateway via `LOVABLE_API_KEY` already in secrets.
- Image gen for mockups: `google/gemini-3-flash-image-preview` returns a URL — store in Supabase Storage (new public bucket `site-mockups`) so it persists past the session.
- New Supabase resources: 1 table (`site_previews`), 1 storage bucket (`site-mockups`).
- All new routes added to dynamic `sitemap.xml` server route.
- Footer updated once to surface Legal + Careers links; nav unchanged.

---

## Order of execution

1. Migration: `site_previews` table + `site-mockups` storage bucket.
2. Dynamic sitemap route + remove static `public/sitemap.xml`. Add `llms.txt`.
3. Per-route SEO meta + JSON-LD across existing pages.
4. Legal pages (privacy, refund-policy, expanded terms) + careers.
5. Blog: posts data module, dynamic post route, 3 hero images, 3 written posts, blog.tsx refactor.
6. Site-preview tool: server fns, `/preview` page, sticky launcher.
7. Footer update + final SEO scan.