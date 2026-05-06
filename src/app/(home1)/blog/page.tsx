"use client";

import React from "react";
import CeylonixHeader from "../../Components/Ceylonix/Header";
import CeylonixFooter from "../../Components/Ceylonix/Footer";
import CeylonixCTA from "../../Components/Ceylonix/CTA";
import BlogHero from "../../Components/CeylonixBlog/BlogHero";
import BlogInsightsGrid from "../../Components/CeylonixBlog/BlogInsightsGrid";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";
const heroBg = "/assets/images/ceylonix/blog-bg.jpg";

const blogCards = [
  {
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    title: "Top 10 Places You Must Visit in Sri Lanka",
    excerpt:
      "Discover the most iconic and breathtaking destinations across Sri Lanka, from cultural landmarks to scenic landscapes.",
    date: "18 Nov",
    author: "By Ceylonix Team",
    category: "Travel Guide",
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    title: "Top 10 Places You Must Visit in Sri Lanka",
    excerpt:
      "Discover the most iconic and breathtaking destinations across Sri Lanka, from cultural landmarks to scenic landscapes.",
    date: "18 Nov",
    author: "By Ceylonix Team",
    category: "Travel Guide",
  },
  {
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80",
    title: "Top 10 Places You Must Visit in Sri Lanka",
    excerpt:
      "Discover the most iconic and breathtaking destinations across Sri Lanka, from cultural landmarks to scenic landscapes.",
    date: "18 Nov",
    author: "By Ceylonix Team",
    category: "Travel Guide",
  },
];

const BlogPage = () => {
  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main style={{ background: "#01000B" }}>
        <BlogHero image={heroBg} />
        <BlogInsightsGrid posts={blogCards} />
        <CeylonixCTA ctaImg="/assets/images/ceylonix/planTrip.png" />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default BlogPage;
