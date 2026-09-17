"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { useLocale } from "../LanguageProvider";
import { getDestinationRegions } from "../../lib/getDestinations";

const DestinationRegionGrid = ({ items }) => {
  const { t } = useLocale();
  const regions = getDestinationRegions(items);

  return (
    <section style={{ background: "#0C111D", padding: "80px 0" }}>
      <div className="ceylon-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <span className="ceylon-subtitle">{t("destPage.subtitle")}</span>
        <h2 className="ceylon-title text-white mb-3" style={{ fontSize: "42px" }}>
          {t("destPage.title")}
        </h2>
        <p style={{ color: "rgba(255,255,255,0.66)", marginBottom: "28px", fontSize: "14px" }}>
          {t("destPage.description")}
        </p>
        </motion.div>

        <div className="row g-4">
          {regions.map((region, index) => (
            <div key={region.regionSlug} className="col-md-6 col-xl-3">
              <Link href={`/destinations/region/${region.regionSlug}`} className="text-decoration-none d-block h-100">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                style={{
                  borderRadius: "20px",
                  border: "1px solid #FAC3FF",
                  background: "#050825",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={region.image}
                  alt={region.region}
                  style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "18px 18px 0 0" }}
                />
                <div style={{ padding: "18px 16px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#00D4FF", fontSize: "16px", fontWeight: 600 }}>
                      <HiLocationMarker size={18} />
                      <span>{region.region}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#FFA500", fontSize: "14px", fontWeight: 600 }}>
                      <FaStar size={16} />
                      <span>{region.rating}</span>
                    </div>
                  </div>

                  <h3 style={{ margin: "0 0 12px", color: "#fff", fontSize: "20px", fontWeight: 700, lineHeight: 1.3 }}>
                    {region.region}
                  </h3>

                  <p style={{ margin: "0 0 16px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                    {region.count} {t("destPage.placesCount")}
                  </p>

                  <span
                    className="ceylon-btn"
                    style={{
                      marginTop: "auto",
                      width: "100%",
                      color: "#E91E8C",
                      background: "rgba(139, 0, 139, 0.3)",
                      borderRadius: "8px",
                      fontSize: "14px",
                      padding: "12px 14px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    {t("destPage.explorePlaces")}
                    <HiArrowRight size={16} />
                  </span>
                </div>
              </motion.article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationRegionGrid;
