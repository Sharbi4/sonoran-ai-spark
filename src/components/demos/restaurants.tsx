import { useState } from "react";
import { Utensils, MapPin, Clock, Star, Leaf, Flame, Phone, ChevronRight, Calendar, Users } from "lucide-react";
import { DemoShell, MonogramLogo, Reveal, SectionLabel, type DemoShellTheme } from "./shell";
import { AIChatWidget } from "./ai-chat";
import { cn } from "@/lib/utils";

const theme: DemoShellTheme = {
  accentText: "text-amber-700",
  accentBg: "bg-amber-700",
  accentSoft: "bg-amber-50",
  logoFrom: "#B7541F",
  logoTo: "#5E1F11",
  fontBody: "'Lora', serif",
  fontHeading: "'Playfair Display', serif",
  fontDisplay: "'Playfair Display', serif",
  pageBg: "#FBF6EE",
  pageFg: "#1A1208",
};

const MENU = {
  starters: [
    { name: "Mesquite-Grilled Elote", desc: "Charred corn, cotija, lime crema, chili-lime salt.", price: "$11", tags: ["V", "GF"] },
    { name: "Sonoran Hot Honey Wings", desc: "Smoked wings, prickly pear hot honey, queso fresco.", price: "$15", tags: ["GF"] },
    { name: "Tableside Guacamole", desc: "Hass avocado, serrano, pomegranate, house chicharrón.", price: "$14", tags: ["V"] },
  ],
  mains: [
    { name: "Carne Asada Tasting", desc: "Skirt steak marinated 48 hours, smoked salsa roja, esquites.", price: "$34", tags: ["GF"] },
    { name: "Wood-Fired Branzino", desc: "Whole fish, lemon-caper salsa verde, charred citrus.", price: "$38", tags: ["GF"] },
    { name: "Carnitas Tacos al Carbon", desc: "Slow-braised pork shoulder, salsa de árbol, blue corn tortillas.", price: "$22", tags: [] },
    { name: "Cactus & Quinoa Bowl", desc: "Roasted nopales, ancient grains, smoked tomato, queso oaxaca.", price: "$19", tags: ["V", "GF"] },
  ],
  cocktails: [
    { name: "Smoked Old Fashioned", desc: "Mesquite-smoked bourbon, agave, orange bitters.", price: "$16" },
    { name: "Prickly Pear Margarita", desc: "Reposado tequila, fresh prickly pear, sal de gusano rim.", price: "$15" },
    { name: "Desert Negroni", desc: "Mezcal, Campari, sweet vermouth, grilled grapefruit.", price: "$15" },
  ],
};

const CATERING = [
  { tier: "Office Lunch", price: "$18 / person", min: "Min 10 people", includes: ["Taco bar (3 proteins)", "Beans, rice, salsa trio", "Disposable serviceware", "Same-day delivery"] },
  { tier: "Corporate Event", price: "$42 / person", min: "Min 25 people", includes: ["Hot food stations", "Two staffed servers", "Specialty cocktail station", "Setup + cleanup"], featured: true },
  { tier: "Private Dining", price: "Custom", min: "Min 30 people", includes: ["Full restaurant buyout", "Tasting-menu pairings", "Dedicated chef", "Branded menus"] },
];

export default function RestaurantsDemo() {
  const [tab, setTab] = useState<"starters" | "mains" | "cocktails">("mains");
  const [party, setParty] = useState(2);

  const logo = <MonogramLogo initials="CC" theme={theme} shape="circle" />;

  return (
    <DemoShell
      slug="restaurants"
      brandName="Copper Canyon Grill"
      tagline="Modern Sonoran cuisine in the heart of Tucson."
      phone="(520) 555-0142"
      city="Tucson, Arizona"
      navLinks={[
        { label: "Menu", href: "#menu" },
        { label: "Catering", href: "#catering" },
        { label: "Reservations", href: "#reservations" },
        { label: "Private Events", href: "#events" },
        { label: "Visit", href: "#visit" },
      ]}
      primaryCta={{ label: "Reserve a Table", href: "#reservations" }}
      secondaryCta={{ label: "Order Online", href: "#order" }}
      logo={logo}
      theme={theme}
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 30%, rgba(183,84,31,0.35) 0%, transparent 60%), radial-gradient(50% 60% at 10% 80%, rgba(94,31,17,0.4) 0%, transparent 65%), linear-gradient(180deg, #2A140A 0%, #1A0A04 100%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 sm:pt-28 pb-24 text-white">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300/90">Est. 2018 · James Beard Semifinalist</p>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-3xl" style={{ fontFamily: theme.fontHeading }}>
              The desert, on a plate.
            </h1>
            <p className="mt-6 max-w-xl text-white/75 leading-relaxed">
              Wood-fired Sonoran cooking, an heirloom mezcal program, and a courtyard built for long, slow dinners under the cottonwoods.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#reservations" className={cn("inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white", theme.accentBg)}>
                Reserve a Table <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#menu" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors">
                View the Menu
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-amber-300 text-amber-300" /> 4.8 · 1,247 reviews</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> Open until 11pm</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 4th Ave, Tucson</span>
            </div>
          </Reveal>
        </div>

        {/* Tonight's special floating card */}
        <Reveal delay={0.15}>
          <div className="relative -mt-12 mx-auto max-w-6xl px-5 sm:px-8">
            <div className="rounded-2xl bg-white shadow-2xl border border-amber-100 p-6 sm:p-8 grid sm:grid-cols-[1fr_auto] items-center gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-amber-700 font-semibold">Tonight's Tasting</p>
                <p className="mt-2 text-2xl text-gray-900" style={{ fontFamily: theme.fontHeading }}>Chef's 5-Course Mesquite Menu</p>
                <p className="mt-1 text-sm text-gray-600">Paired with reposado flight · Wednesday only · $89 per person</p>
              </div>
              <a href="#reservations" className={cn("rounded-full px-6 py-3 text-sm text-white font-medium", theme.accentBg)}>Book This Tasting</a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel color={theme.accentText}>The Menu</SectionLabel>
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: theme.fontHeading }}>Seasonal, smoky, soulful.</h2>
              <p className="mt-4 text-gray-600">Sourced from Sonoran ranches and small Mexican farms. Menu rotates every six weeks.</p>
            </div>
          </Reveal>

          <div className="flex justify-center gap-2 mb-10">
            {(["starters", "mains", "cocktails"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-full transition-all capitalize",
                  tab === t ? cn("text-white", theme.accentBg) : "bg-white border border-amber-200 text-amber-900 hover:bg-amber-50",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {MENU[tab].map((item) => (
              <Reveal key={item.name}>
                <div className="border-b border-amber-100 pb-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl text-gray-900" style={{ fontFamily: theme.fontHeading }}>{item.name}</h3>
                    <span className="text-amber-800 font-medium whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  {"tags" in item && item.tags && item.tags.length > 0 && (
                    <div className="mt-3 flex gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] tracking-wide px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 inline-flex items-center gap-1">
                          {tag === "V" ? <Leaf className="h-2.5 w-2.5" /> : tag === "GF" ? null : <Flame className="h-2.5 w-2.5" />} {tag === "V" ? "Vegetarian" : tag === "GF" ? "Gluten-Free" : tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATERING */}
      <section id="catering" className="py-24 bg-[#2A140A] text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300 font-semibold">Catering & Events</p>
              <h2 className="mt-3 text-4xl sm:text-5xl" style={{ fontFamily: theme.fontHeading }}>Bring the canyon to you.</h2>
              <p className="mt-4 text-white/70">Office lunches, weddings, holiday parties, and full-restaurant buyouts. Custom menus available.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {CATERING.map((c) => (
              <Reveal key={c.tier}>
                <div className={cn(
                  "rounded-2xl p-7 border h-full flex flex-col",
                  c.featured ? "bg-amber-700 border-amber-500 text-white scale-[1.02] shadow-2xl" : "bg-white/5 border-white/10",
                )}>
                  <p className="text-xs uppercase tracking-wider text-amber-300/90">{c.tier}</p>
                  <p className="mt-3 text-3xl font-semibold" style={{ fontFamily: theme.fontHeading }}>{c.price}</p>
                  <p className="mt-1 text-xs opacity-70">{c.min}</p>
                  <ul className="mt-5 space-y-2 text-sm opacity-90 flex-1">
                    {c.includes.map((i) => <li key={i} className="flex gap-2"><span>·</span>{i}</li>)}
                  </ul>
                  <a href="#contact" className={cn("mt-6 w-full text-center rounded-full py-2.5 text-sm font-medium", c.featured ? "bg-white text-amber-800" : "bg-amber-700 hover:bg-amber-600")}>
                    Request Catering Quote
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATIONS WIDGET */}
      <section id="reservations" className="py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <SectionLabel color={theme.accentText}>Reservations</SectionLabel>
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: theme.fontHeading }}>Reserve your table.</h2>
              <p className="mt-3 text-gray-600">Online booking syncs in real time with our floor plan.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white border border-amber-100 shadow-xl p-6 sm:p-8 grid md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">Party Size</label>
                <div className="flex items-center gap-2">
                  <button onClick={() => setParty(Math.max(1, party - 1))} className="h-10 w-10 rounded-full bg-amber-50 text-amber-800">−</button>
                  <div className="flex-1 h-10 rounded-lg border border-amber-100 flex items-center justify-center text-sm font-medium">
                    <Users className="h-4 w-4 mr-2 text-amber-700" /> {party} guests
                  </div>
                  <button onClick={() => setParty(Math.min(20, party + 1))} className="h-10 w-10 rounded-full bg-amber-50 text-amber-800">+</button>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">Date</label>
                <div className="h-10 rounded-lg border border-amber-100 px-3 flex items-center text-sm gap-2"><Calendar className="h-4 w-4 text-amber-700" /> Fri, Jun 12</div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">Time</label>
                <div className="h-10 rounded-lg border border-amber-100 px-3 flex items-center text-sm gap-2"><Clock className="h-4 w-4 text-amber-700" /> 7:30 PM</div>
              </div>
              <button className={cn("h-10 px-6 rounded-full text-white text-sm font-medium", theme.accentBg)}>Find Tables</button>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"].map((t, i) => (
                <button key={t} className={cn(
                  "py-2.5 rounded-lg text-sm font-medium border transition-colors",
                  i === 4 ? "bg-amber-700 text-white border-amber-700" : "bg-white border-amber-100 text-amber-900 hover:bg-amber-50",
                )}>{t}</button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 bg-amber-50/40 border-y border-amber-100">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionLabel color={theme.accentText}>Visit Us</SectionLabel>
            <h2 className="text-4xl sm:text-5xl text-gray-900" style={{ fontFamily: theme.fontHeading }}>4th Avenue, Tucson.</h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p className="flex items-start gap-3"><MapPin className="h-5 w-5 text-amber-700 mt-0.5" /> 412 N 4th Avenue, Tucson, AZ 85705</p>
              <p className="flex items-start gap-3"><Phone className="h-5 w-5 text-amber-700 mt-0.5" /> (520) 555-0142</p>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-700 mt-0.5" />
                <div className="text-sm">
                  <p>Tue–Thu · 5pm – 10pm</p>
                  <p>Fri–Sat · 5pm – 11pm</p>
                  <p>Sun Brunch · 10am – 2pm</p>
                  <p className="opacity-60">Closed Mondays</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 relative">
              <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(0,0,0,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.2) 0%, transparent 50%)" }} />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 backdrop-blur px-4 py-3 text-sm text-gray-800 flex items-center justify-between">
                <span>412 N 4th Ave</span>
                <a href="#" className="text-amber-700 font-medium">Get Directions →</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AIChatWidget
        script={{
          title: "Canyon Concierge",
          subtitle: "Menu, allergies, reservations",
          greeting: "Welcome to Copper Canyon Grill. I can help you pick dishes, flag allergies, or check tonight's availability. What can I help with?",
          quickReplies: ["What's the special tonight?", "I have a peanut allergy", "Table for 4 at 7pm Friday?", "Vegetarian options"],
          responses: [
            { match: ["special", "tasting", "chef"], reply: "Tonight's Chef's Tasting is a 5-course mesquite menu paired with a reposado flight — $89 per person. We have two seatings at 6 and 8:30. Want me to hold a spot?" },
            { match: ["peanut", "allerg", "gluten", "dairy"], reply: "We mark allergens on every dish. For nut allergies our entire savory menu is nut-free except the dessert tres leches. Add a note to your reservation and our chef will personally walk through options." },
            { match: ["reserv", "table", "book", "fri", "sat", "tonight"], reply: "We have tables at 5:30, 7:00, and 9:15 this Friday. Patio is also open if weather holds. Want me to book one?" },
            { match: ["veg", "vegan", "plant"], reply: "Our Cactus & Quinoa Bowl, Tableside Guac, and Mesquite Elote are all vegetarian. The bowl is fully vegan if you skip the queso." },
            { match: ["cater", "event", "party", "private"], reply: "We offer office lunch from $18/pp, full-service corporate events at $42/pp, and private dining buyouts. I can have our events lead email you a custom quote — what's the date?" },
            { match: ["happy hour", "deals", "discount"], reply: "Happy hour runs Tue–Thu from 5–6:30 in the bar: $9 cocktails, $6 wines by the glass, and a discounted bites menu." },
          ],
          fallback: "I'll pass that to our team. In the meantime, feel free to browse the menu or reserve a table — happy to help with either.",
          accentBg: "bg-amber-700",
          accentText: "text-amber-700",
          buttonLabel: "Ask Concierge",
        }}
      />
    </DemoShell>
  );
}