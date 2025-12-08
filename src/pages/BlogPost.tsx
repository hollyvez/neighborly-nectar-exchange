import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  seo_title: string;
  meta_description: string;
  keywords: string[];
  content: string;
  excerpt: string;
  featured_image_url: string | null;
  author: string;
  publish_date: string;
}

interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  featured_image_url: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();

      if (error) {
        console.error("Error fetching blog post:", error);
        setLoading(false);
        return;
      }

      if (!data) {
        navigate("/blog");
        return;
      }

      setPost(data);

      // Fetch related posts (3 random posts excluding current)
      const { data: related } = await supabase
        .from("blog_posts")
        .select("id, slug, title, featured_image_url")
        .eq("is_published", true)
        .neq("slug", slug)
        .order("publish_date", { ascending: false })
        .limit(3);

      setRelatedPosts(related || []);
      setLoading(false);
    };

    fetchPost();
  }, [slug, navigate]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || "";
    
    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast({ title: "Link copied to clipboard!" });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  const scrollToJoinForm = () => {
    navigate("/#join-form");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <section className="gradient-primary py-16">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2" />
          </div>
        </section>
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Skeleton className="h-96 w-full mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-6 w-4/5" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{post.seo_title}</title>
        <meta name="description" content={post.meta_description} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`https://thenext.community/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.seo_title} />
        <meta property="og:description" content={post.meta_description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://thenext.community/blog/${post.slug}`} />
        {post.featured_image_url && <meta property="og:image" content={post.featured_image_url} />}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo_title} />
        <meta name="twitter:description" content={post.meta_description} />
        {post.featured_image_url && <meta name="twitter:image" content={post.featured_image_url} />}

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.meta_description,
            "image": post.featured_image_url,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "TheNEXT",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thenext.community/lovable-uploads/e1c1517e-ab3e-4d59-843c-ce119d0cf9e9.png"
              }
            },
            "datePublished": post.publish_date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://thenext.community/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="gradient-primary text-foreground py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-foreground/80">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.publish_date), "MMMM d, yyyy")}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.featured_image_url && (
          <div className="container mx-auto px-4 max-w-4xl -mt-8">
            <div className="rounded-xl overflow-hidden shadow-elegant">
              <img
                src={post.featured_image_url}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Social Sharing */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
            <span className="text-muted-foreground font-medium">Share:</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleShare("twitter")}
              className="hover:bg-accent-blue/20 hover:border-accent-blue"
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleShare("linkedin")}
              className="hover:bg-accent-blue/20 hover:border-accent-blue"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleShare("facebook")}
              className="hover:bg-accent-blue/20 hover:border-accent-blue"
            >
              <Facebook className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleShare("copy")}
              className="hover:bg-primary/20 hover:border-primary"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Markdown Content */}
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:text-foreground prose-headings:font-bold
            prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-primary
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-card-foreground prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-foreground prose-strong:font-bold
            prose-em:text-muted-foreground
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:my-6
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
            prose-li:text-card-foreground prose-li:my-2
            prose-a:text-primary prose-a:hover:underline
            prose-hr:border-border prose-hr:my-8
          ">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-card rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Ready to Build Your Community?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join TheNEXT and discover how your neighborhood can become your greatest resource.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToJoinForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Join TheNEXT Community
            </Button>
          </div>

          {/* Social Sharing Bottom */}
          <div className="flex items-center justify-center gap-3 mt-12 pt-8 border-t border-border">
            <span className="text-muted-foreground font-medium">Share this article:</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleShare("twitter")}
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleShare("linkedin")}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleShare("facebook")}
            >
              <Facebook className="w-4 h-4" />
            </Button>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-card py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold mb-8 text-card-foreground">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="group block bg-secondary rounded-lg overflow-hidden hover-glow transition-all"
                  >
                    {related.featured_image_url && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={related.featured_image_url}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-secondary-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
