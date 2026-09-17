"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "../LanguageProvider";

const AboutVehicleCards = ({ busImage, vanImage, carImage }) => {
  const { t } = useLocale();
  const vehicles = [
    {
      name: t("aboutPage.busName"),
      role: t("aboutPage.busRole"),
      badge: t("aboutPage.busBadge"),
      image: '../../assets/images/ceylonix/metro bus.jpg',
    },
    {
      name: t("aboutPage.vanName"),
      role: t("aboutPage.vanRole"),
      badge: t("aboutPage.vanBadge"),
      image: '../../assets/images/ceylonix/van.jpg',
    },
    {
      name: t("aboutPage.carName"),
      role: t("aboutPage.carRole"),
      badge: t("aboutPage.carBadge"),
      image: '../../assets/images/ceylonix/cartravel.jpg',
    },
  ];

  return (
    <section style={{ background: "#0C111D", padding: "20px 0 95px" ,paddingTop:"70px"}}>
      <div className="ceylon-container">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="ceylon-subtitle">{t("aboutPage.vehiclesSubtitle")}</span>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "42px",
              fontWeight: 800,
              marginBottom: "15px",
            }}
          >
            {t("aboutPage.vehiclesTitle")}
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: "16px",
              margin: "0 auto",
            }}
          >
            {t("aboutPage.vehiclesText")}
          </p>
        </motion.div>
        <div className="row justify-content-center">
          {vehicles.map((vehicle, index) => (
            <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-4" key={vehicle.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                style={{
                  background: "#020318",
                  borderRadius: "20px",
                  border: "2px solid #E91E8C",
                  padding: "16px",
                  boxShadow: "0 14px 32px rgba(0,0,0,0.45)",
                  height: "100%",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
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
                    {vehicle.name}
                  </h4>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      margin: "0 0 12px",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {vehicle.role}
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
                    {vehicle.badge}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutVehicleCards;
