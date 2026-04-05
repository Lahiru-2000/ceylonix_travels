"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const CeylonixGallery = ({ galleryImg }) => {
  return (
    <section className="ceylon-gallery ceylon-section" style={{ background: '#0C111D'}}>
      <div className="ceylon-container">
        <div className="text-center mb-5 mx-auto" >
          <span className="ceylon-subtitle text-white d-block">Gallery Preview</span>
          <h2 className="ceylon-title text-white mt-2 mb-3 pt-2">Moments From Our Journeys</h2>
          <p className="text-white-100 m-0" style={{ fontSize: "16px" }}>
            A glimpse into unforgettable experiences shared by our travelers.
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
        </motion.div>
      </div>
    </section>
  );
};

export default CeylonixGallery;
