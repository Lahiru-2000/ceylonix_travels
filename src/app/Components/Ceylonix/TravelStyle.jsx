"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPlane, FaRocket, FaCheck } from "react-icons/fa";

const packages = [
  {
    title: "Silver Package",
    icon: FaPaperPlane,
    price: "$100",
    blurb: "Perfect for budget-conscious travelers seeking essential experiences.",
    features: [
      "Comfortable transport",
      "Standard accommodations",
      "Key destination visits",
      "Basic guide support",
    ],
  },
  {
    title: "Gold Package",
    icon: FaPlane,
    price: "$200",
    blurb: "Balanced comfort and experience for a memorable journey.",
    features: [
      "Premium accommodations",
      "Experienced tour guide",
      "Curated destinations",
      "Enhanced travel comfort",
    ],
  },
  {
    title: "Platinum Package",
    icon: FaRocket,
    price: "$300",
    blurb: "Luxury travel with exclusive experiences and maximum comfort.",
    features: [
      "Luxury hotels & resorts",
      "Private guide & driver",
      "Personalized itinerary",
      "VIP travel experience",
    ],
  },
];

const CeylonixTravelStyle = () => {
  return (
    <section
      className="ceylon-travel-style ceylon-section"
      style={{ background: "#0b0e14" }}
    >
      <div className="ceylon-container">
        <div className="text-center mb-5 mx-auto" style={{ maxWidth: "720px" }}>
          <span className="ceylon-subtitle text-white d-block">Our Packages</span>
          <h2 className="ceylon-title text-white mt-2 mb-3">Choose Your Travel Style</h2>
          <p className="text-white-50 m-0" style={{ fontSize: "16px", lineHeight: 1.6 }}>
            Flexible packages designed to match your comfort, budget, and travel expectations.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div key={pkg.title} className="col-lg-4 col-md-6">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="h-100 d-flex flex-column text-center p-4 p-lg-5 rounded-4 position-relative"
                  style={{
                    background: "#050508",
                    border: "1px solid #FC0FC0",
                    boxShadow:
                      "0 0 0 1px rgba(252, 15, 192, 0.12), 0 0 32px rgba(233, 30, 99, 0.12)",
                  }}
                >
                  <div
                    className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: 72,
                      height: 72,
                      background: "radial-gradient(circle at 30% 30%, rgba(212,0,255,0.35), rgba(10,8,20,0.95))",
                      color: "#fff",
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-white fw-bold mb-2" style={{ fontSize: "22px" }}>
                    {pkg.title}
                  </h3>
                  <p
                    className="fw-bold mb-3"
                    style={{
                      fontSize: "36px",
                      background: "linear-gradient(90deg, #e91e63, #d400ff)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {pkg.price}
                  </p>
                  <p className="text-white-50 small mb-4" style={{ fontSize: "14px", lineHeight: 1.55 }}>
                    {pkg.blurb}
                  </p>
                  <ul className="list-unstyled text-start mb-4 flex-grow-1" style={{ fontSize: "14px" }}>
                    {pkg.features.map((line) => (
                      <li key={line} className="d-flex align-items-start gap-2 mb-2 text-white-50">
                        <FaCheck className="flex-shrink-0 mt-1" style={{ color: "#e91e63", fontSize: "12px" }} />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="w-100 border-0 fw-semibold py-3 rounded-3 mt-auto"
                    style={{
                      background: "linear-gradient(145deg, #1a0f28 0%, #120a1c 100%)",
                      color: "#fc0fc0",
                      fontSize: "15px",
                    }}
                  >
                    View Details
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CeylonixTravelStyle;
