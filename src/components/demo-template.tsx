import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, ChevronRight, BarChart3, Sparkles,
  Lock, CreditCard, User, Shield, LogIn, Phone,
  LayoutDashboard, FileText, Bell, Settings, Users,
  MapPin, Clock, Star, Mail, Calendar, ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardMockup, type DashboardSpec } from "@/components/mockups";

export interface DemoTheme {
  fontBody: string;
  fontHeading: string;
  heroGradient: string;
  cardRadius: string;
  navStyle: "glass" | "solid" | "transparent";
  logoShape: "circle" | "rounded" | "square" | "pill";
  logoGradient?: string;
}

export interface DemoConfig {
  slug: string;
  brandName: string;
  tagline: string;
  heroHeadline: React.ReactNode;
  heroSub: string;
  accentColor: string;
  accentBg: string;
  accentText: string;
  icon: LucideIcon;
  features: { icon: LucideIcon; title: string; description: string }[];
  painPoints: string[];
  workflow: { step: string; detail: string }[];
  dashboard: DashboardSpec;
  testimonial: { quote: string; name: string; role: string };
  stats: { value: string; label: string }[];
  theme?: DemoTheme;
}

const DEFAULT_THEMES: Record<string, DemoTheme> = {
  "law-firms": { fontBody: "'Inter', sans-serif", fontHeading: "'Playfair Display', serif", heroGradient: "from-slate-900 via-blue-900 to-slate-800", cardRadius: "rounded-xl", navStyle: "solid", logoShape: "square", logoGradient: "from-blue-700 to-indigo-900" },
  contractors: { fontBody: "'DM Sans', sans-serif", fontHeading: "'Sora', sans-serif", heroGradient: "from-amber-600 via-orange-500 to-yellow-500", cardRadius: "rounded-2xl", navStyle: "glass", logoShape: "rounded", logoGradient: "from-amber-500 to-orange-600" },
  restaurants: { fontBody: "'Lora', serif", fontHeading: "'Cormorant Garamond', serif", heroGradient: "from-emerald-800 via-emerald-700 to-teal-600", cardRadius: "rounded-3xl", navStyle: "transparent", logoShape: "circle", logoGradient: "from-emerald-600 to-teal-700" },
  "salons-wellness": { fontBody: "'Nunito', sans-serif", fontHeading: "'Outfit', sans-serif", heroGradient: "from-pink-400 via-rose-400 to-fuchsia-500", cardRadius: "rounded-3xl", navStyle: "glass", logoShape: "pill", logoGradient: "from-pink-500 to-rose-600" },
  "real-estate": { fontBody: "'Inter', sans-serif", fontHeading: "'Fraunces', serif", heroGradient: "from-zinc-900 via-zinc-800 to-neutral-700", cardRadius: "rounded-2xl", navStyle: "solid", logoShape: "square", logoGradient: "from-zinc-700 to-zinc-900" },
  "consultants-coaches": { fontBody: "'DM Sans', sans-serif", fontHeading: "'Cabinet Grotesk', sans-serif", heroGradient: "from-violet-700 via-purple-600 to-indigo-700", cardRadius: "rounded-2xl", navStyle: "glass", logoShape: "rounded", logoGradient: "from-violet-600 to-purple-800" },
  "doctors-medical": { fontBody: "'Inter', sans-serif", fontHeading: "'Plus Jakarta Sans', sans-serif", heroGradient: "from-sky-600 via-blue-500 to-cyan-500", cardRadius: "rounded-2xl", navStyle: "solid", logoShape: "circle", logoGradient: "from-sky-500 to-blue-600" },
  "financial-advisors": { fontBody: "'Inter', sans-serif", fontHeading: "'Libre Baskerville', serif", heroGradient: "from-emerald-900 via-green-800 to-emerald-700", cardRadius: "rounded-xl", navStyle: "solid", logoShape: "square", logoGradient: "from-emerald-700 to-green-900" },
  "political-campaigns": { fontBody: "'Outfit', sans-serif", fontHeading: "'Oswald', sans-serif", heroGradient: "from-red-700 via-red-600 to-rose-600", cardRadius: "rounded-xl", navStyle: "solid", logoShape: "pill", logoGradient: "from-red-600 to-red-800" },
  "small-business-teams": { fontBody: "'Nunito', sans-serif", fontHeading: "'Sora', sans-serif", heroGradient: "from-indigo-500 via-blue-500 to-cyan-400", cardRadius: "rounded-2xl", navStyle: "glass", logoShape: "rounded", logoGradient: "from-indigo-500 to-blue-600" },
};

const spring = { type: "spring" as const, stiffness: 110, damping: 22 };

function Fade({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}

export function DemoTemplate({ config }: { config: DemoConfig }) {
  const { accentColor, accentBg, accentText } = config;
  const theme = config.theme || DEFAULT_THEMES[config.slug] || DEFAULT_THEMES["law-firms"];
  const logoRadius = theme.logoShape === "circle" ? "rounded-full" : theme.logoShape === "pill" ? "rounded-full" : theme.logoShape === "square" ? "rounded-md" : "rounded-xl";
  const navBg = theme.navStyle === "glass" ? "bg-white/70 backdrop-blur-2xl" : theme.navStyle === "transparent" ? "bg-transparent" : "bg-white/95 backdrop-blur-xl";

  // Extract font family names for Google Fonts URL
  const fontFamilies = [theme.fontBody, theme.fontHeading]
    .map(f => f.split(",")[0].replace(/'/g, "").trim())
    .filter(f => !["sans-serif", "serif", "monospace"].includes(f));
  const googleFontsUrl = fontFamilies.length > 0
    ? `https://fonts.googleapis.com/css2?${fontFamilies.map(f => `family=${f.replace(/\s/g, "+")}:wght@300;400;500;600;700;800`).join("&")}&display=swap`
    : null;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: theme.fontBody }}>
      {/* Load unique fonts */}
      {googleFontsUrl && (
        <link rel="stylesheet" href={googleFontsUrl} />
      )}

      {/* Demo Banner — subtle top ribbon */}
      <div className="bg-[#1F1F1F] text-center py-2 px-4 relative z-[60]">
        <p className="text-[11px] text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
          Demo by{" "}
          <Link to="/" className="text-copper font-medium underline underline-offset-2">Sonoran Systems AI</Link>
          {" · "}
          <a href={`/industries/${config.slug}`} className="text-copper font-medium underline underline-offset-2">
            Want this for your business?
          </a>
        </p>
      </div>

      {/* ─── ACTUAL WEBSITE NAV ─── */}
      <nav className={cn("sticky top-0 z-50 border-b border-gray-100 shadow-sm", navBg)}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <div className={cn("h-9 w-9 flex items-center justify-center bg-gradient-to-br", logoRadius, theme.logoGradient ? theme.logoGradient : accentColor)}>
              <config.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight" style={{ fontFamily: theme.fontHeading }}>{config.brandName}</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-[13px] font-medium text-gray-600">
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#results" className="hover:text-gray-900 transition-colors">Results</a>
            <a href="#reviews" className="hover:text-gray-900 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#portal" className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <LogIn className="h-3.5 w-3.5" /> Client Login
            </a>
            <a
              href="#contact"
              className={cn("rounded-full px-5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90", accentColor)}
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Fade>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-gray-900 tracking-tight font-bold" style={{ fontFamily: theme.fontHeading }}>
                  {config.heroHeadline}
                </h1>
                <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
                  {config.heroSub}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className={cn("inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-lg transition-all hover:opacity-90 hover:shadow-xl", accentColor)}
                  >
                    Schedule a Consultation <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="tel:+15205551234" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                    <Phone className="h-4 w-4" /> (520) 555-1234
                  </a>
                </div>
                <div className="mt-8 flex items-center gap-5 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Tucson, AZ</span>
                  <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-amber-400 fill-amber-400" /> 4.9 · 127 reviews</span>
                </div>
              </div>
            </Fade>

            {/* Hero Visual */}
            <Fade delay={0.15}>
              <div className="relative">
                <div className={cn("overflow-hidden shadow-2xl", theme.cardRadius)}>
                  <div className={cn("aspect-[5/4] relative bg-gradient-to-br", theme.heroGradient)}>
                    {/* Simulated hero photo area */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
                    <div className="absolute inset-0 flex items-end p-8">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                            <config.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                          </div>
                        </div>
                        <p className="text-2xl sm:text-3xl text-white font-bold" style={{ fontFamily: theme.fontHeading }}>{config.brandName}</p>
                        <p className="mt-1 text-white/80 text-sm">{config.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating review card */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white shadow-xl border border-gray-100 p-4 max-w-[220px]">
                  <div className="flex gap-0.5 mb-2">
                    {[1,2,3,4,5].map(n => <Star key={n} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed italic">"Best decision we made for our business."</p>
                  <p className="mt-2 text-[10px] font-medium text-gray-900">— Verified Client</p>
                </div>
                {/* Floating hours card */}
                <div className="absolute -top-3 -right-3 rounded-xl bg-white shadow-lg border border-gray-100 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-green-500" />
                    <div>
                      <p className="text-xs font-medium text-gray-900">Open Now</p>
                      <p className="text-[10px] text-gray-500">Mon–Fri 8am–6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {config.stats.map((s) => (
              <div key={s.label} className="py-8 text-center">
                <p className={cn("font-serif text-3xl font-bold", accentText)}>{s.value}</p>
                <p className="mt-1 text-xs text-gray-500 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Fade>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className={cn("text-xs font-semibold uppercase tracking-[0.25em] mb-3", accentText)}>Our Services</p>
              <h2 className="text-3xl sm:text-4xl text-gray-900 font-bold" style={{ fontFamily: theme.fontHeading }}>
                How we help your business thrive.
              </h2>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.features.map((f, i) => (
              <Fade key={f.title} delay={i * 0.05}>
                <div className={cn("group h-full border border-gray-100 bg-white p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300", theme.cardRadius)}>
                  <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center", accentBg)}>
                    <f.icon className={cn("h-6 w-6", accentText)} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-lg text-gray-900 font-semibold" style={{ fontFamily: theme.fontHeading }}>{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.description}</p>
                  <a href="#contact" className={cn("mt-4 inline-flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity", accentText)}>
                    Learn more <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHY US ─── */}
      <section id="about" className="py-20 sm:py-28 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Fade>
              <div>
                <p className={cn("text-xs font-semibold uppercase tracking-[0.25em] mb-3", accentText)}>About Us</p>
                <h2 className="text-3xl sm:text-4xl text-gray-900 font-bold" style={{ fontFamily: theme.fontHeading }}>
                  Trusted by clients. Driven by results.
                </h2>
                <p className="mt-5 text-gray-500 leading-relaxed">
                  At {config.brandName}, we combine modern technology with personal service. 
                  Every client gets a dedicated point of contact, a transparent process, and systems 
                  that keep everything running smoothly behind the scenes.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { val: "15+", label: "Years experience" },
                    { val: "500+", label: "Clients served" },
                    { val: "4.9★", label: "Average rating" },
                    { val: "24hr", label: "Response time" },
                  ].map(s => (
                    <div key={s.label} className="rounded-xl bg-white border border-gray-100 p-4">
                      <p className={cn("font-serif text-2xl font-bold", accentText)}>{s.val}</p>
                      <p className="mt-0.5 text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
            <Fade delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {/* Team member cards */}
                {[
                  { name: "Dr. Sarah Chen", role: "Managing Partner" },
                  { name: "Michael Torres", role: "Senior Associate" },
                  { name: "Lisa Ramirez", role: "Client Relations" },
                  { name: "James Wright", role: "Operations Director" },
                ].map(person => (
                  <div key={person.name} className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                    <div className={cn("aspect-[4/3] flex items-center justify-center", "bg-gradient-to-br from-gray-100 to-gray-50")}>
                      <User className="h-10 w-10 text-gray-300" strokeWidth={1} />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium text-gray-900">{person.name}</p>
                      <p className="text-xs text-gray-500">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ─── CLIENT PORTAL + BILL PAY ─── */}
      <section id="portal" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Fade>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className={cn("text-xs font-semibold uppercase tracking-[0.25em] mb-3", accentText)}>Client Portal</p>
              <h2 className="text-3xl sm:text-4xl text-gray-900 font-bold" style={{ fontFamily: theme.fontHeading }}>
                Manage everything from your account.
              </h2>
              <p className="mt-4 text-gray-500">Log in to view documents, pay invoices, check status, and message our team.</p>
            </div>
          </Fade>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Login Panel */}
            <Fade delay={0.05} className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden h-full">
                <div className={cn("px-6 py-4 flex items-center gap-2", accentColor)}>
                  <Lock className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">Secure Client Login</span>
                </div>
                <div className="bg-white p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-medium text-gray-600 mb-1.5 block">Email</label>
                      <div className="h-10 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center">
                        <span className="text-sm text-gray-400">you@email.com</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-600 mb-1.5 block">Password</label>
                      <div className="h-10 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center justify-between">
                        <span className="text-sm text-gray-400">••••••••</span>
                        <span className="text-xs text-gray-400">Show</span>
                      </div>
                    </div>
                    <div className={cn("h-11 rounded-lg flex items-center justify-center text-sm font-medium text-white cursor-pointer", accentColor)}>
                      Sign In
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span className="hover:text-gray-600 cursor-pointer">Forgot password?</span>
                      <span className="hover:text-gray-600 cursor-pointer">Create account</span>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Portal Screens Preview */}
            <Fade delay={0.1} className="lg:col-span-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-full">
                {[
                  { icon: FileText, title: "My Documents", count: "12 files", color: "bg-blue-50 text-blue-600" },
                  { icon: CreditCard, title: "Pay Invoice", count: "$1,850 due", color: "bg-green-50 text-green-600" },
                  { icon: Calendar, title: "Appointments", count: "Next: Jun 4", color: "bg-purple-50 text-purple-600" },
                  { icon: Bell, title: "Messages", count: "2 unread", color: "bg-amber-50 text-amber-600" },
                  { icon: LayoutDashboard, title: "Case Status", count: "In progress", color: "bg-indigo-50 text-indigo-600" },
                  { icon: Shield, title: "Security", count: "256-bit SSL", color: "bg-gray-50 text-gray-600" },
                ].map(item => (
                  <div key={item.title} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center mb-3", item.color.split(" ")[0])}>
                      <item.icon className={cn("h-5 w-5", item.color.split(" ")[1])} strokeWidth={1.5} />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{item.title}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{item.count}</p>
                  </div>
                ))}
              </div>
            </Fade>
          </div>

          {/* Bill Pay Mockup */}
          <Fade delay={0.15}>
            <div className="mt-10 rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-gray-900 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">Online Bill Pay</span>
                </div>
                <span className="text-xs text-gray-400">Powered by Stripe</span>
              </div>
              <div className="bg-white p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Invoice #1024</p>
                        <p className="text-xs text-gray-500">Service — May 2025</p>
                      </div>
                      <p className={cn("text-lg font-bold", accentText)}>$1,850.00</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm"><span className="text-gray-500">Consultation (4 hrs)</span><span className="text-gray-900">$800.00</span></div>
                      <div className="flex justify-between text-sm"><span className="text-gray-500">Document preparation</span><span className="text-gray-900">$650.00</span></div>
                      <div className="flex justify-between text-sm"><span className="text-gray-500">Filing fees</span><span className="text-gray-900">$400.00</span></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-10 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center"><span className="text-sm text-gray-400">4242 •••• •••• 4242</span></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-10 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center"><span className="text-sm text-gray-400">12/26</span></div>
                      <div className="h-10 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center"><span className="text-sm text-gray-400">CVC</span></div>
                    </div>
                    <div className={cn("h-11 rounded-lg flex items-center justify-center text-sm font-medium text-white", accentColor)}>
                      Pay $1,850.00
                    </div>
                    <p className="text-[10px] text-center text-gray-400">Secure · ACH also accepted</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ─── RESULTS / DASHBOARD ─── */}
      <section id="results" className="py-20 sm:py-28 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Fade>
            <div className="text-center mb-12">
              <p className={cn("text-xs font-semibold uppercase tracking-[0.25em] mb-3", accentText)}>Owner Dashboard</p>
              <h2 className="text-3xl sm:text-4xl text-gray-900 font-bold" style={{ fontFamily: theme.fontHeading }}>
                Your business at a glance.
              </h2>
              <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                Real-time KPIs, pipeline, and team performance — connected to the tools you already use.
              </p>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <DashboardMockup spec={config.dashboard} />
          </Fade>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Fade>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className={cn("text-xs font-semibold uppercase tracking-[0.25em] mb-3", accentText)}>Our Process</p>
              <h2 className="text-3xl sm:text-4xl text-gray-900 font-bold" style={{ fontFamily: theme.fontHeading }}>Simple, transparent, and efficient.</h2>
            </div>
          </Fade>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.workflow.slice(0, 4).map((w, i) => (
              <Fade key={w.step} delay={i * 0.06}>
                <div className="relative text-center p-6">
                  <div className={cn("h-14 w-14 mx-auto rounded-full flex items-center justify-center text-lg font-bold text-white mb-5", accentColor)}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg text-gray-900 font-semibold" style={{ fontFamily: theme.fontHeading }}>{w.step}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{w.detail}</p>
                  {i < Math.min(config.workflow.length, 4) - 1 && (
                    <ChevronRight className="hidden lg:block absolute top-10 -right-3 h-5 w-5 text-gray-300" />
                  )}
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section id="reviews" className="py-20 sm:py-28 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Fade>
            <div className="text-center mb-14">
              <div className="flex gap-1 justify-center mb-4">
                {[1,2,3,4,5].map(n => <Star key={n} className="h-6 w-6 text-amber-400 fill-amber-400" />)}
              </div>
              <h2 className="text-3xl sm:text-4xl text-white font-bold" style={{ fontFamily: theme.fontHeading }}>What our clients say.</h2>
            </div>
          </Fade>
          <div className="grid md:grid-cols-3 gap-6">
            <Fade delay={0.05}>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(n => <Star key={n} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-sm text-white/80 leading-relaxed italic">"{config.testimonial.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-white/60" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{config.testimonial.name}</p>
                    <p className="text-xs text-white/50">{config.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade delay={0.1}>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(n => <Star key={n} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-sm text-white/80 leading-relaxed italic">"The online portal changed everything. I can check my case status, pay bills, and message the team anytime. No more phone tag."</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-white/60" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Maria G.</p>
                    <p className="text-xs text-white/50">Client since 2023</p>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade delay={0.15}>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(n => <Star key={n} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-sm text-white/80 leading-relaxed italic">"Responsive, professional, and they actually use technology well. The automated reminders and dashboard make me feel like they're always on top of it."</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-white/60" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Robert K.</p>
                    <p className="text-xs text-white/50">Client since 2024</p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Fade>
              <div>
                <p className={cn("text-xs font-semibold uppercase tracking-[0.25em] mb-3", accentText)}>Get in Touch</p>
                <h2 className="text-3xl sm:text-4xl text-gray-900 font-bold" style={{ fontFamily: theme.fontHeading }}>
                  Schedule your free consultation.
                </h2>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  Tell us about your situation. We'll get back to you within one business day to discuss next steps.
                </p>
                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center", accentBg)}>
                      <Phone className={cn("h-5 w-5", accentText)} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">(520) 555-1234</p>
                      <p className="text-xs text-gray-500">Mon–Fri 8am–6pm MST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center", accentBg)}>
                      <Mail className={cn("h-5 w-5", accentText)} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">hello@{config.brandName.toLowerCase().replace(/\s+/g, "")}.com</p>
                      <p className="text-xs text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center", accentBg)}>
                      <MapPin className={cn("h-5 w-5", accentText)} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">123 N. Stone Ave, Suite 200</p>
                      <p className="text-xs text-gray-500">Tucson, Arizona 85701</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Contact Form Mockup */}
            <Fade delay={0.1}>
              <div className="rounded-2xl border border-gray-200 bg-white shadow-lg p-7">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-gray-600 mb-1.5 block">First Name</label>
                      <div className="h-10 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center"><span className="text-sm text-gray-400">John</span></div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-600 mb-1.5 block">Last Name</label>
                      <div className="h-10 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center"><span className="text-sm text-gray-400">Smith</span></div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">Email</label>
                    <div className="h-10 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center"><span className="text-sm text-gray-400">john@example.com</span></div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">Phone</label>
                    <div className="h-10 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center"><span className="text-sm text-gray-400">(520) 555-0000</span></div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">How can we help?</label>
                    <div className="h-24 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2"><span className="text-sm text-gray-400">Tell us about your situation...</span></div>
                  </div>
                  <div className={cn("h-11 rounded-lg flex items-center justify-center text-sm font-medium text-white cursor-pointer", accentColor)}>
                    Submit Request
                  </div>
                  <p className="text-[10px] text-center text-gray-400">Free consultation · No obligation · Typically respond within 24 hours</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-900 text-white py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center", accentColor)}>
                  <config.icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                </div>
                <span className="font-serif text-lg font-bold">{config.brandName}</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{config.tagline}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Services</p>
              <div className="space-y-2">
                {config.features.slice(0, 4).map(f => (
                  <p key={f.title} className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">{f.title}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Company</p>
              <div className="space-y-2">
                <p className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">About Us</p>
                <p className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">Reviews</p>
                <p className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">Client Portal</p>
                <p className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">Contact</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Contact</p>
              <div className="space-y-2 text-sm text-white/60">
                <p>(520) 555-1234</p>
                <p>hello@{config.brandName.toLowerCase().replace(/\s+/g, "")}.com</p>
                <p>123 N. Stone Ave, Suite 200</p>
                <p>Tucson, AZ 85701</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © 2025 {config.brandName}. All rights reserved.
              {" · "}Demo by{" "}
              <Link to="/" className="text-copper hover:underline">Sonoran Systems AI</Link>
            </p>
            <div className="flex items-center gap-4">
              <a href={`/industries/${config.slug}`} className="text-xs text-white/40 hover:text-copper transition-colors">
                Build this for my business →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
