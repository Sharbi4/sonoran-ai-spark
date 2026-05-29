CREATE TABLE public.site_previews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  email text,
  industry text,
  report jsonb,
  mockup_url text,
  ip_hash text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.site_previews TO anon, authenticated;
GRANT ALL ON public.site_previews TO service_role;

ALTER TABLE public.site_previews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a site preview"
  ON public.site_previews
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX idx_site_previews_created_at ON public.site_previews (created_at DESC);
CREATE INDEX idx_site_previews_ip_hash ON public.site_previews (ip_hash, created_at DESC);

INSERT INTO storage.buckets (id, name, public)
VALUES ('site-mockups', 'site-mockups', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public can view site mockups"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'site-mockups');

CREATE POLICY "Service role can manage site mockups"
  ON storage.objects FOR ALL
  TO service_role
  USING (bucket_id = 'site-mockups')
  WITH CHECK (bucket_id = 'site-mockups');