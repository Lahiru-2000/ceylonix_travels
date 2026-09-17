"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "../LanguageProvider";

/**
 * @param {{ image: string, title?: string, currentPage?: string }} props
 */
const DestinationHero = ({ image, title = undefined, currentPage = undefined }) => {
  const { t } = useLocale();
  const heroTitle = title || t("destPage.hero");
  const pageLabel = currentPage || t("destPage.hero");
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <h1
          style={{
            margin: "0 0 20px 0",
            color: "#FFFFFF",
            fontSize: heroTitle.length > 28 ? "42px" : "64px",
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
            href="/destinations"
            style={{
              color: "#E91E8C",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            {t("destPage.hero")}
          </a>
          {pageLabel !== t("destPage.hero") && (
            <>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{pageLabel}</span>
            </>
          )}
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationHero;
