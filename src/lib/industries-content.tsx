import type { IndustryContent } from "@/components/industry-template";
import type { DashboardSpec } from "@/components/mockups";

export const INDUSTRY_SLUGS = [
  "law-firms",
  "restaurants",
  "contractors",
  "salons-wellness",
  "real-estate",
  "consultants-coaches",
] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export const INDUSTRY_MOCKUPS: Record<IndustrySlug, DashboardSpec> = {
  "law-firms": {
    appName: "Sonoran · Firm Dashboard",
    view: "Partner view · this week",
    kpis: [
      { label: "Open matters", value: "128", delta: "6 new", positive: true },
      { label: "Billable hrs", value: "412", delta: "8% MoM", positive: true },
      { label: "AR > 60d", value: "$48.2k", delta: "$6.1k", positive: false },
      { label: "New intakes", value: "17", delta: "5 today", positive: true },
    ],
    chart: { title: "Billable hours · firm-wide", data: [22, 28, 26, 34, 31, 38, 41, 36, 44, 47, 42, 49, 53, 58], accent: "copper" },
    rows: [
      { label: "Litigation", value: 184, max: 200, accent: "copper" },
      { label: "Estate planning", value: 112, max: 200, accent: "copper" },
      { label: "Family law", value: 78, max: 200, accent: "sage" },
      { label: "Corporate", value: 38, max: 200, accent: "sage" },
    ],
    list: {
      title: "Upcoming deadlines",
      items: [
        { primary: "Motion to dismiss · Garcia v. Pima", secondary: "Due Thu · Atty: M. Rivera", tag: "7d" },
        { primary: "Discovery response · Bell Holdings", secondary: "Due Fri · Atty: S. Patel", tag: "9d" },
        { primary: "SOL expiry · Hernandez matter", secondary: "30-day window opens Mon", tag: "30d" },
        { primary: "New intake · auto injury", secondary: "Conflict check passed · assign", tag: "New" },
      ],
    },
  },
  restaurants: {
    appName: "Sonoran · Daily Ops",
    view: "Two locations · yesterday",
    kpis: [
      { label: "Net sales", value: "$18,420", delta: "12% WoW", positive: true },
      { label: "Covers", value: "284", delta: "9%", positive: true },
      { label: "Avg ticket", value: "$64.85", delta: "$3.10", positive: true },
      { label: "Labor %", value: "27.4%", delta: "1.2 pts", positive: false },
    ],
    chart: { title: "Net sales · last 14 days", data: [12, 14, 13, 16, 17, 19, 22, 18, 21, 23, 20, 24, 26, 28], accent: "copper" },
    rows: [
      { label: "Carne asada plate", value: 92, max: 100, accent: "copper" },
      { label: "Margarita flight", value: 78, max: 100, accent: "copper" },
      { label: "Sonoran hot dog", value: 64, max: 100, accent: "sage" },
      { label: "Mesquite ribeye", value: 28, max: 100, accent: "sage" },
    ],
    list: {
      title: "Action items",
      items: [
        { primary: "3 new Google reviews", secondary: "Draft replies ready to send", tag: "Draft" },
        { primary: "Tonight: 142 reservations", secondary: "+ 6 large parties · prep for 7p rush", tag: "7p" },
        { primary: "86: Hamachi crudo", secondary: "Supplier delivery delayed 1 day", tag: "86" },
        { primary: "Birria tacos margin down 4%", secondary: "Beef cost spike · review price", tag: "Watch" },
      ],
    },
  },
  contractors: {
    appName: "Sonoran · Job Board",
    view: "Field + Office · live",
    kpis: [
      { label: "Active jobs", value: "42", delta: "8 today", positive: true },
      { label: "Quoted", value: "$84.5k", delta: "12 open", positive: true },
      { label: "AR 30+", value: "$22.1k", delta: "$4k", positive: false },
      { label: "Close rate", value: "41%", delta: "13 pts", positive: true },
    ],
    chart: { title: "Revenue · last 14 days", data: [6, 8, 7, 11, 13, 12, 15, 17, 16, 19, 22, 21, 24, 27], accent: "copper" },
    rows: [
      { label: "HVAC installs", value: 38, max: 50, accent: "copper" },
      { label: "Service calls", value: 31, max: 50, accent: "copper" },
      { label: "Maintenance plans", value: 24, max: 50, accent: "sage" },
      { label: "Warranty followups", value: 9, max: 50, accent: "sage" },
    ],
    list: {
      title: "Today's schedule",
      items: [
        { primary: "9:00 · Williams residence", secondary: "AC tune-up · Tech: J. Ortiz", tag: "On way" },
        { primary: "11:30 · Saguaro Plaza", secondary: "Rooftop unit replacement", tag: "2 techs" },
        { primary: "2:00 · Quote · Vega home", secondary: "Mini-split · 3-zone estimate", tag: "Quote" },
        { primary: "Invoice · Mercado job #4471", secondary: "Auto-sent at completion · paid", tag: "Paid" },
      ],
    },
  },
  "salons-wellness": {
    appName: "Sonoran · Studio",
    view: "All providers · this week",
    kpis: [
      { label: "Bookings", value: "318", delta: "11%", positive: true },
      { label: "Rebook rate", value: "62%", delta: "8 pts", positive: true },
      { label: "Avg ticket", value: "$148", delta: "$12", positive: true },
      { label: "Inactive 90d", value: "47", delta: "win-back live", positive: true },
    ],
    chart: { title: "Revenue per chair", data: [340, 360, 380, 410, 395, 430, 460, 445, 470, 490, 510, 525, 540, 560], accent: "sage" },
    rows: [
      { label: "Maya · color", value: 96, max: 100, accent: "copper" },
      { label: "Sienna · facials", value: 88, max: 100, accent: "copper" },
      { label: "Aria · lash", value: 72, max: 100, accent: "sage" },
      { label: "Open chair", value: 31, max: 100, accent: "sage" },
    ],
    list: {
      title: "Auto-flows running",
      items: [
        { primary: "Color rebook · 6-week reminder", secondary: "32 clients in sequence", tag: "Live" },
        { primary: "Win-back · 90+ days inactive", secondary: "47 clients · 20% off offer", tag: "Live" },
        { primary: "Post-visit review · last 24h", secondary: "18 sent · 11 replies", tag: "61%" },
        { primary: "DM triage · @studio", secondary: "9 booking intents drafted", tag: "Draft" },
      ],
    },
  },
  "real-estate": {
    appName: "Sonoran · Pipeline",
    view: "Team of 6 · this month",
    kpis: [
      { label: "Active leads", value: "184", delta: "23 new", positive: true },
      { label: "Under contract", value: "11", delta: "$4.2M vol", positive: true },
      { label: "Projected GCI", value: "$112k", delta: "17%", positive: true },
      { label: "Lead → appt", value: "24%", delta: "5 pts", positive: true },
    ],
    chart: { title: "Pipeline value · last 14 days", data: [1.2, 1.4, 1.5, 1.8, 1.9, 2.1, 2.4, 2.3, 2.7, 3.0, 3.2, 3.4, 3.7, 4.2], accent: "copper" },
    rows: [
      { label: "Buyers", value: 92, max: 100, accent: "copper" },
      { label: "Sellers", value: 41, max: 100, accent: "copper" },
      { label: "Sphere / past clients", value: 36, max: 100, accent: "sage" },
      { label: "Open house signups", value: 28, max: 100, accent: "sage" },
    ],
    list: {
      title: "Transaction milestones",
      items: [
        { primary: "112 W. Speedway · inspection", secondary: "Drafted update to buyers + lender", tag: "Draft" },
        { primary: "Catalina foothills listing", secondary: "Goes live tomorrow · MLS ready", tag: "Live" },
        { primary: "Open house · Sat 11–1", secondary: "QR sign-in armed · 14 RSVPs", tag: "Sat" },
        { primary: "Closing · Vega family", secondary: "Tuesday · COE checklist 90%", tag: "Tue" },
      ],
    },
  },
  "consultants-coaches": {
    appName: "Sonoran · Practice OS",
    view: "Solo + 2 contractors · this month",
    kpis: [
      { label: "Active clients", value: "14", delta: "2 new", positive: true },
      { label: "MRR", value: "$28,400", delta: "9%", positive: true },
      { label: "Proposals out", value: "5", delta: "$48k", positive: true },
      { label: "Admin hrs", value: "3.2", delta: "6 hrs saved", positive: true },
    ],
    chart: { title: "Revenue · last 14 days", data: [400, 450, 600, 580, 720, 800, 900, 880, 1050, 1100, 1240, 1320, 1410, 1580], accent: "sage" },
    rows: [
      { label: "Retainer engagements", value: 84, max: 100, accent: "copper" },
      { label: "Strategy sprints", value: 56, max: 100, accent: "copper" },
      { label: "Workshops", value: 24, max: 100, accent: "sage" },
      { label: "Advisory calls", value: 18, max: 100, accent: "sage" },
    ],
    list: {
      title: "Next-step queue",
      items: [
        { primary: "Discovery · Atlas Logistics", secondary: "Intake filled · proposal drafted", tag: "Send" },
        { primary: "Invoice · Northstar Q3", secondary: "Auto-sent · net 15", tag: "Sent" },
        { primary: "Onboarding · new client", secondary: "Portal live · kickoff Thu", tag: "Live" },
        { primary: "AI knowledge assistant", secondary: "12 client questions drafted", tag: "Draft" },
      ],
    },
  },
};

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