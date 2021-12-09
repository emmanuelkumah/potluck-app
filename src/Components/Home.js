import React from "react";
import Hero from "./HeroSection/Hero";
import { homeHero } from "../Components/HeroSection/Data";

function Home() {
  return (
    <div>
      <Hero {...homeHero} />
    </div>
  );
}

export default Home;
