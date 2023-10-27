import React from "react";
import HeroSection from "../components/beauty/hero";
import CardListing from "../components/beauty/CardListing";
import MakeItEasy from "../components/beauty/MakeItEasy";
import ProductItem from "../components/beauty/ProductItem";
import MakeupItem from "../components/beauty/MakeupItem";

const Beauty = () => {
  const BeautyHeroSection = {
    title:
      "Beauty Is An Empowerment Statement. Delve Into The World Of Infinite Beauty and Style",
    description: `Finding all your beauty products and styles in one place is a dream and we at Women’s Help Squad got you covered.`,
  };
  return (
    <div>
      <HeroSection data={BeautyHeroSection} />
      <CardListing />
      <MakeItEasy />
      <ProductItem />
      <MakeupItem />
    </div>
  );
};

export default Beauty;
