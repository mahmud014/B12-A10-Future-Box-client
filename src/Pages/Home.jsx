import React, { Suspense } from "react";
import HeroSlider from "../Components/HeroSlider";
import WhyChoose from "../Components/WhyChoose";
import SpecialMenu from "../Components/SpecialMenu";
import TopReviews from "../Components/TopReviews";
import ReservationSection from "../Components/ReservationSection";
import LocationSection from "../Components/LocationSection";
import OfferSection from "../Components/OfferSection";

const Home = () => {
  return (
    <div className="bg-base-200">
      <HeroSlider></HeroSlider>
      <OfferSection></OfferSection>
      <div className="container mx-auto">
        <TopReviews></TopReviews>
      </div>
      <SpecialMenu></SpecialMenu>
      <ReservationSection></ReservationSection>
      <WhyChoose></WhyChoose>
      <LocationSection></LocationSection>
    </div>
  );
};

export default Home;
