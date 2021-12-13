import React from "react";
import Hero from "./HeroSection/Hero";
import { homeHero } from "../Components/HeroSection/Data";
import Features from "./FeaturesSection/Features";

function Home() {
  return (
    <div>
      <Hero {...homeHero} />
      <main>
        <Features />
      </main>
    </div>
  );
}

export default Home;
