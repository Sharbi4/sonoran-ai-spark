import { Briefcase, BookOpen, Calendar, Star, CheckCircle, Sparkles, Play, ChevronRight } from "lucide-react";
import { DemoShell, MonogramLogo, Reveal, SectionLabel, type DemoShellTheme } from "./shell";
import { AIChatWidget } from "./ai-chat";
import { cn } from "@/lib/utils";

const theme: DemoShellTheme = {
  accentText: "text-indigo-700",
  accentBg: "bg-indigo-700",
  accentSoft: "bg-indigo-50",
  logoFrom: "#6366F1",
  logoTo: "#312E81",
  fontBody: "'Inter', sans-serif",
  fontHeading: "'Sora', sans-serif",
  pageBg: "#FAFAFB",
  pageFg: "#11131C",
};

const OFFERS = [
  { name: "Strategy Intensive", price: "$1,500", desc: "Half-day 1:1 deep dive. Walk away with a 90-day plan.", best: false },
  { name: "3-Month Coaching", price: "$6,000", desc: "Bi-weekly coaching + Slack access. Most popular.", best: true },
  { name: "Executive Retainer", price: "$3,500/mo", desc: "Ongoing fractional advisor + quarterly off-sites.", best: false },
];

const TESTIMONIALS = [
  { quote: "Tripled MRR in 6 months. The frameworks are gold.", name: "Sarah K.", role: "Founder · SaaS" },
  { quote: "Finally have a leadership team that runs itself.", name: "Marcus T.", role: "CEO · Agency" },
  { quote: "Worth every dollar. ROI was 12x in year one.", name: "Priya R.", role: "VP Product" },
];

export default function ConsultantsCoachesDemo() {
  return (
    <DemoShell
      slug="consultants-coaches"
      brandName="Atlas Advisory"
      tagline="Executive coaching and strategy for founders and operators."
      phone="(602) 555-2200"
      city="Phoenix, Arizona"
      navLinks={[
        { label: "How It Works", href: "#process" },
        { label: "Offerings", href: "#offerings" },
        { label: "About", href: "#about" },
        { label: "Resources", href: "#resources" },
        { label: "Book a Call", href: "#book" },
      ]}
      primaryCta={{ label: "Book Discovery Call", href: "#book" }}
      secondaryCta={{ label: "Free Assessment", href: "#assessment" }}
      logo={<MonogramLogo initials="A" theme={theme} shape="rounded" />}
      theme={theme}
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-24 pb-20 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold"><Sparkles className="h-3 w-3" /> 200+ founders coached since 2019</span>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight" style={{ fontFamily: theme.fontHeading }}>
              Scale your company<br /><span className="text-indigo-700">without losing yourself.</span>
            </h1>
            <p className="mt-6 max-w-lg text-gray-600 leading-relaxed text-lg">
              1:1 advisory for founders building $1M–$50M companies. Tactical, no-fluff coaching from operators who've done it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className={cn("inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-lg", theme.accentBg)}>
                Book Discovery Call <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#assessment" className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-900 border border-indigo-200 px-6 py-3.5 text-sm font-medium hover:bg-indigo-50">
                Take Free Assessment
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-900 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 50%)" }} />
                <button className="absolute inset-0 flex items-center justify-center">
                  <span className="h-20 w-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl">
                    <Play className="h-7 w-7 text-indigo-700 ml-1" />
                  </span>
                </button>
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-xs uppercase tracking-wider opacity-70">Watch · 2 min</p>
                  <p className="text-lg font-semibold" style={{ fontFamily: theme.fontHeading }}>Why we built Atlas</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ASSESSMENT */}
      <section id="assessment" className="py-20 bg-indigo-50/60 border-y border-indigo-100">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <SectionLabel color={theme.accentText}>Free AI Assessment</SectionLabel>
              <h2 className="text-4xl sm:text-5xl text-indigo-950" style={{ fontFamily: theme.fontHeading }}>Where are you stuck?</h2>
              <p className="mt-3 text-gray-600">Answer 3 questions. Get a personalized growth diagnostic in 60 seconds.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-indigo-100">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-indigo-950 mb-3">1. What stage is your company?</p>
                  <div className="flex flex-wrap gap-2">
                    {["Pre-revenue", "<$500k ARR", "$500k–$5M", "$5M–$25M", "$25M+"].map((x, i) => (
                      <button key={x} className={cn("px-4 py-2 rounded-full text-xs font-medium border", i === 2 ? "bg-indigo-700 text-white border-indigo-700" : "bg-white border-gray-200")}>{x}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo-950 mb-3">2. Biggest bottleneck right now?</p>
                  <div className="flex flex-wrap gap-2">
                    {["Hiring", "Sales", "Strategy", "My time", "Team alignment"].map((x, i) => (
                      <button key={x} className={cn("px-4 py-2 rounded-full text-xs font-medium border", i === 3 ? "bg-indigo-700 text-white border-indigo-700" : "bg-white border-gray-200")}>{x}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo-950 mb-3">3. Goal for next 90 days?</p>
                  <input className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm" defaultValue="Hire a VP Sales and close $200k in pipeline" />
                </div>
              </div>
              <button className={cn("mt-6 w-full h-12 rounded-full text-white font-medium", theme.accentBg)}>Run AI Diagnostic →</button>
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                <p className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Sample diagnostic</p>
                <p className="mt-2 text-sm text-indigo-950 leading-relaxed">You're in the "founder bottleneck" zone — common at $500k–$5M ARR. Recommended path: 3-Month Coaching to install a leadership operating system + hire a Chief of Staff before VP Sales. Project: 2.3x revenue in 18 months.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OFFERINGS */}
      <section id="offerings" className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel color={theme.accentText}>Offerings</SectionLabel>
              <h2 className="text-4xl sm:text-5xl text-indigo-950" style={{ fontFamily: theme.fontHeading }}>Choose your engagement.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {OFFERS.map((o) => (
              <Reveal key={o.name}>
                <div className={cn(
                  "rounded-3xl p-7 border-2 h-full flex flex-col",
                  o.best ? "bg-indigo-950 text-white border-indigo-700 shadow-2xl scale-[1.03]" : "bg-white border-gray-100",
                )}>
                  {o.best && <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 mb-2">Most Popular</span>}
                  <p className={cn("text-xs uppercase tracking-wider font-semibold", o.best ? "text-indigo-200" : "text-indigo-700")}>{o.name}</p>
                  <p className="mt-3 text-4xl font-bold" style={{ fontFamily: theme.fontHeading }}>{o.price}</p>
                  <p className={cn("mt-3 text-sm flex-1", o.best ? "text-indigo-100" : "text-gray-600")}>{o.desc}</p>
                  <button className={cn("mt-6 w-full rounded-full py-3 text-sm font-medium", o.best ? "bg-white text-indigo-900" : "bg-indigo-700 text-white")}>Inquire</button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-indigo-950 text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl text-center mb-12" style={{ fontFamily: theme.fontHeading }}>What founders say.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                  <div className="flex gap-1 mb-3">{Array(5).fill(0).map((_, k) => <Star key={k} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                  <p className="text-lg leading-relaxed" style={{ fontFamily: theme.fontHeading }}>"{t.quote}"</p>
                  <p className="mt-5 text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-indigo-200">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <SectionLabel color={theme.accentText}>Discovery Call</SectionLabel>
            <h2 className="text-4xl sm:text-5xl text-indigo-950" style={{ fontFamily: theme.fontHeading }}>30 minutes. Zero pressure.</h2>
            <p className="mt-4 text-gray-600">Pick a time below. We'll diagnose your situation and tell you if we're the right fit.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 bg-white rounded-3xl shadow-xl p-8 border border-indigo-100">
              <div className="grid sm:grid-cols-4 gap-2">
                {["Tue 10am", "Tue 2pm", "Wed 9am", "Wed 4pm", "Thu 11am", "Thu 3pm", "Fri 9am", "Fri 1pm"].map((t, i) => (
                  <button key={t} className={cn(
                    "py-3 rounded-xl text-sm font-medium border",
                    i === 4 ? "bg-indigo-700 text-white border-indigo-700" : "bg-white border-gray-200 hover:border-indigo-400",
                  )}>{t}</button>
                ))}
              </div>
              <button className={cn("mt-6 w-full sm:w-auto px-10 h-12 rounded-full text-white font-medium", theme.accentBg)}>Confirm Thu 11am — Sept 18</button>
            </div>
          </Reveal>
        </div>
      </section>

      <AIChatWidget
        script={{
          title: "Atlas AI Concierge",
          subtitle: "Assessment · Bookings · FAQ",
          greeting: "Hi! I'm Atlas's AI concierge. I can run a quick diagnostic, recommend the right engagement, or get you on the calendar. What's going on in your business?",
          quickReplies: ["I'm stuck at $1M ARR", "How does coaching work?", "Pricing details", "Book discovery call"],
          responses: [
            { match: ["stuck", "plateau", "1m", "growth"], reply: "Classic 'founder bottleneck.' Most $1M companies need 3 things: a leadership OS, a Chief of Staff, and clean revenue motion. Our 3-Month Coaching is built exactly for this stage." },
            { match: ["how", "work", "coaching"], reply: "Bi-weekly 1:1 sessions (90 min), Slack access, async strategy reviews, and quarterly off-sites. Most clients see 2-3x growth in 6 months." },
            { match: ["price", "cost", "much"], reply: "Strategy Intensive: $1,500 (half-day). 3-Month Coaching: $6,000. Executive Retainer: $3,500/mo. We don't take everyone — book a discovery call and we'll see if we're a fit." },
            { match: ["book", "call", "schedule"], reply: "We have Thu 11am or Fri 1pm open this week. 30 min, free, no pressure. I'll send the calendar link — what's your email?" },
          ],
          fallback: "Happy to help — try asking about pricing, the assessment, or booking a call.",
          accentBg: "bg-indigo-700",
          accentText: "text-indigo-700",
          buttonLabel: "Ask Atlas",
        }}
      />
    </DemoShell>
  );
}
