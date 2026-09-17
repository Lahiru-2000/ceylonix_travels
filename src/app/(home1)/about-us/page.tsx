"use client";
import React from "react";
import CeylonixHeader from "../../Components/Ceylonix/Header";
import CeylonixFooter from "../../Components/Ceylonix/Footer";
import CeylonixAbout from "../../Components/CeylonixAbout/AboutUs";
import CeylonixWhyChooseUs from "../../Components/CeylonixAbout/AboutContact";
import CeylonixStats from "../../Components/Ceylonix/Stats";
import CeylonixTestimonials from "../../Components/CeylonixAbout/WhatTraverlersSay";
import AboutHero from "../../Components/CeylonixAbout/AboutHero";
import AboutGuideCards from "../../Components/CeylonixAbout/AboutGuideCards";
import AboutVehicleCards from "../../Components/CeylonixAbout/AboutVehicleCards";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";
const heroImage = "/assets/images/ceylonix/about-bg.jpg";
const aboutImage = "/assets/images/ceylonix/about-page-pic.png";
const whyChooseUsImage = "/assets/images/ceylonix/about-contact.png";
const testimonialImage = "/assets/images/ceylonix/traveler-thubs-up.png";
const guides = "/assets/images/ceylonix/WhatOurTravelers Say.png";
const busImage = "https://images.unsplash.com/photo-1544620341-11cb2cd57db8?auto=format&fit=crop&w=900&q=80";
const vanImage = "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=900&q=80";
const carImage = "https://www.thecarexpert.co.uk/wp-content/uploads/2026/01/BMW-iX3-Neue-Klasse-696x348.jpg";

const AboutUsPage = () => {
  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main style={{ background: "#0C111D" }}>
        <AboutHero image={heroImage} />
        <CeylonixAbout aboutImage={aboutImage} />
        <div style={{ background: "linear-gradient(120deg, #0b3d3f 0%, #0a1b3d 50%, #2a0f3f 100%)" }} >
           <CeylonixWhyChooseUs whyChooseUs={whyChooseUsImage} />
        </div>
       
        <CeylonixStats />
        {/* <AboutGuideCards image={guides} /> */}
        <AboutVehicleCards busImage={busImage} vanImage={vanImage} carImage={carImage} />
        <CeylonixTestimonials userImg={testimonialImage} />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default AboutUsPage;
