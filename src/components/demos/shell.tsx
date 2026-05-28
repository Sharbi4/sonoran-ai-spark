import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface DemoShellTheme {
  /** Tailwind text color for primary accent (e.g. "text-amber-700") */
  accentText: string;
  /** Tailwind bg color for primary accent (e.g. "bg-amber-700") */
  accentBg: string;
  /** Tailwind soft bg (e.g. "bg-amber-50") */
  accentSoft: string;
  /** CSS color for the dynamic logo gradient start */
  logoFrom: string;
  logoTo: string;
  /** Body font CSS family */
  fontBody: string;
  /** Heading font CSS family */
  fontHeading: string;
  /** Optional accent font (for hero display text) */
  fontDisplay?: string;
  /** Page background hex (defaults to white) */
  pageBg?: string;
  /** Foreground text color hex (defaults to #111) */
  pageFg?: string;
}

export interface DemoNavLink {
  label: string;
  href: string;
}

export interface DemoShellProps {
  slug: string;
  brandName: string;
  /** Tagline shown in the footer */
  tagline: string;
  /** Industry phone (display) */
  phone?: string;
  /** City/state for footer */
  city?: string;
  /** Industry-specific nav links */
  navLinks: DemoNavLink[];
  /** Primary CTA label + href shown in nav */
  primaryCta: { label: string; href: string };
  /** Optional secondary CTA */
  secondaryCta?: { label: string; href: string };
  /** Dynamic SVG logo (passed by industry component) */
  logo: ReactNode;
  theme: DemoShellTheme;
  children: ReactNode;
}

// Build Google Fonts URL from the supplied CSS font families
function googleFontsHref(...stacks: (string | undefined)[]): string | null {
  const families = Array.from(
    new Set(
      stacks
        .filter(Boolean)
        .map((s) => (s as string).split(",")[0].replace(/['"]/g, "").trim())
        .filter((f) => !["sans-serif", "serif", "monospace", "system-ui"].includes(f)),
    ),
  );
  if (!families.length) return null;
  return `https://fonts.googleapis.com/css2?${families
    .map((f) => `family=${f.replace(/\s/g, "+")}:wght@300;400;500;600;700;800`)
    .join("&")}&display=swap`;
}

export function DemoShell(props: DemoShellProps) {
  const { slug, brandName, tagline, phone, city, navLinks, primaryCta, secondaryCta, logo, theme, children } = props;
  const fontsHref = googleFontsHref(theme.fontBody, theme.fontHeading, theme.fontDisplay);

  return (
    <div
      style={{
        fontFamily: theme.fontBody,
        backgroundColor: theme.pageBg ?? "#ffffff",
        color: theme.pageFg ?? "#111111",
      }}
      className="min-h-screen"
    >
      {fontsHref && <link rel="stylesheet" href={fontsHref} />}

      {/* Demo ribbon */}
      <div className="bg-[#1F1F1F] text-center py-2 px-4 relative z-[60]">
        <p className="text-[11px] text-white/80" style={{ fontFamily: "Inter, sans-serif" }}>
          Demo by{" "}
          <Link to="/" className="text-copper font-medium underline underline-offset-2">Sonoran Systems AI</Link>
          {" · "}
          <a href={`/industries/${slug}`} className="text-copper font-medium underline underline-offset-2">
            Want this for your business?
          </a>
        </p>
      </div>

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b shadow-sm backdrop-blur-xl"
        style={{ backgroundColor: `${theme.pageBg ?? "#ffffff"}ee`, borderColor: "rgba(0,0,0,0.06)" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2.5">
            {logo}
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: theme.fontHeading }}>{brandName}</span>
          </a>
          <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium opacity-80">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:opacity-100 transition-opacity">{l.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {secondaryCta && (
              <a href={secondaryCta.href} className="hidden sm:inline-flex items-center rounded-full border border-black/15 px-4 py-2 text-xs font-medium hover:bg-black/5 transition-colors">
                {secondaryCta.label}
              </a>
            )}
            <a
              href={primaryCta.href}
              className={cn("rounded-full px-5 py-2 text-xs font-medium text-white hover:opacity-90 transition-opacity", theme.accentBg)}
            >
              {primaryCta.label}
            </a>
          </div>
        </div>
      </nav>

      <div id="top">{children}</div>

      {/* Footer */}
      <footer className="bg-[#0E0E10] text-white py-14 mt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">{logo}<span className="text-lg font-bold" style={{ fontFamily: theme.fontHeading }}>{brandName}</span></div>
              <p className="text-sm text-white/60 leading-relaxed">{tagline}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Navigate</p>
              <div className="space-y-2">
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} className="block text-sm text-white/60 hover:text-white transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Contact</p>
              <div className="space-y-2 text-sm text-white/60">
                {phone && <p>{phone}</p>}
                <p>hello@{brandName.toLowerCase().replace(/\s+/g, "")}.com</p>
                {city && <p>{city}</p>}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Want this site?</p>
              <Link to="/contact" className="inline-block text-sm text-copper hover:underline">Sonoran Systems AI builds it →</Link>
              <p className="mt-3 text-xs text-white/40">Dynamic websites, AI features, and dashboards for {city ?? "Arizona"} businesses.</p>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">© 2026 {brandName}. Fictional demo by Sonoran Systems AI.</p>
            <a href={`/industries/${slug}`} className="text-xs text-white/40 hover:text-copper transition-colors">
              Build this for my business →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Reusable section helpers */

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children, color }: { children: ReactNode; color: string }) {
  return <p className={cn("text-xs font-semibold uppercase tracking-[0.25em] mb-3", color)}>{children}</p>;
}

/* Dynamic SVG logo helpers */

export function MonogramLogo({ initials, theme, shape = "rounded" }: { initials: string; theme: DemoShellTheme; shape?: "rounded" | "circle" | "square" | "shield" }) {
  const radius = shape === "circle" ? "9999px" : shape === "square" ? "4px" : "12px";
  if (shape === "shield") {
    return (
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id={`g-${initials}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={theme.logoFrom} />
            <stop offset="1" stopColor={theme.logoTo} />
          </linearGradient>
        </defs>
        <path d="M20 2 L36 8 V22 C36 30 28 36 20 38 C12 36 4 30 4 22 V8 Z" fill={`url(#g-${initials})`} />
        <text x="20" y="25" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" style={{ fontFamily: theme.fontHeading }}>{initials}</text>
      </svg>
    );
  }
  return (
    <div
      className="h-9 w-9 flex items-center justify-center text-white text-sm font-bold shrink-0"
      style={{
        borderRadius: radius,
        background: `linear-gradient(135deg, ${theme.logoFrom} 0%, ${theme.logoTo} 100%)`,
        fontFamily: theme.fontHeading,
      }}
    >
      {initials}
    </div>
  );
}

export function IconLogo({ icon: Icon, theme, shape = "rounded" }: { icon: LucideIcon; theme: DemoShellTheme; shape?: "rounded" | "circle" | "square" }) {
  const radius = shape === "circle" ? "9999px" : shape === "square" ? "4px" : "10px";
  return (
    <div
      className="h-9 w-9 flex items-center justify-center shrink-0"
      style={{
        borderRadius: radius,
        background: `linear-gradient(135deg, ${theme.logoFrom} 0%, ${theme.logoTo} 100%)`,
      }}
    >
      <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
    </div>
  );
}