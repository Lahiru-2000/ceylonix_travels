"use client";
import React from "react";
import CeylonixHeader from "../Components/Ceylonix/Header";
import CeylonixHero from "../Components/Ceylonix/Hero";
import CeylonixStats from "../Components/Ceylonix/Stats";
import CeylonixAbout from "../Components/Ceylonix/About";
import CeylonixTravelStyle from "../Components/Ceylonix/TravelStyle";
import CeylonixWhyChooseUs from "../Components/Ceylonix/WhyChooseUs";
import CeylonixDestinations from "../Components/Ceylonix/Destinations";
import CeylonixGallery from "../Components/Ceylonix/Gallery";
import CeylonixPlanning from "../Components/Ceylonix/Planning";
import CeylonixCTA from "../Components/Ceylonix/CTA";
import CeylonixTestimonials from "../Components/Ceylonix/Testimonials";
import CeylonixBlog from "../Components/Ceylonix/Blog";
import CeylonixFooter from "../Components/Ceylonix/Footer";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";

const HomePage = () => {
  const destinations = [
    {
      title: "Ella",
      subtitle: "Scenic mountains & train journeys",
      image: "/assets/images/ceylonix/dest1.png",
    },
    {
      title: "Sigiriya",
      subtitle: "Ancient rock fortress",
      image: "/assets/images/ceylonix/dest2.png",
    },
    {
      title: "Galle",
      subtitle: "Coastal charm & colonial history",
      image: "/assets/images/ceylonix/dest4.png",
    },
    {
      title: "Kandy",
      subtitle: "Cultural capital of Sri Lanka",
      image: "/assets/images/ceylonix/dest3.png",
    },
  ];

  const blogPosts = [
    {
      title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
      date: "April 06 2023",
      author: "Ali Tufan",
      category: "Trips",
      image: "/assets/images/ceylonix/dest3.png",
    },
    {
      title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
      date: "April 06 2023",
      author: "Ali Tufan",
      category: "Trips",
      image: "/assets/images/ceylonix/dest2.png",
    },
    {
      title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
      date: "April 06 2023",
      author: "Ali Tufan",
      category: "Trips",
      image: "/assets/images/ceylonix/trekking.png",
    },
    {
      title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
      date: "April 06 2023",
      author: "Ali Tufan",
      category: "Trips",
      image: "/assets/images/ceylonix/hero.jpg",
    },
  ];

  return (
    <div className="ceylonix-homepage" style={{ background: "#0C111D", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main>
        <CeylonixHero heroImage="/assets/images/ceylonix/hero.jpg" />
        <CeylonixAbout aboutImage="/assets/images/ceylonix/about-us.png" />
        <CeylonixStats />
        <CeylonixTravelStyle />
        <CeylonixWhyChooseUs
          whyChooseUs="/assets/images/ceylonix/whyChooseUs.png"
          
        />
        <CeylonixDestinations destinations={destinations} />
        <CeylonixGallery galleryImg="/assets/images/ceylonix/ourJourny.jpg" />
        <CeylonixPlanning
          planningImgs={[
            "/assets/images/ceylonix/travelExperiance2.jpg",
            "/assets/images/ceylonix/experiance2.png",
            "/assets/images/ceylonix/experiance3.jpg",
          ]}
        />
        <CeylonixCTA ctaImg="/assets/images/ceylonix/planTrip.png" />
        <CeylonixTestimonials userImg="/assets/images/ceylonix/WhatOurTravelers Say.png" />
        <CeylonixBlog blogPosts={blogPosts} />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default HomePage;
