import React from "react";
import HeroSlider from "../Components/HeroSlider";
import WhyChoose from "../Components/WhyChoose";
import SpecialMenu from "../Components/SpecialMenu";
import TopReviews from "../Components/TopReviews";

const Home = () => {
  return (
    <div className="bg-base-200">
      <HeroSlider></HeroSlider>
      <div className="container mx-auto">
        <TopReviews></TopReviews>
      </div>
      <SpecialMenu></SpecialMenu>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;
