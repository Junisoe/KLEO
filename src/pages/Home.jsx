import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import SectionBlue from "../partials/SectionBlue";
import Section06 from "../partials/SectionExplain";
import Section05 from "../partials/SectionBlueAgain";
import FeaturesHome from "../partials/FeaturesHome";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import TestimonialsCarousel from "../partials/TestimonialsCarousel";
import News from "../partials/News";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow flex flex-col space-y-4">
        {/*  Page sections */}
        <HeroHome />
        <SectionBlue/>
        <Section06/>
        <Section05/>
        <TestimonialsCarousel/>
        {/* <FeaturesBlocks />{" "} */}
        {/*
        <FeaturesWorld />*/}
        {/* <News /> */}
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
