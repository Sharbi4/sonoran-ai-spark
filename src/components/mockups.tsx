import { Check, ArrowRight, Sparkles, Bot, User } from "lucide-react";

/* ---------- Shared chrome ---------- */

function MockChrome({
  title,
  subtitle,
  children,
  tone = "light",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={
        "rounded-2xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(28,28,30,0.35),0_8px_20px_-12px_rgba(28,28,30,0.18)] " +
        (dark
          ? "bg-charcoal text-cream border border-charcoal/40"
          : "bg-card border border-sand")
      }
    >
      <div
        className={
          "flex items-center gap-2 px-4 py-3 border-b " +
          (dark ? "border-white/10 bg-black/20" : "border-sand bg-cream/60")
        }
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#ED6A5E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F4BF4F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#61C554]" />
        <div className="ml-3 leading-tight">
          <p className={"text-xs font-medium " + (dark ? "text-cream/90" : "text-foreground/80")}>
            {title}
          </p>
          {subtitle && (
            <p className={"text-[10px] " + (dark ? "text-cream/50" : "text-muted-foreground")}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

function KpiCard({
  label,
  value,
  delta,
  positive = true,
}: {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-xl border border-sand bg-cream/40 p-3.5">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
        {label}
      </p>
      <p className="mt-1.5 font-serif text-xl text-foreground leading-none">{value}</p>
      {delta && (
        <p
          className={
            "mt-1.5 text-[10px] font-medium " +
            (positive ? "text-sage" : "text-copper")
          }
        >
          {positive ? "▲" : "▼"} {delta}
        </p>
      )}
    </div>
  );
}

function BarRow({ label, value, max = 100, accent = "copper" }: { label: string; value: number; max?: number; accent?: "copper" | "sage" }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const bar = accent === "sage" ? "bg-sage" : "bg-copper";
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="text-foreground/80">{label}</span>
        <span className="text-muted-foreground tabular-nums">{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-sand/70 overflow-hidden">
        <div className={"h-full rounded-full " + bar} style={{ width: pct + "%" }} />
      </div>
    </div>
  );
}

function MiniChart({ data, accent = "copper" }: { data: number[]; accent?: "copper" | "sage" }) {
  const max = Math.max(...data);
  const stroke = accent === "sage" ? "var(--sage)" : "var(--copper)";
  const w = 280;
  const h = 70;
  const step = w / (data.length - 1);
  const points = data.map((v, i) => `${i * step},${h - (v / max) * (h - 6) - 3}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16">
      <defs>
        <linearGradient id={`grad-${accent}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.25" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill={`url(#grad-${accent})`}
        stroke="none"
        points={`0,${h} ${points} ${w},${h}`}
      />
      <polyline fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={points} />
    </svg>
  );
}

/* ---------- Dashboard mockup ---------- */

export interface DashboardSpec {
  appName: string;
  view: string;
  kpis: { label: string; value: string; delta?: string; positive?: boolean }[];
  chart: { title: string; data: number[]; accent?: "copper" | "sage" };
  rows: { label: string; value: number; max?: number; accent?: "copper" | "sage" }[];
  list?: { title: string; items: { primary: string; secondary: string; tag?: string }[] };
}

export function DashboardMockup({ spec }: { spec: DashboardSpec }) {
  return (
    <MockChrome title={spec.appName} subtitle={spec.view}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {spec.kpis.map((k) => (
          <KpiCard key={k.label} {...k} />
        ))}
      </div>
      <div className="mt-5 grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3 rounded-xl border border-sand bg-cream/40 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-foreground/80">{spec.chart.title}</p>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Last 14 days</span>
          </div>
          <MiniChart data={spec.chart.data} accent={spec.chart.accent} />
          <div className="mt-3 space-y-2.5">
            {spec.rows.map((r) => (
              <BarRow key={r.label} {...r} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 rounded-xl border border-sand bg-cream/40 p-4">
          <p className="text-xs font-medium text-foreground/80">{spec.list?.title ?? "Activity"}</p>
          <ul className="mt-3 space-y-2.5">
            {spec.list?.items.map((it) => (
              <li key={it.primary} className="flex items-start gap-2.5 text-xs">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-copper shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-foreground/90 truncate">{it.primary}</p>
                  <p className="text-muted-foreground truncate">{it.secondary}</p>
                </div>
                {it.tag && (
                  <span className="rounded-full bg-sage/15 px-2 py-0.5 text-[10px] font-medium text-sage shrink-0">
                    {it.tag}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MockChrome>
  );
}

/* ---------- AI Chat mockup ---------- */

export interface ChatSpec {
  appName: string;
  view: string;
  messages: { from: "user" | "ai"; text: string }[];
}

export function AIChatMockup({ spec }: { spec: ChatSpec }) {
  return (
    <MockChrome title={spec.appName} subtitle={spec.view} tone="dark">
      <div className="space-y-3">
        {spec.messages.map((m, i) => (
          <div
            key={i}
            className={"flex gap-2.5 " + (m.from === "user" ? "justify-end" : "")}
          >
            {m.from === "ai" && (
              <span className="h-7 w-7 rounded-full bg-sage/30 inline-flex items-center justify-center shrink-0">
                <Bot className="h-3.5 w-3.5 text-sage" />
              </span>
            )}
            <div
              className={
                "max-w-[78%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed " +
                (m.from === "user"
                  ? "bg-copper text-copper-foreground rounded-br-sm"
                  : "bg-white/10 text-cream/95 rounded-bl-sm")
              }
            >
              {m.text}
            </div>
            {m.from === "user" && (
              <span className="h-7 w-7 rounded-full bg-copper/30 inline-flex items-center justify-center shrink-0">
                <User className="h-3.5 w-3.5 text-copper-foreground" />
              </span>
            )}
          </div>
        ))}
        <div className="mt-4 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-cream/40 flex items-center justify-between">
          <span>Ask anything…</span>
          <Sparkles className="h-3.5 w-3.5 text-sage" />
        </div>
      </div>
    </MockChrome>
  );
}

/* ---------- Automation pipeline ---------- */

export interface PipelineSpec {
  appName: string;
  view: string;
  steps: { title: string; detail: string; tag?: string }[];
}

export function PipelineMockup({ spec }: { spec: PipelineSpec }) {
  return (
    <MockChrome title={spec.appName} subtitle={spec.view}>
      <ol className="space-y-3">
        {spec.steps.map((s, i) => (
          <li
            key={s.title}
            className="flex items-start gap-3 rounded-xl border border-sand bg-cream/40 p-3.5"
          >
            <span className="shrink-0 h-7 w-7 rounded-full bg-copper text-copper-foreground inline-flex items-center justify-center text-[11px] font-semibold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-xs font-semibold text-foreground/90">{s.title}</p>
                {s.tag && (
                  <span className="rounded-full bg-sage/15 px-2 py-0.5 text-[10px] font-medium text-sage">
                    {s.tag}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{s.detail}</p>
            </div>
            <Check className="h-4 w-4 text-sage shrink-0 mt-1.5" strokeWidth={2.5} />
          </li>
        ))}
      </ol>
      <div className="mt-4 rounded-xl border border-dashed border-sand bg-cream/30 p-3 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Runs automatically · ~9 sec end-to-end</span>
        <span className="inline-flex items-center gap-1 text-sage font-medium">
          Live <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </MockChrome>
  );
}