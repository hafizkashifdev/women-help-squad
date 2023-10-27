import React from "react";
import HeroSection2 from "../components/common/HeroSection2";
import bg from "../assets/family/hero/bg.png";
import ArticleSection from "../components/common/ArticlesSection";
import BlogSide from "../components/family/BlogSide";

const Family = () => {
  const headingData = {
    title: `family`,
    description: `Small Steps, Big Impact: The Power of Family Planning`,
    image: bg,
  };
  return (
    <div>
      <HeroSection2
        data={headingData}
        style={{ backgroundImage: `url(${bg})` }}
      />
      <BlogSide />
      <ArticleSection />
    </div>
  );
};

export default Family;
