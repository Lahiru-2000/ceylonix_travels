"use client";
import React from "react";
import { useLocale } from "../LanguageProvider";

const AboutGuideCards = ({ image }) => {
  const { t } = useLocale();
  const guides = [
    { name: "Nirmal Perera" },
    { name: "Nirmal Perera" },
    { name: "Nirmal Perera" },
    { name: "Nirmal Perera" },
  ];

  return (
    <section style={{ background: "#0C111D", padding: "85px 0 95px" }}>
      <div className="ceylon-container">
        <div className="text-center mb-4">
          <span className="ceylon-subtitle">{t("aboutPage.guidesSubtitle")}</span>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "42px",
              fontWeight: 800,
              marginBottom: "15px",
            }}
          >
            {t("aboutPage.guidesTitle")}
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: "16px",
              margin: "0 auto",
            }}
          >
            {t("aboutPage.guidesText")}
          </p>
        </div>
        <div className="row guide.cards" >
          {guides.map((guide, index) => (
            <div
              className="col-12 col-lg-3 col-sm-6 col-md-4 mt-4 "
              key={index}
             
            >
              <div
                style={{
                  background: "#020318",
                  borderRadius: "20px",
                  border: "2px solid #E91E8C",
                  padding: "16px",
                  boxShadow: "0 14px 32px rgba(0,0,0,0.45)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={guide.name}
                  style={{
                    width: "100%",
                    height: "240px",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "16px",
                  }}
                />
                <div style={{ textAlign: "center", paddingTop: "16px" }}>
                  <h4
                    style={{
                      color: "#FFFFFF",
                      margin: "0 0 8px",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    {guide.name}
                  </h4>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      margin: "0 0 12px",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {t("aboutPage.guideRole")}
                  </p>
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "20px",
                      padding: "6px 16px",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 500,
                    }}
                  >
                    {t("aboutPage.guideYears")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGuideCards;
