import {
  AlertTriangle, ArrowDownRight, ArrowUpRight, Bot, Calendar, CheckCircle2,
  CircleDollarSign, Clock, FileText, Gavel, HardHat, Heart, Inbox, Mail,
  MapPin, MessageSquare, Mic, Phone, PieChart as PieIcon, Scale,
  Stethoscope, TrendingDown, TrendingUp, Truck, Users, Wrench,
} from "lucide-react";
import type { DashboardConfig } from "@/lib/dashboard-content";
import { cn } from "@/lib/utils";
import {
  AreaChart, BarChart, DataTable, Delta, Donut, HeatMap, IconSquare,
  KpiTile, Panel, PanelHeader, ProgressBar, Sparkline, StatusDot, Tag,
} from "./dashboard-ui";

/* ------------------------------------------------------------------ */
/* Color resolver — extract a real hex from the cfg accent for charts. */

const ACCENT_HEX: Record<string, string> = {
  "text-amber-700": "#b45309",
  "text-orange-600": "#ea580c",
  "text-rose-700": "#be123c",
  "text-pink-600": "#db2777",
  "text-emerald-700": "#047857",
  "text-indigo-600": "#4f46e5",
  "text-sky-700": "#0369a1",
  "text-yellow-700": "#a16207",
  "text-red-700": "#b91c1c",
  "text-slate-700": "#334155",
};

function hexFor(cfg: DashboardConfig) {
  return ACCENT_HEX[cfg.accent] ?? "#0f172a";
}

function seriesFromPattern(seed: number, len: number, base: number, vol: number) {
  const out: number[] = [];
  let v = base;
  for (let i = 0; i < len; i++) {
    const n = Math.sin((i + seed) * 0.7) * vol + Math.cos((i + seed) * 0.3) * (vol * 0.4);
    v = Math.max(base * 0.4, base + n);
    out.push(Math.round(v));
  }
  return out;
}

/* ================================================================== */
/* Public entry — switches on slug.                                    */

export function IndustryDashboard({ cfg }: { cfg: DashboardConfig }) {
  switch (cfg.slug) {
    case "law-firms": return <LawDashboard cfg={cfg} />;
    case "contractors": return <ContractorDashboard cfg={cfg} />;
    case "restaurants": return <RestaurantDashboard cfg={cfg} />;
    case "salons-wellness": return <SalonDashboard cfg={cfg} />;
    case "real-estate": return <RealEstateDashboard cfg={cfg} />;
    case "consultants-coaches": return <ConsultantDashboard cfg={cfg} />;
    case "doctors-medical": return <MedicalDashboard cfg={cfg} />;
    case "financial-advisors": return <FinancialDashboard cfg={cfg} />;
    case "political-campaigns": return <PoliticalDashboard cfg={cfg} />;
    case "small-business-teams": return <UniversalDashboard cfg={cfg} />;
    default: return <UniversalDashboard cfg={cfg} />;
  }
}

/* Shared KPI strip with sparklines */
function KpiStrip({ cfg, trends, dark }: { cfg: DashboardConfig; trends?: number[][]; dark?: boolean }) {
  const hex = hexFor(cfg);
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {cfg.kpis.map((k, i) => (
        <KpiTile
          key={k.label}
          label={k.label}
          value={k.value}
          delta={k.delta}
          positive={k.positive}
          trend={trends?.[i] ?? seriesFromPattern(i * 3, 14, 50, 14)}
          stroke={hex}
          dark={dark}
        />
      ))}
    </section>
  );
}

/* Shared AI agents rail */
function AgentsRail({ cfg, dark }: { cfg: DashboardConfig; dark?: boolean }) {
  const hex = hexFor(cfg);
  return (
    <Panel dark={dark}>
      <PanelHeader
        dark={dark}
        title={<span className="flex items-center gap-1.5"><Bot className="h-3.5 w-3.5" style={{ color: hex }} /> AI Agents</span>}
        meta={`${cfg.aiAgents.filter(a => a.status === "running").length} active`}
      />
      <div className={cn("divide-y", dark ? "divide-white/10" : "divide-slate-100")}>
        {cfg.aiAgents.map((a) => (
          <div key={a.agent} className="px-4 py-3">
            <div className="flex items-center justify-between gap-2">
              <p className={cn("text-[12.5px] font-semibold", dark ? "text-white" : "text-slate-900")}>{a.agent}</p>
              <Tag tone={a.status === "running" ? "success" : a.status === "queued" ? "warn" : "neutral"}>
                {a.status === "running" && <StatusDot tone="success" pulse className="mr-0.5" />} {a.status}
              </Tag>
            </div>
            <p className={cn("mt-1 text-[11.5px] leading-snug", dark ? "text-white/60" : "text-slate-600")}>{a.task}</p>
            {a.meta && <p className={cn("mt-1 text-[10.5px] font-mono", dark ? "text-white/40" : "text-slate-400")}>{a.meta}</p>}
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* Voice agent compact log */
function VoiceLog({ cfg, dark, rows = 4 }: { cfg: DashboardConfig; dark?: boolean; rows?: number }) {
  return (
    <Panel dark={dark}>
      <PanelHeader
        dark={dark}
        title={<span className="flex items-center gap-1.5"><Mic className="h-3.5 w-3.5" style={{ color: hexFor(cfg) }} /> {cfg.voiceAgent.name}</span>}
        meta={cfg.voiceAgent.status}
        right={
          <div className="flex items-center gap-4 text-[11px]">
            <span className={cn("font-mono", dark ? "text-white/60" : "text-slate-500")}>{cfg.voiceAgent.callsToday} calls</span>
            <span className={cn("font-mono", dark ? "text-white/60" : "text-slate-500")}>{cfg.voiceAgent.minutesToday}</span>
          </div>
        }
      />
      <DataTable
        dark={dark}
        compact
        columns={[
          { key: "time", header: "Time", mono: true, width: "62px" },
          { key: "caller", header: "Caller" },
          { key: "intent", header: "Intent" },
          { key: "outcome", header: "Outcome" },
          { key: "duration", header: "Dur", mono: true, align: "right", width: "60px" },
        ]}
        rows={cfg.voiceAgent.calls.slice(0, rows).map((c) => ({
          time: c.time,
          caller: (
            <span className="flex items-center gap-1.5">
              <StatusDot tone={c.sentiment === "positive" ? "success" : c.sentiment === "alert" ? "danger" : "neutral"} />
              {c.caller}
            </span>
          ),
          intent: <span className={cn("truncate block max-w-[200px]", dark ? "text-white/70" : "text-slate-700")}>{c.intent}</span>,
          outcome: <span className={cn("truncate block max-w-[260px]", dark ? "text-white/60" : "text-slate-600")}>{c.outcome}</span>,
          duration: c.duration,
        }))}
      />
    </Panel>
  );
}

/* ================================================================== */
/* 1. LAW FIRMS — matters · billable hours heatmap · trust ledger      */

function LawDashboard({ cfg }: { cfg: DashboardConfig }) {
  const hex = hexFor(cfg);
  const matters = [
    { id: "MTR-2026-0312", name: "Garcia v. Pima County", area: "Litigation", lead: "M. Rivera", status: "Active", deadline: "Sep 14 · Trial", urgency: "danger" as const, value: "$42,800" },
    { id: "MTR-2026-0298", name: "Bell Holdings — MSA", area: "Corporate", lead: "S. Patel", status: "Eng. sent", deadline: "Awaiting sig", urgency: "warn" as const, value: "$24,000" },
    { id: "MTR-2026-0287", name: "Lee Estate Plan", area: "Estate", lead: "K. Ellison", status: "Signing", deadline: "Today 2pm", urgency: "warn" as const, value: "$3,500" },
    { id: "MTR-2026-0271", name: "Hernandez Probate", area: "Estate", lead: "K. Ellison", status: "Discovery", deadline: "11 days", urgency: "neutral" as const, value: "$8,000" },
    { id: "MTR-2026-0254", name: "Vasquez — PI Auto", area: "Litigation", lead: "M. Rivera", status: "Intake", deadline: "Conflict check", urgency: "info" as const, value: "$42,000 est" },
    { id: "MTR-2026-0241", name: "Patel Corp Formation", area: "Corporate", lead: "S. Patel", status: "Active", deadline: "8 days", urgency: "neutral" as const, value: "$385/h" },
  ];
  const hours = [
    [6, 7.5, 8, 6, 7, 0, 0],
    [5, 6, 7, 8, 6.5, 2, 0],
    [4, 5, 6, 7, 8, 1, 0],
    [7, 6, 5, 4, 6, 0, 0],
  ];
  const trust = [
    { date: "Sep 02", client: "Bell Holdings", ref: "TRU-04182", debit: "", credit: "$12,400.00", balance: "$48,200.00" },
    { date: "Sep 02", client: "Patel Corp", ref: "TRU-04181", debit: "$1,540.00", credit: "", balance: "$35,800.00" },
    { date: "Sep 01", client: "Lee Estate", ref: "TRU-04179", debit: "", credit: "$3,500.00", balance: "$37,340.00" },
    { date: "Aug 30", client: "Hernandez", ref: "TRU-04175", debit: "$420.00", credit: "", balance: "$33,840.00" },
  ];

  return (
    <div className="space-y-4">
      <KpiStrip cfg={cfg} />
      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Active Matters" meta={`${matters.length} of 128 open`} right={<Tag tone="info">Clio · synced 2m ago</Tag>} />
          <DataTable
            columns={[
              { key: "id", header: "Matter", mono: true, width: "150px" },
              { key: "name", header: "Caption" },
              { key: "lead", header: "Lead", width: "90px" },
              { key: "status", header: "Status", width: "110px", render: (r) => <Tag tone={r.urgency}>{r.status}</Tag> },
              { key: "deadline", header: "Next event", mono: true, width: "140px" },
              { key: "value", header: "Value", mono: true, align: "right", width: "100px" },
            ]}
            rows={matters}
          />
        </Panel>
        <AgentsRail cfg={cfg} />
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Billable Hours · This week" meta="Mon–Sun" right={<span className="text-[11px] font-mono text-slate-500">412 / 480 target</span>} />
          <div className="p-4">
            <HeatMap
              rows={["Ellison, K.", "Patel, S.", "Rivera, M.", "Chen, A."]}
              cols={["M", "T", "W", "T", "F", "S", "S"]}
              data={hours}
              color={hex}
            />
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1.5 text-[11px] text-slate-500"><span>Practice area allocation</span><span className="font-mono">412 hrs</span></div>
              {cfg.customWidget.rows.map((r) => (
                <div key={r.left} className="py-1.5">
                  <div className="flex items-center justify-between text-[12px] mb-1">
                    <span className="text-slate-700">{r.left}</span>
                    <span className="font-mono tabular-nums text-slate-600">{r.right}</span>
                  </div>
                  <ProgressBar pct={r.pct ?? 0} color={hex} />
                </div>
              ))}
            </div>
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Trust Ledger" meta="IOLTA" right={<Tag tone="success">Reconciled</Tag>} />
          <DataTable
            compact
            columns={[
              { key: "date", header: "Date", mono: true, width: "60px" },
              { key: "client", header: "Client" },
              { key: "debit", header: "Dr", mono: true, align: "right", width: "70px" },
              { key: "credit", header: "Cr", mono: true, align: "right", width: "80px" },
              { key: "balance", header: "Bal", mono: true, align: "right", width: "90px" },
            ]}
            rows={trust}
          />
        </Panel>
      </section>

      <VoiceLog cfg={cfg} rows={5} />
    </div>
  );
}

/* ================================================================== */
/* 2. CONTRACTORS — dispatch board · estimate funnel · AR aging        */

function ContractorDashboard({ cfg }: { cfg: DashboardConfig }) {
  const hex = hexFor(cfg);
  const crews = [
    { crew: "Crew 1 — Cline Remodel", lead: "B. Torres", jobs: ["8:00 Demo · kitchen", "11:30 Plumbing rough"], status: "On site", color: "success" as const },
    { crew: "Crew 2 — Patel Pool Deck", lead: "J. Reyes", jobs: ["7:30 Concrete pour", "1:00 Form removal"], status: "On site", color: "success" as const },
    { crew: "Crew 3 — Morales Framing", lead: "D. Park", jobs: ["7:30 Framing day 3", "Insp 3pm"], status: "On site", color: "success" as const },
    { crew: "Crew 4 — Emergency Roof", lead: "M. Alvarez", jobs: ["En route · Sunridge", "ETA 12 min"], status: "Dispatched", color: "warn" as const },
  ];
  const estimates = [
    { label: "Requested", value: 41 },
    { label: "Sent", value: 27 },
    { label: "Viewed", value: 22 },
    { label: "Accepted", value: 10 },
    { label: "Lost", value: 4 },
  ];
  const ar = [
    { bucket: "Current", invoices: 14, amount: "$84,200.00" },
    { bucket: "1–30", invoices: 7, amount: "$31,840.00" },
    { bucket: "31–60", invoices: 4, amount: "$18,400.00" },
    { bucket: "61–90", invoices: 2, amount: "$9,200.00", flag: true },
    { bucket: "90+", invoices: 1, amount: "$3,400.00", flag: true },
  ];

  return (
    <div className="space-y-4">
      <KpiStrip cfg={cfg} />
      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Dispatch Board · Today" meta="4 crews · 11 jobs" right={<Tag tone="success"><StatusDot tone="success" pulse className="mr-0.5" /> Live GPS</Tag>} />
          <div className="p-3 grid sm:grid-cols-2 gap-2">
            {crews.map((c) => (
              <div key={c.crew} className="rounded-lg border border-slate-200/80 bg-slate-50/40 p-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-[12.5px] font-semibold text-slate-900 truncate">{c.crew}</p>
                  <Tag tone={c.color}><StatusDot tone={c.color} pulse className="mr-0.5" />{c.status}</Tag>
                </div>
                <p className="text-[11px] font-mono text-slate-500 mb-2">Lead {c.lead}</p>
                <div className="space-y-1">
                  {c.jobs.map((j) => (
                    <div key={j} className="text-[12px] flex items-start gap-1.5"><Wrench className="h-3 w-3 mt-0.5 text-slate-400" /> <span className="text-slate-700">{j}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Estimate Funnel" meta="Last 30 days" />
          <div className="p-4">
            <BarChart data={estimates} color={hex} horizontal height={140} />
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[12px]">
              <span className="text-slate-500">Win rate</span>
              <span className="font-mono tabular-nums font-semibold">37% <Delta value="+9 pts" positive /></span>
            </div>
          </div>
        </Panel>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="AR Aging" meta="QuickBooks · synced 4m ago" right={<span className="text-[11px] font-mono text-slate-500">Total $147,040</span>} />
          <DataTable
            columns={[
              { key: "bucket", header: "Age", width: "80px" },
              { key: "invoices", header: "Inv", mono: true, align: "right", width: "70px" },
              { key: "amount", header: "Outstanding", mono: true, align: "right" },
              { key: "flag", header: "", width: "60px", render: (r) => r.flag ? <Tag tone="danger">Follow up</Tag> : <span className="text-slate-300">—</span> },
            ]}
            rows={ar}
          />
        </Panel>
        <AgentsRail cfg={cfg} />
      </section>

      <VoiceLog cfg={cfg} rows={5} />
    </div>
  );
}

/* ================================================================== */
/* 3. RESTAURANTS — hourly sales · top items · labor · floor           */

function RestaurantDashboard({ cfg }: { cfg: DashboardConfig }) {
  const hex = hexFor(cfg);
  const hours = ["11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p"];
  const today = [820, 1640, 1820, 1100, 540, 320, 1180, 2840, 3640, 3520, 2840, 1640];
  const lastWeek = [720, 1480, 1620, 980, 480, 380, 1080, 2640, 3380, 3120, 2580, 1480];
  const items = [
    { label: "Smoked Brisket Plate", value: 84 },
    { label: "Sonoran Burger", value: 62 },
    { label: "Carne Asada Bowl", value: 58 },
    { label: "Wood-Fired Chicken", value: 41 },
    { label: "Cactus Margarita", value: 124 },
  ];
  const floor = [
    [2,3,3,4,4,4,3,2,1,0],
    [1,2,3,4,4,3,3,2,1,0],
    [0,1,2,3,4,4,3,2,1,1],
    [3,4,4,4,4,4,3,2,1,0],
  ];

  return (
    <div className="space-y-4">
      <KpiStrip cfg={cfg} />
      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader
            title="Net Sales · Hourly"
            meta="Toast POS"
            right={
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm" style={{background:hex}}/> Today</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-slate-300"/> Same day last wk</span>
              </div>
            }
          />
          <div className="p-3">
            <AreaChart
              height={200}
              series={[
                { name: "Today", values: today, stroke: hex },
                { name: "Last", values: lastWeek, stroke: "#94a3b8" },
              ]}
              xLabels={hours}
              yFormat={(v) => `$${Math.round(v/100)/10}k`}
            />
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Top Selling · Tonight" meta="Live" />
          <div className="p-4">
            <BarChart data={items} color={hex} horizontal height={170} valueFormat={(v)=>`${v} sold`} />
          </div>
        </Panel>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel>
          <PanelHeader title="Floor Status" meta="Reservation density" />
          <div className="p-4">
            <HeatMap
              rows={["Main", "Patio", "Bar", "Private"]}
              cols={["5p","5:30","6","6:30","7","7:30","8","8:30","9","9:30"]}
              data={floor}
              color={hex}
            />
            <div className="mt-3 text-[11px] text-slate-500">Peak: 6:30–8pm · 91% utilization</div>
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Labor vs Sales" meta="Today" />
          <div className="p-4 space-y-3">
            {[
              { l: "Front of house", h: "9.4 hrs", p: 22 },
              { l: "Kitchen", h: "14.8 hrs", p: 31 },
              { l: "Bar", h: "5.2 hrs", p: 12 },
            ].map((r) => (
              <div key={r.l}>
                <div className="flex justify-between text-[12px] mb-1"><span>{r.l}</span><span className="font-mono tabular-nums text-slate-500">{r.h} · {r.p}%</span></div>
                <ProgressBar pct={r.p * 2} color={hex} />
              </div>
            ))}
            <div className="pt-2 border-t border-slate-100 flex justify-between text-[12px]"><span className="text-slate-500">Labor cost % of sales</span><span className="font-mono font-semibold">28.4% <Delta value="−1.8 pts" positive/></span></div>
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="86'd / Low Stock" meta="Kitchen" right={<Tag tone="warn">3 items</Tag>} />
          <ul className="p-4 space-y-2.5 text-[12.5px]">
            <li className="flex items-center justify-between"><span className="flex items-center gap-2"><StatusDot tone="danger"/> Wagyu Tomahawk</span><span className="font-mono text-slate-500">0 left</span></li>
            <li className="flex items-center justify-between"><span className="flex items-center gap-2"><StatusDot tone="warn"/> Heirloom Tomato Salad</span><span className="font-mono text-slate-500">4 left</span></li>
            <li className="flex items-center justify-between"><span className="flex items-center gap-2"><StatusDot tone="warn"/> Mezcal flight</span><span className="font-mono text-slate-500">6 pours</span></li>
            <li className="pt-2 border-t border-slate-100 flex items-center justify-between"><span className="text-slate-500">Auto reorder via PrepForecaster</span><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500"/></li>
          </ul>
        </Panel>
      </section>

      <VoiceLog cfg={cfg} rows={5} />
    </div>
  );
}

/* ================================================================== */
/* 4. SALONS — chair timeline · service mix · retention                */

function SalonDashboard({ cfg }: { cfg: DashboardConfig }) {
  const hex = hexFor(cfg);
  const stylists = ["Devon", "Reza", "Tara", "Marcus"];
  // 10 30-min slots starting 9a
  const slots = ["9","9:30","10","10:30","11","11:30","12","12:30","1","1:30"];
  const grid = [
    [3,3,3,3,3,2,0,2,2,2],
    [0,0,2,2,2,2,0,2,2,0],
    [2,2,2,0,0,2,2,2,0,0],
    [3,3,2,2,2,2,2,2,2,2],
  ];
  const services = [
    { label: "Color", value: 38, color: hex },
    { label: "Cut & Style", value: 24, color: "#94a3b8" },
    { label: "Massage", value: 16, color: "#cbd5e1" },
    { label: "Facial / Skin", value: 14, color: "#e2e8f0" },
    { label: "Bridal", value: 8, color: "#0f172a" },
  ];
  const cohorts = [
    { cohort: "Jun 2026", new_: 42, m1: "78%", m2: "62%", m3: "54%" },
    { cohort: "May 2026", new_: 38, m1: "82%", m2: "68%", m3: "58%" },
    { cohort: "Apr 2026", new_: 31, m1: "74%", m2: "61%", m3: "49%" },
    { cohort: "Mar 2026", new_: 36, m1: "79%", m2: "64%", m3: "52%" },
  ];

  return (
    <div className="space-y-4">
      <KpiStrip cfg={cfg} />
      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Chair Timeline · Today" meta="9a–7p" right={<Tag tone="success"><StatusDot tone="success" pulse className="mr-0.5"/>4 stylists live</Tag>} />
          <div className="p-4 overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="flex pl-16 text-[10px] font-mono text-slate-400">
                {slots.map((s) => (<div key={s} className="flex-1 text-left">{s}</div>))}
              </div>
              {stylists.map((sn, i) => (
                <div key={sn} className="flex items-center mt-1.5">
                  <div className="w-16 text-[12px] text-slate-700 font-medium">{sn}</div>
                  <div className="flex-1 flex gap-0.5">
                    {grid[i].map((v, j) => {
                      const tone = v === 3 ? hex : v === 2 ? hex : "#e5e7eb";
                      const op = v === 3 ? 1 : v === 2 ? 0.55 : 0.3;
                      return <div key={j} className="flex-1 h-6 rounded-sm" style={{ background: v === 0 ? "#f1f5f9" : tone, opacity: v === 0 ? 1 : op }} />;
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm" style={{background:hex}}/>VIP</span>
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm" style={{background:hex, opacity:0.55}}/>Booked</span>
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm bg-slate-100"/>Open</span>
            </div>
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Service Mix" meta="Last 30 days" />
          <div className="p-4">
            <Donut data={services} centerValue="$148" centerLabel="avg ticket" />
          </div>
        </Panel>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Retention Cohorts" meta="% returning by month" />
          <DataTable
            columns={[
              { key: "cohort", header: "Cohort" },
              { key: "new_", header: "New clients", mono: true, align: "right" },
              { key: "m1", header: "Month +1", mono: true, align: "right" },
              { key: "m2", header: "Month +2", mono: true, align: "right" },
              { key: "m3", header: "Month +3", mono: true, align: "right" },
            ]}
            rows={cohorts}
          />
        </Panel>
        <AgentsRail cfg={cfg} />
      </section>

      <VoiceLog cfg={cfg} rows={5} />
    </div>
  );
}

/* ================================================================== */
/* 5. REAL ESTATE — pipeline value bars · listings table · forecast    */

function RealEstateDashboard({ cfg }: { cfg: DashboardConfig }) {
  const hex = hexFor(cfg);
  const listings = [
    { addr: "4218 Mesquite Dr", price: "$542,000", dom: 11, views: 1842, saves: 42, status: "Active", tone: "success" as const },
    { addr: "17 Saguaro Way", price: "$725,000", dom: 4, views: 3120, saves: 91, status: "Hot", tone: "danger" as const },
    { addr: "8210 Catalina Pl", price: "$389,000", dom: 22, views: 612, saves: 18, status: "Stale", tone: "warn" as const },
    { addr: "99 Aspen Ln", price: "$418,000", dom: 38, views: 2418, saves: 64, status: "Pending", tone: "info" as const },
    { addr: "612 Foothills Rd", price: "$1,140,000", dom: 7, views: 2840, saves: 78, status: "Active", tone: "success" as const },
  ];
  const sources = [
    { label: "Zillow", value: 64, color: hex },
    { label: "Referrals", value: 38, color: "#94a3b8" },
    { label: "Open houses", value: 22, color: "#cbd5e1" },
    { label: "IG / Social", value: 14, color: "#e2e8f0" },
    { label: "Casa AI calls", value: 46, color: "#0f172a" },
  ];
  const commission = seriesFromPattern(2, 24, 8, 3);

  return (
    <div className="space-y-4">
      <KpiStrip cfg={cfg} />
      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Commission Forecast · Next 90 days" meta="Weighted by stage prob" right={<span className="text-[11px] font-mono text-slate-500">$112,400 GCI</span>} />
          <div className="p-3">
            <AreaChart
              height={180}
              series={[{ name: "Forecast", values: commission, stroke: hex }]}
              xLabels={["W1","W4","W8","W12"]}
              yFormat={(v) => `$${v}k`}
            />
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Lead Sources" meta="MTD" />
          <div className="p-4">
            <BarChart data={sources} color={hex} horizontal height={170} />
          </div>
        </Panel>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Active Listings" meta="MLS feed" />
          <DataTable
            columns={[
              { key: "addr", header: "Address" },
              { key: "price", header: "List", mono: true, align: "right", width: "110px" },
              { key: "dom", header: "DOM", mono: true, align: "right", width: "60px" },
              { key: "views", header: "Views", mono: true, align: "right", width: "80px" },
              { key: "saves", header: "Saves", mono: true, align: "right", width: "80px" },
              { key: "status", header: "", width: "90px", render: (r) => <Tag tone={r.tone}>{r.status}</Tag> },
            ]}
            rows={listings}
          />
        </Panel>
        <Panel>
          <PanelHeader title="Today's Showings" meta="4 stops" />
          <ul className="p-4 space-y-3 text-[12.5px]">
            {cfg.schedule.items.map((it) => (
              <li key={it.title} className="flex gap-3">
                <span className="font-mono text-[11px] text-slate-500 w-12 shrink-0 pt-0.5">{it.time}</span>
                <MapPin className="h-3.5 w-3.5 text-slate-400 mt-1 shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium truncate">{it.title}</p>
                  <p className="text-[11px] text-slate-500 truncate">{it.meta}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <AgentsRail cfg={cfg} />
        <div className="lg:col-span-2"><VoiceLog cfg={cfg} rows={5} /></div>
      </section>
    </div>
  );
}

/* ================================================================== */
/* 6. CONSULTANTS — MRR · engagements table · NPS · capacity           */

function ConsultantDashboard({ cfg }: { cfg: DashboardConfig }) {
  const hex = hexFor(cfg);
  const mrr = seriesFromPattern(4, 18, 24, 4);
  const engagements = [
    { client: "FinTech Co", phase: "Q3 retainer", used: 28, budget: 40, lead: "Atlas", status: "On track", tone: "success" as const },
    { client: "SaaS Co", phase: "Growth audit", used: 18, budget: 24, lead: "Atlas", status: "On track", tone: "success" as const },
    { client: "RIA Founder", phase: "Brand sprint", used: 22, budget: 30, lead: "Atlas", status: "Check-in", tone: "warn" as const },
    { client: "VP Sales Cohort", phase: "Coaching", used: 12, budget: 36, lead: "Atlas", status: "Early", tone: "info" as const },
    { client: "PE Portfolio Co", phase: "M&A advisory", used: 40, budget: 40, lead: "Atlas", status: "Renewal", tone: "danger" as const },
  ];
  const nps = [
    { label: "Promoters (9–10)", value: 9, color: hex },
    { label: "Passives (7–8)", value: 3, color: "#94a3b8" },
    { label: "Detractors (0–6)", value: 1, color: "#cbd5e1" },
  ];

  return (
    <div className="space-y-4">
      <KpiStrip cfg={cfg} trends={[mrr, mrr.map(v=>v*0.9), seriesFromPattern(1,14,5,2), seriesFromPattern(7,14,8,2)]} />
      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="MRR · Last 18 months" meta="Stripe + invoiced" right={<Tag tone="success">Net retention 112%</Tag>} />
          <div className="p-3">
            <AreaChart
              height={180}
              series={[{ name: "MRR", values: mrr, stroke: hex }]}
              xLabels={["18mo","12mo","6mo","Now"]}
              yFormat={(v) => `$${v}k`}
            />
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="NPS by Client" meta="13 responses" />
          <div className="p-4">
            <Donut data={nps} centerValue="78" centerLabel="NPS" />
          </div>
        </Panel>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Active Engagements" meta="Hours used vs budget" />
          <DataTable
            columns={[
              { key: "client", header: "Client" },
              { key: "phase", header: "Phase" },
              { key: "used", header: "Hours", align: "right", width: "200px", render: (r) => (
                <div className="flex items-center gap-2 justify-end">
                  <span className="font-mono tabular-nums text-[11.5px] w-14 text-right">{r.used}/{r.budget}</span>
                  <div className="w-24"><ProgressBar pct={(r.used/r.budget)*100} color={r.used/r.budget > 0.9 ? "#e11d48" : hex} /></div>
                </div>
              )},
              { key: "status", header: "", width: "100px", render: (r) => <Tag tone={r.tone}>{r.status}</Tag> },
            ]}
            rows={engagements}
          />
        </Panel>
        <AgentsRail cfg={cfg} />
      </section>

      <VoiceLog cfg={cfg} rows={4} />
    </div>
  );
}

/* ================================================================== */
/* 7. DOCTORS — schedule heatmap · claims table · A/R aging            */

function MedicalDashboard({ cfg }: { cfg: DashboardConfig }) {
  const hex = hexFor(cfg);
  const days = ["M","T","W","Th","F"];
  const slots = ["8a","9a","10a","11a","12p","1p","2p","3p","4p"];
  const density = [
    [3,4,4,3,2,4,4,3,3],
    [4,4,3,4,3,3,4,4,2],
    [3,4,4,4,2,4,4,3,3],
    [4,3,4,3,3,4,3,4,4],
    [3,4,4,4,2,3,4,4,2],
  ];
  const claims = [
    { id: "CLM-88241", patient: "Garcia, M.", cpt: "99213", payer: "BCBS", billed: "$185.00", allowed: "$112.40", status: "Paid", tone: "success" as const },
    { id: "CLM-88240", patient: "Hernandez, R.", cpt: "99214", payer: "Aetna", billed: "$245.00", allowed: "$148.20", status: "Paid", tone: "success" as const },
    { id: "CLM-88239", patient: "Lee, K.", cpt: "99396", payer: "UHC", billed: "$320.00", allowed: "$0.00", status: "Denied", tone: "danger" as const },
    { id: "CLM-88238", patient: "Mills, T.", cpt: "99213", payer: "Medicare", billed: "$185.00", allowed: "$94.10", status: "Pending", tone: "warn" as const },
    { id: "CLM-88237", patient: "Patel, A.", cpt: "36415", payer: "Cigna", billed: "$45.00", allowed: "$24.80", status: "Paid", tone: "success" as const },
    { id: "CLM-88236", patient: "Rivera, S.", cpt: "85025", payer: "BCBS", billed: "$78.00", allowed: "$42.10", status: "Submitted", tone: "info" as const },
  ];
  const visitMix = [
    { label: "Established (99213)", value: 28, color: hex },
    { label: "Established (99214)", value: 18, color: "#94a3b8" },
    { label: "Annual physical", value: 12, color: "#cbd5e1" },
    { label: "Telehealth", value: 8, color: "#e2e8f0" },
    { label: "New patient", value: 6, color: "#0f172a" },
  ];

  return (
    <div className="space-y-4">
      <KpiStrip cfg={cfg} />
      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Schedule Density · This week" meta="All providers" right={<Tag tone="info">94% utilization</Tag>} />
          <div className="p-4">
            <HeatMap rows={days} cols={slots} data={density} color={hex} />
            <div className="mt-3 flex justify-between text-[11px] text-slate-500"><span>Open same-day slots: <span className="font-mono text-slate-700">7</span></span><span>Walk-in capacity: <span className="font-mono text-slate-700">12%</span></span></div>
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Visit Mix" meta="Today · 72 visits" />
          <div className="p-4">
            <Donut data={visitMix} centerValue="72" centerLabel="visits" />
          </div>
        </Panel>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Claims Activity" meta="Last 7 days · 412 claims" right={<Tag tone="success">Clean rate 96%</Tag>} />
          <DataTable
            columns={[
              { key: "id", header: "Claim", mono: true, width: "110px" },
              { key: "patient", header: "Patient" },
              { key: "cpt", header: "CPT", mono: true, width: "70px" },
              { key: "payer", header: "Payer", width: "90px" },
              { key: "billed", header: "Billed", mono: true, align: "right", width: "90px" },
              { key: "allowed", header: "Allowed", mono: true, align: "right", width: "90px" },
              { key: "status", header: "", width: "100px", render: (r) => <Tag tone={r.tone}>{r.status}</Tag> },
            ]}
            rows={claims}
          />
        </Panel>
        <AgentsRail cfg={cfg} />
      </section>

      <VoiceLog cfg={cfg} rows={4} />
    </div>
  );
}

/* ================================================================== */
/* 8. FINANCIAL ADVISORS — DARK · AUM · allocation · accounts          */

function FinancialDashboard({ cfg }: { cfg: DashboardConfig }) {
  const hex = "#eab308";
  const aum = seriesFromPattern(3, 30, 42, 1.2).map((v) => Math.round(v * 10) / 10);
  const allocation = [
    { label: "US Equity", value: 42, color: hex },
    { label: "Intl Equity", value: 18, color: "#94a3b8" },
    { label: "Fixed Income", value: 28, color: "#475569" },
    { label: "Alts", value: 8, color: "#a16207" },
    { label: "Cash", value: 4, color: "#1e293b" },
  ];
  const accounts = [
    { acct: "ACT-40821", household: "Lawson, R & J", model: "Bal-60/40", aum: "$1,840,200", cash: "2.1%", drift: "+0.4%", driftTone: "success" as const },
    { acct: "ACT-40719", household: "Chen, A.", model: "Growth-80/20", aum: "$1,612,800", cash: "1.2%", drift: "+1.8%", driftTone: "warn" as const },
    { acct: "ACT-40612", household: "Rivera Trust", model: "Income", aum: "$540,400", cash: "4.4%", drift: "−5.2%", driftTone: "danger" as const },
    { acct: "ACT-40588", household: "Patel, S & M", model: "Bal-60/40", aum: "$1,220,000", cash: "3.0%", drift: "+0.1%", driftTone: "success" as const },
    { acct: "ACT-40441", household: "Vasquez, L.", model: "Conservative", aum: "$382,100", cash: "5.8%", drift: "+0.6%", driftTone: "success" as const },
    { acct: "ACT-40221", household: "Mills Family", model: "Growth-80/20", aum: "$2,420,800", cash: "0.9%", drift: "+2.4%", driftTone: "warn" as const },
  ];
  const ticker = [
    { sym: "SPY", px: "542.18", chg: "+0.42%", up: true },
    { sym: "QQQ", px: "488.92", chg: "+0.81%", up: true },
    { sym: "IWM", px: "211.04", chg: "−0.18%", up: false },
    { sym: "AGG", px: "98.42", chg: "+0.05%", up: true },
    { sym: "VXUS", px: "62.10", chg: "+0.22%", up: true },
    { sym: "GLD", px: "242.84", chg: "+1.12%", up: true },
    { sym: "TLT", px: "92.18", chg: "−0.34%", up: false },
    { sym: "BTC", px: "98,420", chg: "+2.18%", up: true },
  ];

  return (
    <div className="space-y-4">
      {/* Market ticker */}
      <div className="rounded-xl bg-[#12151b] border border-white/10 overflow-hidden">
        <div className="flex items-center gap-6 px-4 py-2.5 overflow-x-auto whitespace-nowrap">
          {ticker.map((t) => (
            <div key={t.sym} className="flex items-center gap-2 text-[12px]">
              <span className="text-white/40 font-mono">{t.sym}</span>
              <span className="text-white font-mono tabular-nums">{t.px}</span>
              <span className={cn("font-mono tabular-nums flex items-center gap-0.5", t.up ? "text-emerald-400" : "text-rose-400")}>
                {t.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}{t.chg}
              </span>
            </div>
          ))}
        </div>
      </div>

      <KpiStrip cfg={cfg} dark trends={[aum, seriesFromPattern(2,14,186,8), seriesFromPattern(5,14,4,1), seriesFromPattern(9,14,100,2)]} />

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel dark className="lg:col-span-2">
          <PanelHeader dark title="AUM · Last 30 days" meta="All custodians" right={<span className="text-[11px] font-mono text-emerald-400">+$1.2M MTD</span>} />
          <div className="p-3">
            <AreaChart
              dark
              height={200}
              series={[{ name: "AUM", values: aum, stroke: hex }]}
              xLabels={["−30d","−20d","−10d","Today"]}
              yFormat={(v) => `$${v.toFixed(1)}M`}
            />
          </div>
        </Panel>
        <Panel dark>
          <PanelHeader dark title="Allocation" meta="Aggregate" />
          <div className="p-4">
            <Donut dark data={allocation} centerValue="$42.8M" centerLabel="AUM" />
          </div>
        </Panel>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel dark className="lg:col-span-2">
          <PanelHeader dark title="Household Accounts" meta="Rebalance scan · 4 drifts" right={<Tag tone="warn">4 actions</Tag>} />
          <DataTable
            dark
            columns={[
              { key: "acct", header: "Account", mono: true, width: "110px" },
              { key: "household", header: "Household" },
              { key: "model", header: "Model", width: "110px" },
              { key: "aum", header: "AUM", mono: true, align: "right", width: "120px" },
              { key: "cash", header: "Cash", mono: true, align: "right", width: "70px" },
              { key: "drift", header: "Drift", mono: true, align: "right", width: "80px", render: (r) => (
                <span className={cn("font-mono", r.driftTone === "danger" ? "text-rose-400" : r.driftTone === "warn" ? "text-amber-400" : "text-emerald-400")}>{r.drift}</span>
              )},
            ]}
            rows={accounts}
          />
        </Panel>
        <AgentsRail cfg={cfg} dark />
      </section>

      <VoiceLog cfg={cfg} dark rows={4} />
    </div>
  );
}

/* ================================================================== */
/* 9. POLITICAL — DARK · donations chart · volunteer heatmap           */

function PoliticalDashboard({ cfg }: { cfg: DashboardConfig }) {
  const hex = "#ef4444";
  const donations24h = [12,8,6,5,4,3,5,9,14,18,22,26,28,24,21,28,34,42,48,52,46,38,28,18].map(v=>v*120);
  const labels = ["12a","4a","8a","12p","4p","8p","12a"];
  const precincts = [
    [4,3,4,2,3,4,4,3,4,3],
    [3,4,3,4,4,3,4,4,3,4],
    [2,2,3,3,2,3,3,2,3,2],
    [1,2,1,2,2,1,2,2,1,1],
    [4,3,4,4,3,4,4,3,4,4],
  ];
  const funnel = [
    { label: "Identified", value: 18420 },
    { label: "Engaged", value: 4280 },
    { label: "Supporter", value: 2140 },
    { label: "Volunteer", value: 342 },
    { label: "Donor", value: 612 },
  ];

  return (
    <div className="space-y-4">
      <KpiStrip cfg={cfg} dark />
      <section className="grid lg:grid-cols-3 gap-4">
        <Panel dark className="lg:col-span-2">
          <PanelHeader dark title="Donations · Last 24h" meta="ActBlue + Anedot" right={<span className="text-[11px] font-mono text-emerald-400">+$28,420</span>} />
          <div className="p-3">
            <AreaChart
              dark
              height={200}
              series={[{ name: "Hourly", values: donations24h, stroke: hex }]}
              xLabels={labels}
              yFormat={(v) => `$${(v/1000).toFixed(1)}k`}
            />
          </div>
        </Panel>
        <Panel dark>
          <PanelHeader dark title="Voter Contact Funnel" meta="Cycle to date" />
          <div className="p-4">
            <BarChart dark data={funnel} color={hex} horizontal height={170} valueFormat={(v)=>v.toLocaleString()} />
          </div>
        </Panel>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel dark className="lg:col-span-2">
          <PanelHeader dark title="Volunteer Coverage · By Precinct" meta="Next 10 shifts" right={<Tag tone="warn">2 understaffed</Tag>} />
          <div className="p-4">
            <HeatMap
              rows={["P-142 South", "P-088 Downtown", "P-215 East", "P-304 North", "P-411 West"]}
              cols={["Sat AM","Sat PM","Sun AM","Sun PM","Mon","Tue","Wed","Thu","Fri","Sat"]}
              data={precincts}
              color={hex}
              dark
            />
          </div>
        </Panel>
        <AgentsRail cfg={cfg} dark />
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel dark className="lg:col-span-2"><VoiceLog cfg={cfg} dark rows={4} /></Panel>
        <Panel dark>
          <PanelHeader dark title="Compliance" meta="FEC + state" right={<Tag tone="success">All clean</Tag>} />
          <ul className="p-4 space-y-2.5 text-[12.5px] text-white/80">
            <li className="flex items-center justify-between"><span className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400"/>Q3 report draft</span><span className="font-mono text-white/50">82% done</span></li>
            <li className="flex items-center justify-between"><span className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400"/>Donor employer fields</span><span className="font-mono text-white/50">98% complete</span></li>
            <li className="flex items-center justify-between"><span className="flex items-center gap-2"><AlertTriangle className="h-3.5 w-3.5 text-amber-400"/>4 large donors need verify</span><span className="font-mono text-white/50">$10K+</span></li>
            <li className="flex items-center justify-between"><span className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400"/>Disclaimer audit (ads)</span><span className="font-mono text-white/50">All pass</span></li>
          </ul>
        </Panel>
      </section>
    </div>
  );
}

/* ================================================================== */
/* 10. UNIVERSAL — small-business ops cockpit                          */

function UniversalDashboard({ cfg }: { cfg: DashboardConfig }) {
  const hex = hexFor(cfg);
  const revenue = seriesFromPattern(1, 24, 18, 4);
  const automations = [
    { time: "10:42a", run: "Lead → CRM → Slack alert", status: "ok" },
    { time: "10:38a", run: "Invoice paid → thank-you email", status: "ok" },
    { time: "10:31a", run: "Form → tag + sequence", status: "ok" },
    { time: "10:18a", run: "Calendar booked → SMS confirm", status: "ok" },
    { time: "10:04a", run: "Stripe refund → finance log", status: "ok" },
    { time: "9:52a", run: "Webhook retry · Hubspot 502", status: "warn" },
  ];
  const workload = [
    { name: "Ana — Support", open: 8, capacity: 12 },
    { name: "Diego — Sales", open: 14, capacity: 16 },
    { name: "Sam — Ops", open: 6, capacity: 10 },
    { name: "You — Owner", open: 4, capacity: 6 },
  ];

  return (
    <div className="space-y-4">
      <KpiStrip cfg={cfg} />
      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Revenue · Last 24 weeks" meta="All sources" right={<Tag tone="success">+14% MoM</Tag>} />
          <div className="p-3">
            <AreaChart
              height={180}
              series={[{ name: "Rev", values: revenue, stroke: hex }]}
              xLabels={["24w","18w","12w","6w","Now"]}
              yFormat={(v) => `$${v}k`}
            />
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Team Workload" meta="Open vs capacity" />
          <div className="p-4 space-y-3.5">
            {workload.map((w) => (
              <div key={w.name}>
                <div className="flex justify-between text-[12px] mb-1"><span className="font-medium">{w.name}</span><span className="font-mono tabular-nums text-slate-500">{w.open}/{w.capacity}</span></div>
                <ProgressBar pct={(w.open/w.capacity)*100} color={w.open/w.capacity > 0.85 ? "#e11d48" : hex} />
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel className="lg:col-span-2">
          <PanelHeader title="Pipeline" meta={cfg.pipelineTitle} />
          <div className="p-3 grid grid-cols-2 md:grid-cols-4 gap-2">
            {cfg.pipeline.map((stage) => (
              <div key={stage.name} className="rounded-lg bg-slate-50/60 border border-slate-200/60 p-2.5">
                <div className="flex items-center justify-between mb-2"><span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{stage.name}</span><span className="text-[10px] font-mono text-slate-400">{stage.leads.length}</span></div>
                <div className="space-y-1.5">
                  {stage.leads.map((l, i) => (
                    <div key={i} className="rounded-md bg-white border border-slate-200/70 px-2 py-1.5">
                      <p className="text-[12px] font-medium leading-tight truncate">{l.name}</p>
                      <p className="text-[10.5px] font-mono text-slate-500 mt-0.5">{l.value} · {l.meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Automation Runs" meta="Last 30 min" right={<Tag tone="success"><StatusDot tone="success" pulse className="mr-0.5"/>Live</Tag>} />
          <ul className="divide-y divide-slate-100">
            {automations.map((a, i) => (
              <li key={i} className="px-4 py-2 flex items-center gap-3 text-[12px]">
                <span className="font-mono text-[10.5px] text-slate-400 w-12 shrink-0">{a.time}</span>
                {a.status === "ok" ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" /> : <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0" />}
                <span className="truncate text-slate-700">{a.run}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <AgentsRail cfg={cfg} />
        <div className="lg:col-span-2"><VoiceLog cfg={cfg} rows={4} /></div>
      </section>
    </div>
  );
}
