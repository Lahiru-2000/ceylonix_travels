"use client";

import React from "react";
import CeylonixHeader from "../../Components/Ceylonix/Header";
import CeylonixFooter from "../../Components/Ceylonix/Footer";
import ContactHero from "../../Components/CeylonixContact/ContactHero";
import ContactDetailsSection from "../../Components/CeylonixContact/ContactDetailsSection";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";
const heroBg = "/assets/images/ceylonix/contact-bg.jpg";
const contactImage = "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80";

const ContactPage = () => {
  return (
    <div style={{ background: "var(--ceylon-bg)", minHeight: "100vh" }}>
      <CeylonixHeader logoImage={logoPath} />
      <main style={{ background: "#01000B" }}>
        <ContactHero image={heroBg} />
        <ContactDetailsSection image={contactImage} />
      </main>
      <CeylonixFooter logoImage="/assets/images/ceylonix/footerLogo.png" />
    </div>
  );
};

export default ContactPage;
