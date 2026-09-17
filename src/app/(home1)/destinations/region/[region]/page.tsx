"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import CeylonixHeader from "../../../../Components/Ceylonix/Header";
import CeylonixFooter from "../../../../Components/Ceylonix/Footer";
import CeylonixCTA from "../../../../Components/Ceylonix/CTA";
import DestinationHero from "../../../../Components/CeylonixDestination/DestinationHero";
import DestinationPlacesGrid from "../../../../Components/CeylonixDestination/DestinationPlacesGrid";
import { getDestinations, getDestinationsByRegionSlug } from "../../../../lib/getDestinations";
import { useLocale } from "../../../../Components/LanguageProvider";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";
const destinationHero = "/assets/images/ceylonix/destinations-bg.png";

const DestinationRegionPage = () => {
  const { t, locale } = useLocale();
  const params = useParams();
  const regionSlug = typeof params?.region === "string" ? params.region : "";
  const [places, setPlaces] = useState(undefined);

  useEffect(() => {
    if (!regionSlug) return;
    setPlaces(undefined);
    getDestinations(locale)
      .then((destinations) => setPlaces(getDestinationsByRegionSlug(destinations, regionSlug)))
      .catch(() => setPlaces([]));
  }, [locale, regionSlug]);

  const regionName = places?.[0]?.region || t("destPage.hero");

  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main style={{ background: "#0C111D" }}>
        <DestinationHero image={destinationHero} title={regionName} currentPage={regionName} />
        {places === undefined ? (
          <p className="ceylon-container text-white py-5">{t("destPage.loading")}</p>
        ) : places.length === 0 ? (
          <section style={{ background: "#0C111D", padding: "80px 0", minHeight: "40vh" }}>
            <div className="ceylon-container text-center">
              <h1 className="ceylon-title text-white mb-3">{t("destPage.regionNotFound")}</h1>
              <p style={{ color: "rgba(255,255,255,0.66)", marginBottom: "24px" }}>
                {t("destPage.regionNotFoundText")}
              </p>
              <Link href="/destinations" className="text-decoration-none" style={{ color: "#E91E8C", fontWeight: 600 }}>
                {t("destPage.back")}
              </Link>
            </div>
          </section>
        ) : (
          <>
            <div className="ceylon-container" style={{ paddingTop: "32px" }}>
              <Link
                href="/destinations"
                className="text-decoration-none d-inline-flex align-items-center gap-2"
                style={{ color: "#E91E8C", fontWeight: 600, fontSize: "14px" }}
              >
                <HiArrowLeft size={16} />
                {t("destPage.back")}
              </Link>
            </div>
            <DestinationPlacesGrid items={places} showIntro={false} showRegionHeading={false} />
          </>
        )}
        <CeylonixCTA ctaImg="/assets/images/ceylonix/planTrip.png" />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default DestinationRegionPage;
