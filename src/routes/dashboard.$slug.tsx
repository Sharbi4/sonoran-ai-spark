import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { DASHBOARD_CONFIGS } from "@/lib/dashboard-content";
import type { IndustrySlug } from "@/lib/industries-content";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Bell,
  ExternalLink,
  Search,
  Sparkles,
} from "lucide-react";
import { IndustryDashboard } from "@/components/industry-dashboards";

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

  // Finance + political demos use a dark chrome
  const dark = slug === "financial-advisors" || slug === "political-campaigns";
  const pageBg = dark ? "#0B0D10" : cfg.pageBg;

  return (
    <div style={{ backgroundColor: pageBg }} className={cn("min-h-screen", dark ? "text-white" : "text-slate-900")}>
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
      <header className={cn("backdrop-blur border-b sticky top-0 z-40", dark ? "bg-[#0B0D10]/90 border-white/10" : "bg-white/95 border-black/10")}>
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className={cn("h-8 w-8 rounded-md flex items-center justify-center text-white shrink-0", cfg.accentBg)}>
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-semibold tracking-tight truncate">{cfg.brandName}</p>
              <p className={cn("text-[11px] font-mono truncate", dark ? "text-white/40" : "text-slate-500")}>{cfg.dashboardName}</p>
            </div>
            <nav className="hidden md:flex items-center gap-5 ml-6 text-[12px]">
              {["Overview", "Pipeline", "Calls", "Reports", "Automations"].map((t, i) => (
                <a key={t} href="#" className={cn("relative pb-3.5 -mb-3.5 transition-colors", i === 0 ? (dark ? "text-white" : "text-slate-900") : (dark ? "text-white/50 hover:text-white/80" : "text-slate-500 hover:text-slate-800"))}>
                  {t}
                  {i === 0 && <span className={cn("absolute left-0 right-0 -bottom-px h-0.5", cfg.accentBg)} />}
                </a>
              ))}
            </nav>
          </div>
          <div className="hidden md:flex flex-1 max-w-md relative">
            <Search className={cn("absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5", dark ? "text-white/40" : "text-slate-400")} />
            <input
              type="text"
              placeholder="Search · ⌘K"
              className={cn("w-full pl-9 pr-3 py-1.5 rounded-md text-[12.5px] border outline-none", dark ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30" : "bg-slate-50 border-slate-200 placeholder:text-slate-400 focus:bg-white focus:border-slate-300")}
            />
          </div>
          <div className="flex items-center gap-3">
            <button className={cn("relative p-2 rounded-md", dark ? "hover:bg-white/5" : "hover:bg-slate-100")} aria-label="Notifications">
              <Bell className={cn("h-4 w-4", dark ? "text-white/60" : "text-slate-600")} />
              <span className={cn("absolute top-1.5 right-1.5 h-2 w-2 rounded-full", cfg.accentBg)} />
            </button>
            <a
              href={`/demo/${slug}`}
              className={cn("hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1.5 rounded-md border", dark ? "border-white/15 hover:bg-white/5" : "border-slate-200 hover:bg-slate-50")}
            >
              <ExternalLink className="h-3 w-3" /> Website
            </a>
            <div className={cn("h-7 w-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold", cfg.accentBg)}>
              {cfg.brandName.slice(0, 1)}
            </div>
          </div>
        </div>
      </header>

      {/* Page heading */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-6 pb-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={cn("text-[10px] font-mono font-semibold uppercase tracking-[0.18em] flex items-center gap-2", dark ? "text-white/40" : "text-slate-500")}>
              <span className={cn("inline-block h-1.5 w-1.5 rounded-full animate-pulse", cfg.accentBg)} /> Live · fictional data
            </p>
            <h1 className={cn("text-xl sm:text-2xl mt-1.5 font-semibold tracking-tight", dark ? "text-white" : "text-slate-900")}>{cfg.dashboardName}</h1>
            <p className={cn("mt-1 text-[12.5px] max-w-2xl", dark ? "text-white/50" : "text-slate-500")}>{cfg.tagline}</p>
          </div>
          <Link
            to="/contact"
            className={cn("inline-flex items-center gap-2 rounded-md px-4 py-2 text-[12.5px] font-medium text-white hover:opacity-90", cfg.accentBg)}
          >
            Build this for my business <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-[1400px] px-5 sm:px-8 pb-20">
        <IndustryDashboard cfg={cfg} />

        {/* Footer CTA */}
        <section className="mt-6 rounded-xl bg-[#1F1F1F] text-white p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/60">Want this dashboard?</p>
            <p className="text-xl sm:text-2xl mt-1 font-semibold tracking-tight">We build custom AI dashboards for {cfg.brandName.split(" ")[0]}-style businesses.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/industries/$slug"
              params={{ slug }}
              className="inline-flex items-center gap-2 rounded-md bg-copper text-copper-foreground px-5 py-2.5 text-sm font-medium hover:bg-copper/90"
            >
              See industry page <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`/demo/${slug}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
            >
              View matching website demo
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}