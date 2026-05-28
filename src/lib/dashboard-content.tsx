import type { IndustrySlug } from "./industries-content";

export interface KPI { label: string; value: string; delta?: string; positive?: boolean }
export interface CallLogEntry { time: string; caller: string; intent: string; outcome: string; duration: string; sentiment: "positive" | "neutral" | "alert" }
export interface AgentTask { agent: string; task: string; status: "running" | "done" | "queued"; meta?: string }
export interface PipelineLead { name: string; value: string; meta: string }
export interface PipelineStage { name: string; accent: string; leads: PipelineLead[] }
export interface ActivityItem { time: string; icon: string; text: string; channel?: string }
export interface ScheduleItem { time: string; title: string; meta: string; tag?: string }

export interface DashboardConfig {
  slug: IndustrySlug;
  brandName: string;
  dashboardName: string;
  tagline: string;
  accent: string; // tailwind text class e.g. "text-amber-700"
  accentBg: string; // tailwind bg class e.g. "bg-amber-700"
  accentSoft: string; // tailwind bg-soft e.g. "bg-amber-50"
  pageBg: string; // hex
  kpis: KPI[];
  voiceAgent: { name: string; status: string; minutesToday: string; callsToday: string; calls: CallLogEntry[] };
  aiAgents: AgentTask[];
  pipelineTitle: string;
  pipeline: PipelineStage[];
  activity: ActivityItem[];
  schedule: { title: string; items: ScheduleItem[] };
  customWidget: {
    title: string;
    subtitle: string;
    rows: { left: string; right: string; meta?: string; pct?: number }[];
  };
}

export const DASHBOARD_CONFIGS: Record<IndustrySlug, DashboardConfig> = {
  "law-firms": {
    slug: "law-firms",
    brandName: "Ellison & Chen",
    dashboardName: "Firm Operations",
    tagline: "Intake, matters, billable hours & AI legal assistant",
    accent: "text-amber-700",
    accentBg: "bg-amber-700",
    accentSoft: "bg-amber-50",
    pageBg: "#fafaf7",
    kpis: [
      { label: "Open Matters", value: "128", delta: "+6 this week", positive: true },
      { label: "Billable Hrs (MTD)", value: "412", delta: "+8% MoM", positive: true },
      { label: "Avg Intake Time", value: "4m 12s", delta: "−74%", positive: true },
      { label: "AR > 60d", value: "$48.2K", delta: "+$6.1K", positive: false },
    ],
    voiceAgent: {
      name: "Vera · AI Intake Counselor",
      status: "Live · routing after-hours",
      minutesToday: "2h 18m",
      callsToday: "23",
      calls: [
        { time: "11:42a", caller: "Maria L.", intent: "Estate planning — new will", outcome: "Booked consult Thu 2pm", duration: "6:14", sentiment: "positive" },
        { time: "10:55a", caller: "+1 520‑555‑0117", intent: "Personal injury — auto", outcome: "Conflict check passed · assigned M. Rivera", duration: "8:42", sentiment: "alert" },
        { time: "10:11a", caller: "James W.", intent: "Small business formation", outcome: "Sent LLC packet + e‑sign", duration: "5:03", sentiment: "positive" },
        { time: "9:47a", caller: "Anonymous", intent: "Family law — custody", outcome: "Triaged · sensitive · attorney callback", duration: "11:22", sentiment: "alert" },
        { time: "8:30a", caller: "R. Aguilar", intent: "Probate question", outcome: "Answered · no engagement", duration: "3:11", sentiment: "neutral" },
      ],
    },
    aiAgents: [
      { agent: "DocDraft", task: "Drafting motion to dismiss · Garcia v. Pima", status: "running", meta: "62% complete" },
      { agent: "ClauseScan", task: "Reviewing 14-page MSA for Bell Holdings", status: "running", meta: "3 risks flagged" },
      { agent: "BillingBot", task: "Reconciling timekeeper entries for August", status: "done", meta: "$18,420 ready to invoice" },
      { agent: "ConflictCheck", task: "Cross-referencing new intake parties", status: "queued", meta: "5 in queue" },
    ],
    pipelineTitle: "Active Matter Pipeline",
    pipeline: [
      { name: "New Intakes", accent: "bg-amber-100 text-amber-800", leads: [
        { name: "Vasquez — PI Auto", value: "Est. $42K", meta: "Today" },
        { name: "Lee — Estate", value: "Flat $3.5K", meta: "Yesterday" },
      ]},
      { name: "Conflict Cleared", accent: "bg-blue-100 text-blue-800", leads: [
        { name: "Patel — Corporate", value: "Hourly $385/h", meta: "2d" },
      ]},
      { name: "Engagement Sent", accent: "bg-violet-100 text-violet-800", leads: [
        { name: "Bell Holdings — MSA", value: "$24K", meta: "Awaiting sig" },
        { name: "Hernandez — Probate", value: "$8K", meta: "3d" },
      ]},
      { name: "Active Matter", accent: "bg-emerald-100 text-emerald-800", leads: [
        { name: "Garcia v. Pima", value: "Trial Sep 14", meta: "Litigation" },
      ]},
    ],
    activity: [
      { time: "now", icon: "📞", text: "Vera completed intake call with Maria L. — Estate", channel: "Voice" },
      { time: "12m", icon: "📧", text: "Auto-sent engagement letter to Patel Inc.", channel: "Email" },
      { time: "28m", icon: "🤖", text: "DocDraft flagged 3 boilerplate clauses for review", channel: "AI" },
      { time: "1h", icon: "💳", text: "Invoice #2841 paid — $12,400 (Bell Holdings)", channel: "Billing" },
      { time: "2h", icon: "📅", text: "Court reminder sent: Hearing Thu 9am · Judge Ortega", channel: "SMS" },
    ],
    schedule: {
      title: "Today's Calendar",
      items: [
        { time: "9:00a", title: "Consultation — Vasquez (PI)", meta: "Conf Rm A · M. Rivera", tag: "New Client" },
        { time: "11:00a", title: "Deposition prep — Bell", meta: "Virtual · S. Patel" },
        { time: "2:00p", title: "Estate signing — Lee family", meta: "Notary present", tag: "Closing" },
        { time: "4:30p", title: "Partner roundtable", meta: "Conf Rm B" },
      ],
    },
    customWidget: {
      title: "Practice Area Utilization",
      subtitle: "Billable hours allocated this month",
      rows: [
        { left: "Litigation", right: "184 hrs", pct: 92 },
        { left: "Estate Planning", right: "112 hrs", pct: 56 },
        { left: "Family Law", right: "78 hrs", pct: 39 },
        { left: "Corporate", right: "38 hrs", pct: 19 },
      ],
    },
  },

  contractors: {
    slug: "contractors",
    brandName: "Summit Builders",
    dashboardName: "Field Operations HQ",
    tagline: "Jobs, crews, AI estimator & lead intake",
    accent: "text-orange-600",
    accentBg: "bg-orange-600",
    accentSoft: "bg-orange-50",
    pageBg: "#fafafa",
    kpis: [
      { label: "Active Jobs", value: "34", delta: "+5 this week", positive: true },
      { label: "Pipeline Value", value: "$842K", delta: "+18%", positive: true },
      { label: "Estimates Sent", value: "27", delta: "AI generated", positive: true },
      { label: "Close Rate", value: "38%", delta: "+9 pts", positive: true },
    ],
    voiceAgent: {
      name: "Hank · AI Estimator Hotline",
      status: "Live · 24/7 quote intake",
      minutesToday: "3h 41m",
      callsToday: "41",
      calls: [
        { time: "1:12p", caller: "Carla M.", intent: "Kitchen remodel quote", outcome: "Sent estimate $28,400 · scheduled site visit", duration: "9:18", sentiment: "positive" },
        { time: "12:38p", caller: "+1 480‑555‑0142", intent: "Roof leak emergency", outcome: "Dispatched crew · ETA 45 min", duration: "4:02", sentiment: "alert" },
        { time: "11:50a", caller: "Dave R.", intent: "Bathroom addition", outcome: "Booked virtual walkthrough Wed", duration: "12:30", sentiment: "positive" },
        { time: "10:15a", caller: "HOA — Vista Ridge", intent: "Stucco bid for 14 units", outcome: "Forwarded to Mike · commercial", duration: "8:11", sentiment: "neutral" },
        { time: "8:45a", caller: "Susan T.", intent: "Deck repair", outcome: "Sent quote $4,800 + financing link", duration: "6:55", sentiment: "positive" },
      ],
    },
    aiAgents: [
      { agent: "Hank Estimator", task: "Generating quote for Carla M. kitchen", status: "running", meta: "Pulled comps · 84% done" },
      { agent: "RouteOptimizer", task: "Optimizing tomorrow's crew routes (6 trucks)", status: "running", meta: "Saved 47 mi" },
      { agent: "FollowUpBot", task: "Sent 14 'still interested?' SMS to cold leads", status: "done", meta: "3 reopened" },
      { agent: "PermitTracker", task: "Watching 8 active permits with city", status: "running", meta: "1 approved today" },
    ],
    pipelineTitle: "Jobs Pipeline",
    pipeline: [
      { name: "Quote Requested", accent: "bg-amber-100 text-amber-800", leads: [
        { name: "Carla M. — Kitchen", value: "$28.4K", meta: "AI quote sent" },
        { name: "Susan T. — Deck", value: "$4.8K", meta: "Today" },
      ]},
      { name: "Site Visit Booked", accent: "bg-blue-100 text-blue-800", leads: [
        { name: "Dave R. — Bathroom", value: "$36K est.", meta: "Wed 10am" },
      ]},
      { name: "Contract Sent", accent: "bg-violet-100 text-violet-800", leads: [
        { name: "HOA Vista Ridge", value: "$184K", meta: "Awaiting board" },
        { name: "Patel — Pool deck", value: "$22K", meta: "2d" },
      ]},
      { name: "In Build", accent: "bg-emerald-100 text-emerald-800", leads: [
        { name: "Morales Addition", value: "$98K", meta: "Day 14/42" },
        { name: "Cline Remodel", value: "$64K", meta: "Day 6/30" },
      ]},
    ],
    activity: [
      { time: "now", icon: "🚛", text: "Crew 3 checked in at Morales jobsite (Tucson)", channel: "GPS" },
      { time: "8m", icon: "📞", text: "Hank closed quote with Carla M. — $28,400", channel: "Voice" },
      { time: "22m", icon: "📸", text: "5 progress photos uploaded · Cline kitchen demo", channel: "Field" },
      { time: "1h", icon: "💰", text: "Deposit received — $9,200 (Patel)", channel: "Stripe" },
      { time: "2h", icon: "🤖", text: "Hank auto-rescheduled 2 site visits around rain forecast", channel: "AI" },
    ],
    schedule: {
      title: "Today's Field Schedule",
      items: [
        { time: "7:30a", title: "Morales Addition — framing", meta: "Crew 3 · 4 ppl", tag: "Active" },
        { time: "10:00a", title: "Site visit — Dave R.", meta: "Mike + estimator" },
        { time: "1:00p", title: "HOA walk — Vista Ridge", meta: "Commercial · Sarah" },
        { time: "3:30p", title: "Final walkthrough — Kim", meta: "Punch list signoff", tag: "Closing" },
      ],
    },
    customWidget: {
      title: "Active Crews — Live",
      subtitle: "Real-time job site status",
      rows: [
        { left: "Crew 1 · Cline Remodel", right: "On site · 4hrs", pct: 70 },
        { left: "Crew 2 · Patel Pool Deck", right: "Concrete pour", pct: 45 },
        { left: "Crew 3 · Morales Framing", right: "On site · 6hrs", pct: 88 },
        { left: "Crew 4 · Emergency Roof", right: "En route 12 min", pct: 15 },
      ],
    },
  },

  restaurants: {
    slug: "restaurants",
    brandName: "Copper Canyon Grill",
    dashboardName: "Service & Revenue HQ",
    tagline: "Covers, catering, AI host & online reviews",
    accent: "text-rose-700",
    accentBg: "bg-rose-700",
    accentSoft: "bg-rose-50",
    pageBg: "#fdfaf7",
    kpis: [
      { label: "Tonight's Covers", value: "184", delta: "94% booked", positive: true },
      { label: "Avg Ticket", value: "$54.20", delta: "+$3.10", positive: true },
      { label: "Catering Pipeline", value: "$18.4K", delta: "+139%", positive: true },
      { label: "Review Score", value: "4.8★", delta: "+0.2 · 95% answered", positive: true },
    ],
    voiceAgent: {
      name: "Sage · AI Reservation Host",
      status: "Live · taking calls during dinner rush",
      minutesToday: "1h 52m",
      callsToday: "37",
      calls: [
        { time: "5:42p", caller: "Linda K.", intent: "Birthday party of 12", outcome: "Booked Sat 7pm + dessert note", duration: "4:18", sentiment: "positive" },
        { time: "5:11p", caller: "+1 520‑555‑0188", intent: "Tonight 8pm for 4", outcome: "Booked · sent confirmation SMS", duration: "1:42", sentiment: "positive" },
        { time: "4:38p", caller: "Marriott concierge", intent: "Recurring guest block", outcome: "Set 6 future reservations", duration: "5:55", sentiment: "positive" },
        { time: "3:50p", caller: "Tom B.", intent: "Catering 80 ppl Friday", outcome: "Sent proposal $3,200 · followup tomorrow", duration: "9:12", sentiment: "positive" },
        { time: "2:14p", caller: "Anonymous", intent: "Complaint about delivery", outcome: "Comped + GM notified", duration: "6:30", sentiment: "alert" },
      ],
    },
    aiAgents: [
      { agent: "ReviewReply", task: "Drafted 4 personalized review responses (Google + Yelp)", status: "done", meta: "Awaiting GM approval" },
      { agent: "PrepForecaster", task: "Tomorrow's prep list based on bookings + weather", status: "running", meta: "Reduced waste 12%" },
      { agent: "Sage Host", task: "Handling 3 simultaneous inbound calls", status: "running", meta: "Live" },
      { agent: "WinbackBot", task: "SMS to 28 guests not seen in 60 days", status: "done", meta: "9 rebookings" },
    ],
    pipelineTitle: "Catering & Private Events",
    pipeline: [
      { name: "Inquiry", accent: "bg-amber-100 text-amber-800", leads: [
        { name: "Tom B. — 80 ppl Fri", value: "$3,200", meta: "Sage took call" },
        { name: "Acme Corp lunch", value: "$1,400", meta: "Today" },
      ]},
      { name: "Proposal Sent", accent: "bg-blue-100 text-blue-800", leads: [
        { name: "Linda K. — Birthday 12", value: "$960", meta: "Sat 7pm" },
      ]},
      { name: "Deposit Paid", accent: "bg-violet-100 text-violet-800", leads: [
        { name: "Garcia Wedding rehearsal", value: "$2,800", meta: "Next Sat" },
        { name: "Tech offsite", value: "$5,400", meta: "9/12" },
      ]},
      { name: "Confirmed", accent: "bg-emerald-100 text-emerald-800", leads: [
        { name: "Foundation gala", value: "$8,200", meta: "9/22" },
      ]},
    ],
    activity: [
      { time: "now", icon: "🪑", text: "Table 14 seated · party of 6 (Sage booking)", channel: "POS" },
      { time: "6m", icon: "⭐", text: "New 5-star Google review — AI drafted reply", channel: "Reviews" },
      { time: "18m", icon: "📞", text: "Sage answered 3 calls during 5pm rush", channel: "Voice" },
      { time: "1h", icon: "💳", text: "Catering deposit $960 — Linda K.", channel: "Stripe" },
      { time: "2h", icon: "🤖", text: "PrepForecaster cut tomorrow's salmon order by 8 lbs", channel: "AI" },
    ],
    schedule: {
      title: "Service Timeline — Tonight",
      items: [
        { time: "5:00p", title: "Happy hour opens", meta: "Bar + patio · 28 booked" },
        { time: "6:30p", title: "Main dinner wave", meta: "84 covers booked", tag: "Peak" },
        { time: "7:30p", title: "Birthday party arrival (12)", meta: "Booth section · dessert prep" },
        { time: "9:00p", title: "Late seating wave", meta: "32 covers · bar overflow" },
      ],
    },
    customWidget: {
      title: "Tonight's Floor Status",
      subtitle: "Live reservation utilization",
      rows: [
        { left: "Main Dining (24 tables)", right: "22/24 booked", pct: 92 },
        { left: "Patio (12 tables)", right: "11/12 booked", pct: 91 },
        { left: "Private Room", right: "Birthday party 7pm", pct: 100 },
        { left: "Bar (18 seats)", right: "Walk-in only", pct: 60 },
      ],
    },
  },

  "salons-wellness": {
    slug: "salons-wellness",
    brandName: "Oasis Studio",
    dashboardName: "Studio Operations",
    tagline: "Bookings, stylists, AI concierge & retention",
    accent: "text-pink-600",
    accentBg: "bg-pink-600",
    accentSoft: "bg-pink-50",
    pageBg: "#fdf8fa",
    kpis: [
      { label: "Today's Bookings", value: "47", delta: "94% utilized", positive: true },
      { label: "Avg Ticket", value: "$148", delta: "+$22", positive: true },
      { label: "Rebook Rate", value: "62%", delta: "+22 pts", positive: true },
      { label: "Membership MRR", value: "$8,420", delta: "+11 new", positive: true },
    ],
    voiceAgent: {
      name: "Iris · AI Style Concierge",
      status: "Live · books, reschedules, recommends",
      minutesToday: "2h 04m",
      callsToday: "29",
      calls: [
        { time: "2:11p", caller: "Jess M.", intent: "Balayage + cut Sat", outcome: "Booked w/ Devon · added Olaplex upsell", duration: "5:42", sentiment: "positive" },
        { time: "1:38p", caller: "+1 480‑555‑0124", intent: "Reschedule facial", outcome: "Moved to Thu 4pm · no fee", duration: "2:11", sentiment: "neutral" },
        { time: "12:14p", caller: "Marie B.", intent: "Bridal trial — June wedding", outcome: "Booked consultation + saved inspo board", duration: "11:28", sentiment: "positive" },
        { time: "11:05a", caller: "Existing member", intent: "Add quarterly massage", outcome: "Auto-added to membership", duration: "3:18", sentiment: "positive" },
        { time: "9:42a", caller: "Anonymous", intent: "Pricing question — extensions", outcome: "Sent pricing + booked consult", duration: "4:55", sentiment: "neutral" },
      ],
    },
    aiAgents: [
      { agent: "Iris Concierge", task: "Handling rebookings + new client intake", status: "running", meta: "Live" },
      { agent: "RetentionAI", task: "Spotted 14 clients overdue for rebooking", status: "done", meta: "Sent personalized SMS" },
      { agent: "ReviewReply", task: "5 new reviews auto-replied (pending approval)", status: "queued", meta: "Avg 4.9★" },
      { agent: "InventoryWatch", task: "Reordered Olaplex No.3 + Kerastase masks", status: "done", meta: "Auto PO sent" },
    ],
    pipelineTitle: "New Client Pipeline",
    pipeline: [
      { name: "Inquiry", accent: "bg-amber-100 text-amber-800", leads: [
        { name: "Marie B. — Bridal", value: "$1,200 est", meta: "Iris" },
        { name: "IG DM — color correction", value: "$380", meta: "1h ago" },
      ]},
      { name: "Consult Booked", accent: "bg-blue-100 text-blue-800", leads: [
        { name: "Sarah K. — extensions", value: "$640", meta: "Wed" },
      ]},
      { name: "First Visit", accent: "bg-violet-100 text-violet-800", leads: [
        { name: "Jess M. — Balayage", value: "$285", meta: "Sat 11am" },
        { name: "Anna R. — Facial", value: "$165", meta: "Thu" },
      ]},
      { name: "Converted to Member", accent: "bg-emerald-100 text-emerald-800", leads: [
        { name: "Linda P. — Gold plan", value: "$189/mo", meta: "Today" },
      ]},
    ],
    activity: [
      { time: "now", icon: "💇", text: "Devon checked in Jess M. for balayage", channel: "Booking" },
      { time: "12m", icon: "📞", text: "Iris booked bridal consult for Marie B.", channel: "Voice" },
      { time: "34m", icon: "💌", text: "Sent 14 'we miss you' SMS · 3 rebooked already", channel: "SMS" },
      { time: "1h", icon: "⭐", text: "New 5★ review — Iris drafted personal reply", channel: "Reviews" },
      { time: "2h", icon: "🤖", text: "Auto-reordered Olaplex No.3 (low stock detected)", channel: "AI" },
    ],
    schedule: {
      title: "Today's Chair Schedule",
      items: [
        { time: "9:00a", title: "Color · Devon · Sarah K.", meta: "2.5 hr · $285", tag: "VIP" },
        { time: "11:30a", title: "Massage · Reza · Anna R.", meta: "60 min · $145" },
        { time: "2:00p", title: "Bridal consult · Iris booking", meta: "Marie B. · 45 min" },
        { time: "4:00p", title: "Facial · Tara · Linda P.", meta: "Member · 75 min" },
      ],
    },
    customWidget: {
      title: "Stylist Utilization Today",
      subtitle: "Booked vs. available chair time",
      rows: [
        { left: "Devon (color specialist)", right: "7/8 hrs", pct: 88 },
        { left: "Reza (massage)", right: "6/8 hrs", pct: 75 },
        { left: "Tara (esthetician)", right: "5/7 hrs", pct: 71 },
        { left: "Marcus (cuts)", right: "8/8 hrs", pct: 100 },
      ],
    },
  },

  "real-estate": {
    slug: "real-estate",
    brandName: "Sonoran Realty Group",
    dashboardName: "Agent Command Center",
    tagline: "Leads, listings, AI valuation & showings",
    accent: "text-emerald-700",
    accentBg: "bg-emerald-700",
    accentSoft: "bg-emerald-50",
    pageBg: "#f8faf8",
    kpis: [
      { label: "Active Leads", value: "184", delta: "+22 this week", positive: true },
      { label: "Pipeline GCI", value: "$112K", delta: "+18%", positive: true },
      { label: "Showings Booked", value: "31", delta: "AI scheduled", positive: true },
      { label: "AI Valuations", value: "67", delta: "this week", positive: true },
    ],
    voiceAgent: {
      name: "Casa · AI Buyer Concierge",
      status: "Live · qualifying & booking showings",
      minutesToday: "2h 47m",
      callsToday: "34",
      calls: [
        { time: "3:18p", caller: "Brandon K.", intent: "1842 N Camino — showing", outcome: "Booked Sat 2pm · pre-qual link sent", duration: "5:11", sentiment: "positive" },
        { time: "2:42p", caller: "Wendy + Mark", intent: "Relocating from CO · 4BR Foothills", outcome: "Sent 8 matched listings + tour day", duration: "12:34", sentiment: "positive" },
        { time: "1:55p", caller: "+1 520‑555‑0166", intent: "What's my home worth?", outcome: "AI valuation $612K · CMA sent", duration: "4:28", sentiment: "positive" },
        { time: "12:30p", caller: "Investor — Carlos R.", intent: "Off-market multifamily", outcome: "Routed to Mike · investor agent", duration: "8:55", sentiment: "neutral" },
        { time: "10:48a", caller: "FSBO seller", intent: "Listing pitch", outcome: "Booked listing appt Wed", duration: "9:42", sentiment: "positive" },
      ],
    },
    aiAgents: [
      { agent: "Casa Concierge", task: "Qualifying inbound buyers + booking showings", status: "running", meta: "Live" },
      { agent: "ValuationAI", task: "Generated 67 instant home values this week", status: "done", meta: "23 became leads" },
      { agent: "ListingMatch", task: "Auto-sending new listings to 184 saved searches", status: "running", meta: "Daily" },
      { agent: "DripWriter", task: "Personalized nurture for 42 cold buyers", status: "done", meta: "5 reactivated" },
    ],
    pipelineTitle: "Buyer Pipeline",
    pipeline: [
      { name: "New Lead", accent: "bg-amber-100 text-amber-800", leads: [
        { name: "Brandon K. — 1st time", value: "$450K range", meta: "Casa qual" },
        { name: "Patel — investor", value: "$1M+", meta: "Today" },
      ]},
      { name: "Showing Booked", accent: "bg-blue-100 text-blue-800", leads: [
        { name: "Wendy + Mark", value: "$800K+", meta: "Sat tour" },
      ]},
      { name: "Under Contract", accent: "bg-violet-100 text-violet-800", leads: [
        { name: "Lopez — 4218 Mesquite", value: "$542K", meta: "Inspect Tue" },
        { name: "Chen — 17 Saguaro", value: "$725K", meta: "Appraisal" },
      ]},
      { name: "Closing This Month", accent: "bg-emerald-100 text-emerald-800", leads: [
        { name: "Rivera — 99 Aspen", value: "$418K", meta: "Close 9/14" },
      ]},
    ],
    activity: [
      { time: "now", icon: "🏡", text: "Casa booked Sat showing for Brandon K.", channel: "Voice" },
      { time: "9m", icon: "📊", text: "AI valuation requested · 14829 Sunridge ($612K)", channel: "Web" },
      { time: "31m", icon: "📩", text: "Auto-sent 8 new listings to Wendy + Mark", channel: "Email" },
      { time: "1h", icon: "✍️", text: "DocuSign returned — Lopez purchase agreement", channel: "Docs" },
      { time: "2h", icon: "🤖", text: "ListingMatch alerted 38 saved searches re: new Foothills listing", channel: "AI" },
    ],
    schedule: {
      title: "Today's Field Schedule",
      items: [
        { time: "10:00a", title: "Listing consult — Tanner family", meta: "Eastside · CMA ready", tag: "New listing" },
        { time: "12:30p", title: "Showing — 1842 N Camino", meta: "Brandon K." },
        { time: "2:00p", title: "Open house prep — 4218 Mesquite", meta: "Sat" },
        { time: "4:00p", title: "Closing — Rivera (99 Aspen)", meta: "Title co. · $418K", tag: "Close" },
      ],
    },
    customWidget: {
      title: "Active Listings — Performance",
      subtitle: "Days on market + interest signals",
      rows: [
        { left: "4218 Mesquite · $542K", right: "11 dom · 42 saves", pct: 80 },
        { left: "17 Saguaro · $725K", right: "4 dom · 91 saves", pct: 95 },
        { left: "8210 Catalina · $389K", right: "22 dom · 18 saves", pct: 42 },
        { left: "99 Aspen · $418K", right: "Pending · close 9/14", pct: 100 },
      ],
    },
  },

  "consultants-coaches": {
    slug: "consultants-coaches",
    brandName: "Atlas Advisory",
    dashboardName: "Practice Command",
    tagline: "Clients, proposals, AI discovery & content",
    accent: "text-indigo-600",
    accentBg: "bg-indigo-600",
    accentSoft: "bg-indigo-50",
    pageBg: "#f9f9fc",
    kpis: [
      { label: "Active Clients", value: "14", delta: "+2 this month", positive: true },
      { label: "MRR", value: "$28.4K", delta: "+11%", positive: true },
      { label: "Proposals Out", value: "6", delta: "$42K weighted", positive: true },
      { label: "Admin Time Saved", value: "6 hrs/wk", delta: "via AI", positive: true },
    ],
    voiceAgent: {
      name: "Atlas · AI Discovery Bot",
      status: "Live · qualifying inbound + booking calls",
      minutesToday: "1h 22m",
      callsToday: "12",
      calls: [
        { time: "2:42p", caller: "Founder · SaaS Co", intent: "Growth strategy engagement", outcome: "Qualified · booked Tue 10am", duration: "8:18", sentiment: "positive" },
        { time: "1:18p", caller: "VP Sales", intent: "Team coaching package", outcome: "Sent proposal $18K", duration: "11:42", sentiment: "positive" },
        { time: "11:50a", caller: "Coach referral", intent: "Mastermind enrollment", outcome: "Booked clarity call", duration: "5:11", sentiment: "positive" },
      ],
    },
    aiAgents: [
      { agent: "DiscoveryAI", task: "Pre-call brief for tomorrow's 4 discovery calls", status: "done", meta: "Sent to Atlas" },
      { agent: "ProposalGen", task: "Drafting SOW for SaaS Co engagement", status: "running", meta: "82% — review needed" },
      { agent: "ContentBot", task: "Repurposing podcast ep into 6 LinkedIn posts", status: "done", meta: "Scheduled this week" },
      { agent: "ClientPulse", task: "Weekly NPS pulse sent to 14 clients", status: "running", meta: "9 replied · 78 NPS" },
    ],
    pipelineTitle: "Engagement Pipeline",
    pipeline: [
      { name: "Discovery", accent: "bg-amber-100 text-amber-800", leads: [
        { name: "SaaS Co — Growth", value: "$22K", meta: "Atlas qual" },
        { name: "RIA founder", value: "$12K", meta: "Today" },
      ]},
      { name: "Proposal Sent", accent: "bg-blue-100 text-blue-800", leads: [
        { name: "VP Sales coaching", value: "$18K", meta: "Awaiting" },
      ]},
      { name: "Signed", accent: "bg-emerald-100 text-emerald-800", leads: [
        { name: "FinTech retainer", value: "$8K/mo", meta: "Starts 9/1" },
      ]},
    ],
    activity: [
      { time: "now", icon: "📞", text: "Atlas qualified SaaS Co founder", channel: "Voice" },
      { time: "20m", icon: "📝", text: "ProposalGen draft ready for review", channel: "AI" },
      { time: "1h", icon: "✅", text: "FinTech signed — $8K/mo retainer kicks off 9/1", channel: "Deal" },
      { time: "2h", icon: "📰", text: "6 LinkedIn posts scheduled from latest pod", channel: "Content" },
    ],
    schedule: {
      title: "Today's Calendar",
      items: [
        { time: "9:00a", title: "Client 1:1 — FinTech founder", meta: "Strategy block" },
        { time: "11:00a", title: "Mastermind group call", meta: "8 members · Zoom" },
        { time: "1:30p", title: "Discovery — VP Sales", meta: "Atlas pre-brief sent", tag: "New" },
        { time: "4:00p", title: "Content recording", meta: "Podcast ep #41" },
      ],
    },
    customWidget: {
      title: "Client Health Scores",
      subtitle: "AI-monitored engagement + outcomes",
      rows: [
        { left: "FinTech Co (retainer)", right: "92 · On track", pct: 92 },
        { left: "SaaS Founder cohort", right: "85 · Momentum", pct: 85 },
        { left: "RIA growth project", right: "68 · Needs check-in", pct: 68 },
        { left: "Coaching mastermind", right: "78 · Active", pct: 78 },
      ],
    },
  },

  "doctors-medical": {
    slug: "doctors-medical",
    brandName: "Sonoran Medical Group",
    dashboardName: "Practice Operations",
    tagline: "Appointments, triage, AI front desk & no-shows",
    accent: "text-sky-700",
    accentBg: "bg-sky-700",
    accentSoft: "bg-sky-50",
    pageBg: "#f7fbfd",
    kpis: [
      { label: "Today's Visits", value: "62", delta: "94% checked in", positive: true },
      { label: "No-Show Rate", value: "6%", delta: "−34%", positive: true },
      { label: "AI Triage Today", value: "118", delta: "Symptom checker", positive: true },
      { label: "Refill Requests", value: "27", delta: "Auto-routed", positive: true },
    ],
    voiceAgent: {
      name: "Nova · AI Front Desk (HIPAA)",
      status: "Live · scheduling, reminders, refill routing",
      minutesToday: "3h 11m",
      callsToday: "58",
      calls: [
        { time: "11:18a", caller: "Patient · annual", intent: "Schedule physical", outcome: "Booked Dr. Patel · Thu 9am · ins. verified", duration: "3:42", sentiment: "positive" },
        { time: "10:42a", caller: "New patient", intent: "Sick visit — sore throat 3 days", outcome: "Triaged · same-day slot 2pm", duration: "5:18", sentiment: "alert" },
        { time: "9:55a", caller: "+1 520‑555‑0144", intent: "Refill — lisinopril", outcome: "Auto-routed to pharmacy · MA review", duration: "1:55", sentiment: "neutral" },
        { time: "9:11a", caller: "Caregiver", intent: "Reschedule mom's appt", outcome: "Moved to Wed 11am", duration: "2:38", sentiment: "neutral" },
      ],
    },
    aiAgents: [
      { agent: "Nova Front Desk", task: "Handling inbound + insurance verification", status: "running", meta: "Live" },
      { agent: "TriageAI", task: "Symptom checker active on patient portal", status: "running", meta: "118 today" },
      { agent: "NoShowBot", task: "Sent 42 SMS reminders + reschedule links", status: "done", meta: "−34% no-shows" },
      { agent: "RefillRouter", task: "Auto-routed 27 refill requests to MAs", status: "done", meta: "All before 11am" },
    ],
    pipelineTitle: "Today's Patient Flow",
    pipeline: [
      { name: "Checked In", accent: "bg-amber-100 text-amber-800", leads: [
        { name: "Room 1 · Garcia (annual)", value: "Dr. Patel", meta: "9:00a" },
        { name: "Room 3 · Lee (follow-up)", value: "Dr. Kim", meta: "9:15a" },
      ]},
      { name: "With Provider", accent: "bg-blue-100 text-blue-800", leads: [
        { name: "Room 2 · Hernandez", value: "Dr. Patel", meta: "12 min" },
      ]},
      { name: "Awaiting Labs", accent: "bg-violet-100 text-violet-800", leads: [
        { name: "Patel · CBC", value: "Quest", meta: "Sent" },
      ]},
      { name: "Checkout", accent: "bg-emerald-100 text-emerald-800", leads: [
        { name: "Room 4 · Mills", value: "Copay $35", meta: "Done" },
      ]},
    ],
    activity: [
      { time: "now", icon: "🏥", text: "Garcia checked in for annual (Room 1)", channel: "Front Desk" },
      { time: "14m", icon: "📞", text: "Nova booked same-day sick visit · sore throat", channel: "Voice" },
      { time: "30m", icon: "💊", text: "Refill batch (27) sent to MA queue", channel: "AI" },
      { time: "1h", icon: "✉️", text: "Lab results delivered via portal · Lee", channel: "Portal" },
      { time: "2h", icon: "🤖", text: "TriageAI directed 8 patients to telehealth (saved slots)", channel: "AI" },
    ],
    schedule: {
      title: "Provider Schedules",
      items: [
        { time: "9-12p", title: "Dr. Patel · 14 visits", meta: "On time", tag: "AM" },
        { time: "9-12p", title: "Dr. Kim · 12 visits", meta: "1 walk-in slot" },
        { time: "1-5p", title: "Dr. Patel · 16 visits", meta: "2 same-day open" },
        { time: "1-5p", title: "Telehealth (NP) · 8 visits", meta: "TriageAI booked" },
      ],
    },
    customWidget: {
      title: "Capacity & Wait Times",
      subtitle: "Live across rooms and providers",
      rows: [
        { left: "Avg wait — exam room", right: "8 min", pct: 30 },
        { left: "Avg wait — telehealth", right: "2 min", pct: 12 },
        { left: "Dr. Patel utilization", right: "94%", pct: 94 },
        { left: "Front desk call queue", right: "0 in queue · Nova handling", pct: 5 },
      ],
    },
  },

  "financial-advisors": {
    slug: "financial-advisors",
    brandName: "Pinnacle Wealth",
    dashboardName: "Advisor HQ",
    tagline: "AUM, prospects, AI planner & client touches",
    accent: "text-yellow-700",
    accentBg: "bg-yellow-700",
    accentSoft: "bg-yellow-50",
    pageBg: "#fbf9f3",
    kpis: [
      { label: "AUM", value: "$42.8M", delta: "+$1.2M MTD", positive: true },
      { label: "Active Clients", value: "186", delta: "+8 YTD", positive: true },
      { label: "Onboarding Time", value: "4 days", delta: "−63%", positive: true },
      { label: "Compliance Status", value: "100%", delta: "All clean", positive: true },
    ],
    voiceAgent: {
      name: "Atlas · AI Prospect Concierge",
      status: "Live · screens, schedules, sends Calendly",
      minutesToday: "1h 38m",
      callsToday: "11",
      calls: [
        { time: "2:42p", caller: "Pre-retiree · $1.2M", intent: "Retirement income strategy", outcome: "Qualified · booked Wed 3pm w/ Sarah", duration: "9:55", sentiment: "positive" },
        { time: "11:18a", caller: "Business owner exit", intent: "Sale proceeds planning", outcome: "Routed to senior partner", duration: "11:22", sentiment: "positive" },
        { time: "9:30a", caller: "Existing client", intent: "RMD question", outcome: "Answered + scheduled review", duration: "4:11", sentiment: "neutral" },
      ],
    },
    aiAgents: [
      { agent: "PlannerAI", task: "Drafted retirement projection for new prospect", status: "done", meta: "Ready for review" },
      { agent: "PortfolioWatch", task: "Scanning 186 portfolios for drift > 5%", status: "running", meta: "4 rebalances suggested" },
      { agent: "ClientTouch", task: "Birthday + life-event outreach (12 this week)", status: "done", meta: "Personalized" },
      { agent: "ComplianceLog", task: "Auto-logging all client interactions for archive", status: "running", meta: "Always on" },
    ],
    pipelineTitle: "Prospect Pipeline",
    pipeline: [
      { name: "Discovery", accent: "bg-amber-100 text-amber-800", leads: [
        { name: "Pre-retiree $1.2M", value: "Atlas qual", meta: "Today" },
        { name: "Business exit $3.4M", value: "Senior partner", meta: "Today" },
      ]},
      { name: "Plan Drafted", accent: "bg-blue-100 text-blue-800", leads: [
        { name: "Lawson family", value: "$880K", meta: "PlannerAI" },
      ]},
      { name: "Onboarding", accent: "bg-violet-100 text-violet-800", leads: [
        { name: "Chen rollover", value: "$1.6M", meta: "Day 2/4" },
      ]},
      { name: "Funded", accent: "bg-emerald-100 text-emerald-800", leads: [
        { name: "Rivera trust account", value: "$540K", meta: "This week" },
      ]},
    ],
    activity: [
      { time: "now", icon: "📊", text: "PortfolioWatch flagged drift on 4 accounts", channel: "AI" },
      { time: "18m", icon: "📞", text: "Atlas qualified pre-retiree · booked Wed", channel: "Voice" },
      { time: "1h", icon: "💵", text: "Rivera trust funded — $540K", channel: "Custodian" },
      { time: "2h", icon: "🎂", text: "Birthday touches sent to 12 clients (personalized)", channel: "AI" },
    ],
    schedule: {
      title: "Today's Calendar",
      items: [
        { time: "9:00a", title: "Client review — Lawson", meta: "Q3 portfolio · ESG tilt" },
        { time: "11:00a", title: "Rollover paperwork — Chen", meta: "Custodian wire confirmed" },
        { time: "2:00p", title: "Prospect intro — Atlas booked", meta: "Pre-retiree $1.2M", tag: "New" },
        { time: "4:00p", title: "Team strategy", meta: "Pipeline review" },
      ],
    },
    customWidget: {
      title: "AUM Segments — Live",
      subtitle: "Composition across client households",
      rows: [
        { left: "Retirees ($500K–$2M)", right: "$18.4M · 62 hh", pct: 43 },
        { left: "Pre-retirees (50–65)", right: "$14.2M · 48 hh", pct: 33 },
        { left: "Business owners", right: "$7.8M · 22 hh", pct: 18 },
        { left: "Next-gen / accumulators", right: "$2.4M · 54 hh", pct: 6 },
      ],
    },
  },

  "political-campaigns": {
    slug: "political-campaigns",
    brandName: "Maria Vasquez for Arizona",
    dashboardName: "Campaign War Room",
    tagline: "Donations, volunteers, AI canvasser & turnout",
    accent: "text-red-700",
    accentBg: "bg-red-700",
    accentSoft: "bg-red-50",
    pageBg: "#fbf7f7",
    kpis: [
      { label: "Donations (MTD)", value: "$284K", delta: "+$42K", positive: true },
      { label: "Active Volunteers", value: "342", delta: "+58 this wk", positive: true },
      { label: "Doors Knocked", value: "8,420", delta: "AI routed", positive: true },
      { label: "Email Open Rate", value: "34%", delta: "+9 pts", positive: true },
    ],
    voiceAgent: {
      name: "Liberty · AI Voter Outreach",
      status: "Live · qualifying supporters + scheduling volunteer shifts",
      minutesToday: "4h 12m",
      callsToday: "212",
      calls: [
        { time: "5:11p", caller: "Persuadable voter", intent: "Issue: healthcare", outcome: "Logged stance · sent issue brief", duration: "6:42", sentiment: "neutral" },
        { time: "4:38p", caller: "Donor — major gift", intent: "Wants to increase pledge", outcome: "Routed to finance director", duration: "4:11", sentiment: "positive" },
        { time: "3:55p", caller: "Volunteer signup", intent: "Sat canvass shift", outcome: "Booked Sat 9am · ZIP 85705", duration: "3:18", sentiment: "positive" },
        { time: "2:30p", caller: "Press inquiry", intent: "Quote request", outcome: "Routed to comms director", duration: "2:55", sentiment: "neutral" },
      ],
    },
    aiAgents: [
      { agent: "Liberty Outreach", task: "Calling 800 persuadables tonight", status: "running", meta: "212 done" },
      { agent: "CanvassRouter", task: "Optimized Sat door routes for 42 volunteers", status: "done", meta: "Saved 3.4 hrs" },
      { agent: "DonorMatch", task: "Identified 28 lapsed donors to reactivate", status: "done", meta: "Personalized SMS sent" },
      { agent: "MessageTest", task: "A/B testing 3 closing emails", status: "running", meta: "Variant B +18% open" },
    ],
    pipelineTitle: "Supporter Pipeline",
    pipeline: [
      { name: "Identified", accent: "bg-amber-100 text-amber-800", leads: [
        { name: "Persuadables — ZIP 85705", value: "+412 today", meta: "Liberty" },
      ]},
      { name: "Engaged", accent: "bg-blue-100 text-blue-800", leads: [
        { name: "Replied to text wave", value: "118", meta: "today" },
      ]},
      { name: "Volunteers", accent: "bg-violet-100 text-violet-800", leads: [
        { name: "Sat canvass team", value: "42 booked", meta: "9am" },
        { name: "Phone bank Tue", value: "28 booked", meta: "Eve" },
      ]},
      { name: "Donors", accent: "bg-emerald-100 text-emerald-800", leads: [
        { name: "Major gift pledge ↑", value: "$10K → $25K", meta: "Today" },
      ]},
    ],
    activity: [
      { time: "now", icon: "🗳️", text: "Liberty logged 212 voter calls today", channel: "Voice" },
      { time: "12m", icon: "💵", text: "$25K major-gift commitment received", channel: "Finance" },
      { time: "40m", icon: "🚪", text: "Sat canvass routes sent to 42 volunteers", channel: "AI" },
      { time: "1h", icon: "📩", text: "Email B variant beating A by 18% open · auto-promoted", channel: "Email" },
      { time: "2h", icon: "📢", text: "Press release drafted — issue: water rights", channel: "Comms" },
    ],
    schedule: {
      title: "Today's War Room",
      items: [
        { time: "9:00a", title: "Comms standup", meta: "Daily message + rapid response" },
        { time: "12:00p", title: "Finance call", meta: "Q3 ask plan" },
        { time: "5:00p", title: "Phone bank shift", meta: "Liberty + 14 volunteers", tag: "Live" },
        { time: "7:30p", title: "Community town hall", meta: "South side · 220 RSVP" },
      ],
    },
    customWidget: {
      title: "Turnout Modeling — Top Precincts",
      subtitle: "Projected support × turnout likelihood",
      rows: [
        { left: "Precinct 142 (south Tucson)", right: "Support 64% · Turnout 72%", pct: 88 },
        { left: "Precinct 088 (downtown)", right: "Support 58% · Turnout 81%", pct: 81 },
        { left: "Precinct 215 (east)", right: "Support 49% · Turnout 68%", pct: 55 },
        { left: "Precinct 304 (north)", right: "Support 42% · Turnout 79%", pct: 42 },
      ],
    },
  },

  "small-business-teams": {
    slug: "small-business-teams",
    brandName: "Team Command",
    dashboardName: "Operations Hub",
    tagline: "Unified inbox, pipeline, AI assistant & tasks",
    accent: "text-slate-700",
    accentBg: "bg-slate-700",
    accentSoft: "bg-slate-100",
    pageBg: "#f8fafc",
    kpis: [
      { label: "Open Leads", value: "42", delta: "+8 this wk", positive: true },
      { label: "Avg Response Time", value: "18 min", delta: "−68%", positive: true },
      { label: "Tasks Auto-Routed", value: "94", delta: "by AI", positive: true },
      { label: "MRR Growth", value: "+14%", delta: "MoM", positive: true },
    ],
    voiceAgent: {
      name: "Echo · AI Receptionist",
      status: "Live · catching every call, qualifying, routing",
      minutesToday: "2h 22m",
      callsToday: "31",
      calls: [
        { time: "3:11p", caller: "New lead", intent: "Service inquiry", outcome: "Qualified · booked discovery Fri", duration: "5:42", sentiment: "positive" },
        { time: "1:38p", caller: "Existing customer", intent: "Support issue", outcome: "Created ticket · assigned to Ana", duration: "4:18", sentiment: "neutral" },
        { time: "11:50a", caller: "Vendor", intent: "Invoice question", outcome: "Routed to AP", duration: "2:11", sentiment: "neutral" },
        { time: "9:42a", caller: "Partner referral", intent: "Wants intro", outcome: "Booked owner call Mon", duration: "6:55", sentiment: "positive" },
      ],
    },
    aiAgents: [
      { agent: "Echo Receptionist", task: "Answering + routing every inbound call", status: "running", meta: "Live" },
      { agent: "InboxAI", task: "Triaging shared inbox (484 emails today)", status: "running", meta: "94% auto-tagged" },
      { agent: "FollowUpBot", task: "Nudged 22 stalled deals with personalized note", status: "done", meta: "5 reopened" },
      { agent: "ReportGen", task: "Generated weekly KPI snapshot for owner", status: "done", meta: "Sent 7am Monday" },
    ],
    pipelineTitle: "Lead Pipeline",
    pipeline: [
      { name: "New", accent: "bg-amber-100 text-amber-800", leads: [
        { name: "Web form — service quote", value: "$4.2K", meta: "Echo qual" },
        { name: "Referral — Mon owner call", value: "TBD", meta: "Booked" },
      ]},
      { name: "Qualified", accent: "bg-blue-100 text-blue-800", leads: [
        { name: "Acme Co. — discovery", value: "$12K", meta: "Fri" },
      ]},
      { name: "Proposal", accent: "bg-violet-100 text-violet-800", leads: [
        { name: "BrightWorks", value: "$8.4K", meta: "Awaiting" },
      ]},
      { name: "Won", accent: "bg-emerald-100 text-emerald-800", leads: [
        { name: "Northstar retainer", value: "$3K/mo", meta: "Signed" },
      ]},
    ],
    activity: [
      { time: "now", icon: "📞", text: "Echo qualified new web lead · booked Fri", channel: "Voice" },
      { time: "12m", icon: "📥", text: "InboxAI auto-routed 14 customer emails", channel: "Email" },
      { time: "1h", icon: "🤝", text: "Northstar signed retainer — $3K/mo", channel: "Deal" },
      { time: "2h", icon: "📊", text: "Weekly KPI report sent to owner inbox", channel: "AI" },
    ],
    schedule: {
      title: "Today's Team Schedule",
      items: [
        { time: "9:00a", title: "Team standup", meta: "15 min · async notes" },
        { time: "11:00a", title: "Acme discovery call", meta: "Pre-brief by AI", tag: "New" },
        { time: "2:00p", title: "Customer onboarding · Northstar", meta: "Kickoff" },
        { time: "4:00p", title: "Owner pipeline review", meta: "Weekly" },
      ],
    },
    customWidget: {
      title: "Where Time Was Saved This Week",
      subtitle: "Hours reclaimed by AI agents",
      rows: [
        { left: "Echo (reception + routing)", right: "11.5 hrs", pct: 92 },
        { left: "InboxAI (email triage)", right: "8.2 hrs", pct: 66 },
        { left: "FollowUpBot (sales nudges)", right: "3.4 hrs", pct: 27 },
        { left: "ReportGen (weekly reports)", right: "2.1 hrs", pct: 17 },
      ],
    },
  },
};