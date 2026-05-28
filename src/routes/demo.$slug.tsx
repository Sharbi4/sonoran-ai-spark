import { createFileRoute, notFound } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { DemoTemplate } from "@/components/demo-template";
import { DEMO_CONFIGS } from "@/lib/demo-content";
import type { IndustrySlug } from "@/lib/industries-content";

const RestaurantsDemo = lazy(() => import("@/components/demos/restaurants"));
const LawFirmsDemo = lazy(() => import("@/components/demos/law-firms"));
const ContractorsDemo = lazy(() => import("@/components/demos/contractors"));
const SalonsWellnessDemo = lazy(() => import("@/components/demos/salons-wellness"));

const CUSTOM_DEMOS: Partial<Record<IndustrySlug, React.LazyExoticComponent<() => JSX.Element>>> = {
  restaurants: RestaurantsDemo,
  "law-firms": LawFirmsDemo,
  contractors: ContractorsDemo,
  "salons-wellness": SalonsWellnessDemo,
};

const VALID_SLUGS = Object.keys(DEMO_CONFIGS);

export const Route = createFileRoute("/demo/$slug")({
  beforeLoad: ({ params }) => {
    if (!VALID_SLUGS.includes(params.slug)) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const config = DEMO_CONFIGS[params.slug as IndustrySlug];
    if (!config) return { meta: [{ title: "Demo — Sonoran Systems & AI" }] };
    return {
      meta: [
        { title: `${config.brandName} Demo — Sonoran Systems & AI` },
        { name: "description", content: config.heroSub },
        { property: "og:title", content: `${config.brandName} — Demo Website` },
        { property: "og:description", content: config.heroSub },
        { property: "og:url", content: `https://sonoransystemsai.com/demo/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `https://sonoransystemsai.com/demo/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="font-serif text-4xl">Demo not found</h1>
      <p className="mt-4 text-muted-foreground">
        Check the URL or visit our <a href="/industries" className="text-copper underline">industries page</a>.
      </p>
    </div>
  ),
  component: DemoPage,
});

function DemoPage() {
  const { slug } = Route.useParams();
  const slugTyped = slug as IndustrySlug;
  const Custom = CUSTOM_DEMOS[slugTyped];
  if (Custom) {
    return (
      <Suspense fallback={<div className="min-h-screen" />}>
        <Custom />
      </Suspense>
    );
  }
  const config = DEMO_CONFIGS[slugTyped];
  if (!config) return null;
  return <DemoTemplate config={config} />;
}
