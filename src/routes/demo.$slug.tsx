import { createFileRoute, notFound } from "@tanstack/react-router";
import { DemoTemplate } from "@/components/demo-template";
import { DEMO_CONFIGS } from "@/lib/demo-content";
import type { IndustrySlug } from "@/lib/industries-content";

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
  const config = DEMO_CONFIGS[slug as IndustrySlug];
  if (!config) return null;
  return <DemoTemplate config={config} />;
}
