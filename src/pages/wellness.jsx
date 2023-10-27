import React from "react";
import HeroSection2 from "../components/common/HeroSection2";
import bg from "../assets/wellness/hero/bg.png";
import WellnessListing from "../components/wellness/WellnessLising";
import FitnessLising from "../components/wellness/FitnessLising";

const Wellness = () => {
  const headingData = {
    title: `WELLNESS/FITNESS`,
    description: `5 Best wellness and fitness tips That would Keep You fit and healthy`,
    image: bg,
  };
  return (
    <div>
      <HeroSection2
        data={headingData}
        style={{ backgroundImage: `url(${bg})` }}
      />
      <WellnessListing />
      <FitnessLising />
    </div>
  );
};

export default Wellness;
