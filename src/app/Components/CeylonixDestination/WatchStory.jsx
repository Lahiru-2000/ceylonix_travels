"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useLocale } from "../LanguageProvider";

const DestinationExperience = ({ image }) => {
  const { t } = useLocale();
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "1dKpyXMNiJZU2yZFyyw3j9X8y0wtfHenb";
  const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <section style={{ background: "#0C111D", padding: "0 0 90px" }}>
      <div className="ceylon-container">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="ceylon-subtitle">{t("destPage.watchSubtitle")}</span>
          <h2 className="ceylon-title text-white mb-3" style={{ fontSize: "42px" }}>
            {t("destPage.watchTitle")}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.66)", marginBottom: "28px", fontSize: "14px" }}>
            {t("destPage.watchText")}
          </p>
          <div className="d-flex justify-content-center gap-2">
            <Link
              href="/contact"
              className="ceylon-btn text-decoration-none"
              style={{
                border: "none",
                borderRadius: "6px",
                fontSize: "13px",
                padding: "6px 12px",
                background: "#FC0FC0",
                color: "#fff",
              }}
            >
              {t("common.contactUs")}
            </Link>
            <Link
              href="/contact#inquiry"
              className="ceylon-btn text-decoration-none"
              style={{
                border: "1px solid #FC0FC0",
                borderRadius: "6px",
                fontSize: "13px",
                padding: "6px 12px",
                background: "#fff",
                color: "#FC0FC0",
              }}
            >
              {t("common.requestTour")}
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="gallery-container position-relative mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          style={{
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 20px 34px rgba(0,0,0,0.4)",
          }}
        >
          {!showVideo ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt="Travel experience"
                className="w-100 h-100"
                style={{ objectFit: "cover", display: "block" }}
              />
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                aria-label="Play video"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "66px",
                  height: "66px",
                  borderRadius: "999px",
                  border: "none",
                  background: "#FC0FC0",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  boxShadow: "0 10px 28px rgba(252,15,192,0.45)",
                  cursor: "pointer",
                  zIndex: 2,
                }}
              >
                <FaPlay style={{ marginLeft: "4px" }} />
              </button>
            </>
          ) : (
            <div style={{ width: "100%", height: "100%", background: "#000", position: "relative" }}>
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="Destination story video"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: 0, display: "block" }}
              />
              <button
                type="button"
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  background: "rgba(0,0,0,0.45)",
                  border: 0,
                  color: "#fff",
                  fontSize: 20,
                  padding: "6px 10px",
                  borderRadius: 6,
                  cursor: "pointer",
                  zIndex: 3,
                }}
              >
                ✕
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationExperience;
