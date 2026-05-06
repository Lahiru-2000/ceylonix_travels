import React from "react";

const guides = [
  { name: "Nirmal Perera", title: "Senior Tour Guide", experience: "8+ Years Experience" },
  { name: "Nirmal Perera", title: "Senior Tour Guide", experience: "8+ Years Experience" },
  { name: "Nirmal Perera", title: "Senior Tour Guide", experience: "8+ Years Experience" },
  { name: "Nirmal Perera", title: "Senior Tour Guide", experience: "8+ Years Experience" },
];

const AboutGuideCards = ({ image }) => {
  return (
    <section style={{ background: "#020318", padding: "85px 0 95px" }}>
      <div className="ceylon-container">
        <div className="text-center mb-5">
          <span className="ceylon-subtitle">Meet With Guide</span>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "42px",
              fontWeight: 800,
              marginBottom: "15px",
            }}
          >
            Our Professional Tour Guides
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "16px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Our experienced and friendly guides are here to make your journey informative, safe, and unforgettable.
          </p>
        </div>
        <div className="row g-4">
          {guides.map((guide, index) => (
            <div className="col-6 col-lg-3" key={index}>
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
                    {guide.title}
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
                    {guide.experience}
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
