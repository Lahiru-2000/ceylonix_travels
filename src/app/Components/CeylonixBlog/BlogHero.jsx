"use client";
import React from "react";
import { useLocale } from "../LanguageProvider";

/**
 * @param {{ image: string, title?: string, currentPage?: string }} props
 */
const BlogHero = ({ image, title = undefined, currentPage = undefined }) => {
  const { t } = useLocale();
  const heroTitle = title || t("blogPage.hero");
  const pageLabel = currentPage || t("blogPage.hero");
  return (
    <section style={{ position: "relative", height: "480px", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(1,0,11,0.4) 0%, rgba(1,0,11,0.65) 50%, rgba(1,0,11,0.85) 100%)",
        }}
      />
      <div
        className="ceylon-container"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: "0 0 20px 0",
            color: "#FFFFFF",
            fontSize: heroTitle.length > 28 ? "36px" : "64px",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          {heroTitle}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.9)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="/"
            style={{
              color: "#E91E8C",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            {t("common.home")}
          </a>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>/</span>
          <a
            href="/blog"
            style={{
              color: "#E91E8C",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            {t("blogPage.hero")}
          </a>
          {pageLabel !== t("blogPage.hero") && (
            <>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{pageLabel}</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
