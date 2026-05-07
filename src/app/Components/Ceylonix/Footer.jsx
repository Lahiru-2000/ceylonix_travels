"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const CeylonixFooter = ({ logoImage }) => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Destinations", href: "/destinations" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      style={{
        background: "#02031B",
        overflow: "hidden",
      }}
    >
      {/* TOP SECTION */}
      <div
        className="ceylon-container"
        style={{
          padding: "80px 20px 60px",
        }}
      >
        <div className="row gy-5 justify-content-between">
          {/* LOGO CARD */}
          <div className="col-12 col-md-6 col-xl-4">
            <div className="footer-card">
              {logoImage && (
                <img
                  src={logoImage}
                  alt="Ceylonix"
                  className="footer-logo"
                />
              )}

              <p className="footer-description">
                Ceylonix is a trusted Sri Lankan tour company dedicated
                to delivering unforgettable travel experiences for
                international visitors.
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-6 col-md-6 col-xl-2 footer-mobile-center">
            <h5 className="footer-title">Quick Link</h5>

            <ul className="footer-links">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-12 col-md-6 col-xl-3 footer-mobile-center">
            <h5 className="footer-title">Contact</h5>

            <div className="footer-contact-wrapper">
              {/* EMAIL */}
              <div className="footer-contact-box">
                <div className="footer-icon-box">
                  <HiOutlineMail color="#fff" size={20} />
                </div>

                <div>
                  <p className="footer-contact-label">Email</p>
                  <p className="footer-contact-value">
                    info@ceylonix.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="footer-contact-box">
                <div className="footer-icon-box">
                  <HiOutlinePhone color="#fff" size={20} />
                </div>

                <div>
                  <p className="footer-contact-label">Mobile</p>
                  <p className="footer-contact-value">
                    077 657 6689
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="col-12 col-md-6 col-xl-3 footer-mobile-center">
            <div className="footer-newsletter">
              <h5 className="footer-title">
                Stay Connected With Ceylonix
              </h5>

              <p className="footer-newsletter-text">
                Get updates, travel inspiration, and exclusive offers.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="footer-form"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{
                    color: "#111",
                  }}
                />

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="ceylon-container">
          <div className="footer-bottom-content">
            <p>
              Copyright © CEYLONIX, All Right Reserved.
            </p>

            <div className="footer-socials">
              {[
                FaGithub,
                FaFacebookF,
                FaTwitter,
                FaGoogle,
                FaInstagram,
              ].map((Icon, idx) => (
                <Link key={idx} href="#">
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* INLINE CSS */}
      <style jsx>{`
        .footer-card {
          background: #05073c;
          border: 10px solid rgba(55, 57, 126, 0.2);
          border-radius: 28px;
          padding: 35px 28px;
          text-align: center;
          max-width: 380px;
          margin: 0 auto;
          height: 100%;
        }

        .footer-logo {
          width: 100%;
          max-width: 230px;
          object-fit: contain;
          margin-bottom: 20px;
        }

        .footer-description {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 28px;
        }

        .footer-title {
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 30px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 18px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-size: 15px;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #ff00c7;
        }

        .footer-contact-wrapper {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .footer-contact-box {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 14px;
          width: 100%;
          max-width: 260px;
        }

        .footer-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #ff00c7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-contact-label {
          margin: 0;
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
        }

        .footer-contact-value {
          margin: 0;
          color: #fff;
          font-size: 15px;
        }

        .footer-newsletter {
          max-width: 350px;
        }

        .footer-newsletter-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 26px;
          margin-bottom: 24px;
        }

        .footer-form {
          display: flex;
          align-items: center;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
        }

        .footer-form input {
          flex: 1;
          border: none;
          outline: none;
          padding: 14px 16px;
          font-size: 14px;
          min-height: 52px;
        }

        .footer-form button {
          border: none;
          background: #fff;
          color: #111;
          padding: 0 24px;
          min-height: 52px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 18px 20px;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .footer-bottom-content p {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .footer-socials a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
        }

        @media (max-width: 767px) {
          .footer-mobile-center {
            text-align: center;
          }

          .footer-links {
            display: inline-block;
            text-align: left;
          }

          .footer-contact-wrapper {
            align-items: center;
          }

          .footer-newsletter {
            margin: 0 auto;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          .footer-card {
            padding: 28px 20px;
          }

          .footer-logo {
            max-width: 180px;
          }

          .footer-description {
            font-size: 13px;
            line-height: 24px;
          }

          .footer-form {
            flex-direction: column;
            background: transparent;
            gap: 12px;
          }

          .footer-form input {
            width: 100%;
            border-radius: 12px;
          }

          .footer-form button {
            width: 100%;
            border-radius: 12px;
          }

          .footer-contact-box {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default CeylonixFooter;