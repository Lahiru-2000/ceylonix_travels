"use client";
import React from "react";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { useLocale } from "../LanguageProvider";

const DestinationPlaceDetails = ({ place, relatedPlaces = [] }) => {
  const { t } = useLocale();
  if (!place) {
    return (
      <section style={{ background: "#0C111D", padding: "80px 0", minHeight: "50vh" }}>
        <div className="ceylon-container text-center">
          <h1 className="ceylon-title text-white mb-3">{t("destPage.notFound")}</h1>
          <p style={{ color: "rgba(255,255,255,0.66)", marginBottom: "24px" }}>
            {t("destPage.notFoundText")}
          </p>
          <Link href="/destinations" className="text-decoration-none" style={{ color: "#E91E8C", fontWeight: 600 }}>
            {t("destPage.back")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: "#0C111D", padding: "40px 0 80px" }}>
      <div className="ceylon-container">
        <Link
          href="/destinations"
          className="text-decoration-none d-inline-flex align-items-center gap-2 mb-4"
          style={{ color: "#E91E8C", fontWeight: 600, fontSize: "14px" }}
        >
          <HiArrowLeft size={16} />
          {t("destPage.back")}
        </Link>

        <div className="row g-4 align-items-start">
          <div className="col-lg-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={place.image}
              alt={place.title}
              style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "20px", border: "1px solid #FAC3FF" }}
            />
          </div>
          <div className="col-lg-6">
            <span className="ceylon-subtitle">{t("destPage.detailsLabel")}</span>
            <h1 className="ceylon-title text-white mb-3" style={{ fontSize: "42px" }}>
              {place.title}
            </h1>
            <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#00D4FF", fontWeight: 600 }}>
                <HiLocationMarker size={18} />
                <span>{place.region}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#FFA500", fontWeight: 600 }}>
                <FaStar size={16} />
                <span>{place.rating}</span>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.66)", fontSize: "15px", lineHeight: 1.7, marginBottom: "20px" }}>
              {place.overview}
            </p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", marginBottom: "8px" }}>
              {t("common.duration")}: {place.duration}
            </p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", marginBottom: "8px" }}>
              {t("common.idealFor")}: {place.subtitle}
            </p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", marginBottom: "0" }}>
              {t("common.bestTime")}: {place.bestTime}
            </p>
          </div>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-lg-7">
            <h2 className="text-white mb-3" style={{ fontSize: "24px", fontWeight: 700 }}>
              {t("destPage.highlights")}
            </h2>
            <ul style={{ color: "rgba(255,255,255,0.72)", paddingLeft: "18px", marginBottom: "28px" }}>
              {place.highlights.map((highlight) => (
                <li key={highlight} style={{ marginBottom: "8px" }}>
                  {highlight}
                </li>
              ))}
            </ul>
            <h2 className="text-white mb-3" style={{ fontSize: "24px", fontWeight: 700 }}>
              {t("destPage.tip")}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.66)", fontSize: "15px", lineHeight: 1.7, marginBottom: 0 }}>
              {place.tips}
            </p>
          </div>
          <div className="col-lg-5">
            <div
              style={{
                borderRadius: "20px",
                border: "1px solid #FAC3FF",
                background: "#050825",
                padding: "24px",
              }}
            >
              <h3 className="text-white mb-3" style={{ fontSize: "20px", fontWeight: 700 }}>
                {t("destPage.planTitle")}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.66)", fontSize: "14px", marginBottom: "20px" }}>
                {t("destPage.planText")}
              </p>
              <Link
                href="/contact#inquiry"
                className="ceylon-btn text-decoration-none d-inline-flex align-items-center justify-content-center gap-2"
                style={{
                  width: "100%",
                  color: "#fff",
                  background: "#E91E8C",
                  borderRadius: "8px",
                  fontSize: "14px",
                  padding: "12px 14px",
                  fontWeight: 600,
                }}
              >
                {t("common.sendInquiry")}
                <HiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {relatedPlaces.length > 0 && (
          <div style={{ marginTop: "56px" }}>
            <h2 className="text-white mb-4" style={{ fontSize: "24px", fontWeight: 700 }}>
              {t("destPage.moreIn")} {place.region}
            </h2>
            <div className="row g-4">
              {relatedPlaces.map((item) => (
                <div key={item.slug} className="col-md-6 col-xl-3">
                  <Link href={`/destinations/${item.slug}`} className="text-decoration-none">
                    <article
                      style={{
                        borderRadius: "16px",
                        border: "1px solid #FAC3FF",
                        background: "#050825",
                        overflow: "hidden",
                        height: "100%",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.title} style={{ width: "100%", height: "140px", objectFit: "cover" }} />
                      <div style={{ padding: "14px" }}>
                        <h3 style={{ margin: 0, color: "#fff", fontSize: "16px", fontWeight: 700 }}>{item.title}</h3>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationPlaceDetails;
