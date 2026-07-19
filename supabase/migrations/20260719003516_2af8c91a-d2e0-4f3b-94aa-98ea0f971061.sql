DROP POLICY IF EXISTS "public_select_orders" ON public.orders;
REVOKE SELECT ON public.orders FROM anon, authenticated;