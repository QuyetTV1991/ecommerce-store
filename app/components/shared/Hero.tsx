import React from "react";
import CategoryBanner from "./CategoryBanner";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-white">
      <CategoryBanner />
      <div>user & promotion</div>
    </div>
  );
};

export default Hero;
