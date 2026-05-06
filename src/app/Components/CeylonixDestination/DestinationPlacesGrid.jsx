import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";

const DestinationPlacesGrid = ({ items }) => {
  return (
    <section style={{ background: "#060A24", padding: "80px 0" }}>
      <div className="ceylon-container">
        <span className="ceylon-subtitle">Explore Sri Lanka</span>
        <h2 className="ceylon-title text-white mb-3" style={{ fontSize: "42px" }}>
          Discover Amazing Places Across Sri Lanka
        </h2>
        <p style={{ color: "rgba(255,255,255,0.66)", marginBottom: "28px", fontSize: "14px" }}>
        From golden beaches to misty mountains and ancient cities, explore the most beautiful destinations Sri Lanka has to offer.
        </p>

        <div className="row g-4">
          {items.map((item, index) => (
            <div key={`${item.title}-${index}`} className="col-md-6 col-xl-3">
              <article
                style={{
                  borderRadius: "20px",
                  border: "2px solid #00D4FF",
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
                  {/* Location and Rating */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#00D4FF", fontSize: "16px", fontWeight: 600 }}>
                      <HiLocationMarker size={18} />
                      <span>{item.title.split(" ")[0]}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#FFA500", fontSize: "14px", fontWeight: 600 }}>
                      <FaStar size={16} />
                      <span>3.6</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{ margin: "0 0 12px", color: "#fff", fontSize: "18px", fontWeight: 700, lineHeight: 1.3 }}>
                    {item.title}
                  </h3>

                  {/* Duration */}
                  <p style={{ margin: "0 0 8px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                    Duration: 2-3 Days
                  </p>

                  {/* Ideal For */}
                  <p style={{ margin: "0 0 16px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                    Ideal For: {item.subtitle}
                  </p>

                  {/* View Details Button */}
                  <button
                    type="button"
                    style={{
                      marginTop: "auto",
                      width: "100%",
                      border: "none",
                      color: "#E91E8C",
                      background: "rgba(139, 0, 139, 0.3)",
                      borderRadius: "8px",
                      fontSize: "14px",
                      padding: "12px 14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(139, 0, 139, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(139, 0, 139, 0.3)";
                    }}
                  >
                    View Details
                    <HiArrowRight size={16} />
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationPlacesGrid;
