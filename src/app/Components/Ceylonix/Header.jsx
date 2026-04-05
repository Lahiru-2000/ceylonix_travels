"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

function navLinkIsActive(pathname, href) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const CeylonixHeader = ({ logoImage }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Destinations", href: "/destinations" },
    { title: "Packages", href: "/tour" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <header
      style={{
        position: "absolute",
        width: "100%",
        zIndex: 100,
        padding: "22px 0",
      }}
    >
      <div className="ceylon-container d-flex justify-content-between align-items-center">
        <Link href="/" style={{ textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoImage}
            alt="Ceylonix"
            style={{
              width: "238px",
              height: "32px",
              objectFit: "contain",
            }}
          />
        </Link>

        <nav className="d-none d-lg-block flex-grow-1">
          <ul
            className="d-flex gap-4 justify-content-center m-0 p-0 align-items-center"
            style={{ listStyle: "none" }}
          >
            {navLinks.map((link) => {
              const active = navLinkIsActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    style={{
                      color: "#ffffff",
                      fontWeight: active ? 700 : 500,
                      textDecoration: "none",
                      fontSize: "17px",
                      opacity: active ? 1 : 0.75,
                      paddingBottom: "6px",
                      borderBottom: active
                        ? "3px solid #FC0FC0"
                        : "3px solid transparent",
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="d-flex align-items-center gap-2 gap-md-3 justify-content-between">
          {/* <button
            type="button"
            className="d-none d-md-flex align-items-center justify-content-center border-0 rounded-circle"
            style={{
              width: 44,
              height: 44,
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
            }}
            aria-label="Search"
          >
            <HiMagnifyingGlass size={22} />
          </button> */}
          <Link
            href="/contact"
            className="d-none d-md-inline-flex align-items-center rounded-pill text-decoration-none"
            style={{
              border: "1px solid #ffffff",
              background: "transparent",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 500,
              padding: "8px 8px 8px 26px",
              gap: "18px",
              minHeight: "48px",
              alignItems: "center",
              justifyContent: "space-between",
              fontFamily:
                'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
            }}
          >
            <span style={{ lineHeight: 1, whiteSpace: "nowrap" }}>
              Contact Us
            </span>
            <span
              className="d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded-circle bg-white"
              style={{
                width: 36,
                height: 36,
              }}
              aria-hidden
            >
              <HiArrowUpRight size={18} color="#FF0080" strokeWidth={2.25} />
            </span>
          </Link>

          <button
            type="button"
            className="d-lg-none border-0 bg-transparent text-white"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiMenuAlt3 size={30} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "#01000B",
              zIndex: 200,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ padding: "20px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoImage}
                alt="Ceylonix"
                style={{ width: "200px", height: "28px", objectFit: "contain" }}
              />
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="border-0 bg-transparent text-white"
                aria-label="Close menu"
              >
                <HiX size={28} />
              </button>
            </div>

            <div style={{ padding: "0 20px" }}>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  marginBottom: "10px",
                }}
              >
                MENU
              </p>
            </div>

            <div className="flex-grow-1 px-3">
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {navLinks.map((link, index) => {
                  const active = navLinkIsActive(pathname, link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "14px 16px",
                          borderRadius: "12px",
                          background: active
                            ? "rgba(252, 15, 192, 0.12)"
                            : "rgba(255,255,255,0.04)",
                          borderLeft: active
                            ? "3px solid #FC0FC0"
                            : "3px solid transparent",
                          color: "white",
                          textDecoration: "none",
                          fontSize: "17px",
                          fontWeight: active ? 700 : 600,
                        }}
                      >
                        {link.title}
                        <HiArrowUpRight size={18} style={{ opacity: 0.6 }} />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div
              style={{
                padding: "20px",
                background: "linear-gradient(to top, #01000B 80%, transparent)",
              }}
            >
              <button
                type="button"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "14px",
                  border: "none",
                  background: "linear-gradient(90deg, #FF0080, #7928CA)",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Start Your Journey
                <HiArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default CeylonixHeader;
