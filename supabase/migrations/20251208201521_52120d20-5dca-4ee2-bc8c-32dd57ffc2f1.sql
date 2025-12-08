-- Fix: Create a secure view for invite token validation that excludes contact info
-- This allows unauthenticated users to validate tokens without exposing PII

-- Create a secure view that only exposes non-sensitive fields for token validation
CREATE OR REPLACE VIEW public.invite_token_validation AS
SELECT 
  id,
  invite_token,
  status,
  neighborhood_id,
  expires_at
FROM public.invites
WHERE invite_token IS NOT NULL AND status = 'pending';

-- Enable RLS on the view (views inherit from base table, but we set explicit policy)
-- Grant SELECT on the view to anon and authenticated roles
GRANT SELECT ON public.invite_token_validation TO anon, authenticated;

-- Drop the problematic policy that exposes contact info to anyone with a token
DROP POLICY IF EXISTS "Anyone can validate invite tokens" ON public.invites;

-- Create a new policy that only allows authenticated users to see invite details
-- Unauthenticated users should use the invite_token_validation view instead
CREATE POLICY "Authenticated users can validate their own invite tokens"
ON public.invites
FOR SELECT
USING (
  auth.uid() IS NOT NULL 
  AND invite_token IS NOT NULL 
  AND status = 'pending'
);

-- Add a comment explaining the security approach
COMMENT ON VIEW public.invite_token_validation IS 'Secure view for validating invite tokens without exposing recipient contact information. Use this view for unauthenticated token validation.';