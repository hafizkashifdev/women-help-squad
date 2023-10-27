import React from "react";
import HeroSection2 from "../components/common/HeroSection2";
import bg from "../assets/food/hero/bg.png";
import FoodListing from "../components/food/FoodListing";
import HealthyFood from "../components/food/HealthyFood";

const Food = () => {
  const headingData = {
    title: `Food`,
    description: `5 Best Summer Dishes That would Keep You feeling Good`,
    image: bg,
  };
  return (
    <div>
      <HeroSection2
        data={headingData}
        style={{ backgroundImage: `url(${bg})` }}
      />
      <FoodListing />
      <HealthyFood />
    </div>
  );
};

export default Food;
