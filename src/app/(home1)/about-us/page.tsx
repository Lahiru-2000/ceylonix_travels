"use client";
import React from "react";
import CeylonixHeader from "../../Components/Ceylonix/Header";
import CeylonixFooter from "../../Components/Ceylonix/Footer";
import CeylonixAbout from "../../Components/Ceylonix/About";
import CeylonixWhyChooseUs from "../../Components/Ceylonix/WhyChooseUs";
import CeylonixStats from "../../Components/Ceylonix/Stats";
import CeylonixTestimonials from "../../Components/Ceylonix/Testimonials";
import AboutHero from "../../Components/CeylonixAbout/AboutHero";
import AboutGuideCards from "../../Components/CeylonixAbout/AboutGuideCards";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";
const heroImage = "/assets/images/ceylonix/about-bg.jpg";
const aboutImage = "/assets/images/ceylonix/about-us.png";
const whyChooseUsImage = "/assets/images/ceylonix/whyChooseUs.png";
const testimonialImage = "/assets/images/ceylonix/WhatOurTravelers Say.png";

const AboutUsPage = () => {
  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main style={{ background: "#01000B" }}>
        <AboutHero image={heroImage} />
        <CeylonixAbout aboutImage={aboutImage} />
        <CeylonixWhyChooseUs whyChooseUs={whyChooseUsImage} />
        <CeylonixStats />
        <AboutGuideCards image={testimonialImage} />
        <CeylonixTestimonials userImg={testimonialImage} />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default AboutUsPage;
