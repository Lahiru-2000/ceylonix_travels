"use client";
import React, { useEffect, useState } from "react";
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
import { useLocale } from "../Components/LanguageProvider";
import { getDestinations } from "../lib/getDestinations";
import { getBlogPosts } from "../lib/getBlogPosts";

const logoPath = "/assets/images/ceylonix/logoceylonix.png";

const homeDestinationSlugs = [
  { slug: "ella-nine-arch-bridge", image: "/assets/images/ceylonix/dest1.png" },
  { slug: "dambulla-lion-rock-sigiriya", image: "/assets/images/ceylonix/dest2.png" },
  { slug: "galle-dutch-fort", image: "/assets/images/ceylonix/dest4.png" },
  { slug: "kandy-tooth-temple", image: "/assets/images/ceylonix/dest3.png" },
];

const extraBlogImage = "/assets/images/ceylonix/hero.jpg";

const HomePage = () => {
  const { locale } = useLocale();
  const [destinations, setDestinations] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getDestinations(locale).then((items) => {
      const bySlug = Object.fromEntries(items.map((item) => [item.slug, item]));
      setDestinations(
        homeDestinationSlugs
          .map((card) => {
            const place = bySlug[card.slug];
            if (!place) return null;
            return {
              slug: place.slug,
              title: place.title,
              subtitle: place.subtitle,
              image: card.image,
            };
          })
          .filter(Boolean)
      );
    });

    getBlogPosts(locale).then((posts) => {
      const cards = posts.map((post) => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        author: post.author,
        category: post.category,
        image: post.image,
      }));
      if (posts[0]) {
        cards.push({
          slug: posts[0].slug,
          title: posts[0].title,
          date: posts[0].date,
          author: posts[0].author,
          category: posts[0].category,
          image: extraBlogImage,
        });
      }
      setBlogPosts(cards);
    });
  }, [locale]);

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
