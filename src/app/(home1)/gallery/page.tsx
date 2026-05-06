"use client";

import React from "react";
import CeylonixHeader from "../../Components/Ceylonix/Header";
import CeylonixFooter from "../../Components/Ceylonix/Footer";
import CeylonixCTA from "../../Components/Ceylonix/CTA";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";

const heroBg = "/assets/images/ceylonix/gallery-bg.jpg";

const galleryItems = [
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1547464519-bf93e61598a3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1567449303078-57ad995bd17b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1533843625767-5b76338c6788?auto=format&fit=crop&w=900&q=80",
];

const GalleryPage = () => {
  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />

      <main style={{ background: "#01000B" }}>
        <section style={{ position: "relative", height: "480px", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(1,0,11,0.4) 0%, rgba(1,0,11,0.65) 50%, rgba(1,0,11,0.85) 100%)",
            }}
          />
          <div
            className="ceylon-container"
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: "100%",
            }}
          >
            <h1 style={{ margin: "0 0 20px 0", color: "#fff", fontWeight: 800, fontSize: "64px", lineHeight: 1.1 }}>
              Gallery
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "rgba(255,255,255,0.9)" }}>
              <a href="/" style={{ color: "#E91E8C", textDecoration: "none", fontWeight: 500 }}>
                Home
              </a>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Gallery</span>
            </div>
          </div>
        </section>

        <section style={{ background: "#060A24", padding: "70px 0 80px" }}>
          <div className="ceylon-container">
            <span className="ceylon-subtitle" style={{ marginBottom: "6px" }}>
              Featured Journey
            </span>
            <h2 className="ceylon-title text-white mb-2" style={{ fontSize: "52px" }}>
              Unforgettable Travel Discoveries
            </h2>
            <p style={{ color: "rgba(255,255,255,0.66)", marginBottom: "30px", fontSize: "13px", maxWidth: "930px" }}>
              Explore moments from Sri Lanka through breathtaking destinations, cultural experiences, and adventure trails.
            </p>

            <div className="row g-3 g-md-4">
              {galleryItems.map((image, index) => (
                <div className="col-6 col-md-4 col-xl-3" key={`${image}-${index}`}>
                  <article
                    style={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      background: "#0A1130",
                      position: "relative",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt="Sri Lanka gallery"
                      style={{ width: "100%", height: "170px", objectFit: "cover", display: "block" }}
                    />

                    {index === 0 && (
                      <>
                        <span
                          style={{
                            position: "absolute",
                            top: "8px",
                            right: "8px",
                            fontSize: "9px",
                            color: "#fff",
                            background: "#FC0FC0",
                            borderRadius: "20px",
                            padding: "3px 8px",
                            letterSpacing: "0.4px",
                          }}
                        >
                          POPULAR
                        </span>
                        <div
                          style={{
                            position: "absolute",
                            left: "10px",
                            right: "10px",
                            bottom: "8px",
                            color: "#fff",
                            textShadow: "0 2px 8px rgba(0,0,0,0.55)",
                          }}
                        >
                          <h3 style={{ margin: "0 0 2px", fontSize: "12px", fontWeight: 600 }}>Ella Train Journey</h3>
                          <p style={{ margin: 0, fontSize: "10px", opacity: 0.92 }}>
                            One of the most scenic train rides in Asia.
                          </p>
                        </div>
                      </>
                    )}
                  </article>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center align-items-center gap-2" style={{ marginTop: "32px" }}>
              <button
                type="button"
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  border: "none",
                  background: "#F0F3FA",
                  color: "#09102A",
                  fontSize: "14px",
                  lineHeight: 1,
                }}
              >
                ‹
              </button>
              <button
                type="button"
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  border: "none",
                  background: "#FC0FC0",
                  color: "#fff",
                  fontSize: "14px",
                  lineHeight: 1,
                }}
              >
                ›
              </button>
            </div>
          </div>
        </section>

        <CeylonixCTA ctaImg="/assets/images/ceylonix/planTrip.png" />
      </main>

      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default GalleryPage;
