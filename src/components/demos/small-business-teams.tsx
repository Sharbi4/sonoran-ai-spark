import { Users, Zap, BarChart3, Inbox, Calendar, CheckCircle, ChevronRight, Sparkles, Layers } from "lucide-react";
import { DemoShell, IconLogo, Reveal, SectionLabel, type DemoShellTheme } from "./shell";
import { AIChatWidget } from "./ai-chat";
import { cn } from "@/lib/utils";

const theme: DemoShellTheme = {
  accentText: "text-violet-700",
  accentBg: "bg-violet-700",
  accentSoft: "bg-violet-50",
  logoFrom: "#8B5CF6",
  logoTo: "#4C1D95",
  fontBody: "'Inter', sans-serif",
  fontHeading: "'Space Grotesk', sans-serif",
  pageBg: "#FFFFFF",
  pageFg: "#101015",
};

const FEATURES = [
  { icon: Inbox, t: "Unified Inbox", d: "Email, SMS, web chat, and DMs in one shared queue. AI auto-categorizes and assigns." },
  { icon: BarChart3, t: "Live Ops Dashboard", d: "Pipeline, jobs, revenue, and team load — refreshed every minute." },
  { icon: Calendar, t: "Smart Scheduling", d: "AI books across team calendars, sends reminders, and reschedules no-shows." },
  { icon: Zap, t: "Workflow Automations", d: "Trigger any action on any event. Replace 6 SaaS tools with one." },
  { icon: Users, t: "Customer Records", d: "Every interaction, invoice, and note — one timeline per customer." },
  { icon: Layers, t: "AI Co-Pilot", d: "Draft replies, summarize calls, surface next steps — in your team's voice." },
];

export default function SmallBusinessTeamsDemo() {
  return (
    <DemoShell
      slug="small-business-teams"
      brandName="Team Command"
      tagline="The all-in-one operations OS for 5–50 person teams."
      phone="(602) 555-1010"
      city="Built in Phoenix, Arizona"
      navLinks={[
        { label: "Product", href: "#product" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Customers", href: "#customers" },
        { label: "Docs", href: "#docs" },
      ]}
      primaryCta={{ label: "Start Free Trial", href: "#pricing" }}
      secondaryCta={{ label: "Book Demo", href: "#demo" }}
      logo={<IconLogo icon={Sparkles} theme={theme} shape="rounded" />}
      theme={theme}
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50" />
        <div aria-hidden className="absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 10% 20%, rgba(139,92,246,0.2), transparent 50%), radial-gradient(circle at 90% 80%, rgba(76,29,149,0.15), transparent 50%)" }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-24 pb-20">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-semibold"><Sparkles className="h-3 w-3" /> AI-native · Replaces 6 tools</span>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl" style={{ fontFamily: theme.fontHeading }}>
              Run your business<br /><span className="bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">from one place.</span>
            </h1>
            <p className="mt-6 max-w-xl text-gray-600 leading-relaxed text-lg">
              Inbox, CRM, scheduling, dashboards, and AI automations — built for small teams that hate switching apps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className={cn("inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-lg", theme.accentBg)}>
                Start 14-day Free Trial <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-full bg-white text-violet-900 border border-violet-200 px-6 py-3.5 text-sm font-medium hover:bg-violet-50">
                Book Live Demo
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">No credit card · Full access · Cancel anytime</p>
          </Reveal>

          {/* Dashboard preview */}
          <Reveal delay={0.15}>
            <div className="mt-16 rounded-3xl bg-gradient-to-br from-slate-900 to-violet-950 p-3 shadow-2xl">
              <div className="rounded-2xl bg-white overflow-hidden">
                <div className="border-b bg-gray-50 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5"><div className="h-3 w-3 rounded-full bg-red-400" /><div className="h-3 w-3 rounded-full bg-amber-400" /><div className="h-3 w-3 rounded-full bg-green-400" /></div>
                  <div className="ml-3 px-3 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-500 flex-1 max-w-md">app.teamcommand.io/dashboard</div>
                </div>
                <div className="grid grid-cols-[200px_1fr] min-h-[440px]">
                  <div className="bg-gray-50 border-r border-gray-100 p-4 space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold px-2 mb-2">Workspace</p>
                    {[{l:"Dashboard",a:true},{l:"Inbox · 12"},{l:"Customers"},{l:"Pipeline"},{l:"Calendar"},{l:"Automations"},{l:"Reports"},{l:"Settings"}].map(i=>(
                      <div key={i.l} className={cn("px-3 py-2 rounded-lg text-xs font-medium", i.a ? "bg-violet-100 text-violet-800" : "text-gray-700 hover:bg-gray-100")}>{i.l}</div>
                    ))}
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold" style={{fontFamily:theme.fontHeading}}>Good morning, Jess 👋</p>
                      <span className="text-xs bg-violet-50 text-violet-700 px-2.5 py-1 rounded-full font-semibold">12 actions · 4 urgent</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {[{l:"New leads",v:"24",d:"+8"},{l:"Open jobs",v:"38",d:"3 due"},{l:"MTD revenue",v:"$84.2k",d:"+12%"},{l:"NPS",v:"71",d:"+3"}].map(k=>(
                        <div key={k.l} className="rounded-xl border border-gray-100 p-3 bg-white">
                          <p className="text-[10px] uppercase text-gray-500 font-semibold">{k.l}</p>
                          <p className="text-xl font-bold mt-1" style={{fontFamily:theme.fontHeading}}>{k.v}</p>
                          <p className="text-[10px] text-emerald-600 font-medium">{k.d}</p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-gray-100 p-4">
                        <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">Pipeline this week</p>
                        <div className="mt-3 h-24 flex items-end gap-1">
                          {[40, 60, 35, 75, 55, 90, 80, 65, 95, 110, 85, 70].map((h,i)=>(
                            <div key={i} className="flex-1 rounded-t" style={{height:`${h}%`,background:`linear-gradient(180deg,#8B5CF6,#4C1D95)`}} />
                          ))}
                        </div>
                      </div>
                      <div className="rounded-xl border border-gray-100 p-4">
                        <p className="text-xs uppercase text-gray-500 font-bold tracking-wider">AI Suggested Actions</p>
                        <div className="mt-3 space-y-2 text-xs">
                          {["Follow up: 3 leads cold > 48 hrs","Quote ready: Garcia kitchen reno","Reschedule: Diaz reschedule request","Invoice overdue: Patel — $2,400"].map(t=>(
                            <div key={t} className="flex items-start gap-2 p-2 bg-violet-50 border border-violet-100 rounded-md">
                              <Zap className="h-3.5 w-3.5 text-violet-700 mt-0.5 shrink-0" /><span className="text-violet-900">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel color={theme.accentText}>Everything you need</SectionLabel>
              <h2 className="text-4xl sm:text-5xl tracking-tight" style={{ fontFamily: theme.fontHeading }}>One platform. Six tools out.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <Reveal key={f.t}>
                <div className="rounded-2xl border border-violet-100 bg-violet-50/30 p-7 hover:bg-white hover:shadow-lg transition-all">
                  <div className="h-10 w-10 rounded-xl bg-violet-700 text-white flex items-center justify-center mb-4"><f.icon className="h-5 w-5" /></div>
                  <p className="text-xl font-bold" style={{ fontFamily: theme.fontHeading }}>{f.t}</p>
                  <p className="mt-2 text-sm text-gray-600">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-violet-50/60 border-y border-violet-100">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <SectionLabel color={theme.accentText}>Pricing</SectionLabel>
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: theme.fontHeading }}>Simple, transparent.</h2>
              <p className="mt-3 text-gray-600">14-day free trial. No setup fees.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Starter", price: "$39", per: "/user/mo", best: false, feats: ["Up to 5 users","Unified inbox","Basic automations","Email support"] },
              { name: "Team", price: "$79", per: "/user/mo", best: true, feats: ["Unlimited users","All automations","Live dashboards","AI co-pilot","Priority support"] },
              { name: "Scale", price: "Custom", per: "", best: false, feats: ["Multi-location","Custom workflows","SSO & SCIM","Dedicated CSM","SLA"] },
            ].map(p => (
              <Reveal key={p.name}>
                <div className={cn(
                  "rounded-3xl p-7 border-2 h-full flex flex-col",
                  p.best ? "bg-violet-950 text-white border-violet-700 shadow-2xl scale-[1.03]" : "bg-white border-violet-100",
                )}>
                  {p.best && <span className="text-[10px] font-bold uppercase tracking-wider text-violet-300 mb-2">Most Popular</span>}
                  <p className={cn("text-xs uppercase tracking-wider font-bold", p.best ? "text-violet-200" : "text-violet-700")}>{p.name}</p>
                  <p className="mt-3"><span className="text-4xl font-bold" style={{fontFamily:theme.fontHeading}}>{p.price}</span><span className={cn("text-sm", p.best ? "text-violet-200" : "text-gray-500")}>{p.per}</span></p>
                  <ul className="mt-5 space-y-2 text-sm flex-1">
                    {p.feats.map(f => <li key={f} className="flex gap-2"><CheckCircle className="h-4 w-4 shrink-0 mt-0.5" />{f}</li>)}
                  </ul>
                  <button className={cn("mt-6 w-full rounded-full py-3 text-sm font-semibold", p.best ? "bg-white text-violet-900" : "bg-violet-700 text-white")}>Start Free Trial</button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMERS */}
      <section id="customers" className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
          <Reveal>
            <SectionLabel color={theme.accentText}>Customers</SectionLabel>
            <h2 className="text-4xl sm:text-5xl mb-10" style={{ fontFamily: theme.fontHeading }}>Trusted by 600+ teams.</h2>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 items-center opacity-60">
              {["Mesa Co","Sunbelt","Northstar","Vermillion","Cactus Bros","Old Pueblo"].map(b => (
                <p key={b} className="text-lg sm:text-xl font-bold tracking-tight" style={{ fontFamily: theme.fontHeading }}>{b}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <AIChatWidget
        script={{
          title: "Command AI Assistant",
          subtitle: "Product Q&A · Pricing · Demos",
          greeting: "Hey! I'm Team Command's AI assistant. I can answer product questions, help you figure out pricing, or book a live demo with our team. What are you trying to solve?",
          quickReplies: ["What does this replace?", "Pricing for a 10-person team", "Book a demo", "Does it integrate with QuickBooks?"],
          responses: [
            { match: ["replace", "tools", "instead", "vs"], reply: "Most customers replace Help Scout/Front + HubSpot CRM + Calendly + Zapier + ClickUp + a custom dashboard. One bill, one login, no copy-paste between tools." },
            { match: ["price", "cost", "team", "10", "users"], reply: "For a 10-person team on the Team plan, that's $790/mo. Replaces ~$2,400/mo of SaaS for most customers. 14-day free trial, no card required." },
            { match: ["demo", "book", "see", "show"], reply: "I'd love to set that up. We have Tuesday 10am or Thursday 2pm open this week. 30 min, screen-share, focused on your actual workflows. What's your email?" },
            { match: ["quickbooks", "stripe", "integrate", "integration", "zapier"], reply: "Yes — native integrations with QuickBooks, Stripe, Twilio, Gmail/Outlook, Google Calendar, Slack, and Zapier. We're SOC 2 Type II, US-hosted." },
            { match: ["ai", "automation", "co-pilot"], reply: "AI co-pilot drafts customer replies in your team's voice, summarizes calls, suggests next steps, and routes incoming messages by intent. You stay in control — nothing sends automatically." },
          ],
          fallback: "Happy to help — ask about features, pricing, integrations, or to book a demo.",
          accentBg: "bg-violet-700",
          accentText: "text-violet-700",
          buttonLabel: "Ask Command AI",
        }}
      />
    </DemoShell>
  );
}
