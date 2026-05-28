import { useState } from "react";
import { TrendingUp, Shield, PieChart, Lock, Phone, CheckCircle, ChevronRight, Landmark } from "lucide-react";
import { DemoShell, MonogramLogo, Reveal, SectionLabel, type DemoShellTheme } from "./shell";
import { AIChatWidget } from "./ai-chat";
import { cn } from "@/lib/utils";

const theme: DemoShellTheme = {
  accentText: "text-amber-700",
  accentBg: "bg-slate-900",
  accentSoft: "bg-amber-50",
  logoFrom: "#C9A24A",
  logoTo: "#7A5E1A",
  fontBody: "'Inter', sans-serif",
  fontHeading: "'Libre Baskerville', serif",
  pageBg: "#F8F6F1",
  pageFg: "#0F1115",
};

export default function FinancialAdvisorsDemo() {
  const [age, setAge] = useState(42);
  const [save, setSave] = useState(2500);
  const projected = Math.round(((save * 12) * (((1.07 ** (65 - age)) - 1) / 0.07)) / 1000);

  return (
    <DemoShell
      slug="financial-advisors"
      brandName="Pinnacle Wealth"
      tagline="Fee-only fiduciary advisory for high-earning families."
      phone="(602) 555-9900"
      city="Phoenix · Scottsdale"
      navLinks={[
        { label: "Services", href: "#services" },
        { label: "Approach", href: "#approach" },
        { label: "Calculators", href: "#calc" },
        { label: "Insights", href: "#insights" },
        { label: "Client Login", href: "#login" },
      ]}
      primaryCta={{ label: "Schedule Intro Call", href: "#book" }}
      secondaryCta={{ label: "Client Login", href: "#login" }}
      logo={<MonogramLogo initials="PW" theme={theme} shape="shield" />}
      theme={theme}
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <img aria-hidden src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/95" />
        <div aria-hidden className="absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(201,162,74,0.35), transparent 50%), radial-gradient(circle at 80% 70%, rgba(122,94,26,0.35), transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-24 pb-24 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-400 font-medium">Fee-Only · Fiduciary · CFP® · $850M AUM</p>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.05]" style={{ fontFamily: theme.fontHeading }}>
              Wealth, built<br /><em className="text-amber-400">with discipline.</em>
            </h1>
            <p className="mt-6 max-w-lg text-slate-300 leading-relaxed text-lg">
              We help executives, business owners, and pre-retirees plan with clarity. No commissions, no product sales — just unbiased advice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 px-7 py-3.5 text-sm font-semibold shadow-lg transition-colors">
                Schedule Intro Call <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#calc" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/5">
                Try Retirement Calculator
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[{v:"$850M",l:"Assets advised"},{v:"410+",l:"Client families"},{v:"22 yrs",l:"Avg tenure"}].map(s=>(
                <div key={s.l}><p className="text-2xl font-bold text-amber-400" style={{fontFamily:theme.fontHeading}}>{s.v}</p><p className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">{s.l}</p></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="bg-white text-slate-900 rounded-3xl shadow-2xl p-7 border border-amber-200">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Wealth Snapshot · Sample</p>
              <p className="mt-1 text-sm text-slate-500">As of today · The Anderson Family</p>
              <div className="mt-5 space-y-4">
                <div className="flex items-end justify-between border-b pb-3">
                  <div><p className="text-xs uppercase text-slate-500">Net worth</p><p className="text-3xl font-bold" style={{fontFamily:theme.fontHeading}}>$4.82M</p></div>
                  <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1"><TrendingUp className="h-3 w-3" /> +8.4% YTD</span>
                </div>
                {[{l:"Invested assets",v:"$3,210,000",p:67},{l:"Real estate",v:"$1,250,000",p:26},{l:"Cash & equivalents",v:"$360,000",p:7}].map(r=>(
                  <div key={r.l}>
                    <div className="flex justify-between text-xs"><span className="text-slate-600">{r.l}</span><span className="font-semibold">{r.v}</span></div>
                    <div className="mt-1 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-slate-900" style={{width:`${r.p}%`}} /></div>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">Plan Status</p>
                <p className="text-sm text-slate-800 mt-1">On track to retire at 62 with $6.4M portfolio. 94% success rate (Monte Carlo).</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel color={theme.accentText}>Services</SectionLabel>
              <h2 className="text-4xl sm:text-5xl text-slate-900" style={{ fontFamily: theme.fontHeading }}>Full-service wealth management.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: PieChart, t: "Investment Management", d: "Tax-aware portfolios across taxable, IRA, 401(k), and trust accounts." },
              { icon: Landmark, t: "Retirement Planning", d: "Monte Carlo modeling, Social Security optimization, Roth conversion roadmaps." },
              { icon: Shield, t: "Estate & Tax", d: "Coordinated with your CPA and attorney. Trust, gifting, and legacy strategies." },
              { icon: TrendingUp, t: "Equity Comp", d: "RSUs, ISOs, NSOs, ESPPs — diversification and AMT planning for execs." },
              { icon: Lock, t: "Risk & Insurance", d: "Life, disability, umbrella, and long-term care reviews on a 3-yr cycle." },
              { icon: CheckCircle, t: "Business Owners", d: "Cash management, succession planning, retirement plan design." },
            ].map(s => (
              <Reveal key={s.t}>
                <div className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg transition-shadow">
                  <div className="h-10 w-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center mb-4"><s.icon className="h-5 w-5" /></div>
                  <p className="text-xl text-slate-900" style={{ fontFamily: theme.fontHeading }}>{s.t}</p>
                  <p className="mt-2 text-sm text-slate-600">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calc" className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <SectionLabel color={theme.accentText}>AI Retirement Projector</SectionLabel>
              <h2 className="text-4xl sm:text-5xl text-slate-900" style={{ fontFamily: theme.fontHeading }}>How close are you?</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200 grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Your age — {age}</label>
                  <input type="range" min={25} max={64} value={age} onChange={e=>setAge(+e.target.value)} className="mt-2 w-full accent-amber-600" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Monthly savings — ${save.toLocaleString()}</label>
                  <input type="range" min={500} max={10000} step={250} value={save} onChange={e=>setSave(+e.target.value)} className="mt-2 w-full accent-amber-600" />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">Assumes 7% avg annual return, retire at 65, current contributions only. Try our full plan for tax + Social Security modeling.</p>
              </div>
              <div className="bg-slate-900 text-white rounded-2xl p-7 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Projected at 65</p>
                <p className="mt-2 text-5xl font-bold" style={{ fontFamily: theme.fontHeading }}>${projected}k</p>
                <p className="mt-2 text-sm text-slate-300">Could support ~${Math.round(projected*40/12).toLocaleString()}/mo in retirement at a 4% withdrawal rate.</p>
                <button className="mt-6 w-full py-3 rounded-full bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors">Get Full Plan from Pinnacle →</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel color={theme.accentText}>Our Approach</SectionLabel>
            <h2 className="text-4xl sm:text-5xl text-slate-900 max-w-2xl" style={{ fontFamily: theme.fontHeading }}>Fee-only. Fiduciary. Always in your corner.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Discover", d: "Free intro call to understand your goals and current situation." },
              { n: "02", t: "Plan", d: "Custom financial plan with clear next steps. Yours to keep." },
              { n: "03", t: "Implement", d: "We coordinate accounts, allocations, and tax strategy." },
              { n: "04", t: "Review", d: "Quarterly check-ins. Annual deep-dive. 24/7 portal access." },
            ].map(s => (
              <Reveal key={s.n}>
                <div className="border-l-2 border-amber-500 pl-5">
                  <p className="text-xs text-amber-700 font-bold">{s.n}</p>
                  <p className="mt-1 text-lg font-bold text-slate-900" style={{ fontFamily: theme.fontHeading }}>{s.t}</p>
                  <p className="mt-2 text-sm text-slate-600">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: theme.fontHeading }}>Let's see if we're a fit.</h2>
            <p className="mt-3 text-slate-300">30-minute intro call. No pressure, no product pitch. Just a conversation.</p>
            <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3.5 text-sm font-semibold transition-colors">
              <Phone className="h-4 w-4" /> Schedule Intro Call
            </a>
          </Reveal>
        </div>
      </section>

      <AIChatWidget
        script={{
          title: "Pinnacle AI Advisor",
          subtitle: "Education · Modeling · Scheduling",
          greeting: "Welcome to Pinnacle Wealth. I'm our AI assistant — I can run quick projections, explain how we work, or schedule an intro call with an advisor. What would you like to explore?",
          quickReplies: ["Can I retire at 60?", "How do you charge?", "Roth conversion question", "Book intro call"],
          responses: [
            { match: ["retire", "retirement", "early"], reply: "Most clients ask this. Three factors: current portfolio, savings rate, and target spending. Try our calculator above for a baseline, then book a call for tax-aware Monte Carlo modeling." },
            { match: ["fee", "charge", "cost", "price", "aum"], reply: "Fee-only: 1% on the first $1M, declining to 0.40% above $5M. No commissions, no kickbacks, no product sales. Some clients prefer flat-fee planning at $7,500/yr." },
            { match: ["roth", "conversion", "ira", "401k"], reply: "Roth conversions work well in low-income years (between retirement and Social Security). We model the right amount each year to stay below IRMAA cliffs. Worth a 30-min call." },
            { match: ["book", "call", "schedule", "meet"], reply: "Happy to. We have Thursday 2pm and Friday 10am open this week. Intro call is 30 min, free, no pressure. Want me to send the calendar link?" },
            { match: ["rsu", "stock", "equity", "iso", "nso"], reply: "Equity comp is one of our specialties. Common move: 10b5-1 plan + tax-aware diversification + ISO/AMT modeling. Many of our clients are tech execs and founders." },
          ],
          fallback: "I can help with planning questions, retirement modeling, fees, or scheduling. What can I help with?",
          accentBg: "bg-slate-900",
          accentText: "text-amber-700",
          buttonLabel: "Ask Pinnacle",
        }}
      />
    </DemoShell>
  );
}
