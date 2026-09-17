"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "../LanguageProvider";

const ContactHero = ({ image }) => {
  const { t } = useLocale();
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
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          {t("contactPage.hero")}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.9)",
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
          <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{t("contactPage.hero")}</span>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
