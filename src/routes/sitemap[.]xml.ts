import { createFileRoute } from "@tanstack/react-router";
import { INDUSTRY_NAV } from "../lib/industries-content";
import { BLOG_POSTS, type BlogPost } from "../lib/blog/posts";

const BASE_URL = "https://www.sonoransystemsai.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPages: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/packages", changefreq: "monthly", priority: "0.9" },
          { path: "/industries", changefreq: "monthly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.7" },
          { path: "/dashboards", changefreq: "monthly", priority: "0.7" },
          { path: "/email-automation", changefreq: "monthly", priority: "0.7" },
          { path: "/ai-audit", changefreq: "monthly", priority: "0.8" },
          { path: "/preview", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/careers", changefreq: "monthly", priority: "0.5" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/refund-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/login", changefreq: "yearly", priority: "0.2" },
        ];

        const industryPages: SitemapEntry[] = INDUSTRY_NAV.map((i: { slug: string }) => ({
          path: `/industries/${i.slug}`,
          changefreq: "monthly",
          priority: "0.7",
        }));

        const blogPages: SitemapEntry[] = BLOG_POSTS.map((p: BlogPost) => ({
          path: `/posts/${p.slug}`,
          changefreq: "monthly",
          priority: "0.7",
          lastmod: p.dateISO,
        }));

        const entries = [...staticPages, ...industryPages, ...blogPages];

        const urls = entries
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
              e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
              e.priority ? `    <priority>${e.priority}</priority>` : null,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n"),
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});