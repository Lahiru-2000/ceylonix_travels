"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CeylonixHeader from "../../../Components/Ceylonix/Header";
import CeylonixFooter from "../../../Components/Ceylonix/Footer";
import CeylonixCTA from "../../../Components/Ceylonix/CTA";
import BlogHero from "../../../Components/CeylonixBlog/BlogHero";
import BlogPostDetails from "../../../Components/CeylonixBlog/BlogPostDetails";
import { getBlogPostBySlug, getBlogPosts, getRelatedBlogPosts } from "../../../lib/getBlogPosts";
import { useLocale } from "../../../Components/LanguageProvider";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";
const heroBg = "/assets/images/ceylonix/blog-bg.jpg";

const BlogDetailsPage = () => {
  const { t, locale } = useLocale();
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [post, setPost] = useState(undefined);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (!slug) return;
    setPost(undefined);

    Promise.all([getBlogPostBySlug(slug, locale), getBlogPosts(locale)])
      .then(([current, posts]) => {
        setPost(current);
        if (current) {
          setRelatedPosts(getRelatedBlogPosts(posts, current));
        }
      })
      .catch(() => setPost(null));
  }, [slug, locale]);

  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main style={{ background: "#01000B" }}>
        <BlogHero image={heroBg} title={post?.title || t("blogPage.hero")} currentPage={post?.title || t("blogPage.hero")} />
        {post === undefined ? (
          <p className="ceylon-container text-white py-5">{t("blogPage.articleLoading")}</p>
        ) : (
          <BlogPostDetails post={post} relatedPosts={relatedPosts} />
        )}
        <CeylonixCTA ctaImg="/assets/images/ceylonix/planTrip.png" />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default BlogDetailsPage;
