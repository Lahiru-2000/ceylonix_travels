"use client";
import React from "react";
import CeylonixHeader from "../../Components/Ceylonix/Header";
import CeylonixFooter from "../../Components/Ceylonix/Footer";
import CeylonixCTA from "../../Components/Ceylonix/CTA";
import DestinationHero from "../../Components/CeylonixDestination/DestinationHero";
import DestinationPlacesGrid from "../../Components/CeylonixDestination/DestinationPlacesGrid";
import DestinationExperience from "../../Components/CeylonixDestination/WatchStory";
import DestinationDiscoveries from "../../Components/CeylonixDestination/DestinationDiscoveries";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";
const destinationHero = "/assets/images/ceylonix/destinations-bg.png";

const destinationItems = [
  { title: "Ella Scenic Mountain Escape", subtitle: "Tea estates and panoramic viewpoints", image: "/assets/images/ceylonix/dest1.png" },
  { title: "Sigiriya Rock Fortress", subtitle: "Ancient wonders and royal gardens", image: "/assets/images/ceylonix/dest2.png" },
  { title: "Galle Coastal Heritage Tour", subtitle: "Colonial fort and sea breeze", image: "/assets/images/ceylonix/dest3.png" },
  { title: "Kandy Cultural Experience", subtitle: "Temples and traditional performances", image: "/assets/images/ceylonix/trekking.png" },
  { title: "Ella Scenic Mountain Escape", subtitle: "Train rides through green hills", image: "/assets/images/ceylonix/dest1.png" },
  { title: "Sigiriya Rock Fortress", subtitle: "History, art, and jungle trails", image: "/assets/images/ceylonix/dest2.png" },
  { title: "Galle Coastal Heritage Tour", subtitle: "Sunset walks and local cafes", image: "/assets/images/ceylonix/dest3.png" },
  { title: "Kandy Cultural Experience", subtitle: "Authentic dance and city highlights", image: "/assets/images/ceylonix/trekking.png" },
];

const discoveryPosts = [
  { title: "Bentota Beach Tour", desc: "Coastal beauty, waves, and island relaxation.",price:"From $140 / Person", image: "/assets/images/ceylonix/travelExperiance2.jpg" },
  { title: "Ella Train Journey", desc: "One of the most scenic train rides in Asia.",price:"From $140 / Person", image: "/assets/images/ceylonix/dest1.png" },
  { title: "Cultural Triangle Tour", desc: "Temples, ruins, and heritage landmarks.", price:"From $140 / Person", image: "/assets/images/ceylonix/dest2.png" },
  { title: "Wildlife Safari Visits", desc: "Discover leopards, elephants, and birdlife.", price:"From $140 / Person", image: "/assets/images/ceylonix/dest4.png" },
];

const DestinationsPage = () => {
  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main style={{ background: "#0C111D" }}>
        <DestinationHero image={destinationHero} />
        <DestinationPlacesGrid items={destinationItems} />
        <DestinationExperience image="/assets/images/ceylonix/watch-story.jpg" />
        <CeylonixCTA ctaImg="/assets/images/ceylonix/planTrip.png" />
        <DestinationDiscoveries posts={discoveryPosts} />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default DestinationsPage;
