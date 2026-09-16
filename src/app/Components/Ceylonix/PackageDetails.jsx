"use client";
import React from "react";
import Link from "next/link";
import { FaCheck, FaTimes, FaUsers, FaClock, FaCar } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { useLocale } from "../LanguageProvider";

const PackageDetails = ({ pkg, otherPackages = [] }) => {
  const { t } = useLocale();
  if (!pkg) {
    return (
      <section style={{ background: "#0C111D", padding: "140px 0 80px", minHeight: "50vh" }}>
        <div className="ceylon-container text-center">
          <h1 className="ceylon-title text-white mb-3">{t("packagePage.notFound")}</h1>
          <p style={{ color: "rgba(255,255,255,0.66)", marginBottom: "24px" }}>
            {t("packagePage.notFoundText")}
          </p>
          <Link href="/#packages" className="text-decoration-none" style={{ color: "#E91E8C", fontWeight: 600 }}>
            {t("packagePage.back")}
          </Link>
        </div>
      </section>
    );
  }

  const facts = [
    { icon: FaUsers, label: t("common.idealFor"), value: pkg.idealFor },
    { icon: FaClock, label: t("common.duration"), value: pkg.duration },
    { icon: FaCar, label: t("common.travelStyle"), value: pkg.groupStyle },
  ];

  return (
    <section style={{ background: "#0C111D", overflowX: "hidden" }}>
      <div
        style={{
          position: "relative",
          padding: "130px 0 40px",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 80% 10%, rgba(252, 15, 192, 0.22), transparent 36%), radial-gradient(circle at 10% 80%, rgba(212, 0, 255, 0.12), transparent 32%), #08060f",
        }}
      >
        <div className="ceylon-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="d-flex align-items-center gap-2 mb-3 flex-wrap" style={{ fontSize: "14px" }}>
            <Link href="/" className="text-decoration-none" style={{ color: "#E91E8C", fontWeight: 500 }}>
              {t("common.home")}
            </Link>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>/</span>
            <Link href="/#packages" className="text-decoration-none" style={{ color: "#E91E8C", fontWeight: 500 }}>
              {t("packagePage.packagesLabel")}
            </Link>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.8)" }}>{pkg.title}</span>
          </div>
          <span className="ceylon-subtitle">{t("packagePage.travelPackage")}</span>
          <h1
            className="ceylon-title text-white mt-2 mb-3"
            style={{ fontSize: "clamp(30px, 8vw, 52px)", maxWidth: "720px", overflowWrap: "anywhere", lineHeight: 1.15 }}
          >
            {pkg.title}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "17px", maxWidth: "680px", marginBottom: 0, lineHeight: 1.7 }}>
            {pkg.blurb}
          </p>
        </div>
      </div>

      <div className="ceylon-container" style={{ paddingTop: "32px", paddingBottom: "72px" }}>
        <Link
          href="/#packages"
          className="text-decoration-none d-inline-flex align-items-center gap-2 mb-4"
          style={{ color: "#E91E8C", fontWeight: 600, fontSize: "14px" }}
        >
          <HiArrowLeft size={16} />
          {t("packagePage.back")}
        </Link>

        <div className="row g-4">
          <div className="col-lg-8" style={{ minWidth: 0 }}>
            <div
              style={{
                background: "#101828",
                border: "1px solid rgba(252, 15, 192, 0.18)",
                borderRadius: "20px",
                padding: "28px",
                marginBottom: "24px",
              }}
            >
              <h2 className="text-white mb-3" style={{ fontSize: "24px", fontWeight: 700 }}>
                {t("packagePage.about")}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "16px", lineHeight: 1.8, marginBottom: 0 }}>
                {pkg.overview}
              </p>
            </div>

            <div className="row g-3 mb-4">
              {facts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="col-md-4">
                    <div
                      style={{
                        height: "100%",
                        background: "#050825",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "16px",
                        padding: "18px",
                      }}
                    >
                      <div className="d-flex align-items-center gap-2 mb-2" style={{ color: "#FC0FC0" }}>
                        <Icon size={14} />
                        <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                          {fact.label}
                        </span>
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "14px", lineHeight: 1.55, marginBottom: 0 }}>
                        {fact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div
                  style={{
                    height: "100%",
                    background: "#050825",
                    border: "1px solid #FC0FC0",
                    borderRadius: "20px",
                    padding: "24px",
                  }}
                >
                  <h3 className="text-white mb-3" style={{ fontSize: "20px", fontWeight: 700 }}>
                    {t("packagePage.included")}
                  </h3>
                  <ul className="list-unstyled mb-0">
                    {pkg.included.map((item) => (
                      <li key={item} className="d-flex align-items-start gap-2 mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <span
                          className="d-inline-flex align-items-center justify-content-center flex-shrink-0"
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background: "rgba(252, 15, 192, 0.16)",
                            color: "#FC0FC0",
                            marginTop: "1px",
                          }}
                        >
                          <FaCheck size={10} />
                        </span>
                        <span style={{ fontSize: "14px", lineHeight: 1.55 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    height: "100%",
                    background: "#101828",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                    padding: "24px",
                  }}
                >
                  <h3 className="text-white mb-3" style={{ fontSize: "20px", fontWeight: 700 }}>
                    {t("packagePage.notIncluded")}
                  </h3>
                  <ul className="list-unstyled mb-0">
                    {pkg.notIncluded.map((item) => (
                      <li key={item} className="d-flex align-items-start gap-2 mb-3" style={{ color: "rgba(255,255,255,0.68)" }}>
                        <span
                          className="d-inline-flex align-items-center justify-content-center flex-shrink-0"
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.55)",
                            marginTop: "1px",
                          }}
                        >
                          <FaTimes size={10} />
                        </span>
                        <span style={{ fontSize: "14px", lineHeight: 1.55 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#050825",
                border: "1px solid rgba(252, 15, 192, 0.18)",
                borderRadius: "20px",
                padding: "24px",
                marginBottom: "24px",
              }}
            >
              <h3 className="text-white mb-4" style={{ fontSize: "20px", fontWeight: 700 }}>
                {t("packagePage.journey")}
              </h3>
              <div className="d-flex flex-column gap-3">
                {pkg.samplePlan.map((item, index) => (
                  <div key={item} className="d-flex align-items-start gap-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "#FC0FC0",
                        color: "#fff",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      {index + 1}
                    </span>
                    <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "15px", lineHeight: 1.6, marginBottom: 0, paddingTop: "4px" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "rgba(252, 15, 192, 0.08)",
                borderLeft: "3px solid #FC0FC0",
                borderRadius: "12px",
                padding: "18px 20px",
              }}
            >
              <p style={{ color: "#FC0FC0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>
                {t("packagePage.goodToKnow")}
              </p>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "15px", lineHeight: 1.7, marginBottom: 0 }}>
                {pkg.tips}
              </p>
            </div>
          </div>

          <div className="col-lg-4" style={{ minWidth: 0 }}>
            <div
              style={{
                position: "sticky",
                top: "110px",
                borderRadius: "24px",
                border: "1px solid #FC0FC0",
                background: "linear-gradient(180deg, #16071a 0%, #050508 100%)",
                padding: "28px",
                boxShadow: "0 18px 48px rgba(252, 15, 192, 0.12)",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginBottom: "6px" }}>{t("packagePage.startingFrom")}</p>
              <p
                className="fw-bold mb-2"
                style={{
                  fontSize: "42px",
                  lineHeight: 1,
                  background: "linear-gradient(90deg, #e91e63, #d400ff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {pkg.price}
              </p>
              <p style={{ color: "rgba(255,255,255,0.62)", fontSize: "13px", marginBottom: "22px" }}>{pkg.priceNote}</p>
              <h3 className="text-white mb-2" style={{ fontSize: "22px", fontWeight: 700 }}>
                {t("packagePage.book")} {pkg.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.66)", fontSize: "14px", lineHeight: 1.6, marginBottom: "22px" }}>
                {t("packagePage.bookText")}
              </p>
              <Link
                href="/contact#inquiry"
                className="ceylon-btn text-decoration-none d-inline-flex align-items-center justify-content-center gap-2 mb-3"
                style={{
                  width: "100%",
                  color: "#fff",
                  background: "#FC0FC0",
                  borderRadius: "12px",
                  fontSize: "15px",
                  padding: "14px 16px",
                  fontWeight: 700,
                }}
              >
                {t("common.sendInquiry")}
                <HiArrowRight size={16} />
              </Link>
              <Link
                href="/#packages"
                className="ceylon-btn text-decoration-none d-inline-flex align-items-center justify-content-center"
                style={{
                  width: "100%",
                  color: "#FC0FC0",
                  background: "rgba(252, 15, 192, 0.12)",
                  borderRadius: "12px",
                  fontSize: "14px",
                  padding: "12px 16px",
                  fontWeight: 600,
                }}
              >
                {t("packagePage.compare")}
              </Link>
            </div>
          </div>
        </div>

        {otherPackages.length > 0 && (
          <div style={{ marginTop: "56px" }}>
            <h2 className="text-white mb-4" style={{ fontSize: "28px", fontWeight: 700 }}>
              {t("packagePage.other")}
            </h2>
            <div className="row g-4">
              {otherPackages.map((item) => (
                <div key={item.slug} className="col-md-6">
                  <Link href={`/packages/${item.slug}`} className="text-decoration-none d-block h-100">
                    <article
                      style={{
                        height: "100%",
                        background: "#050825",
                        border: "1px solid rgba(252, 15, 192, 0.22)",
                        borderRadius: "18px",
                        padding: "24px",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
                        <h3 className="text-white mb-0" style={{ fontSize: "22px", fontWeight: 700 }}>
                          {item.title}
                        </h3>
                        <span style={{ color: "#FC0FC0", fontWeight: 700, fontSize: "20px" }}>{item.price}</span>
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", marginBottom: "16px" }}>{item.blurb}</p>
                      <span style={{ color: "#FC0FC0", fontSize: "14px", fontWeight: 600 }}>
                        {t("common.viewDetails")} →
                      </span>
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

export default PackageDetails;
