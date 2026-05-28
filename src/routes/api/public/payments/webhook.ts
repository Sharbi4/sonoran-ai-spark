import { createFileRoute } from '@tanstack/react-router';
import { type StripeEnv, verifyWebhook } from '@/lib/stripe.server';
import { supabaseAdmin } from '@/integrations/supabase/client.server';

async function recordPurchase(session: any, env: StripeEnv) {
  const lineItem = session.line_items?.data?.[0];
  const productName =
    lineItem?.description ||
    lineItem?.price?.product?.name ||
    session.metadata?.product_name ||
    'Unknown product';
  const priceId =
    lineItem?.price?.lookup_key ||
    lineItem?.price?.metadata?.lovable_external_id ||
    lineItem?.price?.id ||
    null;

  await supabaseAdmin.from('purchases').upsert(
    {
      stripe_session_id: session.id,
      stripe_payment_intent_id:
        typeof session.payment_intent === 'string'
          ? session.payment_intent
          : session.payment_intent?.id ?? null,
      stripe_customer_id:
        typeof session.customer === 'string'
          ? session.customer
          : session.customer?.id ?? null,
      customer_email:
        session.customer_details?.email || session.customer_email || null,
      customer_name: session.customer_details?.name || null,
      product_name: productName,
      price_id: priceId,
      amount_total: session.amount_total ?? null,
      currency: session.currency ?? null,
      status: session.payment_status || 'unknown',
      environment: env,
      metadata: session.metadata ?? {},
    },
    { onConflict: 'stripe_session_id' },
  );
}

export const Route = createFileRoute('/api/public/payments/webhook')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const rawEnv = new URL(request.url).searchParams.get('env');
        if (rawEnv !== 'sandbox' && rawEnv !== 'live') {
          return Response.json({ received: true, ignored: 'invalid env' });
        }
        const env: StripeEnv = rawEnv;
        try {
          const event = await verifyWebhook(request, env);
          console.log('[stripe webhook]', env, event.type);
          if (event.type === 'checkout.session.completed') {
            try {
              await recordPurchase(event.data.object, env);
            } catch (err) {
              console.error('[stripe webhook] failed to record purchase', err);
            }
          }
          return Response.json({ received: true });
        } catch (e) {
          console.error('Webhook error:', e);
          return new Response('Webhook error', { status: 400 });
        }
      },
    },
  },
});