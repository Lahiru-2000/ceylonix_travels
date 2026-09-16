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
import { useLocale } from "../LanguageProvider";

const CeylonixFooter = ({ logoImage }) => {
  const { t } = useLocale();
  const quickLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about-us" },
    { label: t("nav.destinations"), href: "/destinations" },
    { label: t("nav.gallery"), href: "/gallery" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/contact" },
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
          paddingTop: "72px",
          paddingBottom: "48px",
        }}
      >
        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-12 col-lg-4">
            <div className="footer-card">
              {logoImage && (
                <img
                  src={logoImage}
                  alt="Ceylonix"
                  className="footer-logo"
                />
              )}

              <p className="footer-description">
                {t("footer.description")}
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-2">
            <h5 className="footer-title">{t("footer.quickLinkTitle")}</h5>

            <ul className="footer-links">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <h5 className="footer-title">{t("footer.contactTitle")}</h5>

            <div className="footer-contact-wrapper">
              <div className="footer-contact-box">
                <div className="footer-icon-box">
                  <HiOutlineMail color="#fff" size={20} />
                </div>

                <div>
                  <p className="footer-contact-label">{t("footer.emailLabel")}</p>
                  <a href="mailto:info@ceylonix.com" className="footer-contact-value">
                    info@ceylonix.com
                  </a>
                </div>
              </div>

              <div className="footer-contact-box">
                <div className="footer-icon-box">
                  <HiOutlinePhone color="#fff" size={20} />
                </div>

                <div>
                  <p className="footer-contact-label">{t("footer.mobileLabel")}</p>
                  <a href="tel:+94776576689" className="footer-contact-value">
                    077 657 6689
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <div className="footer-newsletter">
              <h5 className="footer-title">
                {t("footer.newsletterTitle")}
              </h5>

              <p className="footer-newsletter-text">
                {t("footer.newsletterText")}
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="footer-form"
              >
                <input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  style={{
                    color: "#111",
                  }}
                />

                <button type="submit">{t("footer.sendButton")}</button>
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
              {t("footer.copyright")}
            </p>

            <div className="footer-socials">
              {[
                { Icon: FaFacebookF, href: "https://www.facebook.com/", label: "Facebook" },
                { Icon: FaInstagram, href: "https://www.instagram.com/", label: "Instagram" },
                { Icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" },
                { Icon: FaGoogle, href: "https://www.google.com/", label: "Google" },
                { Icon: FaGithub, href: "https://github.com/", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <Link key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
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
          padding: 32px 24px;
          text-align: center;
          width: 100%;
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
          margin-bottom: 22px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 14px;
        }

        .footer-links :global(a) {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-size: 15px;
          display: inline-block;
          transition: color 0.22s ease, transform 0.22s ease;
        }

        .footer-links :global(a:hover) {
          color: #FC0FC0;
          transform: translateX(4px);
        }

        .footer-contact-wrapper {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-contact-box {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 12px;
          width: 100%;
          min-width: 0;
          transition: background-color 0.22s ease, transform 0.22s ease;
        }

        .footer-contact-box:hover {
          background: rgba(252, 15, 192, 0.14);
          transform: translateY(-2px);
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
          font-size: 14px;
          text-decoration: none;
          display: block;
          white-space: nowrap;
          transition: color 0.22s ease;
        }

        .footer-contact-value:hover {
          color: #FC0FC0;
        }

        .footer-newsletter {
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        .footer-newsletter-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 26px;
          margin-bottom: 20px;
        }

        .footer-form {
          display: flex;
          align-items: stretch;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          width: 100%;
          min-width: 0;
        }

        .footer-form input {
          flex: 1 1 auto;
          min-width: 0;
          width: 100%;
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
          padding: 0 18px;
          min-height: 52px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          flex-shrink: 0;
          transition: color 0.22s ease, background-color 0.22s ease;
        }

        .footer-form button:hover {
          color: #FC0FC0;
          background: #f7f7f7;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 18px 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-bottom-content p {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .footer-socials :global(a) {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          transition: transform 0.22s ease, background-color 0.22s ease;
        }

        .footer-socials :global(a:hover) {
          transform: translateY(-2px);
          background: #FC0FC0;
        }

        @media (max-width: 991px) {
          .footer-card {
            max-width: 520px;
            margin: 0 auto;
          }

          .footer-newsletter {
            max-width: 100%;
          }
        }

        @media (max-width: 767px) {
          .footer-title,
          .footer-newsletter-text {
            text-align: left;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 575px) {
          .footer-card {
            padding: 24px 18px;
            border-width: 6px;
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
            overflow: visible;
          }

          .footer-form input,
          .footer-form button {
            width: 100%;
            border-radius: 12px;
            background: #fff;
          }
        }
      `}</style>
    </footer>
  );
};

export default CeylonixFooter;