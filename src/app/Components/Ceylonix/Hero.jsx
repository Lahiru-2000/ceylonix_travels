"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from '../LanguageProvider';

const CeylonixHero = ({ heroImage }) => {
  const { t } = useLocale();

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
            {t("hero.subtitle")}
          </span>

          <h1 className="fw-bold mb-4 hero-title-main">
            {t("hero.titleLine1")} <br />
            {t("hero.titleLine2")}
          </h1>

          <p className="mb-5" style={{
            fontSize: '14.65px',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: '1.6',
            fontWeight: '400',
            fontFamily: 'Inter, sans-serif',
            maxWidth: "400px",
          }}>
            {t("hero.description")}
          </p>

          <div className="d-flex align-items-center gap-3 hero-btn-group">
            <Link href="/#packages" className="ceylon-btn text-decoration-none" style={{
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
              {t("hero.buttonPackages")}
            </Link>
            <Link href="/contact#inquiry" className="ceylon-btn text-decoration-none" style={{
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
              {t("hero.buttonRequest")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeylonixHero;
