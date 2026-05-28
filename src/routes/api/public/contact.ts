import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { supabaseAdmin } from '@/integrations/supabase/client.server';

const schema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  businessName: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  city: z.string().trim().min(1).max(80),
  website: z.string().trim().max(255).optional().or(z.literal('')),
  businessType: z.string().min(1).max(80),
  helpWith: z.array(z.string().min(1).max(80)).min(1).max(20),
  challenge: z.string().trim().max(1500).optional().or(z.literal('')),
  repetitive: z.string().trim().max(1500).optional().or(z.literal('')),
  tools: z.string().trim().max(500).optional().or(z.literal('')),
  timeline: z.string().min(1).max(40),
  budget: z.string().max(40).optional().or(z.literal('')),
});

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({ error: 'Invalid submission', issues: parsed.error.issues }),
            { status: 400, headers: { 'Content-Type': 'application/json' } },
          );
        }

        const d = parsed.data;
        const ip =
          request.headers.get('cf-connecting-ip') ||
          request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
          null;

        const { error } = await supabaseAdmin.from('contact_submissions').insert({
          first_name: d.firstName,
          last_name: d.lastName,
          business_name: d.businessName,
          email: d.email,
          phone: d.phone,
          city: d.city,
          website: d.website || null,
          business_type: d.businessType,
          help_with: d.helpWith,
          challenge: d.challenge || null,
          repetitive: d.repetitive || null,
          tools: d.tools || null,
          timeline: d.timeline,
          budget: d.budget || null,
          user_agent: request.headers.get('user-agent'),
          ip_address: ip,
        });

        if (error) {
          console.error('contact insert failed', error);
          return new Response(JSON.stringify({ error: 'Could not save submission' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      },
    },
  },
});