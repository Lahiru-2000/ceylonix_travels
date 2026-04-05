"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CeylonixBlog = ({ blogPosts }) => {
  const [active, setActive] = useState("Home");
  const tabs = ["Home", "Tips", "Guides", "Stories"];

  return (
    <section className="ceylon-blog ceylon-section" style={{ background: "#0C111D" }}>
      <div className="ceylon-container">
        <div className=" mb-4" >
          <span className="ceylon-subtitle text-white d-block">Blog Preview</span>
          <h2 className="ceylon-title text-white mt-2 mb-3 pt-2" style={{font:"60px"}}>Travel Tips & Insights</h2>
          <p className="text-white-100 m-0" style={{ fontSize: "16px" }}>
            Discover guides, tips, and stories to help you plan your perfect trip.
          </p>
        </div>

        <div className="d-flex justify-content-center gap-4 flex-wrap mb-5">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className="border-0 bg-transparent fw-medium position-relative pb-2"
              style={{
                color: active === t ? "#fff" : "rgba(255,255,255,0.45)",
                fontSize: "15px",
              }}
            >
              {t}
              {active === t && (
                <span
                  className="position-absolute bottom-0 start-0 w-100 rounded-pill"
                  style={{ height: "2px", background: "#e91e63" }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={post.title + index} className="col-lg-3 col-md-6">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-4 overflow-hidden h-100 d-flex flex-column"
                style={{
                  background: "#050508",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="position-relative" style={{ height: "200px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt="" className="w-100 h-100" style={{ objectFit: "cover" }} />
                  <span
                    className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill small fw-semibold"
                    style={{ background: "#fff", color: "#111", fontSize: "12px" }}
                  >
                    {post.category || "Trips"}
                  </span>
                </div>
                <div className="p-4 flex-grow-1 d-flex flex-column">
                  <p className="text-white-50 small mb-2" style={{ fontSize: "13px" }}>
                    {post.date} | By {post.author}
                  </p>
                  <h3 className="text-white fw-semibold mb-0" style={{ fontSize: "16px", lineHeight: 1.45 }}>
                    {post.title}
                  </h3>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CeylonixBlog;
