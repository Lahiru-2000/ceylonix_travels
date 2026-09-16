"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { useLocale } from "../LanguageProvider";

const CeylonixDestinations = ({ destinations }) => {
  const { t } = useLocale();
  return (
    <section
      className="ceylon-destinations ceylon-section"
      style={{ background: "#0a0b10" }}
    >
      <div className="ceylon-container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-4 mb-5">
          <div>
            <span className="ceylon-subtitle text-white d-block mb-2">{t("destinations.sectionSubtitle")}</span>
            <h2 className="ceylon-title text-white m-0 mb-2 pt-3">{t("destinations.title")}</h2>
            <p className="text-white-100 m-0" style={{ fontSize: "15px" }}>
              {t("destinations.description")}
            </p>
          </div>
          <Link
            href="/destinations"
            className="ceylon-btn text-decoration-none fw-semibold px-4 py-3 rounded-pill flex-shrink-0"
            style={{
              background: "#ffffff",
              color: "#e91e63",
              fontSize: "15px",
            }}
          >
            {t("destinations.exploreAll")}
          </Link>
        </div>

        <div className="row g-4">
          {destinations.map((dest, index) => (
            <div key={dest.slug} className="col-lg-3 col-md-6">
              <Link href={`/destinations/${dest.slug}`} className="text-decoration-none d-block">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="destination-card overflow-hidden position-relative ceylon-dest-card-hover"
                style={{
                  borderRadius: "24px",
                  height: "420px",
                  cursor: "pointer",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-100 h-100 dest-img"
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 35%, rgba(5,5,12,0.75) 70%, rgba(5,5,12,0.95) 100%)",
                  }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-4"
                  style={{ zIndex: 2 }}
                >
                  <h4 className="text-white fw-bold mb-1" style={{ fontSize: "22px" }}>
                    {dest.title}
                  </h4>
                  <p className="text-white-50 small m-0 mb-3" style={{ fontSize: "14px" }}>
                    {dest.subtitle}
                  </p>
                </div>
                <div
                    className="position-absolute d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: 44,
                      height: 44,
                      background: "#fff",
                      bottom: "20px",
                      right: "20px",
                      zIndex: 3,
                    }}
                  >
                    <HiArrowUpRight size={20} style={{ color: "#e91e63" }} />
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CeylonixDestinations;
