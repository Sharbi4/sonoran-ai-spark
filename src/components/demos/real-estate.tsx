import { useState } from "react";
import { Home, MapPin, Bed, Bath, Square, Heart, Search, TrendingUp, ChevronRight } from "lucide-react";
import { DemoShell, MonogramLogo, Reveal, SectionLabel, type DemoShellTheme } from "./shell";
import { AIChatWidget } from "./ai-chat";
import { cn } from "@/lib/utils";

const theme: DemoShellTheme = {
  accentText: "text-emerald-700",
  accentBg: "bg-emerald-700",
  accentSoft: "bg-emerald-50",
  logoFrom: "#10B981",
  logoTo: "#065F46",
  fontBody: "'Inter', sans-serif",
  fontHeading: "'Playfair Display', serif",
  pageBg: "#FAFAF7",
  pageFg: "#1A1F1B",
};

const LISTINGS = [
  { price: "$1,245,000", beds: 4, baths: 3.5, sqft: 3120, addr: "8742 E Vista Bonita Dr", city: "North Scottsdale", tag: "New", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80" },
  { price: "$875,000", beds: 3, baths: 2, sqft: 2240, addr: "1620 W Camino Real", city: "Paradise Valley", tag: "Open Sat", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80" },
  { price: "$2,450,000", beds: 5, baths: 4.5, sqft: 4880, addr: "10455 N Mummy Mountain", city: "Paradise Valley", tag: "Luxury", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80" },
  { price: "$640,000", beds: 3, baths: 2, sqft: 1980, addr: "405 E Highland Ave", city: "Phoenix · Arcadia", tag: "Hot", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80" },
  { price: "$1,895,000", beds: 4, baths: 4, sqft: 3650, addr: "7811 E Mariposa Grande", city: "Scottsdale · McCormick", tag: "Pool", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
  { price: "$525,000", beds: 2, baths: 2, sqft: 1420, addr: "44 W Portland St #305", city: "Downtown Phoenix", tag: "Loft", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" },
];

const AGENTS = [
  { name: "Carla Mendez", title: "Founder · Lic. SA123456", sales: "$48M sold in 2025", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Devin Park", title: "Luxury Specialist", sales: "$31M sold in 2025", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { name: "Joelle Stratton", title: "Buyer's Agent", sales: "62 families placed", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" },
  { name: "Marcus Hale", title: "New Construction", sales: "Toll Bros · Taylor Morrison", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
];

export default function RealEstateDemo() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Under $750k", "$750k–$1.5M", "Luxury $1.5M+", "Open This Weekend"];

  return (
    <DemoShell
      slug="real-estate"
      brandName="Sonoran Realty Group"
      tagline="Boutique brokerage serving Phoenix, Scottsdale, and Paradise Valley."
      phone="(602) 555-7700"
      city="Scottsdale, Arizona"
      navLinks={[
        { label: "Search Homes", href: "#listings" },
        { label: "Sell", href: "#valuation" },
        { label: "Neighborhoods", href: "#neighborhoods" },
        { label: "Agents", href: "#agents" },
        { label: "Market Report", href: "#market" },
      ]}
      primaryCta={{ label: "Free Home Valuation", href: "#valuation" }}
      secondaryCta={{ label: "Sign In", href: "#" }}
      logo={<MonogramLogo initials="SR" theme={theme} shape="square" />}
      theme={theme}
    >
      {/* HERO with smart search */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900" />
        <img aria-hidden src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=80" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-950/80 via-emerald-900/70 to-teal-950/90" />
        <div aria-hidden className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3), transparent 50%)" }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-28 pb-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-200 font-medium">Phoenix · Scottsdale · Paradise Valley</p>
            <h1 className="mt-5 max-w-3xl text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-white" style={{ fontFamily: theme.fontHeading }}>
              Find the home that <em className="text-emerald-300">fits your life</em>.
            </h1>
            <p className="mt-6 max-w-xl text-emerald-100/80 leading-relaxed text-lg">
              AI-powered home search with hyper-local market data. Curated by Arizona's top boutique agents.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 bg-white rounded-2xl shadow-2xl p-2 max-w-3xl flex items-center gap-2">
              <Search className="h-5 w-5 text-emerald-700 ml-3" />
              <input className="flex-1 h-12 outline-none text-sm text-gray-900" placeholder="Try: '4 bed in Arcadia under $1M with a pool'" />
              <button className={cn("h-12 px-6 rounded-xl text-white text-sm font-medium", theme.accentBg)}>Search</button>
            </div>
            <p className="mt-3 text-xs text-emerald-200/70">Powered by Sonoran AI · Natural language understands neighborhoods, schools, lot size, and features.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white">
            {[
              { v: "847", l: "Active Listings" },
              { v: "$2.4M", l: "Avg North Scottsdale" },
              { v: "12 days", l: "Median DOM" },
              { v: "+4.2%", l: "YoY Appreciation" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-3xl font-bold" style={{ fontFamily: theme.fontHeading }}>{s.v}</p>
                <p className="text-xs text-emerald-200/70 uppercase tracking-wider mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section id="listings" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <SectionLabel color={theme.accentText}>Featured Listings</SectionLabel>
                <h2 className="text-4xl sm:text-5xl text-emerald-950" style={{ fontFamily: theme.fontHeading }}>Newly listed homes.</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map(f => (
                  <button key={f} onClick={() => setFilter(f)} className={cn(
                    "px-3.5 py-1.5 text-xs rounded-full border transition-colors",
                    filter === f ? "bg-emerald-700 text-white border-emerald-700" : "bg-white border-gray-200 text-gray-700 hover:border-emerald-400",
                  )}>{f}</button>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LISTINGS.map((l) => (
              <Reveal key={l.addr}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={l.img} alt={l.addr} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <span className="absolute top-3 left-3 bg-white text-emerald-800 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">{l.tag}</span>
                    <button className="absolute top-3 right-3 h-9 w-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white">
                      <Heart className="h-4 w-4 text-emerald-700" />
                    </button>
                  </div>
                  <div className="p-5">
                    <p className="text-2xl font-bold text-emerald-950" style={{ fontFamily: theme.fontHeading }}>{l.price}</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">{l.addr}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1"><MapPin className="h-3 w-3" /> {l.city}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-600 border-t pt-3">
                      <span className="flex items-center gap-1"><Bed className="h-3.5 w-3.5" /> {l.beds}</span>
                      <span className="flex items-center gap-1"><Bath className="h-3.5 w-3.5" /> {l.baths}</span>
                      <span className="flex items-center gap-1"><Square className="h-3.5 w-3.5" /> {l.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUATION */}
      <section id="valuation" className="py-24 bg-emerald-50/60 border-y border-emerald-100">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionLabel color={theme.accentText}>Sellers</SectionLabel>
            <h2 className="text-4xl sm:text-5xl text-emerald-950" style={{ fontFamily: theme.fontHeading }}>What's your home worth?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">Instant AI valuation based on the last 90 days of comps within 0.5 miles. We pull MLS, tax records, and recent sales — plus a human review from your local agent.</p>
            <ul className="mt-6 space-y-2.5 text-sm text-gray-700">
              {["Comps from your exact neighborhood", "Trend analysis: 30/60/90 day", "Listing strategy session (free)"].map(x => (
                <li key={x} className="flex gap-2"><TrendingUp className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" /> {x}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl shadow-xl p-7 border border-emerald-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">Free Home Valuation</p>
              <div className="space-y-3">
                <input className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm" placeholder="Street address" defaultValue="8742 E Vista Bonita Dr" />
                <div className="grid grid-cols-2 gap-3">
                  <input className="h-11 rounded-lg border border-gray-200 px-3 text-sm" placeholder="Beds" defaultValue="4" />
                  <input className="h-11 rounded-lg border border-gray-200 px-3 text-sm" placeholder="Baths" defaultValue="3.5" />
                </div>
                <input className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm" placeholder="Your email" />
              </div>
              <button className={cn("mt-4 w-full h-12 rounded-full text-white font-medium", theme.accentBg)}>Get Estimate</button>
              <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wider">Estimated value</p>
                <p className="text-3xl font-bold text-emerald-950 mt-1" style={{ fontFamily: theme.fontHeading }}>$1,180,000 — $1,310,000</p>
                <p className="text-[11px] text-gray-500 mt-1">Based on 7 comps closed in last 90 days</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AGENTS */}
      <section id="agents" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel color={theme.accentText}>Meet The Team</SectionLabel>
              <h2 className="text-4xl sm:text-5xl text-emerald-950" style={{ fontFamily: theme.fontHeading }}>Local experts. Concierge service.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AGENTS.map(a => (
              <Reveal key={a.name}>
                <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative overflow-hidden">
                    <img src={a.img} alt={a.name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <p className="text-lg font-bold text-emerald-950" style={{ fontFamily: theme.fontHeading }}>{a.name}</p>
                    <p className="text-xs text-emerald-700 uppercase tracking-wider mt-1 font-semibold">{a.title}</p>
                    <p className="text-xs text-gray-500 mt-2">{a.sales}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section id="neighborhoods" className="py-24 bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel color="text-emerald-300">Neighborhoods</SectionLabel>
            <h2 className="text-4xl sm:text-5xl mb-10" style={{ fontFamily: theme.fontHeading }}>Where will you call home?</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "Arcadia", c: 47, img: "photo-1568605114967-8130f3a36994" },
              { n: "Paradise Valley", c: 32, img: "photo-1600585154340-be6161a56a0c" },
              { n: "North Scottsdale", c: 84, img: "photo-1613977257363-707ba9348227" },
              { n: "Old Town", c: 21, img: "photo-1505691938895-1758d7feb511" },
              { n: "Downtown Phoenix", c: 38, img: "photo-1518790268985-3f9adbed1cbf" },
              { n: "Biltmore", c: 19, img: "photo-1582268611958-ebfd161ef9cf" },
              { n: "Ahwatukee", c: 56, img: "photo-1593604340846-4fbe9763a8f3" },
              { n: "Cave Creek", c: 28, img: "photo-1564540583246-934409427776" },
            ].map((p, i) => (
              <Reveal key={p.n} delay={(i % 4) * 0.05}>
                <a href="#" className="block aspect-[5/3] rounded-2xl relative overflow-hidden group">
                  <img src={`https://images.unsplash.com/${p.img}?auto=format&fit=crop&w=800&q=80`} alt={p.n} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-lg font-bold" style={{ fontFamily: theme.fontHeading }}>{p.n}</p>
                    <p className="text-xs text-emerald-200">{p.c} listings →</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AIChatWidget
        script={{
          title: "Sonoran AI Home Finder",
          subtitle: "Search, schedule tours, valuations",
          greeting: "Hi! I'm Sonoran Realty's AI agent. I can find homes that match what you want, book showings, or estimate your home's value. What are you looking for?",
          quickReplies: ["Homes under $800k in Arcadia", "Tour Saturday morning", "What's my home worth?", "Show luxury with a pool"],
          responses: [
            { match: ["arcadia", "under 800", "phoenix"], reply: "I see 6 active Arcadia listings under $800k right now. The strongest match: 405 E Highland Ave — 3bd/2ba, $640k, just listed. Want me to schedule a tour?" },
            { match: ["tour", "showing", "saturday", "visit"], reply: "I have Devin Park open Saturday 9am, 11am, or 2pm. I'll send a calendar link and the listing brochure. Which time works?" },
            { match: ["worth", "valuation", "sell", "value"], reply: "I can run an instant AI valuation — just need your street address. We pull comps within 0.5 miles from the last 90 days. Most clients hear back within 60 seconds." },
            { match: ["luxury", "pool", "1.5", "1.5m", "expensive"], reply: "Two great ones above $1.5M with pools: 10455 N Mummy Mountain ($2.45M, 5bd) and 7811 E Mariposa Grande ($1.895M, 4bd). Want full packets?" },
            { match: ["school", "district"], reply: "I rank listings by GreatSchools score and walking distance. Tell me grades (K-5, 6-8, 9-12) and I'll filter — most popular: Scottsdale Unified and Madison." },
          ],
          fallback: "I can help with home search, scheduling tours, valuations, or neighborhood info. What would you like to do?",
          accentBg: "bg-emerald-700",
          accentText: "text-emerald-700",
          buttonLabel: "Ask Sonoran AI",
        }}
      />
    </DemoShell>
  );
}
