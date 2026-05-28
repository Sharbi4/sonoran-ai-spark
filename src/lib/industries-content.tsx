import type { IndustryContent } from "@/components/industry-template";
import type { DashboardSpec } from "@/components/mockups";

export const INDUSTRY_SLUGS = [
  "law-firms",
  "contractors",
  "restaurants",
  "salons-wellness",
  "real-estate",
  "consultants-coaches",
  "doctors-medical",
  "financial-advisors",
  "political-campaigns",
  "small-business-teams",
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
  "doctors-medical": {
    appName: "Sonoran · Practice Hub",
    view: "Dr. Chen & Associates · today",
    kpis: [
      { label: "Today's appts", value: "34", delta: "2 walk-ins", positive: true },
      { label: "Check-ins", value: "28", delta: "82%", positive: true },
      { label: "Follow-ups due", value: "12", delta: "3 overdue", positive: false },
      { label: "Patient NPS", value: "92", delta: "4 pts", positive: true },
    ],
    chart: { title: "Patient volume · last 14 days", data: [28, 32, 30, 35, 33, 38, 36, 34, 40, 42, 38, 44, 41, 46], accent: "sage" },
    rows: [
      { label: "Primary care", value: 88, max: 100, accent: "copper" },
      { label: "Follow-ups", value: 72, max: 100, accent: "copper" },
      { label: "New patients", value: 54, max: 100, accent: "sage" },
      { label: "Telehealth", value: 32, max: 100, accent: "sage" },
    ],
    list: {
      title: "Today's queue",
      items: [
        { primary: "9:00 · Sarah Martinez", secondary: "Annual physical · Room 2", tag: "Checked in" },
        { primary: "9:30 · Robert Kim", secondary: "Follow-up · Labs reviewed", tag: "Waiting" },
        { primary: "10:00 · New patient intake", secondary: "Forms completed online · auto-imported", tag: "New" },
        { primary: "Reminder batch · 2pm", secondary: "18 tomorrow's patients · auto-text", tag: "Queued" },
      ],
    },
  },
  "financial-advisors": {
    appName: "Sonoran · Wealth OS",
    view: "Advisory team · this quarter",
    kpis: [
      { label: "AUM", value: "$42.8M", delta: "$2.1M", positive: true },
      { label: "Active clients", value: "186", delta: "8 new", positive: true },
      { label: "Meetings this week", value: "14", delta: "3 reviews", positive: true },
      { label: "Revenue YTD", value: "$312K", delta: "18%", positive: true },
    ],
    chart: { title: "Revenue · last 14 days", data: [18, 22, 20, 26, 24, 30, 28, 34, 32, 38, 36, 42, 40, 48], accent: "copper" },
    rows: [
      { label: "Annual reviews", value: 78, max: 100, accent: "copper" },
      { label: "Financial plans", value: 62, max: 100, accent: "copper" },
      { label: "New client onboarding", value: 44, max: 100, accent: "sage" },
      { label: "Referral meetings", value: 28, max: 100, accent: "sage" },
    ],
    list: {
      title: "Client activity",
      items: [
        { primary: "Annual review · Thompson family", secondary: "Portfolio rebalance recommended", tag: "Mon" },
        { primary: "New client · Patel", secondary: "Onboarding docs 80% complete", tag: "Pending" },
        { primary: "Document request · Williams trust", secondary: "Secure upload link sent", tag: "Sent" },
        { primary: "AI summary · Market brief", secondary: "Weekly client-facing draft ready", tag: "Draft" },
      ],
    },
  },
  "political-campaigns": {
    appName: "Sonoran · Campaign HQ",
    view: "District 7 · this cycle",
    kpis: [
      { label: "Donations", value: "$284K", delta: "$18K this week", positive: true },
      { label: "Volunteers", value: "342", delta: "28 new", positive: true },
      { label: "Doors knocked", value: "8,420", delta: "1,240 this wk", positive: true },
      { label: "Email open rate", value: "34%", delta: "6 pts", positive: true },
    ],
    chart: { title: "Donations · last 14 days", data: [4, 6, 5, 8, 12, 10, 15, 18, 14, 22, 20, 28, 24, 32], accent: "copper" },
    rows: [
      { label: "Door-to-door", value: 92, max: 100, accent: "copper" },
      { label: "Phone banking", value: 68, max: 100, accent: "copper" },
      { label: "Digital outreach", value: 84, max: 100, accent: "sage" },
      { label: "Events", value: 56, max: 100, accent: "sage" },
    ],
    list: {
      title: "Campaign activity",
      items: [
        { primary: "Town hall · Fri 6pm", secondary: "142 RSVPs · venue confirmed", tag: "Fri" },
        { primary: "Email blast · policy update", secondary: "Draft reviewed · 12,400 recipients", tag: "Send" },
        { primary: "Volunteer shift · Sat canvass", secondary: "38 confirmed · 4 precincts", tag: "Sat" },
        { primary: "Donation surge · $8.2K today", secondary: "142 donors · avg $58", tag: "Live" },
      ],
    },
  },
  "small-business-teams": {
    appName: "Sonoran · Team OS",
    view: "Your team · this week",
    kpis: [
      { label: "Revenue", value: "$24.8K", delta: "14%", positive: true },
      { label: "Active leads", value: "42", delta: "9 new", positive: true },
      { label: "Tasks completed", value: "87", delta: "12 today", positive: true },
      { label: "Response time", value: "18 min", delta: "42% faster", positive: true },
    ],
    chart: { title: "Revenue · last 14 days", data: [1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 1.9, 2.4, 2.6, 2.8, 3.0, 2.7, 3.2, 3.4], accent: "sage" },
    rows: [
      { label: "Leads in pipeline", value: 76, max: 100, accent: "copper" },
      { label: "Projects active", value: 58, max: 100, accent: "copper" },
      { label: "Invoices sent", value: 42, max: 100, accent: "sage" },
      { label: "Support tickets", value: 24, max: 100, accent: "sage" },
    ],
    list: {
      title: "Team feed",
      items: [
        { primary: "New lead · website form", secondary: "Auto-assigned to Sarah · reply drafted", tag: "New" },
        { primary: "Invoice #1047 paid", secondary: "$3,200 · auto-reconciled", tag: "Paid" },
        { primary: "Project milestone · Atlas Co", secondary: "Phase 2 deliverables due Thu", tag: "Thu" },
        { primary: "AI weekly digest", secondary: "Revenue up 14% · 3 leads need follow-up", tag: "AI" },
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
  "doctors-medical": {
    label: "Doctors & Medical Practices",
    title: (
      <>
        Modern concierge systems for <span className="text-terracotta">medical practices.</span>
      </>
    ),
    intro:
      "Patient intake, appointment scheduling, follow-up reminders, billing — your practice runs on a dozen disconnected tools. We connect them into one intelligent system so your staff focuses on patients, not paperwork.",
    pains: [
      "Patient intake forms still on clipboards or clunky PDFs",
      "No-shows costing thousands per month with no automated reminders",
      "Follow-up care falling through the cracks after discharge",
      "Staff spending hours on phone calls that could be automated",
      "No single view of daily schedule, billing, and patient satisfaction",
    ],
    systems: [
      { title: "Patient intake automation", body: "Digital forms patients complete on their phone before arrival — auto-imported into your EHR with zero data entry." },
      { title: "Smart scheduling & reminders", body: "Automated appointment confirmations, reminders at 48h/24h/2h, and waitlist management to fill cancellations." },
      { title: "Practice dashboard", body: "Daily appointments, check-ins, follow-up reminders, billing overview, staff schedule, and patient satisfaction in one screen." },
      { title: "AI daily office summary", body: "A morning brief with today's patient load, outstanding follow-ups, billing flags, and staff availability." },
      { title: "Follow-up automation", body: "Post-visit check-ins, prescription reminders, and care plan follow-ups sent automatically in your practice's voice." },
      { title: "Secure messaging", body: "HIPAA-aware patient communication with auto-responses for common questions and smart routing to the right staff member." },
    ],
    tools: ["Athenahealth", "eClinicalWorks", "DrChrono", "Jane App", "SimplePractice", "Google Business", "Twilio"],
    workflow: [
      "Patient books online or calls — appointment confirmed instantly via text.",
      "24 hours before: intake forms sent digitally, completed on patient's phone.",
      "Check-in: front desk sees completed forms, insurance verified, room assigned.",
      "Post-visit: follow-up instructions sent automatically with care plan reminders.",
      "Dashboard updates: patient volume, billing status, satisfaction score, and staff load.",
    ],
    caseStudy: {
      name: "Tucson family practice (4 providers)",
      result:
        "Reduced no-shows by 34% with automated reminders. Front desk saves 2+ hours daily on intake processing. Patient satisfaction score rose to 92.",
    },
  },
  "financial-advisors": {
    label: "Financial Advisors",
    title: (
      <>
        Modern wealth management <span className="text-terracotta">systems that scale.</span>
      </>
    ),
    intro:
      "Client onboarding, document collection, meeting scheduling, portfolio reviews — your practice should run on systems, not memory. We build the back office that lets you focus on advice.",
    pains: [
      "Client onboarding that takes weeks of back-and-forth emails",
      "Secure document collection still happening via email attachments",
      "No dashboard showing pipeline, AUM, and revenue at a glance",
      "Follow-ups after meetings forgotten or sent days late",
      "Annual reviews scheduled manually — easy to miss",
    ],
    systems: [
      { title: "Client onboarding automation", body: "Digital intake → risk assessment → document checklist → e-signatures → welcome sequence, fully automated." },
      { title: "Secure document portal", body: "Branded upload portal with encryption, auto-filing, and notifications when clients submit documents." },
      { title: "Wealth dashboard", body: "Client pipeline, AUM overview, upcoming meetings, revenue trends, and goal tracking in one beautiful view." },
      { title: "Meeting prep AI", body: "Before every client meeting, AI generates a summary: portfolio changes, market context, talking points, and action items." },
      { title: "Automated follow-up", body: "Post-meeting summaries, action items, and next-steps sent to clients within hours — drafted by AI, reviewed by you." },
      { title: "Annual review scheduler", body: "Automatic reminders to book annual reviews based on client anniversary dates, with one-click scheduling." },
    ],
    tools: ["Wealthbox", "Redtail", "Riskalyze", "MoneyGuidePro", "DocuSign", "Calendly", "Stripe", "Outlook"],
    workflow: [
      "Prospect fills out discovery form on your website.",
      "AI qualifies the lead and schedules an intro call automatically.",
      "After the call, onboarding sequence launches: docs, risk assessment, e-sign.",
      "Client portal goes live with portfolio view, documents, and meeting history.",
      "Dashboard updates: new AUM, revenue projection, and next review date.",
    ],
    caseStudy: {
      name: "Scottsdale independent RIA (3 advisors)",
      result:
        "Client onboarding time dropped from 3 weeks to 4 days. AUM visibility went from quarterly spreadsheets to real-time dashboard.",
    },
  },
  "political-campaigns": {
    label: "Political Campaigns",
    title: (
      <>
        High-energy operations for <span className="text-terracotta">winning campaigns.</span>
      </>
    ),
    intro:
      "Volunteers, donations, events, voter outreach, email blasts — campaigns run on speed and data. We build the connected systems that give your team a real-time view of everything happening on the ground.",
    pains: [
      "Volunteer signups scattered across Google Forms, texts, and walk-ins",
      "Donation tracking disconnected from outreach and events",
      "No real-time view of canvassing progress or voter contacts",
      "Email campaigns sent blind — no idea what's working",
      "Event logistics managed in spreadsheets with no automation",
    ],
    systems: [
      { title: "Campaign dashboard", body: "Donation totals, volunteer activity, event attendance, outreach metrics, email performance, and geographic engagement in one HQ view." },
      { title: "Volunteer management", body: "Online signup → auto-assignment to shifts → text reminders → post-shift thank-you, all automated." },
      { title: "Donation tracking & CRM", body: "Every donation linked to donor profile, outreach history, and event attendance for smarter fundraising." },
      { title: "SMS & email outreach", body: "Segmented campaigns by precinct, donor level, or issue area with real-time performance tracking." },
      { title: "Event management", body: "RSVP tracking, automated reminders, check-in via QR code, and post-event follow-up sequences." },
      { title: "Voter contact workflows", body: "Door-to-door canvassing tracked in real-time with turf assignments, scripts, and response logging." },
    ],
    tools: ["ActBlue", "NGP VAN", "Action Network", "Twilio", "Mailchimp", "Google Sheets", "Zapier"],
    workflow: [
      "Volunteer signs up on campaign website — auto-assigned to next available shift.",
      "Canvassing day: volunteers get turf maps, scripts, and check-in via mobile.",
      "Donation comes in via ActBlue — donor profile updated, thank-you sent instantly.",
      "Event created → RSVPs tracked → reminders at 48h/2h → QR check-in at door.",
      "Dashboard updates: donations, doors knocked, emails sent, volunteer hours — all live.",
    ],
    caseStudy: {
      name: "Arizona state legislature campaign",
      result:
        "Volunteer retention doubled with automated shift reminders. Donation tracking gave the team real-time fundraising visibility for the first time.",
    },
  },
  "small-business-teams": {
    label: "Small Business Teams",
    title: (
      <>
        One system for teams that <span className="text-terracotta">wear every hat.</span>
      </>
    ),
    intro:
      "You're the owner, the sales team, the marketing department, and the customer service desk. We build the connected system that handles the busywork so your small team can focus on growth.",
    pains: [
      "Leads coming in from 5 places with no unified view",
      "Invoices, proposals, and follow-ups managed in your head",
      "No idea which marketing efforts are actually driving revenue",
      "Customer questions answered the same way over and over",
      "Team communication scattered across text, email, and Slack",
    ],
    systems: [
      { title: "Team command center", body: "Revenue, leads, tasks, invoices, and support tickets in one dashboard everyone on the team can see." },
      { title: "Lead capture & routing", body: "Website forms, social DMs, and phone calls all land in one inbox with auto-assignment and instant reply." },
      { title: "Invoice & payment automation", body: "Send invoices, track payments, and auto-follow-up on overdue accounts without manual effort." },
      { title: "AI customer assistant", body: "Trained on your business to answer common questions, draft replies, and route complex issues to the right person." },
      { title: "Weekly AI digest", body: "Every Monday: revenue trends, lead pipeline health, overdue tasks, and what needs attention this week." },
    ],
    tools: ["QuickBooks", "Stripe", "HubSpot", "Notion", "Slack", "Google Workspace", "Zapier", "Twilio"],
    workflow: [
      "New lead comes in from any channel — auto-captured and assigned.",
      "AI drafts a response in your voice — team member reviews and sends.",
      "Proposal sent → follow-up sequence starts automatically.",
      "Job completed → invoice generated → payment link sent → reminder if overdue.",
      "Monday AI digest summarizes the week: revenue, pipeline, and action items.",
    ],
    caseStudy: {
      name: "Tucson 5-person service company",
      result:
        "Response time to leads dropped from 6 hours to 18 minutes. Owner recovered 8+ hours per week from manual admin tasks.",
    },
  },
};

export const INDUSTRY_NAV: { slug: IndustrySlug; label: string }[] = INDUSTRY_SLUGS.map(
  (slug) => ({ slug, label: INDUSTRIES[slug].label }),
);