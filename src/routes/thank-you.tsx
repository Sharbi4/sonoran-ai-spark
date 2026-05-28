import { useEffect, useRef } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { CheckCircle2, CalendarCheck2, Mail, AlertCircle, Loader2 } from 'lucide-react';
import { SiteLayout, Section } from '@/components/site-layout';
import { verifyCheckoutSession } from '@/lib/payments.functions';
import { getStripeEnvironment } from '@/lib/stripe';

const CALENDLY_60_MIN =
  'https://calendly.com/sharbin-sonoransystemsai/30min' +
  '?hide_event_type_details=0&hide_gdpr_banner=1' +
  '&background_color=fbf7f2&text_color=1f1f1f&primary_color=c24f34';

// Which paid items unlock the post-payment scheduler.
const BOOKING_PRICE_IDS = new Set(['strategy_call_60min', 'ai_audit_497']);

export const Route = createFileRoute('/thank-you')({
  validateSearch: (search: Record<string, unknown>): { session_id?: string } => ({
    session_id: typeof search.session_id === 'string' ? search.session_id : undefined,
  }),
  head: () => ({
    meta: [
      { title: 'Thank you — Sonoran Systems & AI' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  const { session_id } = Route.useSearch();

  const { data, isLoading, isError } = useQuery({
    enabled: !!session_id,
    queryKey: ['checkout-session', session_id],
    queryFn: async () => {
      const result = await verifyCheckoutSession({
        data: { sessionId: session_id!, environment: getStripeEnvironment() },
      });
      if ('error' in result) throw new Error(result.error);
      return result;
    },
  });

  return (
    <SiteLayout>
      <Section className="pt-16 sm:pt-24 pb-24">
        <div className="max-w-3xl mx-auto">
          {!session_id && (
            <Empty
              title="No payment information found."
              body="If you just completed a purchase, please check your email for a receipt."
            />
          )}

          {session_id && isLoading && (
            <div className="rounded-3xl bg-card border border-sand p-10 text-center">
              <Loader2 className="h-8 w-8 text-copper mx-auto animate-spin" />
              <p className="mt-4 text-muted-foreground">Confirming your payment…</p>
            </div>
          )}

          {session_id && isError && (
            <Empty
              title="We couldn't verify your payment."
              body="If you were charged, please reach out via our contact page with your receipt and we'll sort it out right away."
              error
            />
          )}

          {data && data.status === 'unpaid' && (
            <Empty
              title="Payment not completed."
              body="It looks like the checkout didn't finish. You can try again from the Packages page."
            />
          )}

          {data && data.status === 'paid' && (
            <PaidSuccess
              productName={data.productName}
              email={data.customerEmail}
              amountTotal={data.amountTotal}
              currency={data.currency}
              needsBooking={!!data.priceId && BOOKING_PRICE_IDS.has(data.priceId)}
            />
          )}
        </div>
      </Section>
    </SiteLayout>
  );
}

function PaidSuccess({
  productName,
  email,
  amountTotal,
  currency,
  needsBooking,
}: {
  productName: string | null;
  email: string | null;
  amountTotal: number | null;
  currency: string | null;
  needsBooking: boolean;
}) {
  const amount =
    amountTotal != null && currency
      ? new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currency.toUpperCase(),
        }).format(amountTotal / 100)
      : null;

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-card border border-sand p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-copper mx-auto" strokeWidth={1.5} />
        <h1 className="mt-5 font-serif font-bold text-3xl sm:text-4xl">
          Payment confirmed.
        </h1>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          {productName ? (
            <>
              You're all set for <span className="text-foreground font-medium">{productName}</span>
              {amount ? <> — {amount}.</> : '.'}
            </>
          ) : (
            <>Thanks for your purchase{amount ? ` of ${amount}` : ''}.</>
          )}
          {email && (
            <>
              {' '}A receipt is on its way to{' '}
              <span className="text-foreground font-medium">{email}</span>.
            </>
          )}
        </p>
      </div>

      {needsBooking ? (
        <div className="rounded-3xl bg-gradient-to-br from-cream to-sand/60 border-2 border-copper/40 p-8 sm:p-10">
          <CalendarCheck2 className="h-7 w-7 text-copper" strokeWidth={1.5} />
          <h2 className="mt-4 font-serif text-2xl">Pick a time for your strategy call.</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose any open slot on the calendar below. You'll get a confirmation email with the
            video link.
          </p>
          <CalendlyEmbed />
        </div>
      ) : (
        <div className="rounded-3xl bg-card border border-sand p-8 sm:p-10">
          <Mail className="h-7 w-7 text-copper" strokeWidth={1.5} />
          <h2 className="mt-4 font-serif text-2xl">What happens next.</h2>
          <ol className="mt-4 space-y-3 text-sm text-foreground/85 list-decimal pl-5">
            <li>You'll get a confirmation email within a few minutes.</li>
            <li>
              We'll follow up within one business day with a short intake form so we can dig into
              your business.
            </li>
            <li>Your written deliverable is sent over within 3 business days of intake.</li>
          </ol>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-copper text-copper px-5 py-2.5 text-sm font-medium hover:bg-copper hover:text-copper-foreground transition-colors"
            >
              Send us your details now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Empty({ title, body, error }: { title: string; body: string; error?: boolean }) {
  return (
    <div className="rounded-3xl bg-card border border-sand p-10 text-center">
      {error ? (
        <AlertCircle className="h-10 w-10 text-rose mx-auto" strokeWidth={1.5} />
      ) : (
        <CheckCircle2 className="h-10 w-10 text-muted-foreground mx-auto" strokeWidth={1.5} />
      )}
      <h1 className="mt-4 font-serif text-2xl">{title}</h1>
      <p className="mt-3 text-muted-foreground max-w-md mx-auto">{body}</p>
      <div className="mt-6">
        <Link
          to="/packages"
          className="inline-flex items-center justify-center rounded-full bg-copper text-copper-foreground px-5 py-2.5 text-sm font-medium hover:bg-copper/90 transition-colors"
        >
          Back to Packages
        </Link>
      </div>
    </div>
  );
}

function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (!existing) {
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget mt-6 rounded-xl overflow-hidden border border-sand"
      data-url={CALENDLY_60_MIN}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}