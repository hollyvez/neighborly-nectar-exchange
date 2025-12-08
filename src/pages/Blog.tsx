import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { SeedBlogPosts } from "@/components/blog/SeedBlogPosts";
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featured_image_url: string | null;
  author: string;
  publish_date: string;
}
const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const {
        data,
        error
      } = await supabase.from("blog_posts").select("id, slug, title, excerpt, featured_image_url, author, publish_date").eq("is_published", true).order("publish_date", {
        ascending: false
      });
      if (error) {
        console.error("Error fetching blog posts:", error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);
  return <>
      <Helmet>
        <title>Blog | TheNEXT - Neighborhood Exchange Trust</title>
        <meta name="description" content="Discover tips, stories, and insights about building stronger neighborhood communities through sharing, trading, and meaningful connections." />
        <meta name="keywords" content="community building, neighborhood sharing, local economy, community tips" />
        <link rel="canonical" href="https://thenext.community/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="gradient-primary text-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-2xl font-cursive text-foreground/90 hover:text-foreground transition-colors">TheNExT</h2>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Voice</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Tips, stories, and inspiration for building stronger neighborhood connections
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => <div key={i} className="bg-card rounded-xl overflow-hidden">
                    <Skeleton className="h-48 w-full" />
                    <div className="p-6 space-y-4">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>)}
              </div> : posts.length === 0 ? <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No blog posts yet. Check back soon!</p>
              </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => <article key={post.id} className="bg-card rounded-xl overflow-hidden shadow-elegant hover-glow transition-all duration-300 group">
                    <Link to={`/blog/${post.slug}`}>
                      {post.featured_image_url && <div className="aspect-video overflow-hidden">
                          <img src={post.featured_image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {format(new Date(post.publish_date), "MMM d, yyyy")}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </article>)}
              </div>}
          </div>
        </section>

        <Footer />
        <SeedBlogPosts />
      </div>
    </>;
};
export default Blog;