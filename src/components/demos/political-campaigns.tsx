import { Vote, Megaphone, Users, MapPin, Heart, Calendar, ChevronRight, TrendingUp } from "lucide-react";
import { DemoShell, MonogramLogo, Reveal, SectionLabel, type DemoShellTheme } from "./shell";
import { AIChatWidget } from "./ai-chat";
import { cn } from "@/lib/utils";

const theme: DemoShellTheme = {
  accentText: "text-red-700",
  accentBg: "bg-red-700",
  accentSoft: "bg-red-50",
  logoFrom: "#DC2626",
  logoTo: "#1E3A8A",
  fontBody: "'Inter', sans-serif",
  fontHeading: "'Archivo Black', sans-serif",
  pageBg: "#FFFFFF",
  pageFg: "#0A0F1F",
};

const ISSUES = [
  { t: "Affordable Housing", d: "Build 10,000 attainable homes in District 4 by 2030." },
  { t: "Public Safety", d: "Fund community policing + crisis-response co-responders." },
  { t: "Water Future", d: "Lead Arizona's water-resilience plan for the next century." },
  { t: "Small Business", d: "Cut red tape and grow local entrepreneurship." },
];

export default function PoliticalCampaignsDemo() {
  return (
    <DemoShell
      slug="political-campaigns"
      brandName="Maria Vasquez for Arizona"
      tagline="Working Arizonans first. Paid for by Vasquez for AZ."
      phone="(602) 555-2024"
      city="District 4, Arizona"
      navLinks={[
        { label: "Meet Maria", href: "#about" },
        { label: "Issues", href: "#issues" },
        { label: "Events", href: "#events" },
        { label: "Volunteer", href: "#volunteer" },
        { label: "Donate", href: "#donate" },
      ]}
      primaryCta={{ label: "Donate", href: "#donate" }}
      secondaryCta={{ label: "Volunteer", href: "#volunteer" }}
      logo={<MonogramLogo initials="MV" theme={theme} shape="square" />}
      theme={theme}
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-red-700 via-red-800 to-blue-900" />
        <img aria-hidden src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1800&q=80" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30 mix-blend-overlay" />
        <div aria-hidden className="absolute inset-0 -z-10 opacity-15" style={{ backgroundImage: "repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 60px)" }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-24 text-white">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">Vote Nov 5 · Early Voting Oct 9</span>
            <h1 className="mt-5 text-6xl sm:text-7xl lg:text-8xl leading-[0.95] uppercase max-w-4xl" style={{ fontFamily: theme.fontHeading }}>
              Arizona<br /><span className="text-amber-300">Comes First.</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/90 leading-relaxed text-lg">
              Maria Vasquez is running for State Senate District 4 — to fight for housing, water, and working families.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#donate" className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-blue-950 hover:bg-amber-300 px-7 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg transition-colors">
                Donate Now <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#volunteer" className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-white/10">
                Volunteer
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[{v:"24,512",l:"Donors"},{v:"1,810",l:"Volunteers"},{v:"$1.2M",l:"Raised Q3"},{v:"68%",l:"Local Donors"}].map(s=>(
                <div key={s.l}><p className="text-3xl font-bold text-amber-300" style={{fontFamily:theme.fontHeading}}>{s.v}</p><p className="text-[11px] text-white/70 mt-1 uppercase tracking-wider">{s.l}</p></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="py-20 bg-blue-950 text-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <SectionLabel color="text-amber-300">Chip In</SectionLabel>
              <h2 className="text-4xl sm:text-5xl uppercase" style={{ fontFamily: theme.fontHeading }}>Every dollar fights back.</h2>
              <p className="mt-3 text-white/70">Goal for Sept: $250,000 · $182,400 raised so far</p>
              <div className="mt-4 mx-auto max-w-md h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400" style={{ width: "73%" }} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white text-blue-950 rounded-3xl shadow-2xl p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-red-700">One-time gift</p>
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-2">
                {["$10", "$25", "$50", "$100", "$250", "Other"].map((a, i) => (
                  <button key={a} className={cn(
                    "py-3 rounded-xl text-sm font-bold border-2",
                    i === 2 ? "bg-red-700 text-white border-red-700" : "bg-white border-blue-200 hover:border-red-400",
                  )}>{a}</button>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked className="accent-red-700" id="rec" />
                <label htmlFor="rec" className="text-blue-900">Make this monthly · double your impact</label>
              </div>
              <button className="mt-5 w-full h-12 rounded-full bg-red-700 text-white font-bold uppercase tracking-wider hover:bg-red-800 transition-colors">Donate $50 · Monthly</button>
              <p className="mt-3 text-[11px] text-blue-700 text-center">Contributions to Vasquez for AZ are not tax-deductible. Federal contribution limits apply.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ISSUES */}
      <section id="issues" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionLabel color={theme.accentText}>Where Maria Stands</SectionLabel>
              <h2 className="text-4xl sm:text-5xl uppercase text-blue-950" style={{ fontFamily: theme.fontHeading }}>The fight ahead.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ISSUES.map((i, k) => (
              <Reveal key={i.t}>
                <div className="rounded-2xl p-7 border-2 border-red-100 bg-red-50 hover:bg-white hover:shadow-lg hover:border-red-300 transition-all">
                  <p className="text-[11px] text-red-700 font-bold uppercase tracking-wider">{String(k+1).padStart(2,"0")} · Priority</p>
                  <p className="mt-2 text-xl uppercase text-blue-950" style={{ fontFamily: theme.fontHeading }}>{i.t}</p>
                  <p className="mt-2 text-sm text-blue-900/70 leading-relaxed">{i.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-24 bg-red-50/60 border-y border-red-100">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <SectionLabel color={theme.accentText}>On The Trail</SectionLabel>
                <h2 className="text-4xl uppercase text-blue-950" style={{ fontFamily: theme.fontHeading }}>Upcoming events.</h2>
              </div>
              <a href="#" className="text-sm font-bold text-red-700 hover:underline">View full calendar →</a>
            </div>
          </Reveal>
          <div className="space-y-3">
            {[
              { d: "SEP 12", t: "Town Hall: Housing Costs in Phoenix", l: "Encanto Park Pavilion · 6:30pm", a: "RSVP" },
              { d: "SEP 18", t: "Coffee with Maria", l: "Lola's on Camelback · 8:00am", a: "RSVP" },
              { d: "SEP 22", t: "Volunteer Canvass · District 4 East", l: "Campaign HQ · 10am", a: "Sign Up" },
              { d: "OCT 02", t: "Debate Watch Party", l: "Heritage Square · 7:00pm", a: "RSVP" },
            ].map(e => (
              <Reveal key={e.t}>
                <div className="bg-white border border-red-100 rounded-2xl p-5 flex items-center gap-5 hover:shadow-md transition-shadow">
                  <div className="text-center bg-red-700 text-white rounded-xl px-4 py-3 min-w-[70px]">
                    <p className="text-[10px] uppercase tracking-wider">{e.d.split(" ")[0]}</p>
                    <p className="text-2xl font-bold" style={{ fontFamily: theme.fontHeading }}>{e.d.split(" ")[1]}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-blue-950 uppercase text-sm" style={{ fontFamily: theme.fontHeading }}>{e.t}</p>
                    <p className="text-xs text-blue-900/60 mt-1 flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.l}</p>
                  </div>
                  <button className="bg-red-700 hover:bg-red-800 text-white rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors">{e.a}</button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" className="py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionLabel color={theme.accentText}>Join The Team</SectionLabel>
            <h2 className="text-4xl sm:text-5xl uppercase text-blue-950" style={{ fontFamily: theme.fontHeading }}>Volunteer.</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">Whether you have 1 hour or 10, we'll match you to what fits — phone banking, canvassing, sign waving, or hosting your neighbors.</p>
            <ul className="mt-6 space-y-2 text-sm text-blue-900">
              {[{i:Users,t:"Canvass with a partner"},{i:Heart,t:"Phone bank from home"},{i:Megaphone,t:"Host a coffee party"},{i:Vote,t:"Drive voters to the polls"}].map(x=>(
                <li key={x.t} className="flex gap-3 items-center"><x.i className="h-4 w-4 text-red-700" /> {x.t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl shadow-xl border border-red-100 p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-red-700">Sign Up</p>
              <div className="mt-4 space-y-3">
                <input className="w-full h-11 rounded-lg border border-blue-200 px-3 text-sm" placeholder="Full name" />
                <input className="w-full h-11 rounded-lg border border-blue-200 px-3 text-sm" placeholder="Mobile (for SMS reminders)" />
                <input className="w-full h-11 rounded-lg border border-blue-200 px-3 text-sm" placeholder="ZIP code" />
                <select className="w-full h-11 rounded-lg border border-blue-200 px-3 text-sm">
                  <option>Canvassing — knock doors</option>
                  <option>Phone bank — from home</option>
                  <option>Host a coffee party</option>
                  <option>Tech / data team</option>
                </select>
              </div>
              <button className="mt-5 w-full h-12 rounded-full bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-wider transition-colors">I'm In</button>
            </div>
          </Reveal>
        </div>
      </section>

      <AIChatWidget
        script={{
          title: "Campaign Connect",
          subtitle: "Issues · Events · Volunteer",
          greeting: "Hi! I'm Maria's campaign AI. I can answer questions about her positions, find events near you, help you volunteer, or process a donation. What can I help you with?",
          quickReplies: ["Where does Maria stand on housing?", "Events near 85016", "I want to volunteer", "How do I donate?"],
          responses: [
            { match: ["housing", "rent", "affordable"], reply: "Maria has a 5-point plan: 10,000 new attainable homes by 2030, rent stabilization for seniors, zoning reform, first-time buyer assistance, and stronger tenant protections. Full plan at /issues/housing." },
            { match: ["water", "drought"], reply: "Water is THE Arizona issue. Maria supports a 100-year water plan: regulated groundwater pumping, infrastructure investment, and a moratorium on water-intensive new construction in vulnerable basins." },
            { match: ["event", "85016", "near", "town hall"], reply: "We have 3 events near 85016 this month: Town Hall on Housing (Sept 12), Coffee with Maria (Sept 18), and the Debate Watch Party (Oct 2). Want me to RSVP for you?" },
            { match: ["volunteer", "help", "canvass"], reply: "Amazing! We need canvassers, phone bankers, and party hosts. Even 2 hours a week makes a huge difference. Drop your ZIP and I'll match you to a captain in your turf." },
            { match: ["donate", "give", "contribute"], reply: "Every dollar matters and goes farther than corporate PAC money. $25 buys 100 doors knocked. $100 funds a phone bank shift. Want me to set up a one-time or monthly gift?" },
          ],
          fallback: "I can help with Maria's positions, events, volunteering, or donations. What would you like to know?",
          accentBg: "bg-red-700",
          accentText: "text-red-700",
          buttonLabel: "Ask the Campaign",
        }}
      />
    </DemoShell>
  );
}
