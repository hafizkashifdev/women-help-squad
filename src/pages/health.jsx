import React from "react";
import HeroSection from "../components/common/HeroSection";

import { healthHeroSection } from "../healthData";
import Services from "../components/health/services";
import Doctors from "../components/health/doctors";
import Banner from "../components/health/Banner";

const Health = () => {
  return (
    <>
      <HeroSection data={healthHeroSection} healthSection />
      <Services />
      <Doctors />
      <Banner />
    </>
  );
};

export default Health;
