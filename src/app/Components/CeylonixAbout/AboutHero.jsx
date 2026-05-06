import React from "react";

const AboutHero = ({ image }) => {
  return (
    <section
      style={{
        position: "relative",
        height: "480px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(1,0,11,0.4) 0%, rgba(1,0,11,0.65) 50%, rgba(1,0,11,0.85) 100%)",
        }}
      />
      <div
        className="ceylon-container"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: "0 0 20px 0",
            color: "#FFFFFF",
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          About Us
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          <a
            href="/"
            style={{
              color: "#E91E8C",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Home
          </a>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>About Us</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
