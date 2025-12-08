import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Guidelines from "./pages/Guidelines";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </QueryClientProvider>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;