import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LenisProvider } from "@/components/lenis-provider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sonoran Systems & AI | AI Consulting Tucson AZ — Serving Phoenix, Flagstaff & Arizona" },
      {
        name: "description",
        content:
          "Tucson-based AI consulting firm with 50+ years of process excellence. AI automation, chatbots, dashboards, websites & workflow optimization for businesses in Tucson, Phoenix, Flagstaff & surrounding Arizona areas.",
      },
      { name: "author", content: "Sonoran Systems & AI" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "keywords", content: "AI consulting Tucson, AI consulting Phoenix, AI automation Arizona, AI chatbots Tucson AZ, workflow automation Phoenix AZ, business automation Flagstaff, AI consulting firm Arizona, process excellence Tucson, website design Tucson, business intelligence dashboards Arizona, AI systems Phoenix, small business AI Tucson, automation consulting Scottsdale, AI solutions Marana, AI consulting Oro Valley, AI consulting Mesa AZ, AI consulting Chandler AZ, AI consulting Tempe AZ" },
      { property: "og:title", content: "Sonoran Systems & AI | AI Consulting — Tucson, Phoenix, Flagstaff AZ" },
      {
        property: "og:description",
        content:
          "AI consulting firm based in Tucson, serving Phoenix, Flagstaff & all of Arizona. 50+ years of process excellence. Automation, chatbots, dashboards & intelligent systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sonoransystemsai.com" },
      { property: "og:site_name", content: "Sonoran Systems & AI" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sonoran Systems & AI | AI Consulting Tucson AZ" },
      { name: "twitter:description", content: "AI consulting firm in Tucson serving Phoenix, Flagstaff & Arizona. Automation, chatbots, dashboards & process excellence. 50+ years combined experience." },
      { name: "geo.region", content: "US-AZ" },
      { name: "geo.placename", content: "Tucson" },
      { name: "geo.position", content: "32.2226;-110.9747" },
      { name: "ICBM", content: "32.2226, -110.9747" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "canonical",
        href: "https://sonoransystemsai.com",
      },
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-VGH9EXC9PJ",
        async: true,
      },
      {
        children:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-VGH9EXC9PJ');",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://sonoransystemsai.com/#business",
          "name": "Sonoran Systems & AI",
          "alternateName": "Sonoran Systems AI",
          "description": "AI consulting firm based in Tucson, Arizona with over 50 years of combined experience in process excellence, systems design, and artificial intelligence. Serving businesses across Tucson, Phoenix, Flagstaff, and surrounding Arizona areas.",
          "url": "https://sonoransystemsai.com",
          "telephone": "",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tucson",
            "addressRegion": "AZ",
            "addressCountry": "US",
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 32.2226,
            "longitude": -110.9747,
          },
          "areaServed": [
            { "@type": "City", "name": "Tucson", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "City", "name": "Phoenix", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "City", "name": "Scottsdale", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "City", "name": "Flagstaff", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "City", "name": "Mesa", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "City", "name": "Chandler", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "City", "name": "Tempe", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "City", "name": "Oro Valley", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "City", "name": "Marana", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "City", "name": "Sierra Vista", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "City", "name": "Sedona", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "City", "name": "Prescott", "containedInPlace": { "@type": "State", "name": "Arizona" } },
            { "@type": "State", "name": "Arizona" },
          ],
          "serviceType": ["AI Consulting", "Workflow Automation", "Web Design", "Business Intelligence Dashboards", "AI Chatbots", "Voice AI Agents", "Email Automation", "Process Excellence Consulting"],
          "priceRange": "$$",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:00",
          },
          "sameAs": [],
          "knowsAbout": ["Artificial Intelligence", "Process Excellence", "Systems Design", "Workflow Automation", "Business Intelligence", "Machine Learning", "AI Chatbots"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Sonoran Systems & AI",
          "url": "https://sonoransystemsai.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://sonoransystemsai.com/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </LenisProvider>
    </QueryClientProvider>
  );
}
