# Sonoran Systems & AI — Premium Redesign Plan

You already have routes scaffolded (Home, Services, Packages, AI Audit, About, Case Studies, Contact, Dashboards, Email Automation). This plan upgrades the *feel* of the site to Awwwards-level: warm desert editorial + satin glassmorphism + Framer Motion + Lenis smooth scroll, with the exact page script you outlined.

## What I'll build

### 1. Foundation
- Install `framer-motion` and `lenis`.
- Update `src/styles.css`:
  - Lock in the brand palette exactly: terracotta `#C24F34`, adobe rose `#E07A6B`, sand `#E9DFCF`, sage `#8BA395`, charcoal `#1F1F1F`, cream `#FBF7F2`.
  - Swap heading font to **Space Grotesk** (geometric sans), body **Inter**.
  - Add glass utilities (`.glass-card`, `.glass-header`, satin gradients, soft shadow tokens, diagonal-band background).
- Add `src/components/lenis-provider.tsx` mounted in `__root.tsx` for site-wide smooth scroll (client-only to avoid hydration issues).
- Add motion primitives in `src/components/motion/`:
  - `Reveal` (fade + rise on scroll, spring)
  - `StaggerGroup` / `StaggerItem`
  - `ParallaxLayer` (scroll-linked y transform)
  - `MagneticButton`, `HoverLift` card wrapper
  - `AccentWord` (animated colored words in headlines)
- Fix the current SSR hydration warning in the footer at the same time.

### 2. Global chrome
- Rebuild `site-layout.tsx` header as **satin glass** (translucent cream, backdrop blur, sand hairline, shadow on scroll), Linear-style mega menu with the exact two-column Core / Advanced split + "$297 audit" bottom strip.
- Mobile: slide-in glass drawer, full-width terracotta CTA.
- Footer: charcoal variant with warm accents, organized columns, social icons, hover micro-interactions.

### 3. Home page (full rewrite to your script)
1. **Hero** — cream rounded container, headline "AI **systems** for **businesses** that are ready to move **smarter**." with animated colored words, two CTAs, trust + location row. Right side: diagonal terracotta/rose/sand/sage/charcoal bands with parallax + three floating glass cards (AI Assistant, Workflow, Daily Summary) drifting at different speeds.
2. **Services Preview** — 4 glass cards, sage line icons, staggered reveal, hover lift, arrow glides.
3. **Sticky "Working System"** — left sticky headline, right scroll-through 5 cards snapping into place with animated connector dots between them; background tint shifts cream → sand → faint sage via scroll progress.
4. **Dashboard Preview** — large satin glass dashboard mock with sidebar, metric tiles that count up on enter, animated SVG chart line that draws on scroll, terracotta data, sage highlights, floating mini cards with parallax.
5. **Packages Preview** — full-bleed charcoal satin section, glass pricing card for Growth Systems Package, sage check list, terracotta CTA.
6. **Industry Use Cases** — 6 cards, horizontal drag/scroll on desktop, hover changes accent.
7. **Founder / Local** — warm editorial split, abstract geometric side panel with "Tucson, Arizona" tag.
8. **Final CTA** — large rounded cream container, satin glass feel.

### 4. Inner pages
- **Services**: alternating left/right sections for all 8 services with mini glass UI visuals, scroll reveals, and brand diagonal accents.
- **Packages**: 6 glass pricing cards, terracotta "featured" state on Growth Systems, sage checks.
- **AI Audit**: focused single-offer page, glass price card, what's included checklist, single CTA.
- **About**: warm editorial founder/local story.
- **Case Studies**: keep structure, restyle with glass + reveals.
- **Contact**: 2-column — form left (all fields you listed, select with all service options), side card with Arizona service area.
- Keep existing `dashboards.tsx` and `email-automation.tsx`, restyle headers/cards to match new glass language.

## Technical notes
- **Lenis** wired with `requestAnimationFrame` loop inside a `useEffect`; provider returns `null` SSR-side so no hydration drift.
- **Framer Motion**: `useScroll` + `useTransform` for sticky/parallax; `whileInView` with `once: true, margin: "-15%"` for reveals; spring `{ stiffness: 120, damping: 20 }` as the default.
- All colors flow through CSS variables already in `styles.css` — no hard-coded hex in components.
- Respect `prefers-reduced-motion`: motion primitives short-circuit to opacity-only.
- Mobile: sticky scroll sections collapse to normal stacked sections under `md`.

## Out of scope (call out)
- No backend / form submission wiring (form will POST to a stub handler and show a success state).
- No real auth or data — dashboard numbers are static mock content.
- No CMS for Insights — I'll only add the route if you want it; otherwise I'll keep nav to the 6 pages already there.

## Deliverables
- Updated `styles.css`, new motion primitives, new Lenis provider.
- Rewritten `site-layout.tsx`, `index.tsx`, `services.tsx`, `packages.tsx`, `ai-audit.tsx`, `contact.tsx`, `about.tsx`.
- Restyled `case-studies.tsx`, `dashboards.tsx`, `email-automation.tsx`.
- Hydration error fixed.

Confirm and I'll build it. Want me to add an **Insights** route too, or skip it for now?
