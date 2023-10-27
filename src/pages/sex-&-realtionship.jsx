import React from "react";
import HeroSection2 from "../components/common/HeroSection2";
import bg from "../assets/sex-&-relationship/hero/bg.png";
import SexRelationListing from "../components/sex-&-realtionship/SexRelationListing";
import Intimacy from "../components/sex-&-realtionship/Intimacy";

const SexRealtionShip = () => {
  const headingData = {
    title: `SEX/RELATIONSHIP`,
    description: `The Perfect Wedding Party Does Exist. And It doesn’t Have to Be a Big Party`,
    image: bg,
  };
  return (
    <div>
      <HeroSection2
        data={headingData}
        style={{ backgroundImage: `url(${bg})` }}
      />
      <SexRelationListing />
      <Intimacy />
    </div>
  );
};

export default SexRealtionShip;
