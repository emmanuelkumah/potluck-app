import React from "react";
import Hero from "./HeroSection/Hero";
import { homeHero } from "../Components/HeroSection/Data";
import Features from "./FeaturesSection/Features";
import Footer from "./FooterSection/Footer";
import Review from "./ReviewSection/Review";

function Home() {
  return (
    <div>
      <Hero {...homeHero} id="hero" />
      <Features id="features" />
      <Review id="review" />
      <Footer id="contact" />
    </div>
  );
}

export default Home;
