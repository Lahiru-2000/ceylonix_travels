import React from "react";
import { FaPlay } from "react-icons/fa";

const DestinationExperience = ({ image }) => {
  return (
    <section style={{ background: "#0C111D", padding: "0 0 90px" }}>
      <div className="ceylon-container">
        <div className="text-center mb-4">
          <span className="ceylon-subtitle">Watch Our Story</span>
          <h2 className="ceylon-title text-white mb-3" style={{ fontSize: "42px" }}>
            Unforgettable Travel Experiences Await You
          </h2>
          <p style={{ color: "rgba(255,255,255,0.66)", marginBottom: "28px", fontSize: "14px" }}>
       Explore Sri Lanka through real journeys and authentic travel moments with Ceylonix.
        </p>
          <div className="d-flex justify-content-center gap-2">
            <button
              type="button"
              style={{
                border: "none",
                borderRadius: "6px",
                fontSize: "13px",
                padding: "6px 12px",
                background: "#FC0FC0",
                color: "#fff",
              }}
            >
              Contact Us
            </button>
            <button
              type="button"
              style={{
                border: "1px solid #FC0FC0",
                borderRadius: "6px",
                fontSize: "13px",
                padding: "6px 12px",
                background: "#fff",
                color: "#FC0FC0",
              }}
            >
              Request Tour
            </button>
          </div>
        </div>
        <div style={{ borderRadius: "18px", overflow: "hidden", position: "relative", boxShadow: "0 20px 34px rgba(0,0,0,0.4)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="Travel experience" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
          <button
            type="button"
            aria-label="Play"
            style={{
              position: "absolute",
              inset: "0",
              margin: "auto",
              width: "66px",
              height: "66px",
              borderRadius: "999px",
              border: "none",
              background: "#FC0FC0",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              boxShadow: "0 10px 28px rgba(252,15,192,0.45)",
            }}
          >
            <FaPlay style={{ marginLeft: "4px" }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationExperience;
