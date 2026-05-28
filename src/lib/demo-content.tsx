import {
  Scale, HardHat, Utensils, Flower2, Building2, Briefcase,
  Stethoscope, TrendingUp, Landmark, Users,
  FileText, Calendar, Shield, Mail, Clock, DollarSign,
  ClipboardList, BarChart3, Bell, Inbox, Phone, Heart,
  Wrench, Star, Home, MessageSquare, Vote, UserPlus,
  Megaphone, MapPin, Wallet, Target, Layers, Zap,
  BookOpen, Brain, Sparkles, CheckCircle, Globe, Lock,
} from "lucide-react";
import type { DemoConfig } from "@/components/demo-template";
import { INDUSTRY_MOCKUPS } from "@/lib/industries-content";
import type { IndustrySlug } from "@/lib/industries-content";

export const DEMO_CONFIGS: Partial<Record<IndustrySlug, DemoConfig>> = {
  "law-firms": {
    slug: "law-firms",
    brandName: "Ellison & Chen",
    tagline: "Premium Modern Legal Operations",
    heroHeadline: (
      <>
        Run your firm with <span className="text-blue-700">clarity</span>, not chaos.
      </>
    ),
    heroSub: "Client intake, case management, billing, and deadline tracking — all connected in one intelligent platform. Built for small and mid-size firms that want to operate like the best.",
    accentColor: "bg-blue-700",
    accentBg: "bg-blue-50",
    accentText: "text-blue-700",
    icon: Scale,
    features: [
      { icon: Inbox, title: "Client Intake Automation", description: "Prospect fills out one form — conflict check, matter type tagging, and attorney assignment happen automatically." },
      { icon: BarChart3, title: "Case Dashboard", description: "Open matters, billable hours, AR aging, and caseload distribution across your entire firm at a glance." },
      { icon: DollarSign, title: "Billing Overview", description: "Track unbilled time, outstanding invoices, and payment trends. Auto-reminders for overdue accounts." },
      { icon: Clock, title: "Deadline Tracking", description: "SOL dates, court deadlines, and key milestones with automated SMS/email alerts at 30, 14, and 7 days." },
      { icon: Brain, title: "AI Case Summaries", description: "Auto-generated case status updates and client communications drafted in your firm's voice." },
      { icon: Mail, title: "Lead Follow-Up", description: "Every inquiry gets a response within 60 seconds. Automated sequences until the prospect books or declines." },
      { icon: Shield, title: "Secure Client Portal", description: "One link per client: case status, documents, invoices, and next steps — all in one branded portal." },
    ],
    painPoints: [
      "Paralegals spend 3+ hours daily sorting and triaging email inquiries",
      "40% of new client emails don't get a response within 24 hours",
      "Deadline tracking depends on one person remembering everything",
      "No firm-wide view of caseload, revenue, or pipeline health",
      "Unbilled hours slip through the cracks every single month",
    ],
    workflow: [
      { step: "Prospect submits intake form", detail: "AI runs conflict check, tags matter type, and assigns to the right attorney automatically." },
      { step: "Auto-acknowledgment sent", detail: "Professional response in your firm's voice goes out within 60 seconds of submission." },
      { step: "Lead enters your CRM", detail: "Created in Clio/MyCase with source, matter type, attorney, and status — no data entry." },
      { step: "Dashboard updates live", detail: "New matter appears on your firm dashboard with deadlines, billing status, and assigned team." },
      { step: "Follow-up runs automatically", detail: "If the prospect hasn't booked, a tailored sequence nudges them at Day 2, 7, and 14." },
    ],
    dashboard: INDUSTRY_MOCKUPS["law-firms"],
    testimonial: {
      quote: "We went from losing clients in our inbox to having a system that responds faster than our competitors. The dashboard alone changed how we run the firm.",
      name: "Michael R.",
      role: "Managing Partner · Phoenix, AZ",
    },
    stats: [
      { value: "74%", label: "Faster Intake" },
      { value: "4 min", label: "Avg Response Time" },
      { value: "$22K", label: "Monthly Revenue Gain" },
      { value: "98%", label: "Lead Capture Rate" },
    ],
  },

  contractors: {
    slug: "contractors",
    brandName: "Summit Builders",
    tagline: "Field Service Command Center",
    heroHeadline: (
      <>
        Quotes, jobs, and invoices that <span className="text-amber-700">never fall through</span>.
      </>
    ),
    heroSub: "Stop losing revenue to forgotten quotes and late invoices. One system connects your field crews, office, and customers — from first call to final payment.",
    accentColor: "bg-amber-700",
    accentBg: "bg-amber-50",
    accentText: "text-amber-700",
    icon: HardHat,
    features: [
      { icon: Wrench, title: "Job Tracking", description: "Every active job with status, assigned crew, timeline, and materials — visible to office and field." },
      { icon: Mail, title: "Quote Follow-Up", description: "Automated email + SMS sequences after every quote: Day 2, 7, 14 — until accepted or declined." },
      { icon: DollarSign, title: "Invoice Dashboard", description: "See what's been sent, what's paid, and what's overdue. Auto-reminders go out so you don't have to chase." },
      { icon: Target, title: "Lead Pipeline", description: "Every lead from website, Google, or missed call lands in one place with auto-acknowledgment." },
      { icon: Bell, title: "Appointment Reminders", description: "Customers get confirmation, on-the-way texts, and post-job review requests automatically." },
      { icon: Users, title: "Team Scheduling", description: "See who's where, what's next, and who has capacity. Drag-and-drop crew assignments." },
    ],
    painPoints: [
      "60% of quotes never get a single follow-up after being sent",
      "Invoices go out days late — or not at all — costing cash flow",
      "Office and field use completely different systems",
      "No clear view of revenue, jobs in progress, or AR aging",
      "Missed calls and web leads go unanswered for hours",
    ],
    workflow: [
      { step: "Lead comes in", detail: "From website, Google, or missed call — auto-text goes out within 60 seconds." },
      { step: "Lead enters pipeline", detail: "Created in Jobber/HCP with source, job type, and location tagged automatically." },
      { step: "Quote sent", detail: "Automated follow-up sequence starts: Day 2 email, Day 7 text, Day 14 final nudge." },
      { step: "Job completed", detail: "Invoice generated and sent same day. Review request follows 24 hours later." },
      { step: "Dashboard updates", detail: "Revenue, close rate, AR aging, and crew workload refresh in real time." },
    ],
    dashboard: INDUSTRY_MOCKUPS["contractors"],
    testimonial: {
      quote: "I went from 7 jobs a month to 14 without hiring anyone. The Monday pipeline report alone is worth the investment.",
      name: "Jake T.",
      role: "Owner · Flagstaff, AZ",
    },
    stats: [
      { value: "43%", label: "More Jobs Booked" },
      { value: "100%", label: "Follow-Up Rate" },
      { value: "73%", label: "Revenue Growth" },
      { value: "38%", label: "Close Rate" },
    ],
  },

  restaurants: {
    slug: "restaurants",
    brandName: "Copper Canyon Grill",
    tagline: "Restaurant Intelligence Platform",
    heroHeadline: (
      <>
        Run the floor <span className="text-orange-700">and the numbers</span>.
      </>
    ),
    heroSub: "POS, scheduling, payroll, online ordering, reservations — every shift produces data you never see. We pull it together so you actually know what's working.",
    accentColor: "bg-orange-700",
    accentBg: "bg-orange-50",
    accentText: "text-orange-700",
    icon: Utensils,
    features: [
      { icon: Calendar, title: "Reservations", description: "Real-time reservation management with party size tracking, waitlist, and automated confirmations." },
      { icon: Mail, title: "Catering Inquiries", description: "Every catering lead captured, confirmed, and followed up automatically. No more lost emails." },
      { icon: BarChart3, title: "Daily Sales Dashboard", description: "Sales, covers, average ticket, labor %, and top menu items — refreshed every morning." },
      { icon: Heart, title: "Customer Retention", description: "Track repeat visits, identify churning customers, and trigger win-back campaigns automatically." },
      { icon: Megaphone, title: "Marketing Campaigns", description: "Seasonal promos, event announcements, and loyalty offers sent to the right segments." },
      { icon: Star, title: "Loyalty Workflows", description: "Points, rewards, and VIP tiers that run themselves. Birthday offers, visit milestones, referral bonuses." },
    ],
    painPoints: [
      "Owner logs into 5 apps every morning just to understand yesterday's numbers",
      "Menu items underperform for months before anyone notices",
      "Catering inquiries come via email, DMs, and phone — with no tracking",
      "Online reviews go unanswered for days, hurting reputation",
      "Labor cost spikes only show up after payroll runs",
    ],
    workflow: [
      { step: "POS data syncs at close", detail: "Toast/Square data flows into your dashboard automatically every night." },
      { step: "Morning brief generated", detail: "AI creates a one-page summary: yesterday's numbers, today's reservations, what to prep." },
      { step: "Dashboard updates", detail: "Sales, labor %, top movers, and catering pipeline refresh in real time." },
      { step: "Reviews triaged", detail: "New Google/Yelp reviews detected. AI drafts responses in your voice for one-tap approval." },
      { step: "Weekly report emailed", detail: "Menu performance, labor trends, and revenue comparison sent every Monday." },
    ],
    dashboard: INDUSTRY_MOCKUPS["restaurants"],
    testimonial: {
      quote: "I used to spend my first hour every morning just trying to figure out how yesterday went. Now I open one screen and I know everything.",
      name: "Maria L.",
      role: "Owner · Tucson, AZ",
    },
    stats: [
      { value: "31%", label: "Revenue Growth" },
      { value: "139%", label: "Catering Revenue Up" },
      { value: "0 min", label: "Manual Reporting" },
      { value: "95%", label: "Reviews Answered" },
    ],
  },

  "salons-wellness": {
    slug: "salons-wellness",
    brandName: "Oasis Studio",
    tagline: "Salon & Wellness Intelligence",
    heroHeadline: (
      <>
        More booked time. Happier <span className="text-pink-700">repeat clients</span>.
      </>
    ),
    heroSub: "Your booking platform was never designed to run your business. We turn it into a real system — with retention, rebooking, and revenue visibility baked in.",
    accentColor: "bg-pink-700",
    accentBg: "bg-pink-50",
    accentText: "text-pink-700",
    icon: Flower2,
    features: [
      { icon: Calendar, title: "Booking Automation", description: "Online booking, confirmations, and reminders at 48h/24h/2h. Waitlist fills cancellations automatically." },
      { icon: ClipboardList, title: "Intake Forms", description: "New client forms completed on their phone before arrival. Auto-imported into your system." },
      { icon: Users, title: "Membership Management", description: "Track packages, memberships, and gift card balances without spreadsheets." },
      { icon: MessageSquare, title: "SMS Reminders", description: "Personalized reminders by service type: color at 6 weeks, facial at 4, lash fill at 3." },
      { icon: Brain, title: "AI Client Follow-Up", description: "Post-visit review requests, rebook prompts, and win-back campaigns for inactive clients." },
    ],
    painPoints: [
      "No idea which providers are actually profitable",
      "Clients churn quietly — no rebook reminder, no follow-up",
      "Gift cards and memberships tracked in spreadsheets",
      "Front desk drowning in DMs, texts, and calls with no triage",
      "Revenue per chair completely invisible without manual reports",
    ],
    workflow: [
      { step: "Client books online", detail: "Auto-confirmation + reminder sequence runs. New clients get intake form link." },
      { step: "Visit completes", detail: "Review request + rebook prompt goes out automatically within 2 hours." },
      { step: "Dashboard updates", detail: "Retention rate, revenue per chair, and provider utilization refresh live." },
      { step: "Inactive clients flagged", detail: "90+ days with no visit? Win-back offer goes out automatically." },
      { step: "DM triage runs", detail: "AI sorts incoming messages into 'book me,' 'question,' or 'spam' and drafts replies." },
    ],
    dashboard: INDUSTRY_MOCKUPS["salons-wellness"],
    testimonial: {
      quote: "Rebook rate climbed 22% in 90 days. I now see provider profitability without exporting a single CSV.",
      name: "Sienna M.",
      role: "Owner · Scottsdale, AZ",
    },
    stats: [
      { value: "22%", label: "Rebook Rate Increase" },
      { value: "62%", label: "Retention Rate" },
      { value: "$148", label: "Avg Ticket" },
      { value: "61%", label: "Review Response Rate" },
    ],
  },

  "real-estate": {
    slug: "real-estate",
    brandName: "Sonoran Realty Group",
    tagline: "Real Estate Pipeline Intelligence",
    heroHeadline: (
      <>
        Pipeline, follow-up, and closings — <span className="text-emerald-700">finally connected</span>.
      </>
    ),
    heroSub: "Leads from Zillow, your website, and open houses living in three different places? Not anymore. One system, one pipeline, one view of everything.",
    accentColor: "bg-emerald-700",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-700",
    icon: Building2,
    features: [
      { icon: Inbox, title: "Lead Intake", description: "Every lead from every source lands in one pipeline — tagged, scored, and assigned automatically." },
      { icon: Home, title: "Property Inquiry Automation", description: "Instant responses to property inquiries with listing details, comparable data, and showing availability." },
      { icon: Layers, title: "CRM Workflows", description: "From new lead to closed deal: every stage has automated actions, reminders, and communications." },
      { icon: Calendar, title: "Showing Scheduler", description: "Prospects book showings online. Confirmations, reminders, and feedback requests run automatically." },
      { icon: Brain, title: "AI Lead Follow-Up", description: "Personalized nurture sequences by lead source, price band, and engagement level." },
    ],
    painPoints: [
      "Leads from Zillow, the website, and open houses all in different places",
      "Drip campaigns feel generic and get ignored by prospects",
      "Commission and pipeline numbers reconstructed by hand each month",
      "Transaction updates sent manually to every party involved",
      "Open house leads captured on paper and never followed up",
    ],
    workflow: [
      { step: "Lead comes in", detail: "From website, Zillow, or open house QR sign-in — auto-text + email within 60 seconds." },
      { step: "Lead scored and tagged", detail: "AI scores by source, price band, and engagement. Hot leads flagged for immediate call." },
      { step: "Nurture sequence runs", detail: "Personalized emails and texts until lead replies, books a showing, or unsubscribes." },
      { step: "Under contract", detail: "Transaction updates drafted and sent at each milestone to client, lender, and title." },
      { step: "Dashboard updates", detail: "GCI projection, pipeline stages, and close dates refresh in real time." },
    ],
    dashboard: INDUSTRY_MOCKUPS["real-estate"],
    testimonial: {
      quote: "Lead-to-appointment rate rose 17%. We stopped using a $400/mo CRM add-on and got better results.",
      name: "David K.",
      role: "Team Lead · Tucson, AZ",
    },
    stats: [
      { value: "184", label: "Active Leads" },
      { value: "$4.2M", label: "Pipeline Volume" },
      { value: "24%", label: "Lead → Appointment" },
      { value: "$112K", label: "Projected GCI" },
    ],
  },

  "consultants-coaches": {
    slug: "consultants-coaches",
    brandName: "Atlas Advisory",
    tagline: "Consulting Practice OS",
    heroHeadline: (
      <>
        Spend more time with clients. Less on <span className="text-violet-700">admin</span>.
      </>
    ),
    heroSub: "Discovery calls, proposals, invoices, onboarding — your back office should run itself so you can focus on the work that matters.",
    accentColor: "bg-violet-700",
    accentBg: "bg-violet-50",
    accentText: "text-violet-700",
    icon: Briefcase,
    features: [
      { icon: Calendar, title: "Discovery Booking", description: "Prospects book directly from your site. Pre-call intake form fills your CRM automatically." },
      { icon: FileText, title: "Program Onboarding", description: "Signed proposal triggers contract, deposit invoice, welcome email, and portal setup." },
      { icon: DollarSign, title: "Payment Automation", description: "Recurring invoices, deposit collection, and payment reminders — all hands-free." },
      { icon: Globe, title: "Client Portals", description: "One link per client: project status, files, invoices, and next steps in a branded portal." },
      { icon: Brain, title: "AI Follow-Up", description: "Post-meeting summaries, action items, and check-ins drafted by AI and reviewed by you." },
    ],
    painPoints: [
      "Discovery calls scheduled manually across timezones",
      "Proposals take an hour each to format and send",
      "Invoices forgotten until cashflow gets tight",
      "Client questions answered the same way over and over",
      "No dashboard showing pipeline, revenue, or utilization",
    ],
    workflow: [
      { step: "Prospect books discovery", detail: "Calendly-style booking with pre-call intake form that fills your CRM." },
      { step: "Proposal generated", detail: "Templated proposal built from intake answers — ready in minutes, not hours." },
      { step: "Signed & paid", detail: "E-signature triggers deposit invoice, welcome email, and onboarding portal." },
      { step: "Client portal goes live", detail: "Timeline, files, invoices, and next steps — one link, always up to date." },
      { step: "AI handles the rest", detail: "Meeting prep, follow-up summaries, and common Q&A drafted automatically." },
    ],
    dashboard: INDUSTRY_MOCKUPS["consultants-coaches"],
    testimonial: {
      quote: "Proposal-to-signature time went from 9 days to under 48 hours. I recovered 6 hours a week of admin time.",
      name: "Carmen F.",
      role: "Strategy Consultant · Phoenix, AZ",
    },
    stats: [
      { value: "14", label: "Active Clients" },
      { value: "$28.4K", label: "Monthly Revenue" },
      { value: "48h", label: "Proposal to Signature" },
      { value: "6 hrs", label: "Admin Time Saved/Week" },
    ],
  },

  "doctors-medical": {
    slug: "doctors-medical",
    brandName: "Sonoran Medical Group",
    tagline: "Modern Concierge Medical Office",
    heroHeadline: (
      <>
        A practice that runs on <span className="text-teal-700">systems</span>, not sticky notes.
      </>
    ),
    heroSub: "Patient intake, scheduling, reminders, follow-ups, and billing — connected in one intelligent platform so your staff focuses on patients, not paperwork.",
    accentColor: "bg-teal-700",
    accentBg: "bg-teal-50",
    accentText: "text-teal-700",
    icon: Stethoscope,
    features: [
      { icon: Calendar, title: "Appointment Booking", description: "Patients book online, get instant confirmation, and receive automated reminders at 48h, 24h, and 2h." },
      { icon: ClipboardList, title: "Patient Intake Forms", description: "Digital forms completed on the patient's phone before arrival. Auto-imported into your EHR." },
      { icon: Bell, title: "Automated Reminders", description: "Reduce no-shows by 34% with smart text/email reminders and waitlist management." },
      { icon: Lock, title: "Secure Messaging", description: "HIPAA-aware patient communication with auto-responses for common questions." },
      { icon: Mail, title: "Follow-Up Automation", description: "Post-visit check-ins, prescription reminders, and care plan follow-ups — all automated." },
      { icon: BarChart3, title: "Patient Dashboard", description: "Daily appointments, check-ins, follow-up reminders, billing, and satisfaction metrics." },
      { icon: Brain, title: "AI Daily Office Summary", description: "Morning brief: today's patient load, outstanding follow-ups, billing flags, staff availability." },
    ],
    painPoints: [
      "Patient intake still on clipboards — data re-entered manually by staff",
      "No-shows cost $200+ per missed appointment with no automated prevention",
      "Follow-up care instructions get lost after discharge",
      "Staff spending 2+ hours daily on calls that could be a text",
      "No single view of daily schedule, billing status, and patient satisfaction",
    ],
    workflow: [
      { step: "Patient books online", detail: "Appointment confirmed instantly via text. Intake forms sent digitally 24 hours before." },
      { step: "Forms completed on phone", detail: "Insurance, history, and symptoms captured before arrival. Zero clipboard." },
      { step: "Check-in is seamless", detail: "Front desk sees completed forms, insurance verified, room auto-assigned." },
      { step: "Post-visit automated", detail: "Follow-up instructions, care plan reminders, and satisfaction survey sent automatically." },
      { step: "Dashboard updates live", detail: "Patient volume, billing status, satisfaction score, and staff load — always current." },
    ],
    dashboard: INDUSTRY_MOCKUPS["doctors-medical"],
    testimonial: {
      quote: "No-shows dropped 34%. Front desk saves 2+ hours daily. Our patients actually compliment the intake process now.",
      name: "Dr. Sarah C.",
      role: "Family Practice · Tucson, AZ",
    },
    stats: [
      { value: "34%", label: "Fewer No-Shows" },
      { value: "2+ hrs", label: "Staff Time Saved Daily" },
      { value: "92", label: "Patient NPS Score" },
      { value: "82%", label: "Digital Check-In Rate" },
    ],
  },

  "financial-advisors": {
    slug: "financial-advisors",
    brandName: "Pinnacle Wealth",
    tagline: "Modern Wealth Management Studio",
    heroHeadline: (
      <>
        Advice is your job. <span className="text-indigo-700">Admin shouldn't be</span>.
      </>
    ),
    heroSub: "Client onboarding, document collection, meeting prep, and follow-up — running on autopilot so you can focus on the planning that earns trust and revenue.",
    accentColor: "bg-indigo-700",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-700",
    icon: TrendingUp,
    features: [
      { icon: UserPlus, title: "Client Onboarding", description: "Digital intake → risk assessment → document checklist → e-signatures → welcome sequence. Fully automated." },
      { icon: Lock, title: "Secure Document Uploads", description: "Branded portal with encryption, auto-filing, and notifications when clients submit documents." },
      { icon: Calendar, title: "Meeting Scheduling", description: "Prospects and clients book directly. Pre-meeting prep packet generated by AI." },
      { icon: Mail, title: "Automated Follow-Up", description: "Post-meeting summaries, action items, and next-steps sent within hours — AI drafted, you reviewed." },
      { icon: BarChart3, title: "Portfolio Dashboard", description: "AUM, client pipeline, revenue trends, upcoming reviews, and goal tracking in one view." },
      { icon: Layers, title: "Financial Planning Workflows", description: "Standardized planning processes with automated task assignment and client milestone tracking." },
      { icon: Brain, title: "AI Client Summaries", description: "Before every meeting: portfolio changes, market context, talking points, and suggested actions." },
    ],
    painPoints: [
      "Client onboarding takes 3+ weeks of back-and-forth emails",
      "Sensitive documents still sent as email attachments",
      "Pipeline and AUM visibility comes from quarterly spreadsheets",
      "Meeting follow-ups sent days late — or not at all",
      "Annual reviews scheduled manually — easy to forget",
    ],
    workflow: [
      { step: "Prospect fills out discovery form", detail: "AI qualifies the lead and schedules an intro call automatically." },
      { step: "Intro call → onboarding", detail: "Sequence launches: docs, risk assessment, e-signatures, welcome packet." },
      { step: "Client portal goes live", detail: "Portfolio view, documents, meeting history, and action items in one place." },
      { step: "AI preps every meeting", detail: "Summary of portfolio changes, market context, and suggested discussion topics." },
      { step: "Dashboard tracks everything", detail: "AUM, revenue, pipeline, upcoming reviews, and client satisfaction — always current." },
    ],
    dashboard: INDUSTRY_MOCKUPS["financial-advisors"],
    testimonial: {
      quote: "Onboarding went from 3 weeks to 4 days. I can see my entire book of business in one screen for the first time.",
      name: "James W.",
      role: "Independent RIA · Scottsdale, AZ",
    },
    stats: [
      { value: "$42.8M", label: "AUM Managed" },
      { value: "4 days", label: "Avg Onboarding Time" },
      { value: "186", label: "Active Clients" },
      { value: "18%", label: "Revenue Growth YTD" },
    ],
  },

  "political-campaigns": {
    slug: "political-campaigns",
    brandName: "Maria Vasquez for Arizona",
    tagline: "High-Energy Campaign Operations HQ",
    heroHeadline: (
      <>
        Every door, every dollar, every <span className="text-red-700">volunteer</span> — tracked.
      </>
    ),
    heroSub: "Donations, volunteers, events, canvassing, email blasts — your campaign runs on speed and data. We give you the real-time command center to win.",
    accentColor: "bg-red-700",
    accentBg: "bg-red-50",
    accentText: "text-red-700",
    icon: Landmark,
    features: [
      { icon: UserPlus, title: "Volunteer Signup", description: "Online signup → auto-assignment to shifts → text reminders → post-shift thank-you, all automated." },
      { icon: DollarSign, title: "Donation Tracking", description: "Every donation linked to donor profile, outreach history, and event attendance for smarter fundraising." },
      { icon: Calendar, title: "Event Management", description: "RSVP tracking, automated reminders, QR check-in at the door, and post-event follow-up sequences." },
      { icon: Phone, title: "SMS Outreach", description: "Peer-to-peer texting, automated blast messages, and targeted outreach by precinct or issue." },
      { icon: Mail, title: "Email Campaigns", description: "Segmented campaigns by donor level, volunteer status, or geographic area with real-time analytics." },
      { icon: MapPin, title: "Voter Contact Workflows", description: "Door-to-door canvassing with turf maps, scripts, response logging, and real-time progress tracking." },
      { icon: BarChart3, title: "Campaign Dashboard", description: "Donations, volunteers, doors knocked, emails sent, events, and geographic engagement — all live." },
    ],
    painPoints: [
      "Volunteer signups scattered across Google Forms, texts, and walk-ins",
      "No real-time view of canvassing progress or voter contacts made",
      "Donation tracking disconnected from outreach efforts and events",
      "Email campaigns sent without knowing what's working or who's engaging",
      "Event attendance tracked on paper with no automated follow-up",
    ],
    workflow: [
      { step: "Volunteer signs up online", detail: "Auto-assigned to next available shift with confirmation text and calendar invite." },
      { step: "Canvassing day launches", detail: "Volunteers get turf maps, scripts, and mobile check-in. Progress updates live." },
      { step: "Donation received", detail: "Donor profile updated, personalized thank-you sent, receipt generated instantly." },
      { step: "Event goes live", detail: "RSVPs tracked, reminders at 48h/2h, QR check-in at door, follow-up after." },
      { step: "Dashboard shows everything", detail: "Donations, doors, emails, volunteer hours, and event metrics — all real-time." },
    ],
    dashboard: INDUSTRY_MOCKUPS["political-campaigns"],
    testimonial: {
      quote: "Volunteer retention doubled with automated shift reminders. We finally had real-time fundraising visibility.",
      name: "Rachel P.",
      role: "Campaign Manager · Tucson, AZ",
    },
    stats: [
      { value: "$284K", label: "Donations Raised" },
      { value: "342", label: "Active Volunteers" },
      { value: "8,420", label: "Doors Knocked" },
      { value: "34%", label: "Email Open Rate" },
    ],
  },

  "small-business-teams": {
    slug: "small-business-teams",
    brandName: "Team Command",
    tagline: "Small Team Operations Platform",
    heroHeadline: (
      <>
        One system for teams that <span className="text-sky-700">wear every hat</span>.
      </>
    ),
    heroSub: "You're the owner, the sales team, and the support desk. We build the connected system that handles the busywork so your small team can focus on growth.",
    accentColor: "bg-sky-700",
    accentBg: "bg-sky-50",
    accentText: "text-sky-700",
    icon: Users,
    features: [
      { icon: BarChart3, title: "Team Dashboard", description: "Revenue, leads, tasks, invoices, and support tickets — one view for the whole team." },
      { icon: Inbox, title: "Lead Capture & Routing", description: "Website forms, social DMs, and phone calls all land in one inbox with auto-assignment." },
      { icon: DollarSign, title: "Invoice & Payment", description: "Send invoices, track payments, auto-follow-up on overdue. No manual chasing." },
      { icon: Brain, title: "AI Assistant", description: "Trained on your business to answer questions, draft replies, and route issues to the right person." },
      { icon: Sparkles, title: "Weekly AI Digest", description: "Every Monday: revenue trends, pipeline health, overdue tasks, and what needs attention." },
    ],
    painPoints: [
      "Leads come from 5 places with no unified view or assignment",
      "Invoices and follow-ups managed in the owner's head",
      "No idea which marketing efforts actually drive revenue",
      "Same customer questions answered the same way — manually",
      "Team communication scattered across text, email, and Slack",
    ],
    workflow: [
      { step: "Lead captured from any channel", detail: "Website, social, phone — auto-captured, tagged, and assigned to the right person." },
      { step: "AI drafts the response", detail: "Personalized reply in your voice. Team member reviews and sends with one click." },
      { step: "Proposal & follow-up automated", detail: "Send proposal → sequence starts: Day 2, 7, 14 until accepted or declined." },
      { step: "Job completed → invoice sent", detail: "Invoice generated, payment link included, reminder queued if overdue." },
      { step: "Monday digest arrives", detail: "AI summarizes revenue, pipeline, completed tasks, and priorities for the week." },
    ],
    dashboard: INDUSTRY_MOCKUPS["small-business-teams"],
    testimonial: {
      quote: "Response time to leads dropped from 6 hours to 18 minutes. I recovered 8 hours a week from admin tasks.",
      name: "Tony R.",
      role: "Owner · Tucson, AZ",
    },
    stats: [
      { value: "18 min", label: "Avg Response Time" },
      { value: "42", label: "Active Leads" },
      { value: "14%", label: "Revenue Growth" },
      { value: "8 hrs", label: "Admin Time Saved/Week" },
    ],
  },
};
