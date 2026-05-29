export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // human-readable
  dateISO: string; // ISO YYYY-MM-DD
  readTime: string;
  author: string;
  heroImage: string;
  body: string; // markdown
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-automation-small-business-2025",
    title: "How AI Automation Is Transforming Small Business Operations in 2026",
    excerpt:
      "From intelligent lead capture to automated follow-ups, here is how Arizona businesses are leveraging AI to save 15+ hours per week and grow revenue without growing headcount.",
    category: "AI Strategy",
    date: "May 25, 2026",
    dateISO: "2026-05-25",
    readTime: "8 min read",
    author: "Sonoran Systems & AI",
    heroImage:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80",
    body: `## The shift nobody saw coming

Two years ago, "AI for small business" meant a chatbot on a website that frustrated customers more than it helped. Today, a single Tucson contractor can run lead capture, quoting, follow-up, scheduling, and review collection on autopilot — with no full-time admin and no enterprise software bill.

The difference isn't the models. It's that the tooling has finally caught up to what owners actually need: workflows that connect their existing systems (Stripe, calendar, CRM, QuickBooks, Google Drive) and quietly do the work in the background.

## What "AI automation" actually means in 2026

Strip away the buzzwords and there are four real categories:

1. **Lead capture and routing.** A form on your site captures an inquiry. An LLM reads it, scores intent, drafts a personalized reply, and routes the lead to the right person — in under 60 seconds.
2. **Document and data extraction.** Insurance docs, contractor bids, invoices, vehicle titles — anything that used to require a human re-typing it. Now extracted, validated, and dropped into the right system.
3. **Voice agents.** Inbound calls answered 24/7 in your brand voice, booking appointments straight into your calendar. Real estate, salons, medical practices — this is the single fastest-payback automation we deploy.
4. **Internal copilots.** Your team asks "what's the status of the Riverside project?" and gets a synthesized answer pulled from email, project management, and shared drives.

## What we see working for Arizona businesses

- A Phoenix HVAC company added an AI receptionist and went from missing 22% of after-hours calls to 0%. Same crew, $180K more annual revenue.
- A Tucson law firm built a client intake bot that asks the same questions a paralegal would. The bot pre-fills the case file before the attorney ever joins the call. **Time-per-intake: 47 minutes → 9.**
- A Flagstaff salon group automated review requests after every service. **Google reviews per month: 6 → 41.** Cost: roughly one cappuccino.

## Where AI still doesn't belong

- High-stakes legal, medical, or financial advice without a human in the loop.
- Anything where the cost of a wrong answer is high and recoverability is low.
- Replacing actual relationships with your top 20% of clients. AI is for the bottom 80% of repetitive work that nobody enjoys anyway.

## How to start

Pick the single most repetitive thing your team does this week — the thing that someone always groans about. That's your first automation. Don't try to "do AI" as a strategy. Eliminate one specific friction point, measure the time saved, then do the next one.

If you want a written roadmap for your business, our [AI Business Systems Audit](/ai-audit) does exactly that.`,
  },
  {
    slug: "workflow-automation-roi",
    title: "The ROI of Workflow Automation: What Arizona Business Owners Need to Know",
    excerpt:
      "The real numbers behind automation — what it costs, how fast it pays off, and which processes to automate first for maximum impact.",
    category: "Automation",
    date: "May 20, 2026",
    dateISO: "2026-05-20",
    readTime: "6 min read",
    author: "Sonoran Systems & AI",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    body: `## The honest math

Most automation pitches lead with "save 20 hours a week!" That's true sometimes. It's also useless without context — those 20 hours have to be valuable enough to outweigh the build cost and ongoing maintenance.

Here's how we actually calculate ROI with clients.

## The simple formula

\`\`\`
(Hours saved per week) × (Loaded hourly cost) × 52
— minus —
(Build cost) + (Annual tool subscriptions)
= Year-one return
\`\`\`

Loaded hourly cost is **not** the wage. Add 30–40% for benefits, taxes, equipment, and management overhead. A $25/hr admin actually costs you ~$35/hr.

## A real example

A Tucson roofing contractor was spending ~12 hours/week chasing quotes through email and texts. We built:

- A lead intake form that classifies the job and pre-fills a quote template.
- An AI follow-up sequence that nudges cold leads on day 2, 5, and 12.
- A weekly digest that surfaces leads at risk of going dark.

**Build cost:** $4,200. **Tool subscriptions:** ~$140/month.

- Hours saved: 12/week
- Loaded cost: $40/hr
- Annual value: 12 × 40 × 52 = $24,960
- Annual cost: $4,200 + $1,680 = $5,880
- **Year-one return: ~$19,000.** Payback: under 90 days.

And that ignores the *new revenue* from quoting faster than the competition, which turned out to be the bigger story.

## Which processes to automate first

Rank everything your team does this week by **(frequency) × (annoyance)**. The top 3 are your candidates. Avoid:

- Anything that happens less than weekly (rarely worth automating)
- Anything that requires real judgement (use AI to assist, not replace)
- Anything that's about to change (don't automate a process you're going to retire)

## The biggest mistake we see

Owners who try to "automate everything" all at once. It never works. Automate one thing, let it bed in for 30 days, measure, then automate the next.

Want to know exactly which automations would pay off fastest for *your* business? That's what our [AI Business Systems Audit](/ai-audit) delivers — a written, prioritized roadmap with cost and payback estimates per item.`,
  },
  {
    slug: "business-intelligence-dashboards",
    title: "5 Business Intelligence Dashboards Every Growing Company Needs",
    excerpt:
      "Stop guessing and start knowing. These five dashboard types give you real-time visibility into revenue, operations, marketing, and team performance.",
    category: "Dashboards",
    date: "May 10, 2026",
    dateISO: "2026-05-10",
    readTime: "5 min read",
    author: "Sonoran Systems & AI",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    body: `## Why most dashboards fail

They show too much. A 40-tile "executive dashboard" is just a wall of numbers nobody acts on. The dashboards that actually move businesses focus on one decision each.

Here are the five we build most often.

## 1. The revenue pulse

One screen, refreshed daily. Shows: monthly revenue vs target, top 5 customers, pipeline value, and a 30-day trend. If your week has 5 minutes for one dashboard, this is it.

## 2. The operations dashboard

For service businesses, this is the daily war room: jobs scheduled today, tomorrow, this week. Open invoices over 30 days. Crew utilization. Inventory below threshold. Anything red gets handled before the day starts.

## 3. The marketing attribution dashboard

Most owners can't answer "what's our cost per booked job from Google ads vs Instagram vs referrals?" This dashboard answers that. It typically pays for itself in a quarter by killing the worst-performing channel.

## 4. The customer-health dashboard

For recurring revenue businesses (agencies, SaaS, services with retainers): churn risk, NPS trend, support volume per account, and time-since-last-meeting. Surfaces the at-risk accounts *before* they cancel.

## 5. The leadership 1-page

For founders and managers: a single page covering revenue, cash, team capacity, and one "watch this" anomaly per week. The point isn't to drive decisions — it's to make sure leadership and the team are looking at the same reality.

## How to start

Don't build all five. Pick one — the one that answers your biggest current question. Get it in front of your team within two weeks. Iterate.

We build custom dashboards on top of whatever you already use (QuickBooks, Stripe, Google Sheets, your CRM). See examples on our [Dashboards page](/dashboards).`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}