import React from "react";
import Hero from "./HeroSection/Hero";
import { homeHero } from "../Components/HeroSection/Data";
import Features from "./FeaturesSection/Features";
import Footer from "./FooterSection/Footer";

function Home() {
  return (
    <div>
      <Hero {...homeHero} />
      <main>
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
