import { useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { StripeEmbeddedCheckout } from '@/components/StripeEmbeddedCheckout';

interface CheckoutOptions {
  priceId: string;
  customerEmail?: string;
}

export function useStripeCheckout() {
  const [options, setOptions] = useState<CheckoutOptions | null>(null);

  const openCheckout = useCallback((opts: CheckoutOptions) => {
    setOptions(opts);
  }, []);

  const closeCheckout = useCallback(() => setOptions(null), []);

  const returnUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`
      : '/thank-you?session_id={CHECKOUT_SESSION_ID}';

  const checkoutElement = (
    <Dialog open={!!options} onOpenChange={(o) => !o && closeCheckout()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">Secure checkout</DialogTitle>
        {options && (
          <StripeEmbeddedCheckout
            priceId={options.priceId}
            customerEmail={options.customerEmail}
            returnUrl={returnUrl}
          />
        )}
      </DialogContent>
    </Dialog>
  );

  return { openCheckout, closeCheckout, isOpen: !!options, checkoutElement };
}