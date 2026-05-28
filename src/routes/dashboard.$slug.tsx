import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { DASHBOARD_CONFIGS } from "@/lib/dashboard-content";
import type { IndustrySlug } from "@/lib/industries-content";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  Bell,
  Bot,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Mic,
  PhoneCall,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const VALID = Object.keys(DASHBOARD_CONFIGS);

export const Route = createFileRoute("/dashboard/$slug")({
  beforeLoad: ({ params }) => {
    if (!VALID.includes(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const cfg = DASHBOARD_CONFIGS[params.slug as IndustrySlug];
    if (!cfg) return { meta: [{ title: "Dashboard — Sonoran Systems & AI" }] };
    return {
      meta: [
        { title: `${cfg.brandName} · ${cfg.dashboardName} — Sonoran Systems & AI` },
        { name: "description", content: cfg.tagline },
        { property: "og:title", content: `${cfg.brandName} — ${cfg.dashboardName}` },
        { property: "og:description", content: cfg.tagline },
      ],
      links: [
        { rel: "canonical", href: `https://sonoransystemsai.com/dashboard/${params.slug}` },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="font-serif text-4xl">Dashboard not found</h1>
      <p className="mt-4 text-muted-foreground">
        Browse <a href="/industries" className="text-copper underline">industries</a>.
      </p>
    </div>
  ),
  component: DashboardPage,
});

function DashboardPage() {
  const { slug } = Route.useParams();
  const cfg = DASHBOARD_CONFIGS[slug as IndustrySlug];
  if (!cfg) return null;

  return (
    <div style={{ backgroundColor: cfg.pageBg }} className="min-h-screen text-slate-900">
      {/* Ribbon */}
      <div className="bg-[#1F1F1F] text-center py-2 px-4">
        <p className="text-[11px] text-white/80">
          Dashboard demo by{" "}
          <Link to="/" className="text-copper font-medium underline underline-offset-2">Sonoran Systems AI</Link>
          {" · "}
          <Link to="/industries/$slug" params={{ slug }} className="text-copper font-medium underline underline-offset-2">
            Want this for your business?
          </Link>
        </p>
      </div>

      {/* App Top Bar */}
      <header className="bg-white/95 backdrop-blur border-b border-black/10 sticky top-0 z-40">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center text-white shrink-0", cfg.accentBg)}>
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">{cfg.brandName}</p>
              <p className="text-[11px] text-slate-500 truncate">{cfg.dashboardName}</p>
            </div>
          </div>
          <div className="hidden md:flex flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search clients, leads, calls…"
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-100 text-sm border border-transparent focus:bg-white focus:border-slate-300 outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-slate-100" aria-label="Notifications">
              <Bell className="h-4 w-4 text-slate-600" />
              <span className={cn("absolute top-1.5 right-1.5 h-2 w-2 rounded-full", cfg.accentBg)} />
            </button>
            <a
              href={`/demo/${slug}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50"
            >
              <ExternalLink className="h-3.5 w-3.5" /> View website
            </a>
            <div className={cn("h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-bold", cfg.accentBg)}>
              {cfg.brandName.slice(0, 1)}
            </div>
          </div>
        </div>
      </header>

      {/* Page heading */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-8 pb-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={cn("text-[11px] font-semibold uppercase tracking-[0.25em]", cfg.accent)}>
              Live demo · fictional data
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl mt-2">{cfg.dashboardName}</h1>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">{cfg.tagline}</p>
          </div>
          <Link
            to="/contact"
            className={cn("inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white hover:opacity-90", cfg.accentBg)}
          >
            Build this for my business <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-[1400px] px-5 sm:px-8 pb-20 space-y-6">
        {/* KPI strip */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cfg.kpis.map((k) => (
            <Card key={k.label} className="p-5">
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">{k.label}</p>
              <p className="mt-2 font-serif text-3xl">{k.value}</p>
              {k.delta && (
                <p className={cn("mt-1 text-xs font-medium flex items-center gap-1", k.positive ? "text-emerald-600" : "text-rose-600")}>
                  <TrendingUp className={cn("h-3 w-3", !k.positive && "rotate-180")} />
                  {k.delta}
                </p>
              )}
            </Card>
          ))}
        </section>

        {/* AI Voice Agent + AI Agents */}
        <section className="grid lg:grid-cols-3 gap-6">
          {/* Voice agent / Vapi-style */}
          <Card className="lg:col-span-2 p-0 overflow-hidden">
            <div className={cn("px-5 py-4 flex items-center justify-between gap-4 border-b border-black/5", cfg.accentSoft)}>
              <div className="flex items-center gap-3 min-w-0">
                <div className={cn("h-9 w-9 rounded-full flex items-center justify-center text-white shrink-0", cfg.accentBg)}>
                  <Mic className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm truncate">{cfg.voiceAgent.name}</p>
                  <p className="text-[11px] text-slate-600 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {cfg.voiceAgent.status}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-5 text-right">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">Today</p>
                  <p className="text-sm font-semibold">{cfg.voiceAgent.callsToday} calls</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">Talk time</p>
                  <p className="text-sm font-semibold">{cfg.voiceAgent.minutesToday}</p>
                </div>
              </div>
            </div>
            <div className="divide-y divide-black/5">
              {cfg.voiceAgent.calls.map((c, i) => (
                <div key={i} className="px-5 py-3 grid grid-cols-12 gap-3 items-center text-sm hover:bg-slate-50/60">
                  <div className="col-span-2 sm:col-span-1 text-[11px] text-slate-500 font-mono">{c.time}</div>
                  <div className="col-span-10 sm:col-span-3 flex items-center gap-2 min-w-0">
                    <PhoneCall className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span className="truncate font-medium">{c.caller}</span>
                  </div>
                  <div className="col-span-12 sm:col-span-4 text-slate-700 truncate">{c.intent}</div>
                  <div className="col-span-9 sm:col-span-3 text-slate-600 text-[13px] truncate">
                    <SentimentDot sentiment={c.sentiment} /> {c.outcome}
                  </div>
                  <div className="col-span-3 sm:col-span-1 text-right text-[11px] text-slate-500 font-mono">{c.duration}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* AI agents */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bot className={cn("h-4 w-4", cfg.accent)} />
                <p className="font-semibold text-sm">AI Agents</p>
              </div>
              <span className={cn("text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full", cfg.accentSoft, cfg.accent)}>
                {cfg.aiAgents.filter((a) => a.status === "running").length} running
              </span>
            </div>
            <div className="space-y-3">
              {cfg.aiAgents.map((a) => (
                <div key={a.agent} className="border border-slate-200 rounded-xl p-3 hover:bg-slate-50">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[13px] font-semibold">{a.agent}</p>
                    <StatusPill status={a.status} />
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{a.task}</p>
                  {a.meta && <p className="mt-1.5 text-[11px] text-slate-500 font-mono">{a.meta}</p>}
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Pipeline + Schedule */}
        <section className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold text-sm">{cfg.pipelineTitle}</p>
              <span className="text-[11px] text-slate-500">Updated live</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {cfg.pipeline.map((stage) => (
                <div key={stage.name} className="bg-slate-50/80 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className={cn("text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full", stage.accent)}>
                      {stage.name}
                    </span>
                    <span className="text-[11px] text-slate-500">{stage.leads.length}</span>
                  </div>
                  <div className="space-y-2">
                    {stage.leads.map((l, i) => (
                      <div key={i} className="bg-white rounded-lg p-2.5 border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                        <p className="text-[12px] font-medium leading-tight truncate">{l.name}</p>
                        <p className="text-[11px] text-slate-600 mt-0.5">{l.value}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{l.meta}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className={cn("h-4 w-4", cfg.accent)} />
              <p className="font-semibold text-sm">{cfg.schedule.title}</p>
            </div>
            <div className="space-y-3">
              {cfg.schedule.items.map((it, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-14 shrink-0 text-[11px] font-mono text-slate-500 pt-0.5">{it.time}</div>
                  <div className={cn("h-2 w-2 rounded-full mt-2", cfg.accentBg)} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-[13px] font-medium truncate">{it.title}</p>
                      {it.tag && (
                        <span className={cn("text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded", cfg.accentSoft, cfg.accent)}>
                          {it.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">{it.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Custom widget + activity */}
        <section className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-5">
            <div className="flex items-center justify-between mb-1">
              <p className="font-semibold text-sm">{cfg.customWidget.title}</p>
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </div>
            <p className="text-[11px] text-slate-500 mb-4">{cfg.customWidget.subtitle}</p>
            <div className="space-y-3">
              {cfg.customWidget.rows.map((r, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between text-[13px] mb-1">
                    <span className="font-medium">{r.left}</span>
                    <span className="text-slate-600">{r.right}</span>
                  </div>
                  {typeof r.pct === "number" && (
                    <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div className={cn("h-full rounded-full", cfg.accentBg)} style={{ width: `${r.pct}%` }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Activity className={cn("h-4 w-4", cfg.accent)} />
              <p className="font-semibold text-sm">Live Activity</p>
            </div>
            <div className="space-y-3">
              {cfg.activity.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-base leading-none pt-0.5">{a.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12.5px] leading-snug">{a.text}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      {a.time} {a.channel && <span>· {a.channel}</span>}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Footer CTA */}
        <section className="rounded-2xl bg-[#1F1F1F] text-white p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/60">Want this dashboard?</p>
            <p className="font-serif text-xl sm:text-2xl mt-1">We build custom AI dashboards for {cfg.brandName.split(" ")[0]}-style businesses.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/industries/$slug"
              params={{ slug }}
              className="inline-flex items-center gap-2 rounded-full bg-copper text-copper-foreground px-5 py-2.5 text-sm font-medium hover:bg-copper/90"
            >
              See industry page <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`/demo/${slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
            >
              View matching website demo
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("bg-white rounded-2xl border border-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.03)]", className)}>{children}</div>;
}

function StatusPill({ status }: { status: "running" | "done" | "queued" }) {
  const map = {
    running: { label: "Running", cls: "bg-emerald-50 text-emerald-700" },
    done: { label: "Done", cls: "bg-slate-100 text-slate-700" },
    queued: { label: "Queued", cls: "bg-amber-50 text-amber-800" },
  } as const;
  const m = map[status];
  return <span className={cn("text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full", m.cls)}>{m.label}</span>;
}

function SentimentDot({ sentiment }: { sentiment: "positive" | "neutral" | "alert" }) {
  const color = sentiment === "positive" ? "bg-emerald-500" : sentiment === "alert" ? "bg-rose-500" : "bg-slate-400";
  return <span className={cn("inline-block h-1.5 w-1.5 rounded-full mr-1.5 align-middle", color)} />;
}