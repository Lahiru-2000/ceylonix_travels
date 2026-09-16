"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useLocale } from "../LanguageProvider";

const CeylonixGallery = ({ galleryImg }) => {
  const { t } = useLocale();
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "1dKpyXMNiJZU2yZFyyw3j9X8y0wtfHenb";
  const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <section className="ceylon-gallery ceylon-section" style={{ background: '#0C111D'}}>
      <div className="ceylon-container">
        <div className="text-center mb-5 mx-auto" >
          <span className="ceylon-subtitle text-white d-block">{t("gallery.sectionSubtitle")}</span>
          <h2 className="ceylon-title text-white mt-2 mb-3 pt-2">{t("gallery.title")}</h2>
          <p className="text-white-100 m-0" style={{ fontSize: "16px" }}>
            {t("gallery.description")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="gallery-container position-relative mx-auto"
          style={{
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 32px 64px rgba(0,0,0,0.45)",
            // maxWidth: "1100px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {!showVideo ? (
            <>
              <img
                src={galleryImg}
                alt="Travel moment"
                className="w-100 h-100"
                style={{ objectFit: "cover", display: "block" }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: "linear-gradient(transparent 50%, rgba(5,5,12,0.35) 100%)",
                }}
              />
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="position-absolute border-0 p-0 rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 77,
                  height: 77,
                  background: "#fff",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
                  zIndex: 2,
                }}
                aria-label="Play video"
              >
                <FaPlay style={{ color: "#FC0FC0", marginLeft: "6px", fontSize: "28px" }} />
              </button>
            </>
          ) : (
            <div style={{ width: "100%", height: "100%", background: "#000", position: "relative" }}>
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="Gallery video"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: 0, display: "block" }}
              />
              <button
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

export default CeylonixGallery;
