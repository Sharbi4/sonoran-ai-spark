import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { type StripeEnv, createStripeClient, getStripeErrorMessage } from '@/lib/stripe.server';

const envSchema = z.enum(['sandbox', 'live']);

const checkoutInputSchema = z.object({
  priceId: z.string().regex(/^[a-zA-Z0-9_-]+$/),
  customerEmail: z.string().email().optional(),
  returnUrl: z.string().url(),
  environment: envSchema,
});

type CheckoutResult = { clientSecret: string } | { error: string };

export const createCheckoutSession = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => checkoutInputSchema.parse(input))
  .handler(async ({ data }): Promise<CheckoutResult> => {
    try {
      const stripe = createStripeClient(data.environment as StripeEnv);
      const prices = await stripe.prices.list({ lookup_keys: [data.priceId] });
      if (!prices.data.length) throw new Error('Price not found');
      const stripePrice = prices.data[0];

      const productId = typeof stripePrice.product === 'string'
        ? stripePrice.product
        : stripePrice.product.id;
      const product = await stripe.products.retrieve(productId);

      const session = await stripe.checkout.sessions.create({
        line_items: [{ price: stripePrice.id, quantity: 1 }],
        mode: 'payment',
        ui_mode: 'embedded_page',
        return_url: data.returnUrl,
        payment_intent_data: { description: product.name },
        ...(data.customerEmail && { customer_email: data.customerEmail }),
        metadata: { priceId: data.priceId, productId },
        // managed_payments enables Stripe end-to-end tax compliance, fraud
        // protection, and dispute handling per the user's preference.
        managed_payments: { enabled: true },
      } as any);

      return { clientSecret: session.client_secret ?? '' };
    } catch (error) {
      return { error: getStripeErrorMessage(error) };
    }
  });

const verifyInputSchema = z.object({
  sessionId: z.string().min(1).max(255),
  environment: envSchema,
});

type VerifyResult =
  | {
      status: 'paid';
      priceId: string | null;
      productName: string | null;
      customerEmail: string | null;
      amountTotal: number | null;
      currency: string | null;
    }
  | { status: 'unpaid' }
  | { error: string };

export const verifyCheckoutSession = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => verifyInputSchema.parse(input))
  .handler(async ({ data }): Promise<VerifyResult> => {
    try {
      const stripe = createStripeClient(data.environment as StripeEnv);
      const session = await stripe.checkout.sessions.retrieve(data.sessionId, {
        expand: ['line_items.data.price.product'],
      });
      if (session.payment_status !== 'paid') return { status: 'unpaid' };

      const line = session.line_items?.data?.[0];
      const price = line?.price;
      const priceId = price?.lookup_key ?? null;
      const product = price && typeof price.product !== 'string' && !('deleted' in price.product)
        ? price.product
        : null;

      return {
        status: 'paid',
        priceId,
        productName: product?.name ?? null,
        customerEmail: session.customer_details?.email ?? session.customer_email ?? null,
        amountTotal: session.amount_total ?? null,
        currency: session.currency ?? null,
      };
    } catch (error) {
      return { error: getStripeErrorMessage(error) };
    }
  });