import React from "react";

const AboutSectionSlice = ({ title, subtitle, image, height = 320, position = "center", children }) => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: `${height}px`,
        backgroundImage: `url(${image})`,
        backgroundPosition: position,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(1,0,11,0.68) 0%, rgba(1,0,11,0.85) 65%, rgba(1,0,11,0.95) 100%)",
        }}
      />
      <div
        className="ceylon-container"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: `${height}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        {subtitle ? (
          <span
            className="ceylon-subtitle"
            style={{
              marginBottom: "10px",
            }}
          >
            {subtitle}
          </span>
        ) : null}
        {title ? (
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "44px",
              fontWeight: 800,
              lineHeight: 1.18,
              marginBottom: children ? "18px" : 0,
              maxWidth: "720px",
            }}
          >
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
};

export default AboutSectionSlice;
