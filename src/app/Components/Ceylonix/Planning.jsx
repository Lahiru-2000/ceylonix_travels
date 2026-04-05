"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Choose Your Package",
    description: "Select from our carefully designed travel packages.",
  },
  {
    title: "Send Your Inquiry",
    description: "Tell us your travel preferences and requirements.",
  },
  {
    title: "Enjoy Your Journey",
    description: "Relax and explore while we handle everything for you.",
  },
];

const CeylonixPlanning = ({ planningImgs }) => {
  const [main, second, third] = planningImgs || [];

  return (
    <section
      className="ceylon-planning ceylon-section"
      style={{ background: "#121826" }}
    >
      <div className="ceylon-container">
        <motion.div
          className="planning-section-header mb-4 mb-lg-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="ceylon-subtitle text-white d-block mb-2">
            Get Best Travel Experience
          </span>
          <h2 className="ceylon-title text-white mb-3 pt-1 ">
            Your Journey, Perfectly Planned
          </h2>
          <p
            className="text-white-100 mb-0 planning-section-lead sm-pt-2"
            style={{ fontSize: "16px", lineHeight: 1.65 }}
          >
            We ensure every step of your journey is smooth, enjoyable, and
            memorable.
          </p>
        </motion.div>

        <div className="row planning-section-row g-4 align-items-start ">
          <div className="col-12 col-lg-5 col-xl-5 planning-section-steps ">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="d-flex align-items-stretch gap-0 planning-timeline-wrap">
                <div
                  className="flex-shrink-0 rounded-pill align-self-stretch planning-timeline-line"
                  style={{
                    width: 3,
                    background: "#FC0FC0",
                    marginRight: "24px",
                  }}
                  aria-hidden
                />
                <div className="flex-grow-1 min-w-0">
                  {steps.map((step, index) => (
                    <div
                      key={step.title}
                      className={`position-relative planning-step ${index < steps.length - 1 ? "mb-4 mb-md-5" : "mb-0"}`}
                    >
                      <div
                        className="position-absolute rounded-circle d-flex align-items-center justify-content-center fw-bold text-white planning-step-badge"
                        style={{
                          width: 44,
                          height: 44,
                          left: "-48px",
                          top: 0,
                          border: "2px solid #FC0FC0",
                          background: "#161d2e",
                          fontSize: "16px",
                        }}
                      >
                        {index + 1}
                      </div>
                      <h4
                        className="text-white fw-bold mb-2 pe-1"
                        style={{ fontSize: "18px", lineHeight: 1.35 }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-white-50 m-0 pe-1"
                        style={{ fontSize: "15px", lineHeight: 1.55 }}
                      >
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-12 col-lg-7 col-xl-7 planning-section-media">
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="planning-collage d-grid"
            >
              <div
                className="planning-collage-main overflow-hidden"
                style={{ gridRow: "span 2", minHeight: "120px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={main}
                  alt=""
                  className="w-100 h-100"
                  style={{ objectFit: "cover", display: "block" }}
                />
              </div>
              <div
                className="overflow-hidden planning-collage-side"
                style={{ minHeight: "100px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={second}
                  alt=""
                  className="w-100 h-100"
                  style={{ objectFit: "cover", display: "block" }}
                />
              </div>
              <div
                className="overflow-hidden planning-collage-side"
                style={{ minHeight: "100px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={third}
                  alt=""
                  className="w-100 h-100"
                  style={{ objectFit: "cover", display: "block" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeylonixPlanning;
