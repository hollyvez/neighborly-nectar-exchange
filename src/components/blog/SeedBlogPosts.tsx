import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { blogPosts } from "@/data/blogPosts";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export const SeedBlogPosts = () => {
  const [loading, setLoading] = useState(false);
  const [seeded, setSeeded] = useState(false);

  const handleSeed = async () => {
    setLoading(true);
    
    try {
      // Check if posts already exist
      const { data: existingPosts } = await supabase
        .from("blog_posts")
        .select("slug");

      const existingSlugs = new Set(existingPosts?.map(p => p.slug) || []);
      
      const postsToInsert = blogPosts.filter(post => !existingSlugs.has(post.slug));

      if (postsToInsert.length === 0) {
        toast({
          title: "Posts already seeded",
          description: "All blog posts already exist in the database.",
        });
        setSeeded(true);
        setLoading(false);
        return;
      }

      const { error } = await supabase
        .from("blog_posts")
        .insert(postsToInsert.map(post => ({
          slug: post.slug,
          title: post.title,
          seo_title: post.seo_title,
          meta_description: post.meta_description,
          keywords: post.keywords,
          content: post.content,
          excerpt: post.excerpt,
          featured_image_url: post.featured_image_url,
          author: post.author,
          publish_date: post.publish_date,
          is_published: true,
        })));

      if (error) {
        console.error("Error seeding posts:", error);
        toast({
          title: "Error seeding posts",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Blog posts seeded!",
          description: `Successfully added ${postsToInsert.length} blog posts.`,
        });
        setSeeded(true);
      }
    } catch (err) {
      console.error("Error:", err);
      toast({
        title: "Error",
        description: "Failed to seed blog posts.",
        variant: "destructive",
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={handleSeed} 
        disabled={loading || seeded}
        variant="outline"
        className="bg-background"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Seeding...
          </>
        ) : seeded ? (
          "Posts Seeded ✓"
        ) : (
          "Seed Blog Posts"
        )}
      </Button>
    </div>
  );
};
