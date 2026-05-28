import { useState } from "react";
import { HardHat, Wrench, Home, Hammer, Sparkles, Star, Phone, ChevronRight, MapPin, Calendar, Shield } from "lucide-react";
import { DemoShell, IconLogo, Reveal, SectionLabel, type DemoShellTheme } from "./shell";
import { AIChatWidget } from "./ai-chat";
import { cn } from "@/lib/utils";

const theme: DemoShellTheme = {
  accentText: "text-orange-700",
  accentBg: "bg-orange-600",
  accentSoft: "bg-orange-50",
  logoFrom: "#EA580C",
  logoTo: "#7C2D12",
  fontBody: "'DM Sans', sans-serif",
  fontHeading: "'Sora', sans-serif",
  pageBg: "#ffffff",
  pageFg: "#0F0F0F",
};

const SERVICES = [
  { icon: Home, name: "Roofing", desc: "Tear-off, re-roof, repair. Owens Corning Platinum certified." },
  { icon: Hammer, name: "Kitchen & Bath Remodel", desc: "Design-build remodels for AZ homes. 3D renderings before we swing a hammer." },
  { icon: Wrench, name: "Room Additions", desc: "Permitted ADUs, master suites, and second-story builds across Pima County." },
  { icon: Sparkles, name: "Outdoor Living", desc: "Custom patios, ramadas, outdoor kitchens. Built for monsoon and 110° summers." },
  { icon: Shield, name: "Solar & EV Charging", desc: "Roof-integrated solar, battery storage, and Level 2 home chargers." },
  { icon: HardHat, name: "General Contracting", desc: "ROC #312456 licensed, bonded, insured. We pull permits and handle inspections." },
];

const PROJECTS = [
  { title: "Catalina Foothills Kitchen", scope: "Full remodel · 850 sqft", duration: "9 weeks" },
  { title: "Sabino Canyon ADU", scope: "Detached casita · 720 sqft", duration: "14 weeks" },
  { title: "Oro Valley Re-Roof", scope: "Tile-to-metal conversion · 4,200 sqft", duration: "12 days" },
  { title: "Dove Mountain Pool Patio", scope: "Travertine + ramada + kitchen", duration: "6 weeks" },
  { title: "Tanque Verde Master Suite", scope: "Addition + walk-in closet", duration: "11 weeks" },
  { title: "Marana Solar Install", scope: "12 kW system + battery", duration: "4 days" },
];

const REVIEWS = [
  { name: "Janet K.", area: "Catalina Foothills", text: "Showed up when they said. Cleaned up every day. Final price matched the bid to the dollar. I never write reviews — but they earned it.", stars: 5 },
  { name: "Marcus T.", area: "Oro Valley", text: "Their text updates during the roof tear-off were honestly impressive. Knew exactly what was happening every day.", stars: 5 },
  { name: "Linda H.", area: "Sahuarita", text: "Got 4 bids on our remodel. Summit was the only one with a real 3D rendering and a written schedule. No surprises.", stars: 5 },
];

export default function ContractorsDemo() {
  const [proj, setProj] = useState("Kitchen Remodel");
  const [size, setSize] = useState("Medium ($25k–$60k)");

  return (
    <DemoShell
      slug="contractors"
      brandName="Summit Builders"
      tagline="Licensed general contractor serving Tucson and Pima County since 2008. ROC #312456."
      phone="(520) 555-7700"
      city="Tucson, Arizona"
      navLinks={[
        { label: "Services", href: "#services" },
        { label: "Recent Projects", href: "#projects" },
        { label: "Instant Estimate", href: "#estimate" },
        { label: "Reviews", href: "#reviews" },
        { label: "Service Areas", href: "#areas" },
      ]}
      primaryCta={{ label: "Get Free Quote", href: "#estimate" }}
      secondaryCta={{ label: "Call (520) 555-7700", href: "tel:+15205557700" }}
      logo={<IconLogo icon={HardHat} theme={theme} shape="square" />}
      theme={theme}
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "linear-gradient(135deg, #1A0F08 0%, #2B1810 50%, #4A2510 100%)" }} />
        <div aria-hidden className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'><path d='M0 80L80 0M-20 60L60 -20M20 100L100 20' stroke='%23EA580C' stroke-width='1'/></svg>\")", backgroundSize: "80px 80px" }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-28 pb-24 text-white grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/20 border border-orange-400/30 px-3 py-1 text-xs text-orange-200">
              <Shield className="h-3 w-3" /> Licensed · Bonded · Insured · ROC #312456
            </div>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] font-bold" style={{ fontFamily: theme.fontHeading }}>
              Built right.<br /><span className="text-orange-400">On time.</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/75 leading-relaxed">
              Roofing, remodels, and additions for Tucson homeowners. Written schedules, daily progress texts, and a final price that matches the bid.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#estimate" className={cn("inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold text-white", theme.accentBg)}>
                Get a Free Quote <ChevronRight className="h-4 w-4" />
              </a>
              <a href="tel:+15205557700" className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-6 py-3.5 text-sm font-semibold">
                <Phone className="h-4 w-4" /> (520) 555-7700
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div><p className="text-3xl font-bold text-orange-400">17</p><p className="text-xs text-white/60">Years in business</p></div>
              <div><p className="text-3xl font-bold text-orange-400">680+</p><p className="text-xs text-white/60">Projects completed</p></div>
              <div><p className="text-3xl font-bold text-orange-400">4.9★</p><p className="text-xs text-white/60">Google rating</p></div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-500 via-orange-700 to-red-900 relative">
                <div className="absolute inset-0 -z-10 opacity-50" style={{ backgroundImage: "linear-gradient(45deg, rgba(0,0,0,0.3) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.3) 75%, transparent 75%)", backgroundSize: "40px 40px" }} />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 backdrop-blur p-4">
                  <p className="text-[10px] uppercase tracking-wider text-orange-700 font-bold">Featured Project</p>
                  <p className="mt-1 font-semibold text-gray-900">Catalina Foothills Kitchen Remodel</p>
                  <p className="text-xs text-gray-500">Completed Mar 2025 · 9 weeks · On budget</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 rounded-xl bg-white shadow-xl p-3 text-xs text-gray-700 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Booking summer projects now
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel color={theme.accentText}>Services</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900" style={{ fontFamily: theme.fontHeading }}>What we build.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.04}>
                <div className="group h-full border-2 border-gray-100 bg-white p-7 rounded-xl hover:border-orange-500 transition-colors">
                  <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center", theme.accentSoft)}>
                    <s.icon className={cn("h-6 w-6", theme.accentText)} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-gray-900" style={{ fontFamily: theme.fontHeading }}>{s.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <SectionLabel color={theme.accentText}>Recent Projects</SectionLabel>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900" style={{ fontFamily: theme.fontHeading }}>Built across Tucson.</h2>
              </div>
              <a href="#" className={cn("text-sm font-semibold flex items-center gap-1", theme.accentText)}>See full portfolio →</a>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-orange-200 via-amber-300 to-red-400">
                    <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(0,0,0,0.4), transparent 50%)" }} />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-gray-900 uppercase">
                      {i % 2 === 0 ? "Before/After" : "Build Process"}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-semibold text-gray-900">{p.title}</p>
                    <p className="mt-1 text-xs text-gray-500">{p.scope}</p>
                    <p className={cn("mt-2 text-xs font-medium", theme.accentText)}>{p.duration} · On schedule</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTANT ESTIMATE */}
      <section id="estimate" className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel color={theme.accentText}>Free Quote</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900" style={{ fontFamily: theme.fontHeading }}>Get an instant ballpark.</h2>
              <p className="mt-4 text-gray-600">Pick your project. Get a real budget range in seconds, then book a free on-site estimate.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2 block">Project Type</label>
                  <select value={proj} onChange={(e) => setProj(e.target.value)} className="w-full h-12 rounded-lg border border-gray-300 px-4 bg-white text-sm">
                    {["Kitchen Remodel", "Bathroom Remodel", "Room Addition", "Re-Roof", "Outdoor Living", "Solar Install"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2 block">Budget Range</label>
                  <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full h-12 rounded-lg border border-gray-300 px-4 bg-white text-sm">
                    {["Small (<$15k)", "Medium ($25k–$60k)", "Large ($60k–$150k)", "Premium ($150k+)"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-6 p-6 bg-white rounded-xl border-2 border-orange-200">
                <p className="text-xs uppercase tracking-wider text-orange-700 font-bold">Estimated Range</p>
                <p className="mt-2 text-4xl font-bold text-gray-900" style={{ fontFamily: theme.fontHeading }}>
                  {proj === "Kitchen Remodel" ? "$38k – $72k" :
                   proj === "Bathroom Remodel" ? "$18k – $42k" :
                   proj === "Room Addition" ? "$95k – $220k" :
                   proj === "Re-Roof" ? "$12k – $28k" :
                   proj === "Outdoor Living" ? "$22k – $85k" : "$18k – $45k"}
                </p>
                <p className="mt-1 text-sm text-gray-500">Typical Tucson cost for this project size. Final quote requires on-site visit.</p>
              </div>
              <div className="mt-5 grid sm:grid-cols-3 gap-3">
                <input placeholder="Name" className="h-12 rounded-lg border border-gray-300 px-4 text-sm bg-white" />
                <input placeholder="Phone" className="h-12 rounded-lg border border-gray-300 px-4 text-sm bg-white" />
                <input placeholder="Zip code" className="h-12 rounded-lg border border-gray-300 px-4 text-sm bg-white" />
              </div>
              <button className={cn("mt-4 w-full h-13 py-3.5 rounded-lg text-white font-semibold flex items-center justify-center gap-2", theme.accentBg)}>
                <Calendar className="h-4 w-4" /> Book My Free On-Site Estimate
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="flex justify-center gap-1 mb-4">{[1,2,3,4,5].map(n => <Star key={n} className="h-6 w-6 text-yellow-400 fill-yellow-400" />)}</div>
              <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: theme.fontHeading }}>4.9 on Google · 287 reviews</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <Reveal key={r.name}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex gap-0.5 mb-3">{Array(r.stars).fill(0).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
                  <p className="text-sm text-white/85 leading-relaxed">"{r.text}"</p>
                  <p className="mt-4 text-sm font-medium text-white">{r.name}</p>
                  <p className="text-xs text-white/50">{r.area} · Google Review</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
          <Reveal>
            <SectionLabel color={theme.accentText}>Service Areas</SectionLabel>
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: theme.fontHeading }}>Serving all of Pima County.</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
              {["Tucson", "Catalina Foothills", "Oro Valley", "Marana", "Sahuarita", "Vail", "Dove Mountain", "Tanque Verde", "Green Valley"].map(c => (
                <span key={c} className="px-4 py-2 rounded-full bg-orange-50 text-orange-700 border border-orange-200 flex items-center gap-1.5"><MapPin className="h-3 w-3" />{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <AIChatWidget
        script={{
          title: "Summit AI Estimator",
          subtitle: "Quotes, scheduling, follow-ups",
          greeting: "Hey! I'm Summit's AI estimator. Tell me what you're building or repairing and I can give you a real ballpark plus get you on the schedule. What's the project?",
          quickReplies: ["Kitchen remodel cost?", "When can you roof my house?", "Build an ADU", "Solar quote"],
          responses: [
            { match: ["kitchen", "remodel"], reply: "Tucson kitchen remodels typically run $38k–$72k for mid-grade and $75k–$140k for a full custom build. Most jobs take 8–12 weeks. Want me to book a free on-site measurement?" },
            { match: ["roof", "roofing", "leak"], reply: "We can usually inspect within 48 hours. Most re-roofs run $12k–$28k depending on tile vs metal vs shingle. If it's an active leak, we offer same-week emergency service — what's your zip?" },
            { match: ["adu", "casita", "addition", "guest house"], reply: "ADUs in Pima County typically run $180k–$320k turn-key (design + permits + build) for 600–900 sqft. We handle the entire permit process. Lead time is currently 10–12 weeks to break ground." },
            { match: ["solar", "ev", "battery", "panel"], reply: "We install Tesla, Enphase, and SolarEdge systems. Typical 10–12kW system runs $24k–$34k before federal tax credit. Battery storage adds $14k–$22k. Free design takes about 24 hours." },
            { match: ["bath", "bathroom", "shower"], reply: "Bathroom remodels run $18k–$42k depending on whether we're moving plumbing. Most projects take 4–6 weeks. Want a free design consult?" },
            { match: ["patio", "outdoor", "kitchen", "ramada"], reply: "Outdoor living is one of our specialties. Travertine patios run $14k–$30k, ramadas with outdoor kitchens $35k–$85k. Booked through July currently — want to lock in fall?" },
            { match: ["financing", "payment", "loan"], reply: "We partner with Hearth and GreenSky for 0% APR financing up to 18 months. No prepayment penalties. Pre-qualifying takes 60 seconds with no credit hit." },
          ],
          fallback: "Got it — let me get an estimator out to take a look. Can you share your zip code, project type, and best time to reach you?",
          accentBg: "bg-orange-600",
          accentText: "text-orange-700",
          buttonLabel: "Instant Estimate",
        }}
      />
    </DemoShell>
  );
}