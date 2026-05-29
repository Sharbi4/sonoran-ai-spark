import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  role: z.string().trim().min(1).max(200),
  links: z.string().trim().max(500).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(4000),
});

export const Route = createFileRoute("/api/public/careers")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }
        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: "Invalid input" }, { status: 400 });
        }
        const { error } = await supabaseAdmin.from("contact_submissions").insert({
          first_name: parsed.data.name.split(" ")[0] ?? parsed.data.name,
          last_name: parsed.data.name.split(" ").slice(1).join(" ") || "—",
          business_name: "Career application",
          email: parsed.data.email,
          phone: "—",
          city: "—",
          business_type: "career",
          timeline: "career",
          help_with: ["career"],
          website: parsed.data.links || null,
          challenge: `Role interest: ${parsed.data.role}\n\n${parsed.data.message}`,
        });
        if (error) {
          return Response.json({ error: "Could not save application" }, { status: 500 });
        }
        return Response.json({ ok: true });
      },
    },
  },
});