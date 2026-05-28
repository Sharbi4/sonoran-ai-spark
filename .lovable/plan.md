## Goal
Position **3-Month Website Care** as an included value-add on every website-related package, with clearly defined limits so it doesn't become unbounded support.

## Scope of changes (all in `src/routes/packages.tsx`)

### 1. Add care note to Web & Brand cards
The "Build the System" cards currently only show price + tagline (no bullets). I'll extend the Web & Brand items with an optional `care` flag, and render a small badge under the tagline:

> ✓ Includes 3-Month Website Care

Applies to:
- **Starter Website** ($1,750+)
- **Website System Launch** ($2,500+)
- **Brand + Web Launch** ($3,000+)

Note: there is no "Website + Automation Launch" package on the page today. I'll add the care badge to the three above and ask whether you want a new combined package created (see open question).

### 2. New "What's Included in 3-Month Website Care" section
A clean two-column block placed directly under the Web & Brand group (before Automation & AI), styled to match existing section cards:

- **Included** (small edits, up to 5 per month for 3 months):
  text updates, image swaps, link/button fixes, typo fixes, contact-info updates, testimonial swaps, business-hours updates, minor spacing/mobile fixes, form routing corrections, broken-link fixes, basic launch bug fixes, small SEO title/meta updates, updating one existing section with provided content.
- **Not included** (quoted separately or via monthly support):
  new pages, redesigns, new brand direction, new logos, new automations/integrations, dashboards, portals, blog writing, SEO campaigns, paid ads, large copy rewrites, major layout changes, ecommerce, custom code, platform migration.

### 3. Edit-size reference table
Compact table under the care section:

| Edit type | Examples | Included? |
|---|---|---|
| Small | text, image swap, typo, link, button | Yes, during care |
| Medium | rework existing section, new form field, single-section layout change | Limited / may be quoted |
| Large | new page, redesign, new feature/integration/automation | Quoted separately |

### 4. Fine-print line
Append to the existing fine-print/footnote area on the packages page:

> Website packages include 3 months of post-launch website care covering up to 5 small edits per month (text changes, image swaps, typo/link fixes, form routing corrections, minor layout adjustments). New pages, redesigns, new sections, integrations, automation/dashboard work, ecommerce, and major copy rewrites are quoted separately. Automation packages: care covers website edits only — automation/workflow/chatbot/email-sequence changes are scoped separately or via a monthly support plan.

## Open questions
1. Do you want me to **add a new "Website + Automation Launch ($3,500+)"** package to the Web & Brand group (you referenced it in the brief, but it doesn't exist yet)?
2. Confirm the **5 edits/month cap** wording — include it on the cards too, or keep it only in the fine print so the cards stay clean?

## Out of scope
- No changes to retainer pricing or contents.
- No changes to Start Here cards (Strategy Call, Audit, etc.).
- No backend/Stripe changes.
