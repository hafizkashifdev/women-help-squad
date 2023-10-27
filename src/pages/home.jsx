import React from "react";
import HeroSection from "../components/common/HeroSection";
import BlogSide from "../components/home/BlogSide";
import ActivityLog from "../components/home/ActivityLog";
import ArticleSection from "../components/common/ArticlesSection";

import { homeHeroSection } from "../data";

const Home = () => {
  return (
    <>
      <HeroSection data={homeHeroSection} />
      <BlogSide />
      <ActivityLog />
      <ArticleSection />
    </>
  );
};

export default Home;
