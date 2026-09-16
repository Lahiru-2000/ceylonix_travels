"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CeylonixHeader from "../../../Components/Ceylonix/Header";
import CeylonixFooter from "../../../Components/Ceylonix/Footer";
import CeylonixCTA from "../../../Components/Ceylonix/CTA";
import DestinationHero from "../../../Components/CeylonixDestination/DestinationHero";
import DestinationPlaceDetails from "../../../Components/CeylonixDestination/DestinationPlaceDetails";
import { getDestinationBySlug, getDestinations, getRelatedDestinations } from "../../../lib/getDestinations";
import { useLocale } from "../../../Components/LanguageProvider";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";
const destinationHero = "/assets/images/ceylonix/destinations-bg.png";

const DestinationDetailsPage = () => {
  const { t, locale } = useLocale();
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [place, setPlace] = useState(undefined);
  const [relatedPlaces, setRelatedPlaces] = useState([]);

  useEffect(() => {
    if (!slug) return;
    setPlace(undefined);

    Promise.all([getDestinationBySlug(slug, locale), getDestinations(locale)])
      .then(([current, destinations]) => {
        setPlace(current);
        if (current) {
          setRelatedPlaces(getRelatedDestinations(destinations, current));
        }
      })
      .catch(() => setPlace(null));
  }, [slug, locale]);

  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main style={{ background: "#0C111D" }}>
        <DestinationHero image={destinationHero} title={place?.title || t("destPage.hero")} currentPage={place?.title || t("destPage.detailsLabel")} />
        {place === undefined ? (
          <p className="ceylon-container text-white py-5">{t("destPage.loading")}</p>
        ) : (
          <DestinationPlaceDetails place={place} relatedPlaces={relatedPlaces} />
        )}
        <CeylonixCTA ctaImg="/assets/images/ceylonix/planTrip.png" />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default DestinationDetailsPage;
