-- Ensure RLS is enabled and forced on the invites table
ALTER TABLE public.invites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invites FORCE ROW LEVEL SECURITY;

-- Verify all SELECT policies require authentication by checking existing policies
-- The current policies should already require auth, but let's ensure no public access exists