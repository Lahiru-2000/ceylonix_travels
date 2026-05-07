import React from "react";

const DestinationDiscoveries = ({ posts }) => {
  return (
    <section style={{ background: "#0C111D", padding: "0 0 95px",  }}>
      <div className="ceylon-container" style={{marginTop: "50px" }}>
        <span className="ceylon-subtitle">Featured Tours</span>
        <h2 className="ceylon-title text-white mb-3" style={{ fontSize: "42px" }}>
          Unforgettable Travel Discoveries
        </h2>
        <p style={{ color: "rgba(255,255,255,0.67)", marginBottom: "24px", fontSize: "14px" }}>
          Handpicked tours designed to give you the best Sri Lankan experience.
        </p>
        <div className="row g-4">
          {posts.map((post, index) => (
            <div className="col-md-6 col-xl-3" key={`${post.title}-${index}`}>
              <article>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                />
                <h3 style={{ margin: "12px 0 4px", color: "#fff", fontSize: "18px", fontWeight: 700 }}>{post.title}</h3>
                <p style={{ margin: "0 0 7px", color: "rgba(255,255,255,0.58)", fontSize: "13px" }}>{post.desc}</p>
                <span style={{ fontSize: "13px", color: "#FC0FC0", fontWeight: 600 }}>{post.price}</span>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationDiscoveries;
