"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "../LanguageProvider";

const contactIcons = ["⌖", "✉", "☎"];

const ContactDetailsSection = ({ image }) => {
  const { t } = useLocale();
  const contactCards = (t("contactPage.cards") || []).map((card, index) => ({
    ...card,
    icon: contactIcons[index],
  }));

  return (
    <section style={{ background: "#0C111D", padding: "70px 0 80px" }}>
      <div className="ceylon-container">
        <div className="row g-3 mb-4">
          {contactCards.map((card, index) => (
            <div key={card.title} className="col-md-4">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                style={{
                  border: "1px solid rgba(255,255,255,0.16)",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  padding: "18px 14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    margin: "0 auto 10px",
                    borderRadius: "8px",
                    background: "rgba(252,15,192,0.17)",
                    color: "#FC0FC0",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  {card.icon}
                </div>
                <h3 style={{ margin: "0 0 5px", color: "#FC0FC0", fontSize: "14px", fontWeight: 700 }}>{card.title}</h3>
                <p style={{ margin: "0 0 3px", color: "#fff", fontSize: "12px" }}>{card.line1}</p>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "11px" }}>{card.line2}</p>
              </motion.article>
            </div>
          ))}
        </div>

        {/* <div style={{ marginTop: "50px", background: "#1f0a16", borderRadius: "28px", padding: "24px" }}> */}
        <div style={{ marginTop: "50px"}}>
          <div className="row g-4 align-items-stretch">
            {/* Image Box */}
            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                  background: "#000000",
                  borderRadius: "24px",
                  overflow: "hidden",
                  height: "100%",
                  minHeight: "520px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/ceylonix/contact-mail-pic.jpg"
                  alt="Contact Ceylonix"
                  style={{
                    width: "95%",
                    height: "95%",
                    objectFit: "cover",
                    borderRadius: "24px",
                  }}
                />
              </motion.div>
            </div>

            {/* Form Box */}
            <div className="col-lg-7" id="inquiry" style={{ scrollMarginTop: "110px" }}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                  background: "#000000",
                  borderRadius: "24px",
                  padding: "40px",
                  height: "100%",
                  minHeight: "520px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h2 style={{ margin: "0 0 16px 0", color: "#fff", fontSize: "36px", fontWeight: 700 }}>{t("contactPage.formTitle")}</h2>
                <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "28px", fontSize: "15px", lineHeight: 1.6 }}>
                  {t("contactPage.formText")}
                </p>

                <form onSubmit={(e) => e.preventDefault()} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <div className="row g-3" style={{ marginRight: 0, marginLeft: 0, marginBottom: "16px" }}>
                    <div className="col-md-6" style={{ paddingRight: "8px", paddingLeft: "8px" }}>
                      <label htmlFor="contactName" style={{ display: "block", color: "#fff", fontSize: "13px", marginBottom: "8px", fontWeight: 600 }}>
                        {t("contactPage.name")}
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        placeholder={t("contactPage.namePlaceholder")}
                        style={{
                          width: "100%",
                          border: "1px solid rgba(255,255,255,0.15)",
                          background: "#1A1F3A",
                          color: "rgba(255,255,255,0.7)",
                          borderRadius: "8px",
                          padding: "12px 14px",
                          fontSize: "13px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div className="col-md-6" style={{ paddingRight: "8px", paddingLeft: "8px" }}>
                      <label htmlFor="contactEmail" style={{ display: "block", color: "#fff", fontSize: "13px", marginBottom: "8px", fontWeight: 600 }}>
                        {t("contactPage.email")}
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        placeholder={t("contactPage.emailPlaceholder")}
                        style={{
                          width: "100%",
                          border: "1px solid rgba(255,255,255,0.15)",
                          background: "#1A1F3A",
                          color: "rgba(255,255,255,0.7)",
                          borderRadius: "8px",
                          padding: "12px 14px",
                          fontSize: "13px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="contactMessage" style={{ display: "block", color: "#fff", fontSize: "13px", marginBottom: "8px", fontWeight: 600 }}>
                      {t("contactPage.message")}
                    </label>
                    <textarea
                      id="contactMessage"
                      placeholder={t("contactPage.messagePlaceholder")}
                      rows={7}
                      style={{
                        width: "100%",
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "#1A1F3A",
                        color: "rgba(255,255,255,0.7)",
                        borderRadius: "8px",
                        padding: "12px 14px",
                        fontSize: "13px",
                        outline: "none",
                        resize: "vertical",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      alignSelf: "flex-start",
                      border: "none",
                      borderRadius: "6px",
                      background: "#fff",
                      color: "#E91E8C",
                      fontWeight: 700,
                      fontSize: "13px",
                      padding: "10px 20px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#F0F0F0";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#fff";
                    }}
                  >
                    {t("common.sendInquiry")}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
