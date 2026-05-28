import type { IndustryContent } from "@/components/industry-template";

export const INDUSTRY_SLUGS = [
  "law-firms",
  "restaurants",
  "contractors",
  "salons-wellness",
  "real-estate",
  "consultants-coaches",
] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export const INDUSTRIES: Record<IndustrySlug, IndustryContent> = {
  "law-firms": {
    label: "Law Firms",
    title: (
      <>
        Modern systems for <span className="text-terracotta">small &amp; mid-size law firms.</span>
      </>
    ),
    intro:
      "Cases, deadlines, billing, and client intake — all running in different tools. We connect them into one calm system so nothing slips and partners can see the whole firm at a glance.",
    pains: [
      "Case status buried inside Clio or MyCase — no firm-wide view",
      "Unbilled hours and aging invoices nobody is watching",
      "New intakes scattered between email, web forms, and voicemail",
      "Deadline tracking that depends on one paralegal remembering",
    ],
    systems: [
      { title: "Firm dashboard", body: "Open matters, billable hours, AR, and upcoming deadlines in one screen with role-based access." },
      { title: "Intake automation", body: "Web form → conflict check checklist → CRM record → assigned attorney, with auto-acknowledgment to the prospect." },
      { title: "Deadline & SOL alerts", body: "Automatic SMS/email warnings 30/14/7 days before statutory dates and key court dates." },
      { title: "AI client communications", body: "Drafted status updates and follow-ups in your firm's voice, attorney-reviewed before send." },
    ],
    tools: ["Clio", "MyCase", "PracticePanther", "Filevine", "CosmoLex", "QuickBooks", "Microsoft 365", "Gmail"],
    workflow: [
      "Prospect submits intake form on your website.",
      "AI runs a conflict-of-interest checklist and tags the matter type.",
      "Lead is created in Clio/MyCase with the right attorney assigned.",
      "Auto-acknowledgment email is sent in the firm's voice within 60 seconds.",
      "Dashboard updates: new matter, source, attorney, status.",
    ],
    caseStudy: {
      name: "Tucson plaintiffs firm",
      result:
        "Cut intake response time from ~36 hours to under 5 minutes and gave partners a single AR + caseload view for the first time.",
    },
  },
  restaurants: {
    label: "Restaurants",
    title: (
      <>
        Run the floor and the <span className="text-terracotta">numbers.</span>
      </>
    ),
    intro:
      "POS, scheduling, payroll, online ordering, reservations — every shift produces data you never see. We pull it together so owners actually know what's working.",
    pains: [
      "Daily sales emailed in PDFs nobody opens",
      "Menu items underperforming for months before anyone notices",
      "Labor cost spikes only show up after payroll runs",
      "Online reviews going unanswered for days",
    ],
    systems: [
      { title: "Daily ops dashboard", body: "Sales, covers, average ticket, labor %, and top/bottom menu items in one mobile-friendly view." },
      { title: "Shift AI brief", body: "A short morning summary: yesterday's numbers, today's reservations, weather, and what to prep extra." },
      { title: "Review response automation", body: "Drafted replies to Google and Yelp reviews in your voice, owner-approved with one tap." },
      { title: "Menu performance tracking", body: "Weekly report on dish margin and velocity so you know what to push, change, or 86." },
    ],
    tools: ["Toast", "Square", "Clover", "OpenTable", "Resy", "7shifts", "Gusto", "Google Business"],
    workflow: [
      "Last night's POS data syncs at close.",
      "AI generates a one-page morning brief for the owner.",
      "Dashboard updates with sales, labor %, and top movers.",
      "Any new reviews are triaged and drafted for response.",
      "Weekly menu and labor reports are emailed every Monday.",
    ],
    caseStudy: {
      name: "Two-location Tucson restaurant group",
      result:
        "Owner stopped opening five apps each morning. Identified two underperforming dishes and trimmed labor cost by 3 points in the first quarter.",
    },
  },
  contractors: {
    label: "Contractors",
    title: (
      <>
        Quotes, jobs, and invoices that <span className="text-terracotta">don't fall through.</span>
      </>
    ),
    intro:
      "Whether you run HVAC, plumbing, electrical, landscaping, or general contracting — your day shouldn't be spent retyping the same info into three tools. We connect the field to the office.",
    pains: [
      "Quotes sent and then forgotten about",
      "Invoices going out late or not at all",
      "Techs and dispatch using totally different systems",
      "No clear view of revenue, jobs in progress, or AR",
    ],
    systems: [
      { title: "Job & revenue dashboard", body: "Active jobs, scheduled jobs, quoted-but-not-won, AR aging, and revenue this month vs. last." },
      { title: "Quote follow-up automation", body: "Email + SMS sequence after a quote is sent — 2 days, 7 days, 14 days — until accepted or declined." },
      { title: "Customer reminders", body: "Appointment confirmations, on-the-way texts, and post-job review requests run automatically." },
      { title: "Lead intake", body: "Website form, Google ad lead, and missed call all land in one CRM with auto-acknowledgment." },
    ],
    tools: ["Jobber", "ServiceTitan", "Housecall Pro", "QuickBooks", "Stripe", "Twilio", "Google Local Services"],
    workflow: [
      "Lead comes in from website, Google, or missed call.",
      "Auto-text sent within 60 seconds: 'Got your request, we'll be in touch today.'",
      "Lead is created in Jobber/HCP with source and job type tagged.",
      "Quote sent → automated follow-up sequence starts.",
      "Job completed → invoice + review request go out the same day.",
    ],
    caseStudy: {
      name: "Phoenix HVAC company",
      result:
        "Quote-to-close rate jumped from 28% to 41% after adding the follow-up sequence. Owner finally has a real dashboard instead of QuickBooks reports.",
    },
  },
  "salons-wellness": {
    label: "Salons & Wellness",
    title: (
      <>
        More booked time. Happier <span className="text-terracotta">repeat clients.</span>
      </>
    ),
    intro:
      "Salons, spas, med-spas, gyms, and wellness studios live and die by appointments and retention. We turn your booking platform into a real business system.",
    pains: [
      "No idea which providers are actually profitable",
      "Clients churn quietly — no rebook, no follow-up",
      "Gift cards, packages, and memberships tracked in spreadsheets",
      "Front desk drowning in DMs, texts, and calls",
    ],
    systems: [
      { title: "Studio dashboard", body: "Bookings per provider, revenue per chair, retention rate, and package/membership balances at a glance." },
      { title: "Rebooking automation", body: "Personalized follow-up by service type: color reminder at 6 weeks, facial at 4, etc." },
      { title: "Inbox triage AI", body: "Sorts incoming DMs, emails, and texts into 'book me', 'question', or 'spam' and drafts replies." },
      { title: "Review & referral flow", body: "Post-visit text → review → optional referral code, all automated." },
    ],
    tools: ["Vagaro", "Mindbody", "Boulevard", "Jane App", "Fresha", "Square", "Instagram DMs"],
    workflow: [
      "Client books online or via DM.",
      "Auto-confirmation + reminder sequence runs.",
      "Visit completes → review + rebook prompt goes out.",
      "Dashboard updates retention and provider revenue.",
      "Inactive clients (90+ days) get a win-back offer automatically.",
    ],
    caseStudy: {
      name: "Scottsdale med-spa",
      result:
        "Rebook rate climbed 22% in 90 days. Owner now sees provider profitability without exporting a single CSV.",
    },
  },
  "real-estate": {
    label: "Real Estate",
    title: (
      <>
        Pipeline, follow-up, and closings — <span className="text-terracotta">finally connected.</span>
      </>
    ),
    intro:
      "Agents, teams, and small brokerages: your CRM, transaction software, and email shouldn't be three separate worlds. We make them one.",
    pains: [
      "Leads from Zillow, the site, and open houses living in different places",
      "Drip campaigns that feel generic and get ignored",
      "Commission and pipeline numbers reconstructed by hand each month",
      "Transactions where every party is texting the same question",
    ],
    systems: [
      { title: "Pipeline & GCI dashboard", body: "Buyers, sellers, under contract, closing this month — with projected GCI." },
      { title: "AI lead nurturing", body: "Personalized email + SMS sequences by lead source and stage, written in your voice." },
      { title: "Transaction coordinator AI", body: "Drafted updates to clients, lenders, and title at every milestone." },
      { title: "Listing & open house intake", body: "QR-code sign-in → CRM contact → instant follow-up text + market alert signup." },
    ],
    tools: ["Follow Up Boss", "kvCORE", "Sierra Interactive", "Dotloop", "Skyslope", "QuickBooks"],
    workflow: [
      "Lead comes in from website, Zillow, or open house.",
      "Auto-text + email within 60 seconds, tagged by source and price band.",
      "AI sequence runs until lead replies or unsubscribes.",
      "Once under contract, transaction updates are drafted at each milestone.",
      "Dashboard updates GCI, pipeline, and projected close dates.",
    ],
    caseStudy: {
      name: "Tucson real estate team (6 agents)",
      result:
        "Stopped using a $400/mo CRM add-on; lead-to-appointment rate rose 17%. Team lead has one dashboard for the whole pipeline.",
    },
  },
  "consultants-coaches": {
    label: "Consultants & Coaches",
    title: (
      <>
        Spend more time with clients. Less time on <span className="text-terracotta">admin.</span>
      </>
    ),
    intro:
      "Solo consultants, agencies, and coaches: your calendar, proposals, invoices, and email shouldn't eat half your week. We build the back office that runs itself.",
    pains: [
      "Discovery calls scheduled by hand across timezones",
      "Proposals that take an hour each to format and send",
      "Invoices forgotten until cashflow gets tight",
      "Repeat client questions answered the same way every time",
    ],
    systems: [
      { title: "Booking & intake flow", body: "Lead form → qualifying questions → calendar → contract → deposit — fully automated." },
      { title: "Proposal automation", body: "Templated proposals generated from intake answers in under 5 minutes." },
      { title: "Client portal-lite", body: "One link with project status, files, invoices, and next steps for each client." },
      { title: "AI knowledge assistant", body: "Trained on your past answers/playbooks to draft replies to common client questions." },
    ],
    tools: ["HubSpot", "Notion", "Airtable", "Stripe", "Calendly", "Google Workspace", "Slack"],
    workflow: [
      "Prospect books a discovery call via your site.",
      "Pre-call intake form fills your CRM automatically.",
      "After the call, a tailored proposal is drafted in minutes.",
      "Signed proposal triggers deposit invoice + onboarding email.",
      "Client portal-lite goes live with timeline, files, and next steps.",
    ],
    caseStudy: {
      name: "Phoenix strategy consultant",
      result:
        "Reduced proposal-to-signature time from 9 days to under 48 hours. Recovered roughly 6 hours a week of admin time.",
    },
  },
};

export const INDUSTRY_NAV: { slug: IndustrySlug; label: string }[] = INDUSTRY_SLUGS.map(
  (slug) => ({ slug, label: INDUSTRIES[slug].label }),
);