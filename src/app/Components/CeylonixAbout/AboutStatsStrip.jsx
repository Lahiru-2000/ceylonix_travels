import React from "react";

const stats = [
  { value: "26+", label: "Team Members" },
  { value: "3.6+", label: "Years In Service" },
  { value: "46+", label: "Happy Travelers" },
  { value: "12+", label: "Awards Collected" },
];

const AboutStatsStrip = () => {
  return (
    <section
      style={{
        background: "var(--ceylon-gradient)",
        padding: "30px 0",
      }}
    >
      <div className="ceylon-container">
        <div className="row g-4">
          {stats.map((item) => (
            <div key={item.label} className="col-6 col-lg-3 text-center">
              <h3
                style={{
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "34px",
                  marginBottom: "6px",
                }}
              >
                {item.value}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "14px",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStatsStrip;
