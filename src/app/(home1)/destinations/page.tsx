"use client";
import React, { useEffect, useState } from "react";
import CeylonixHeader from "../../Components/Ceylonix/Header";
import CeylonixFooter from "../../Components/Ceylonix/Footer";
import CeylonixCTA from "../../Components/Ceylonix/CTA";
import DestinationHero from "../../Components/CeylonixDestination/DestinationHero";
import DestinationRegionGrid from "../../Components/CeylonixDestination/DestinationRegionGrid";
import DestinationExperience from "../../Components/CeylonixDestination/WatchStory";
import DestinationDiscoveries from "../../Components/CeylonixDestination/DestinationDiscoveries";
import { getDestinations } from "../../lib/getDestinations";
import { useLocale } from "../../Components/LanguageProvider";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";
const destinationHero = "/assets/images/ceylonix/destinations-bg.png";

const discoveryImages = [
  "/assets/images/ceylonix/travelExperiance2.jpg",
  "/assets/images/ceylonix/dest1.png",
  "/assets/images/ceylonix/dest2.png",
  "/assets/images/ceylonix/dest4.png",
];

const DestinationsPage = () => {
  const { t, locale } = useLocale();
  const [destinationItems, setDestinationItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const tours = t("destPage.tours") || [];
  const discoveryPosts = tours.map((tour, index) => ({
    ...tour,
    price: t("destPage.priceFrom"),
    image: discoveryImages[index],
  }));

  useEffect(() => {
    setIsLoading(true);
    setLoadError("");
    getDestinations(locale)
      .then(setDestinationItems)
      .catch(() => setLoadError(t("destPage.loadError")))
      .finally(() => setIsLoading(false));
  }, [locale]);

  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main style={{ background: "#0C111D" }}>
        <DestinationHero image={destinationHero} />
        {loadError ? (
          <p className="ceylon-container text-white py-5">{loadError}</p>
        ) : isLoading ? (
          <p className="ceylon-container text-white py-5">{t("destPage.loading")}</p>
        ) : (
          <DestinationRegionGrid items={destinationItems} />
        )}
        <DestinationExperience image="/assets/images/ceylonix/watch-story.jpg" />
        <CeylonixCTA ctaImg="/assets/images/ceylonix/planTrip.png" />
        <DestinationDiscoveries posts={discoveryPosts} />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default DestinationsPage;
