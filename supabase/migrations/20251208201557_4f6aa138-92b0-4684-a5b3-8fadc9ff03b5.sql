-- Fix the security definer view warning by using security invoker
-- Drop and recreate the view with proper security settings

DROP VIEW IF EXISTS public.invite_token_validation;

-- Recreate view with SECURITY INVOKER (default, but explicit for clarity)
-- This ensures the view respects the permissions of the querying user
CREATE VIEW public.invite_token_validation 
WITH (security_invoker = true)
AS
SELECT 
  id,
  invite_token,
  status,
  neighborhood_id,
  expires_at
FROM public.invites
WHERE invite_token IS NOT NULL AND status = 'pending';

-- Grant SELECT on the view to anon and authenticated roles
GRANT SELECT ON public.invite_token_validation TO anon, authenticated;

-- Add a comment explaining the security approach
COMMENT ON VIEW public.invite_token_validation IS 'Secure view for validating invite tokens without exposing recipient contact information. Uses security_invoker to respect caller permissions.';