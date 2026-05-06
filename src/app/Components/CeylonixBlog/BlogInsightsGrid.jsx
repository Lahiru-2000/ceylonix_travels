import React from "react";

const BlogInsightsGrid = ({ posts }) => {
  return (
    <section style={{ background: "#0C111D", padding: "70px 0 80px" }}>
      <div className="ceylon-container">
        <span className="ceylon-subtitle" style={{ marginBottom: "6px" }}>
          Travel Insights
        </span>
        <h2 className="ceylon-title text-white mb-2" style={{ fontSize: "52px" }}>
          Stories, Tips and Travel Guides
        </h2>
        <p style={{ color: "rgba(255,255,255,0.66)", marginBottom: "30px", fontSize: "13px", maxWidth: "1000px" }}>
          Explore Sri Lanka through our travel stories, expert tips, and destination guides. Get inspired and plan your
          perfect journey with insights from our local travel experts.
        </p>

        <div className="row g-4">
          {posts.map((card, index) => (
            <div className="col-md-6 col-xl-4" key={`${card.title}-${index}`}>
              <article
                style={{
                  background: "#FFFFFF",
                  borderRadius: "14px",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <div style={{ height: "224px", position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                <div style={{ padding: "12px 14px 14px" }}>
                  <div className="d-flex align-items-center gap-2 gap-xl-3 flex-wrap" style={{ marginBottom: "8px" }}>
                    <span
                      style={{
                        background: "#FC0FC0",
                        color: "#fff",
                        borderRadius: "8px",
                        fontSize: "11px",
                        lineHeight: 1.2,
                        fontWeight: 600,
                        padding: "5px 7px",
                        display: "inline-block",
                      }}
                    >
                      {card.date}
                    </span>
                    <span style={{ color: "#667085", fontSize: "11px" }}>{card.author}</span>
                    <span style={{ color: "#FC0FC0", fontSize: "11px" }}>{card.category}</span>
                  </div>

                  <h3 style={{ margin: "0 0 8px", fontSize: "30px", color: "#101828", fontWeight: 700, lineHeight: 1.2 }}>
                    {card.title}
                  </h3>
                  <p style={{ margin: "0 0 9px", color: "#667085", fontSize: "12px", lineHeight: 1.45 }}>{card.excerpt}</p>

                  <button
                    type="button"
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "#FC0FC0",
                      padding: 0,
                      fontWeight: 600,
                      fontSize: "12px",
                    }}
                  >
                    Read More <span style={{ marginLeft: "3px" }}>→</span>
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

export default BlogInsightsGrid;
