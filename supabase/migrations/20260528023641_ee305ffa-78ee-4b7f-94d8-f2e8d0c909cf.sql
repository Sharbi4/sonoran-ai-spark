
CREATE TABLE public.purchases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  stripe_session_id TEXT NOT NULL UNIQUE,
  stripe_payment_intent_id TEXT,
  stripe_customer_id TEXT,
  customer_email TEXT,
  customer_name TEXT,
  product_name TEXT,
  price_id TEXT,
  amount_total INTEGER,
  currency TEXT,
  status TEXT NOT NULL,
  environment TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_purchases_email ON public.purchases(customer_email);
CREATE INDEX idx_purchases_created ON public.purchases(created_at DESC);

GRANT ALL ON public.purchases TO service_role;
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;
-- No policies: only service role (webhook) can read/write.
