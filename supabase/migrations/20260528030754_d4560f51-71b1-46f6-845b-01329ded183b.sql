CREATE TABLE public.contact_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  business_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  city text NOT NULL,
  website text,
  business_type text NOT NULL,
  help_with text[] NOT NULL DEFAULT '{}',
  challenge text,
  repetitive text,
  tools text,
  timeline text NOT NULL,
  budget text,
  user_agent text,
  ip_address text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- No anon/authenticated policies: inserts happen via service_role from a server route,
-- and reads happen in the Lovable Cloud backend panel (also service_role).

CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions (created_at DESC);