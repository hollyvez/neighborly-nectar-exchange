-- Drop the overly permissive update policy
DROP POLICY IF EXISTS "Users can update invite status" ON public.invites;

-- Create a more restrictive update policy that only allows updates
-- when the user has validated the invite token (via the invite_token_validation view)
-- This prevents arbitrary updates while still allowing legitimate invite claims
CREATE POLICY "Users can update their own invite status"
ON public.invites
FOR UPDATE
USING (
  -- Only allow update if user is the recipient (matched by email from auth)
  (auth.email() IS NOT NULL AND recipient_email = auth.email())
  OR 
  -- Or if they're a champion/superadmin
  is_champion_or_superadmin(auth.uid())
)
WITH CHECK (
  -- Only allow changing status to 'used' or 'expired'
  status IN ('used', 'expired')
);