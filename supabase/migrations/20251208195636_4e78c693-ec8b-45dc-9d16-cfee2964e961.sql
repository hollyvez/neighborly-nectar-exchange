-- Create blog_posts table for storing blog content
CREATE TABLE public.blog_posts (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  seo_title text NOT NULL,
  meta_description text NOT NULL,
  keywords text[] NOT NULL DEFAULT '{}',
  content text NOT NULL,
  excerpt text NOT NULL,
  featured_image_url text,
  author text NOT NULL DEFAULT 'TheNEXT Team',
  publish_date timestamp with time zone NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  is_published boolean NOT NULL DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (blog posts are public)
CREATE POLICY "Anyone can view published blog posts" 
ON public.blog_posts 
FOR SELECT 
USING (is_published = true);

-- Create policy for admin management
CREATE POLICY "Champions and SuperAdmin can manage blog posts" 
ON public.blog_posts 
FOR ALL 
USING (is_champion_or_superadmin(auth.uid()));

-- Create index for faster slug lookups
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);

-- Create index for publish date ordering
CREATE INDEX idx_blog_posts_publish_date ON public.blog_posts(publish_date DESC);

-- Create trigger for updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();