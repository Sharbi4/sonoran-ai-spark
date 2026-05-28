## Scope

Two rounds, as the brief suggests:

**Round 1 — Home page "What We Build" overview section**
**Round 2 — Full `/services` page rebuild + Services mega dropdown in nav**

All work stays in frontend/presentation code. Uses existing brand tokens already in `src/styles.css` (terracotta, sage, sand, off-white, charcoal). No new backend, no real form routing — service CTAs all link to `/contact` (pre-tag via `?service=...` query param so the contact page can read it later).

---

## Round 1 — Home page services overview

Edit `src/routes/index.tsx`. Replace the current "What We Build" section with the new 8-card version per spec:

- Section label `WHAT WE BUILD` (uppercase tracked, charcoal/muted)
- Headline `Systems that work together.` with `together.` in terracotta + thin terracotta underline
- Subheadline paragraph
- Grid: 4 cols desktop / 2 tablet / 1 mobile
- 8 cards (Websites, Workflow Automation, AI Chatbots, Dashboards, Brand & Logo, Email Automation, Lead Capture, AI Consulting)
- Each card: white bg, sand border, rounded, sage Lucide line icon top-left, bold charcoal name, 2–3 sentence body, terracotta `Learn More →` link to `/services#<slug>`
- Centered CTA below: "Not sure which service fits your business?" + terracotta `Book a Free Call →` button to `/contact`

Icon mapping (Lucide, line style, consistent stroke):
Monitor, Workflow, MessagesSquare, BarChart3, PenTool, MailPlus, Magnet, Lightbulb

---

## Round 2 — `/services` page

Rewrite `src/routes/services.tsx` end-to-end:

1. **Hero**
   - Diagonal color band element on the right (terracotta / sage / sand / charcoal layers at ~-12°), using existing `.diagonal-bands` utility or inline gradient divs
   - Label `WHAT WE DO`
   - Headline `AI systems, websites, and automation for businesses ready to grow.` — `grow.` in terracotta
   - Subheadline paragraph
   - Primary `Book a Free Call →` (terracotta), secondary `View Packages →` (terracotta outline)
   - Trust line: serving Tucson/Phoenix/Scottsdale/AZ

2. **8 service detail sections** in a single shared `<ServiceDetail>` component, alternating image/text side per index (`flex-row` / `flex-row-reverse`). Each section:
   - Anchor id (`#ai-consulting`, `#websites`, `#brand`, `#workflow`, `#chatbots`, `#dashboards`, `#email`, `#lead-capture`)
   - Small uppercase terracotta label
   - Large headline with one accent word (alternating terracotta / sage per spec)
   - 2–3 paragraph body
   - "Includes" list: checkmark (terracotta `Check` icon) + text, 6–7 items
   - Italic "Who it's for" line
   - Terracotta CTA button → `/contact?service=<slug>`
   - Visual side: large sage line icon inside a soft sand card with rounded corners (no stock photos)

3. **Industry Spotlight section**
   - Label `BUILT FOR YOUR INDUSTRY`, headline `We speak your industry's language.` (`industry's` terracotta)
   - 5 horizontal cards (Law / Restaurants / Contractors / Salons / Real Estate): line icon, name, tool list (muted small), one-line description

4. **Final CTA section**
   - Charcoal bg `#1F1F1F`
   - White headline + terracotta accent line
   - Light-gray body
   - Terracotta primary + white-outline secondary buttons
   - Sand-colored small text with service-area line

5. **`head()` metadata**: title `Services — Sonoran Systems & AI`, description, og:title/description, canonical `/services`.

---

## Services mega dropdown in nav

Edit `src/components/site-layout.tsx`:

- Desktop nav: replace the plain `Services` link with a hover/focus dropdown panel using the existing shadcn `NavigationMenu` (already installed) — two columns:
  - **CORE SERVICES**: AI Consulting, Website Design, Brand & Logo Design, Workflow Automation, AI Chatbots & Voice Agents
  - **ADVANCED SYSTEMS**: Business Intelligence Dashboards, Email Automation, Lead Capture & Follow-Up, Industry Dashboards
  - Each item links to `/services#<slug>`
- Bottom strip inside the dropdown: sand background, text `Start with an AI Business Audit — $297`, terracotta `Book Your Audit →` button → `/ai-audit`
- Mobile: keep hamburger; expand Services into a nested list with the same items (no fancy mega panel on mobile)

---

## Out of scope (this round)

- Packages page changes
- Contact page changes (only the link target gets `?service=` query — page itself unchanged)
- Real form intake tagging logic (just the query param; reading it can come later)
- New logo work (existing `<Logo />` component stays)
- Animations beyond the existing subtle fade-ins already in the project

---

## Technical notes

- All colors via existing CSS variables in `src/styles.css` (`--terracotta`, `--sage`, `--sand`, `--off-white`, `--charcoal`). No hardcoded hex in JSX.
- Use `Link` from `@tanstack/react-router` for all internal nav.
- Icons from `lucide-react`, `strokeWidth={1.5}` for consistent line weight, `text-sage` or `text-charcoal` per spec.
- Shared small components defined inline at top of `services.tsx`: `SectionLabel`, `AccentHeadline`, `ServiceDetail`, `IndustryCard`.
- Mega dropdown uses shadcn `NavigationMenu` primitives already in `src/components/ui/navigation-menu.tsx`.
