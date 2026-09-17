"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '../LanguageProvider';

const CeylonixStats = () => {
  const { t } = useLocale();
  const stats = [
    { label: t("stats.years"), value: '20+' },
    { label: t("stats.customers"), value: '2k+' },
    { label: t("stats.visitors"), value: '30+' },
    { label: t("stats.awards"), value: '12+' }
  ];

  return (
    <section className="ceylon-stats" style={{
      background: 'linear-gradient(90deg, #370129 0%, #FC0FC0 50%, #370129 100%)',
      padding: '40px 0',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="ceylon-container">
        <div className="row text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3 mb-4 mb-md-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="m-0 text-white-100" style={{ fontSize: '48px', fontStyle: 'medium', fontFamily: 'var(--outfit-font)', color: 'white' }}>{stat.value}</h2>
                <p className="m-0 text-white-100" style={{ fontSize: '16px', fontFamily: 'var(--outfit-font)' }}>{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CeylonixStats;
