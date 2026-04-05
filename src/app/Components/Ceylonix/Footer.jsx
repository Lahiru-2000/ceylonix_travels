"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";

const CeylonixFooter = ({ logoImage }) => {
  return (
    <footer
      className="ceylon-footer pt-5 pb-0"
      style={{
        background: "#000119",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="ceylon-container pb-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <div
              className="rounded-4 p-4 text-center h-100 d-flex flex-column align-items-center"
              style={{
                background: "#05073C",
                border: '11px solid #37397E33'
              }}
            >
              {logoImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logoImage}
                  alt="Ceylonix"
                  className="mb-3"
                  style={{ maxWidth: "357px", objectFit: "contain" }}
                />
              )}
              {/* <h2
                className="fw-bold mb-3"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  letterSpacing: "0.12em",
                  fontSize: "18px",
                  color: "#ff007f",
                }}
              >
                CEYLONIX
              </h2> */}
              <p className="text-white-100 small m-0" style={{ fontSize: "14px", lineHeight: 1.65 }}>
                Ceylonix is a trusted Sri Lankan tour company dedicated to delivering unforgettable travel
                experiences for international visitors.
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h4 className="text-white fw-bold mb-4" style={{ fontSize: "17px" }}>
              Quick Link
            </h4>
            <ul className="list-unstyled m-0 p-0">
              {["Home", "About Us", "Destinations", "Packages", "Contact"].map((label) => (
                <li key={label} className="mb-3">
                  <Link
                    href="/"
                    className="text-decoration-none text-white"
                    style={{ fontSize: "15px" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h4 className="text-white fw-bold mb-4" style={{ fontSize: "17px" }}>
              Contact
            </h4>
            <div className="d-flex flex-column gap-3">
              <div
                className="d-flex align-items-center gap-3 rounded-3 p-3"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-2"
                  style={{ width: 48, height: 48, background: "#FC0FC0" }}
                >
                  <span style={{ fontSize: "18px", color: "#fff" }}>✉</span>
                </div>
                <div>
                  <div className="text-white-50 small">Email</div>
                  <div className="text-white" style={{ fontSize: "15px" }}>
                    info@ceylonix.com
                  </div>
                </div>
              </div>
              <div
                className="d-flex align-items-center gap-3 rounded-3 p-3"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-2"
                  style={{ width: 48, height: 48, background: "#FC0FC0" }}
                >
                  <span style={{ fontSize: "18px", color: "#fff" }}>☎</span>
                </div>
                <div>
                  <div className="text-white-50 small">Mobile</div>
                  <div className="text-white" style={{ fontSize: "15px" }}>
                    077 6576689
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="text-white fw-bold mb-2" style={{ fontSize: "17px" }}>
              Stay Connected With Ceylonix
            </h4>
            <p className="text-white-50 small mb-4" style={{ fontSize: "14px" }}>
              Get updates, travel inspiration, and exclusive offers.
            </p>
            <form
              className="d-flex align-items-stretch rounded-pill overflow-hidden"
              style={{ background: "#fff", padding: "4px" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="border-0 flex-grow-1 px-3 small"
                style={{ outline: "none", minWidth: 0, fontSize: "14px" }}
              />
              <button
                type="submit"
                className="border-0 bg-transparent fw-semibold px-3 flex-shrink-0"
                style={{ color: "#0a0a18", fontSize: "14px" }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="py-3 mt-2"
        style={{ background: "#171925" }}
      >
        <div className="ceylon-container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="text-white-100 small m-0" style={{ fontSize: "13px" }}>
            Copyright © CEYLONIX, All Right Reserved.
          </p>
          <div className="d-flex align-items-center gap-3">
            {[FaGithub, FaFacebook, FaTwitter, FaGoogle, FaInstagram].map((Icon, idx) => (
              <Link
                key={idx}
                href="#"
                className="text-white-50"
                style={{ fontSize: "18px" }}
                aria-label="Social"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CeylonixFooter;
