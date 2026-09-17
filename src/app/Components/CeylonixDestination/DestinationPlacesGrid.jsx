"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { useLocale } from "../LanguageProvider";

/**
 * @param {{ items: any[], showIntro?: boolean, showRegionHeading?: boolean }} props
 */
const DestinationPlacesGrid = ({ items, showIntro = true, showRegionHeading = true }) => {
  const { t } = useLocale();
  const groupedItems = items.reduce((groups, item) => {
    const region = item.region || "Sri Lanka";
    const existing = groups.find((group) => group.region === region);
    if (existing) {
      existing.items.push(item);
      return groups;
    }
    groups.push({ region, items: [item] });
    return groups;
  }, []);

  return (
    <section style={{ background: "#0C111D", padding: "80px 0" }}>
      <div className="ceylon-container">
        {showIntro ? (
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
        ) : null}

        {groupedItems.map((group) => (
          <div key={group.region} style={{ marginBottom: "48px" }}>
            {showRegionHeading ? (
            <h3 className="ceylon-title text-white mb-4" style={{ fontSize: "28px" }}>
              {group.region}
            </h3>
            ) : null}
            <div className="row g-4">
              {group.items.map((item, index) => (
                <div key={item.slug} className="col-md-6 col-xl-3">
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
                    <img src={item.image} alt={item.title} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "18px 18px 0 0" }} />
                    <div style={{ padding: "18px 16px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#00D4FF", fontSize: "16px", fontWeight: 600 }}>
                          <HiLocationMarker size={18} />
                          <span>{item.region}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#FFA500", fontSize: "14px", fontWeight: 600 }}>
                          <FaStar size={16} />
                          <span>{item.rating}</span>
                        </div>
                      </div>

                      <h3 style={{ margin: "0 0 12px", color: "#fff", fontSize: "18px", fontWeight: 700, lineHeight: 1.3 }}>
                        {item.title}
                      </h3>

                      <p style={{ margin: "0 0 8px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                        {t("common.duration")}: {item.duration}
                      </p>

                      <p style={{ margin: "0 0 16px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                        {t("common.idealFor")}: {item.subtitle}
                      </p>

                      <Link
                        href={`/destinations/${item.slug}`}
                        className="ceylon-btn text-decoration-none"
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
                        {t("common.viewDetails")}
                        <HiArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationPlacesGrid;
