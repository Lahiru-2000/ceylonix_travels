"use client";
import React from "react";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import { useLocale } from "../LanguageProvider";

const BlogPostDetails = ({ post, relatedPosts = [] }) => {
  const { t } = useLocale();
  if (!post) {
    return (
      <section style={{ background: "#0C111D", padding: "80px 0", minHeight: "50vh" }}>
        <div className="ceylon-container text-center">
          <h1 className="ceylon-title text-white mb-3">{t("blogPage.notFound")}</h1>
          <p style={{ color: "rgba(255,255,255,0.66)", marginBottom: "24px" }}>
            {t("blogPage.notFoundText")}
          </p>
          <Link href="/blog" className="text-decoration-none" style={{ color: "#E91E8C", fontWeight: 600 }}>
            {t("blogPage.back")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: "#0C111D", padding: "40px 0 80px" }}>
      <div className="ceylon-container">
        <Link
          href="/blog"
          className="text-decoration-none d-inline-flex align-items-center gap-2 mb-4"
          style={{ color: "#E91E8C", fontWeight: 600, fontSize: "14px" }}
        >
          <HiArrowLeft size={16} />
          {t("blogPage.back")}
        </Link>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex align-items-center gap-2 gap-xl-3 flex-wrap mb-3">
              <span
                style={{
                  background: "#FC0FC0",
                  color: "#fff",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 600,
                  padding: "5px 8px",
                }}
              >
                {post.date}
              </span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>{post.author}</span>
              <span style={{ color: "#FC0FC0", fontSize: "13px" }}>{post.category}</span>
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}>{post.readTime}</span>
            </div>

            <h1 className="ceylon-title text-white mb-3" style={{ fontSize: "42px" }}>
              {post.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              {post.intro}
            </p>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "16px", marginBottom: "32px" }}
            />

            {post.sections.map((section) => (
              <div key={section.heading} style={{ marginBottom: "28px" }}>
                <h2 className="text-white mb-2" style={{ fontSize: "24px", fontWeight: 700 }}>
                  {section.heading}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "15px", lineHeight: 1.75, marginBottom: 0 }}>
                  {section.body}
                </p>
              </div>
            ))}

            <div
              style={{
                marginTop: "12px",
                padding: "22px",
                borderRadius: "16px",
                background: "#050825",
                border: "1px solid #FAC3FF",
              }}
            >
              <h3 className="text-white mb-3" style={{ fontSize: "20px", fontWeight: 700 }}>
                {t("blogPage.takeaways")}
              </h3>
              <ul style={{ color: "rgba(255,255,255,0.72)", paddingLeft: "18px", marginBottom: 0 }}>
                {post.highlights.map((item) => (
                  <li key={item} style={{ marginBottom: "8px" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div style={{ marginTop: "56px" }}>
            <h2 className="text-white mb-4" style={{ fontSize: "24px", fontWeight: 700 }}>
              {t("blogPage.moreStories")}
            </h2>
            <div className="row g-4">
              {relatedPosts.map((item) => (
                <div key={item.slug} className="col-md-6">
                  <Link href={`/blog/${item.slug}`} className="text-decoration-none">
                    <article
                      style={{
                        background: "#FFFFFF",
                        borderRadius: "14px",
                        overflow: "hidden",
                        height: "100%",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                      <div style={{ padding: "16px" }}>
                        <h3 style={{ margin: "0 0 8px", color: "#101828", fontSize: "20px", fontWeight: 700 }}>
                          {item.title}
                        </h3>
                        <p style={{ margin: 0, color: "#667085", fontSize: "13px" }}>{item.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPostDetails;
