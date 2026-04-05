"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

const reviews = [
  {
    quote:
      "Ceylonix made our Sri Lanka trip absolutely unforgettable. Everything was perfectly organized from hotels to guides. We felt safe and cared for the entire time.",
    name: "Sophia Doe",
    place: "UK",
    rating: 4,
    max: 5,
  },
  {
    quote:
      "The personalized itinerary matched exactly what we wanted. Stunning landscapes, smooth transport, and a team that truly knows the island.",
    name: "James Miller",
    place: "Australia",
    rating: 5,
    max: 5,
  },
  {
    quote:
      "Professional, friendly, and great value. We would book again in a heartbeat and recommend Ceylonix to anyone planning a Sri Lanka holiday.",
    name: "Elena Rossi",
    place: "Italy",
    rating: 5,
    max: 5,
  },
];

const CeylonixTestimonials = ({ userImg }) => {
  const [i, setI] = useState(0);
  const r = reviews[i];

  const prev = () => setI((x) => (x - 1 + reviews.length) % reviews.length);
  const next = () => setI((x) => (x + 1) % reviews.length);

  return (
    <section className="ceylon-testimonials ceylon-section" style={{ background: "#000119"    }}>
      <div className="ceylon-container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-5 overflow-hidden mx-auto"
              style={{  aspectRatio: "2.5/2.1" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={userImg} alt="" className="w-100 h-100" style={{ objectFit: "cover" }} />
            </motion.div>
          </div>

          <div className="col-lg-8">
            <span className="ceylon-subtitle text-white d-block mb-2">Testimonials</span>
            <h2 className="ceylon-title text-white mb-4 pt-2" style={{font:"60px"}}>What Our Travelers Say</h2>

            <div className="d-flex flex-column flex-lg-row align-items-stretch gap-3 gap-lg-4">
              <div className="flex-grow-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-4 p-4 p-md-5 h-100"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-end gap-2 mb-4">
                      {[...Array(r.max)].map((_, idx) => (
                        <FaStar
                          key={idx}
                          style={{
                            color: idx < r.rating ? "#ffcc00" : "rgba(255,255,255,0.2)",
                            fontSize: "16px",
                          }}
                        />
                      ))}
                      <span className="text-white-50 small ms-1">
                        {r.rating}/{r.max}
                      </span>
                    </div>
                    <p className="text-white-50 mb-4" style={{ fontSize: "17px", lineHeight: 1.75 }}>
                      {r.quote}
                    </p>
                    <div>
                      <div className="text-white fw-bold" style={{ fontSize: "18px" }}>
                        {r.name}
                      </div>
                      <div className="text-white-50 small">{r.place}</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="d-flex flex-row flex-lg-column gap-2 justify-content-center justify-content-lg-start align-self-lg-center">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-circle border-0 d-flex align-items-center justify-content-center"
                  style={{
                    width: 48,
                    height: 48,
                    background: "#fff",
                    color: "#0a0a12",
                  }}
                  aria-label="Previous testimonial"
                >
                  <HiChevronUp size={22} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-circle border-0 d-flex align-items-center justify-content-center"
                  style={{
                    width: 48,
                    height: 48,
                    background: "#FC0FC0",
                    color: "#fff",
                  }}
                  aria-label="Next testimonial"
                >
                  <HiChevronDown size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeylonixTestimonials;
