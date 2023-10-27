import React from "react";
import HeroSection2 from "../components/common/HeroSection2";
import bg from "../assets/career-and-finance/hero/bg.png";
import ArticleListing from "../components/career-and-finance/ArticlesListing";

const CareerAndFinances = () => {
  const headingData = {
    title: `career & finance`,
    description: `Inflation Giving you sleepless nights, Here are 5 Ways to cut your cost of living `,
    image: bg,
  };
  return (
    <div>
      <HeroSection2
        data={headingData}
        style={{ backgroundImage: `url(${bg})` }}
      />
      <ArticleListing />
    </div>
  );
};

export default CareerAndFinances;
