import { cn } from "@/lib/utils";
import type { ReactNode, SVGProps } from "react";

/* ============================================================
   Primitives — flat, dense, serious SaaS look.
   Numbers are always font-mono tabular-nums.
   ============================================================ */

export function Panel({
  children,
  className,
  dark,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border",
        dark
          ? "bg-[#12151b] border-white/10"
          : "bg-white border-slate-200/80",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PanelHeader({
  title,
  meta,
  right,
  dark,
}: {
  title: ReactNode;
  meta?: ReactNode;
  right?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 px-4 h-11 border-b",
        dark ? "border-white/10" : "border-slate-200/70",
      )}
    >
      <div className="flex items-baseline gap-2 min-w-0">
        <h3
          className={cn(
            "text-[13px] font-semibold tracking-tight truncate",
            dark ? "text-white" : "text-slate-900",
          )}
        >
          {title}
        </h3>
        {meta && (
          <span
            className={cn(
              "text-[11px] font-mono tabular-nums",
              dark ? "text-white/40" : "text-slate-400",
            )}
          >
            {meta}
          </span>
        )}
      </div>
      {right && <div className="shrink-0 flex items-center gap-2">{right}</div>}
    </div>
  );
}

export function StatusDot({
  tone = "neutral",
  pulse,
  className,
}: {
  tone?: "success" | "warn" | "danger" | "neutral" | "info";
  pulse?: boolean;
  className?: string;
}) {
  const map = {
    success: "bg-emerald-500",
    warn: "bg-amber-500",
    danger: "bg-rose-500",
    info: "bg-sky-500",
    neutral: "bg-slate-400",
  } as const;
  return (
    <span
      className={cn(
        "inline-block h-1.5 w-1.5 rounded-full align-middle",
        map[tone],
        pulse && "animate-pulse",
        className,
      )}
    />
  );
}

export function Tag({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "success" | "warn" | "danger" | "neutral" | "info" | "accent";
  className?: string;
}) {
  const map = {
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warn: "bg-amber-50 text-amber-800 border-amber-200",
    danger: "bg-rose-50 text-rose-700 border-rose-200",
    info: "bg-sky-50 text-sky-700 border-sky-200",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
    accent: "bg-slate-900 text-white border-slate-900",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-medium",
        map[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Delta({ value, positive }: { value: string; positive?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-[11px] font-mono tabular-nums",
        positive === false ? "text-rose-600" : "text-emerald-600",
      )}
    >
      <Arrow direction={positive === false ? "down" : "up"} />
      {value}
    </span>
  );
}

function Arrow({ direction }: { direction: "up" | "down" }) {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
      <path
        d={direction === "up" ? "M4 1 L7 6 H1 Z" : "M4 7 L1 2 H7 Z"}
        fill="currentColor"
      />
    </svg>
  );
}

/* ============================================================
   KPI tile with optional inline sparkline
   ============================================================ */

export function KpiTile({
  label,
  value,
  delta,
  positive,
  trend,
  stroke = "#0f172a",
  dark,
  unit,
}: {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
  trend?: number[];
  stroke?: string;
  dark?: boolean;
  unit?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4 flex flex-col gap-2",
        dark ? "bg-[#12151b] border-white/10" : "bg-white border-slate-200/80",
      )}
    >
      <div className="flex items-center justify-between">
        <p
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.12em]",
            dark ? "text-white/40" : "text-slate-500",
          )}
        >
          {label}
        </p>
        {delta && <Delta value={delta} positive={positive} />}
      </div>
      <div className="flex items-end justify-between gap-3">
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              "text-2xl font-semibold tracking-tight font-mono tabular-nums",
              dark ? "text-white" : "text-slate-900",
            )}
          >
            {value}
          </span>
          {unit && (
            <span
              className={cn(
                "text-[11px] font-mono",
                dark ? "text-white/40" : "text-slate-400",
              )}
            >
              {unit}
            </span>
          )}
        </div>
        {trend && trend.length > 1 && (
          <Sparkline values={trend} stroke={stroke} width={68} height={22} />
        )}
      </div>
    </div>
  );
}

/* ============================================================
   Charts (inline SVG only)
   ============================================================ */

export function Sparkline({
  values,
  stroke,
  fill,
  width = 120,
  height = 32,
  strokeWidth = 1.5,
}: {
  values: number[];
  stroke: string;
  fill?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
}) {
  if (values.length < 2) return null;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = width / (values.length - 1);
  const pts = values.map((v, i) => {
    const x = i * stepX;
    const y = height - ((v - min) / range) * (height - 2) - 1;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const path = `M${pts.join(" L")}`;
  const areaPath = fill
    ? `${path} L${width},${height} L0,${height} Z`
    : null;
  return (
    <svg width={width} height={height} className="overflow-visible">
      {areaPath && <path d={areaPath} fill={fill} opacity={0.18} />}
      <path d={path} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AreaChart({
  series,
  width = 600,
  height = 180,
  xLabels,
  yFormat,
  dark,
}: {
  series: { name: string; values: number[]; stroke: string }[];
  width?: number;
  height?: number;
  xLabels?: string[];
  yFormat?: (v: number) => string;
  dark?: boolean;
}) {
  const pad = { l: 36, r: 8, t: 12, b: 22 };
  const innerW = width - pad.l - pad.r;
  const innerH = height - pad.t - pad.b;
  const all = series.flatMap((s) => s.values);
  const min = 0;
  const max = Math.max(...all) * 1.1 || 1;
  const len = Math.max(...series.map((s) => s.values.length));
  const stepX = innerW / Math.max(1, len - 1);
  const grid = dark ? "#1f2530" : "#eef2f7";
  const axis = dark ? "#5b6678" : "#94a3b8";
  const yTicks = 4;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      {/* grid */}
      {Array.from({ length: yTicks + 1 }).map((_, i) => {
        const y = pad.t + (innerH / yTicks) * i;
        const value = max - ((max - min) / yTicks) * i;
        return (
          <g key={i}>
            <line x1={pad.l} x2={pad.l + innerW} y1={y} y2={y} stroke={grid} strokeWidth={1} />
            <text x={pad.l - 6} y={y + 3} fontSize="9" textAnchor="end" fill={axis} fontFamily="ui-monospace, monospace">
              {yFormat ? yFormat(value) : Math.round(value)}
            </text>
          </g>
        );
      })}
      {/* series */}
      {series.map((s, si) => {
        const pts = s.values.map((v, i) => {
          const x = pad.l + i * stepX;
          const y = pad.t + innerH - ((v - min) / (max - min)) * innerH;
          return `${x},${y}`;
        });
        const path = `M${pts.join(" L")}`;
        const area = `${path} L${pad.l + innerW},${pad.t + innerH} L${pad.l},${pad.t + innerH} Z`;
        return (
          <g key={si}>
            <path d={area} fill={s.stroke} opacity={si === 0 ? 0.14 : 0.06} />
            <path d={path} fill="none" stroke={s.stroke} strokeWidth={1.8} strokeLinejoin="round" strokeLinecap="round" />
          </g>
        );
      })}
      {/* x labels */}
      {xLabels &&
        xLabels.map((lbl, i) => {
          const x = pad.l + i * (innerW / Math.max(1, xLabels.length - 1));
          return (
            <text key={i} x={x} y={height - 6} fontSize="9" textAnchor="middle" fill={axis} fontFamily="ui-monospace, monospace">
              {lbl}
            </text>
          );
        })}
    </svg>
  );
}

export function BarChart({
  data,
  width = 600,
  height = 180,
  color = "#0f172a",
  horizontal,
  valueFormat,
  dark,
}: {
  data: { label: string; value: number; sub?: string }[];
  width?: number;
  height?: number;
  color?: string;
  horizontal?: boolean;
  valueFormat?: (v: number) => string;
  dark?: boolean;
}) {
  const max = Math.max(...data.map((d) => d.value)) || 1;
  const grid = dark ? "#1f2530" : "#eef2f7";
  const text = dark ? "#94a3b8" : "#475569";
  if (horizontal) {
    const rowH = Math.floor((height - 8) / data.length);
    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {data.map((d, i) => {
          const y = i * rowH + 4;
          const w = (d.value / max) * (width - 160);
          return (
            <g key={d.label}>
              <text x={0} y={y + rowH / 2 + 3} fontSize="10" fill={text}>
                {d.label}
              </text>
              <rect x={120} y={y + 4} width={width - 160} height={rowH - 10} fill={grid} rx={3} />
              <rect x={120} y={y + 4} width={w} height={rowH - 10} fill={color} rx={3} />
              <text x={width - 4} y={y + rowH / 2 + 3} fontSize="10" textAnchor="end" fill={text} fontFamily="ui-monospace, monospace">
                {valueFormat ? valueFormat(d.value) : d.value}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }
  const pad = { l: 8, r: 8, t: 8, b: 24 };
  const innerW = width - pad.l - pad.r;
  const innerH = height - pad.t - pad.b;
  const bw = innerW / data.length;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      {data.map((d, i) => {
        const h = (d.value / max) * innerH;
        const x = pad.l + i * bw + bw * 0.18;
        const y = pad.t + innerH - h;
        return (
          <g key={d.label}>
            <rect x={x} y={y} width={bw * 0.64} height={h} fill={color} rx={2} />
            <text x={x + bw * 0.32} y={height - 8} fontSize="9" textAnchor="middle" fill={text} fontFamily="ui-monospace, monospace">
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function Donut({
  data,
  size = 132,
  centerLabel,
  centerValue,
  dark,
}: {
  data: { label: string; value: number; color: string }[];
  size?: number;
  centerLabel?: string;
  centerValue?: string;
  dark?: boolean;
}) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const r = size / 2 - 8;
  const cx = size / 2;
  const cy = size / 2;
  let acc = -Math.PI / 2;
  const arcs = data.map((d) => {
    const angle = (d.value / total) * Math.PI * 2;
    const x1 = cx + Math.cos(acc) * r;
    const y1 = cy + Math.sin(acc) * r;
    const x2 = cx + Math.cos(acc + angle) * r;
    const y2 = cy + Math.sin(acc + angle) * r;
    const large = angle > Math.PI ? 1 : 0;
    const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
    acc += angle;
    return { ...d, path };
  });
  const inner = r - 18;
  return (
    <div className="flex items-center gap-5">
      <svg width={size} height={size}>
        {arcs.map((a, i) => (
          <path key={i} d={a.path} fill={a.color} />
        ))}
        <circle cx={cx} cy={cy} r={inner} fill={dark ? "#12151b" : "#fff"} />
        {centerValue && (
          <text x={cx} y={cy - 2} textAnchor="middle" fontSize="14" fontWeight="600" fill={dark ? "#fff" : "#0f172a"} fontFamily="ui-monospace, monospace">
            {centerValue}
          </text>
        )}
        {centerLabel && (
          <text x={cx} y={cy + 12} textAnchor="middle" fontSize="9" fill={dark ? "#94a3b8" : "#64748b"}>
            {centerLabel}
          </text>
        )}
      </svg>
      <div className="flex-1 space-y-1.5 text-[12px]">
        {data.map((d) => (
          <div key={d.label} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="h-2 w-2 rounded-sm shrink-0" style={{ background: d.color }} />
              <span className={cn("truncate", dark ? "text-white/80" : "text-slate-700")}>{d.label}</span>
            </div>
            <span className={cn("font-mono tabular-nums text-[11px]", dark ? "text-white/60" : "text-slate-500")}>
              {Math.round((d.value / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeatMap({
  rows,
  cols,
  data,
  color = "#0f766e",
  dark,
}: {
  rows: string[];
  cols: string[];
  /** matrix [rows][cols], values 0..max */
  data: number[][];
  color?: string;
  dark?: boolean;
}) {
  const max = Math.max(1, ...data.flat());
  const cell = 26;
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse">
        <thead>
          <tr>
            <th />
            {cols.map((c) => (
              <th key={c} className={cn("text-[10px] font-mono px-1.5 font-normal", dark ? "text-white/40" : "text-slate-400")}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r}>
              <td className={cn("text-[11px] pr-2 text-right whitespace-nowrap", dark ? "text-white/60" : "text-slate-500")}>{r}</td>
              {cols.map((_, j) => {
                const v = data[i]?.[j] ?? 0;
                const op = Math.max(0.06, v / max);
                return (
                  <td key={j} className="p-0.5">
                    <div
                      className="rounded-[3px] flex items-center justify-center text-[9px] font-mono"
                      style={{
                        width: cell,
                        height: cell,
                        background: hexA(color, op),
                        color: op > 0.55 ? "#fff" : dark ? "#9aa3b2" : "#475569",
                      }}
                    >
                      {v || ""}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function hexA(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
}

/* ============================================================
   Data table
   ============================================================ */

export interface Column<T> {
  key: keyof T | string;
  header: string;
  align?: "left" | "right" | "center";
  width?: string;
  mono?: boolean;
  render?: (row: T) => ReactNode;
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  rows,
  dark,
  compact,
}: {
  columns: Column<T>[];
  rows: T[];
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[12.5px]">
        <thead>
          <tr className={cn("text-left border-b", dark ? "border-white/10" : "border-slate-200/70")}>
            {columns.map((c) => (
              <th
                key={String(c.key)}
                className={cn(
                  "px-3 font-mono uppercase tracking-[0.1em] text-[10px] font-semibold",
                  compact ? "py-1.5" : "py-2",
                  c.align === "right" && "text-right",
                  c.align === "center" && "text-center",
                  dark ? "text-white/40" : "text-slate-400",
                )}
                style={{ width: c.width }}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "border-b last:border-0 transition-colors",
                dark ? "border-white/[0.06] hover:bg-white/[0.03]" : "border-slate-100 hover:bg-slate-50/60",
              )}
            >
              {columns.map((c) => {
                const v = c.render ? c.render(row) : (row as Record<string, unknown>)[c.key as string];
                return (
                  <td
                    key={String(c.key)}
                    className={cn(
                      "px-3",
                      compact ? "py-1.5" : "py-2.5",
                      c.align === "right" && "text-right",
                      c.align === "center" && "text-center",
                      c.mono && "font-mono tabular-nums",
                      dark ? "text-white/85" : "text-slate-800",
                    )}
                  >
                    {v as ReactNode}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ============================================================
   Icon square — replaces emoji
   ============================================================ */

export function IconSquare({
  icon: Icon,
  tone = "neutral",
  className,
}: {
  icon: (p: SVGProps<SVGSVGElement>) => JSX.Element;
  tone?: "success" | "warn" | "danger" | "info" | "neutral";
  className?: string;
}) {
  const map = {
    success: "bg-emerald-50 text-emerald-700",
    warn: "bg-amber-50 text-amber-700",
    danger: "bg-rose-50 text-rose-700",
    info: "bg-sky-50 text-sky-700",
    neutral: "bg-slate-100 text-slate-700",
  } as const;
  return (
    <div className={cn("h-6 w-6 rounded-md flex items-center justify-center shrink-0", map[tone], className)}>
      <Icon className="h-3 w-3" />
    </div>
  );
}

/* ============================================================
   Progress bar
   ============================================================ */

export function ProgressBar({ pct, color = "#0f172a", dark }: { pct: number; color?: string; dark?: boolean }) {
  return (
    <div className={cn("h-1.5 w-full rounded-full overflow-hidden", dark ? "bg-white/10" : "bg-slate-100")}>
      <div className="h-full rounded-full" style={{ width: `${Math.min(100, Math.max(0, pct))}%`, background: color }} />
    </div>
  );
}
