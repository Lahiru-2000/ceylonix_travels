"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CeylonixHero = ({ heroImage }) => {
  return (
    <section className="ceylon-hero" style={{
      position: 'relative',
      height: '100vh',
      minHeight: '800px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Background Image */}
      <div className="hero-bg" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      </div>

      <div className="ceylon-container" style={{ width: '100%', paddingTop:"10%" }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content-card"
        >
          <span className="ceylon-subtitle text-white">
            Discover the beauty of Sri Lanka
          </span>

          <h1 className="fw-bold mb-4 hero-title-main">
            Explore Sri Lanka <br />
            Like Never Before
          </h1>

          <p className="mb-5" style={{
            fontSize: '14.65px',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: '1.6',
            fontWeight: '400',
            fontFamily: 'inter',
            maxWidth:"400px"
          }}>
            Experience handpicked journeys across Sri Lanka with expert guides, comfortable travel, and unforgettable destinations - all designed for a seamless and personalized travel experience.
          </p>

          <div className="d-flex align-items-center gap-3 hero-btn-group">
            <button style={{
              background: '#FC0FC0',
              color: 'white',
              border: 'none',
              padding: '10px 30px',
              borderRadius: '10px',
              fontWeight: '500',
              fontSize: '17px',
              fontFamily: 'outfit',
              textTransform: 'none',
              boxShadow: '0 4px 15px #A5A3AE4D'
            }}>
              View Packages
            </button>
            <button style={{
              background: '#FFFFFF',
              color: '#FC0FC0',
              border: 'none',
              padding: '10px 30px',
              borderRadius: '10px',
              fontWeight: '500',
              fontSize: '17px',
              fontFamily: 'outfit',
              textTransform: 'none',
              boxShadow: '0 1px 4px #FC0FC0'
            }}>
              Request Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeylonixHero;
