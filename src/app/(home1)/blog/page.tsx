"use client";

import React, { useEffect, useState } from "react";
import CeylonixHeader from "../../Components/Ceylonix/Header";
import CeylonixFooter from "../../Components/Ceylonix/Footer";
import CeylonixCTA from "../../Components/Ceylonix/CTA";
import BlogHero from "../../Components/CeylonixBlog/BlogHero";
import BlogInsightsGrid from "../../Components/CeylonixBlog/BlogInsightsGrid";
import { getBlogPosts } from "../../lib/getBlogPosts";
import { useLocale } from "../../Components/LanguageProvider";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";
const heroBg = "/assets/images/ceylonix/blog-bg.jpg";

const BlogPage = () => {
  const { t, locale } = useLocale();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setLoadError("");
    getBlogPosts(locale)
      .then(setPosts)
      .catch(() => setLoadError(t("blogPage.loadError")))
      .finally(() => setIsLoading(false));
  }, [locale]);

  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main style={{ background: "#01000B" }}>
        <BlogHero image={heroBg} />
        {loadError ? (
          <p className="ceylon-container text-white py-5">{loadError}</p>
        ) : isLoading ? (
          <p className="ceylon-container text-white py-5">{t("blogPage.loading")}</p>
        ) : (
          <BlogInsightsGrid posts={posts} />
        )}
        <CeylonixCTA ctaImg="/assets/images/ceylonix/planTrip.png" />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default BlogPage;
