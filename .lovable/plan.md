## Problem

All nine `/dashboard/$slug` demos (law-firms, contractors, restaurants, salons-wellness, real-estate, consultants-coaches, doctors-medical, financial-advisors, political-campaigns, small-business-teams) render through **one shared template** in `src/routes/dashboard.$slug.tsx`. The structure is identical across every industry:

```text
KPI strip (4 cards) → Voice agent + AI agents → Pipeline + Schedule → Custom widget + Activity → CTA
```

Combined with emoji-laden activity feeds (📞 📧 🤖 💳), pastel "playful" accents, and round serif numbers, the demos feel like the same toy app reskinned 9 times instead of 9 real BI tools.

## Goal

Make each demo feel like a **real production SaaS dashboard** a working professional would actually live in — Linear / Stripe / Toast / Clio / Jobber / Bloomberg energy. Different layouts per industry, dense numeric data, real chart shapes, serious typography, no emoji.

## Approach

### 1. New shared building blocks (`src/components/dashboard-ui.tsx`)

Build a small primitive library so each industry can compose a unique layout without copy-paste:

- `Card`, `CardHeader`, `CardTitle`, `CardToolbar` — flatter, denser, tighter padding (p-4 not p-5), `rounded-xl` not `rounded-2xl`, hairline borders, no soft shadows.
- `KpiTile` — label / large mono number / delta + 12-pt inline sparkline (SVG polyline).
- `Sparkline`, `AreaChart`, `BarChart`, `Donut`, `HeatMap` — pure inline SVG, no chart lib needed.
- `DataTable` — zebra-free, monospace tabular numbers, column headers in caps/tracking-wider, hover row.
- `Tag`, `StatusDot`, `Trend` — small status atoms.
- Numbers use `font-mono tabular-nums` everywhere. Headings switch from serif to a tight sans (Inter / system). Background goes to `#0B0D10` for finance/political, `#F7F8FA` for ops dashboards — per industry.

### 2. Per-industry layouts (one route file per industry under `src/components/dashboards/`)

Replace the single template in `dashboard.$slug.tsx` with a per-slug switch that renders a dedicated component. Each has a different information architecture:

| Slug | Layout & marquee widgets |
|---|---|
| **law-firms** | Left rail (Matters list w/ status + deadline countdown) · main = Billable-hours heatmap (week × attorney) + Trust-account ledger table · right = Deadlines next 14 days + Conflict-check queue |
| **contractors** | Top KPI row · Dispatch board (job cards across 4 crews × today/tmrw, drag-style) · Estimate funnel bar chart · AR aging table with bucket totals |
| **restaurants** | Hourly sales area chart (today vs same-day-last-week overlay) · Top items bar chart · Labor % vs sales line · Live order ticker + 86'd items list · table-turn heatmap |
| **salons-wellness** | Calendar strip (4 stylists × 9–7) with booked blocks · Service mix donut · Retention cohort table · No-show rate trend · Inventory low-stock |
| **real-estate** | Pipeline by stage (commission $$$ stacked bar) · Lead source attribution · Listing performance table (DOM, price, views, saves) · Appointments map list · Commission forecast |
| **consultants-coaches** | MRR + ARR cards w/ sparkline · Engagement table (client / phase / hours used vs budget bar) · NPS by client donut · Proposal pipeline · Booked-vs-capacity utilization |
| **doctors-medical** | Schedule density heatmap · Visit-type mix · No-show & rebook funnel · Claim status table (CPT, payer, status, $) · Patient messages inbox count · A/R aging |
| **financial-advisors** | Dark theme. AUM tile + 30d sparkline · Allocation donut · Account list (acct, model, cash, drift %) · Rebalance queue · Tax-loss harvest opportunities table · Market ticker strip |
| **political-campaigns** | Dark theme. Donations 24h line chart · Donor list w/ recurring flag · Volunteer shift coverage by precinct heatmap · Voter contact funnel · Event RSVPs · Compliance flags |
| **small-business-teams** | Universal ops cockpit — Pipeline kanban (compact) · Team workload bars · Inbox + tasks · Revenue trend · Automation runs feed |

Each file ~150–220 lines, all composing the shared primitives. Same `DASHBOARD_CONFIGS` data source, plus per-industry data extensions added inline in the component.

### 3. Data realism upgrade (`src/lib/dashboard-content.tsx`)

Per industry, append the new data shapes needed by the new layouts: time-series arrays (hourly sales, 30-day AUM, daily donations), table rows with full columns (claim #, CPT code, payer, billed, allowed, status), heatmap matrices, etc. Keep the existing fields so nothing else breaks. Numbers stay fictional but look operationally plausible (odd cents, mixed magnitudes, realistic IDs like `INV-20418`, `MTR-2026-0312`, `CLM-88241`).

### 4. Visual de-playful pass

- Remove every emoji from activity feeds → replace with small Lucide icons in a muted square.
- Switch `font-serif text-3xl` headers inside the dashboard chrome to `font-semibold tracking-tight text-xl` sans.
- All numbers → `font-mono tabular-nums`.
- Replace pastel `bg-amber-50` / `bg-rose-50` tile fills with neutral `bg-white` + `border-slate-200/70`; reserve color for status dots, deltas, and chart strokes only.
- Tighten everything: 12–13px base text inside cards, denser row heights, more rows per screen.
- Per-industry top bar keeps the brand accent only as a 2px underline on the active nav item and in chart strokes — not as fills.

### 5. Route wiring

`src/routes/dashboard.$slug.tsx` becomes a thin shell: ribbon + sticky app top bar + page title + per-slug `<IndustryDashboard cfg={cfg} />` switch + footer CTA. No layout logic in the route.

## Out of scope

- Pricing, blog, AI preview tool, SEO, legal pages, footer, terms (already covered by other tasks).
- The marketing `/dashboards` overview page (this is about the live `/dashboard/$slug` demos).
- Real data integrations — still fictional, just dressed to look real.

## Technical notes

- All charts are inline SVG (polyline, rect, path). No new dependencies.
- Keep `IndustrySlug` typing intact; extend `DashboardConfig` with optional new fields per industry instead of breaking the shared interface.
- Layouts must remain responsive — KPI strip wraps 2-col on mobile, secondary panels stack.
