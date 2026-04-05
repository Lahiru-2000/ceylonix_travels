"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
const features = [
  {
    title: "Expert Local Guides",
    text: "Discover hidden gems with experienced and friendly guides.",
  },
  {
    title: "Comfortable Travel",
    text: "Travel in modern, air-conditioned vehicles with full safety.",
  },
  {
    title: "Personalized Service",
    text: "Every journey is tailored to your needs and preferences.",
  },
  {
    title: "24/7 Support",
    text: "We're always here to assist you throughout your journey.",
  },
];

const CeylonixWhyChooseUs = ({ whyChooseUs }) => {
  return (
    <section
      className="ceylon-why-choose ceylon-section"
      style={{
        background: `linear-gradient(0deg, #0C111D, #0C111D),
linear-gradient(0deg, rgba(0, 238, 255, 0.03), rgba(0, 238, 255, 0.03))`,

        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="ceylon-why-grain"
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          pointerEvents: "none",
          // backgroundImage:
          //   "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="ceylon-container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="ceylon-subtitle text-white">Why Choose Us</span>
              <h2 className="ceylon-title text-white mb-3 pt-2">
                Why Travel With Ceylonix
              </h2>
              <p className="text-white-100 mb-4" style={{ fontSize: "16px" }}>
                We deliver more than just tours — we create unforgettable experiences.
              </p>
              <hr
                style={{
                  border: 0,
                  height: "1px",
                  background: "white",
                  maxWidth: "100%",
                  margin: "0 0 28px 0",
                }}
              />
              <ul className="list-unstyled m-0 p-0">
                {features.map((f, i) => (
                  <li key={i} className="d-flex gap-3 mb-4">
                    <span
                      className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: 28,
                        height: 28,
                        background: "#FC0FC0",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    >
                      <FaCheck />
                    </span>
                    <div>
                      <h4 className="text-white mb-1" style={{ fontSize: "17px", fontWeight: 700 }}>
                        {f.title}
                      </h4>
                      <p className="text-white-100 small m-0" style={{ fontSize: "14px" }}>
                        {f.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              // className="position-relative"
              // style={{ minHeight: "420px" }}
            >
              <div
                className=" rounded-4 overflow-hidden shadow-lg"
                style={{
                  // width: "42%",
                  top: "0",
                  // left: "8%",
                  // aspectRatio: "3/4",
                  // border: "3px solid rgba(255,255,255,0.08)",
                  zIndex: 2,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={whyChooseUs} alt="" className="w-100 h-100" style={{ objectFit: "cover" }} />
              </div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeylonixWhyChooseUs;
