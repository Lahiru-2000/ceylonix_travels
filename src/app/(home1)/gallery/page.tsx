"use client";

import React, { useEffect, useState } from "react";
import CeylonixHeader from "../../Components/Ceylonix/Header";
import CeylonixFooter from "../../Components/Ceylonix/Footer";
import CeylonixCTA from "../../Components/Ceylonix/CTA";
import { useLocale } from "../../Components/LanguageProvider";

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
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=900&q=80",
];

const lightboxSrc = (url) => url.replace("w=900", "w=1600");

const GalleryPage = () => {
  const { t } = useLocale();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const itemsPerPage = 16;

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage < Math.ceil(galleryItems.length / itemsPerPage) - 1
        ? prevPage + 1
        : prevPage
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const startIndex = currentPage * itemsPerPage;
  const currentItems = galleryItems.slice(startIndex, startIndex + itemsPerPage);
  const selectedImage = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? current : (current - 1 + galleryItems.length) % galleryItems.length
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? current : (current + 1) % galleryItems.length
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />

      <main style={{ background: "#0C111D" }}>
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
              {t("galleryPage.hero")}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "rgba(255,255,255,0.9)" }}>
              <a href="/" style={{ color: "#E91E8C", textDecoration: "none", fontWeight: 500 }}>
                {t("common.home")}
              </a>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{t("galleryPage.hero")}</span>
            </div>
          </div>
        </section>

        <section style={{ background: "#060A24", padding: "70px 0 80px" }}>
          <div className="ceylon-container">
            <span className="ceylon-subtitle" style={{ marginBottom: "6px" }}>
              {t("galleryPage.subtitle")}
            </span>
            <h2 className="ceylon-title text-white mb-2" style={{ fontSize: "52px" }}>
              {t("galleryPage.title")}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.66)", marginBottom: "30px", fontSize: "13px" }}>
              {t("galleryPage.description")}
            </p>

            <div className="row g-3 g-md-4">
              {currentItems.map((image, index) => (
                <div className="col-6 col-md-4 col-xl-3" key={`${image}-${startIndex + index}`}>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(startIndex + index)}
                    aria-label={`View gallery photo ${startIndex + index + 1}`}
                    style={{
                      width: "100%",
                      padding: 0,
                      borderRadius: "10px",
                      overflow: "hidden",
                      background: "#0A1130",
                      position: "relative",
                      border: "1px solid rgba(255,255,255,0.08)",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Sri Lanka gallery ${startIndex + index + 1}`}
                      style={{ width: "100%", height: "170px", objectFit: "cover", display: "block" }}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div
              className="d-flex justify-content-center align-items-center gap-2"
              style={{ marginTop: "32px" }}
            >
              <button
                type="button"
                onClick={handlePrev}
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
                onClick={handleNext}
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

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full size gallery photo"
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 300,
            background: "rgba(1, 0, 11, 0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close photo"
            style={{
              position: "absolute",
              top: "18px",
              right: "18px",
              width: "42px",
              height: "42px",
              border: "none",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: "22px",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
            style={{
              position: "absolute",
              left: "16px",
              width: "42px",
              height: "42px",
              border: "none",
              borderRadius: "50%",
              background: "#FC0FC0",
              color: "#fff",
              fontSize: "22px",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            ‹
          </button>
          <img
            src={lightboxSrc(selectedImage)}
            alt={`Sri Lanka gallery ${selectedIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: "min(1100px, 100%)",
              maxHeight: "calc(100vh - 48px)",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: "12px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
            }}
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            style={{
              position: "absolute",
              right: "16px",
              width: "42px",
              height: "42px",
              border: "none",
              borderRadius: "50%",
              background: "#FC0FC0",
              color: "#fff",
              fontSize: "22px",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
