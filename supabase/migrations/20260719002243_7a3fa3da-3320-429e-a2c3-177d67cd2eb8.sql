CREATE TABLE IF NOT EXISTS public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  plan text NOT NULL,
  duration text NOT NULL,
  price integer NOT NULL DEFAULT 0,
  device_type text,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.orders TO anon, authenticated;
GRANT ALL ON public.orders TO service_role;

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_insert_orders" ON public.orders FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE POLICY "public_select_orders" ON public.orders FOR SELECT
  TO anon, authenticated USING (true);