"use client";
import React from "react";
import { motion } from "framer-motion";

const CeylonixCTA = ({ ctaImg }) => {
  return (
    <section
      className="ceylon-cta ceylon-section"
      style={{
        background: "linear-gradient(160deg, #0d1f24 0%, #1a0a28 50%, #120818 100%)",
      }}
    >
      <div className="ceylon-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ceylon-cta-banner d-flex flex-column flex-lg-row align-items-stretch overflow-hidden position-relative"
          style={{
            background: "#000000",
            borderRadius: "28px",
            minHeight: "320px",
          }}
        >
          <div
            className="d-flex flex-column justify-content-center p-5 p-lg-5 ceylon-cta-copy"
            style={{  maxWidth: "100%", zIndex: 2 }}
          >
            <h2 className="fw-bold text-white mb-3 ceylon-title" style={{  lineHeight: 1.15 }}>
              Plan Your Dream Trip Today
            </h2>
            <p className="text-white mb-4" style={{ fontSize: "16px" }}>
              Ready to explore Sri Lanka? Let us create the perfect journey for you.
            </p>
            <hr
              style={{
                border: 0,
                height: "1px",
                background: "#FC0FC0",
                
                margin: "0 0 24px 0",
                opacity: 1,
              }}
            />
            <div className="d-flex flex-wrap gap-3">
              <button
                type="button"
                className="border-0 text-white fw-semibold px-4 py-2 "
                style={{
                  background: "#FC0FC0",
                  fontSize: "15px",
                  borderRadius:"8px"
                }}
              >
                Send Inquiry
              </button>
              <button
                type="button"
                className="fw-semibold px-4 py-2 border-0"
                style={{
                  borderRadius:"8px",
                  border:"1px",
                  borderColor:"#FC0FC0",
                  background: "#ffffff",
                  color: "#FC0FC0",
                  fontSize: "15px",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div
            className="ceylon-cta-visual flex-grow-1 d-flex align-items-stretch"
            style={{ minWidth: 0, minHeight: "220px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ctaImg}
              alt=""
              className="d-block w-100 h-100"
              style={{
                objectFit: "cover",
                objectPosition: "right center",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeylonixCTA;
