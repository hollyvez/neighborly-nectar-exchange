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
      let updatedCount = 0;
      let insertedCount = 0;

      for (const post of blogPosts) {
        // Check if post exists
        const { data: existingPost } = await supabase
          .from("blog_posts")
          .select("id")
          .eq("slug", post.slug)
          .maybeSingle();

        if (existingPost) {
          // Update existing post
          const { error } = await supabase
            .from("blog_posts")
            .update({
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
            })
            .eq("id", existingPost.id);

          if (error) {
            console.error("Error updating post:", post.slug, error);
          } else {
            updatedCount++;
          }
        } else {
          // Insert new post
          const { error } = await supabase
            .from("blog_posts")
            .insert({
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
            });

          if (error) {
            console.error("Error inserting post:", post.slug, error);
          } else {
            insertedCount++;
          }
        }
      }

      toast({
        title: "Blog posts synced!",
        description: `Updated ${updatedCount} posts, inserted ${insertedCount} new posts.`,
      });
      setSeeded(true);
    } catch (err) {
      console.error("Error:", err);
      toast({
        title: "Error",
        description: "Failed to sync blog posts.",
        variant: "destructive",
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={handleSeed} 
        disabled={loading}
        variant="outline"
        className="bg-background"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Syncing...
          </>
        ) : seeded ? (
          "Posts Synced ✓"
        ) : (
          "Sync Blog Posts"
        )}
      </Button>
    </div>
  );
};
