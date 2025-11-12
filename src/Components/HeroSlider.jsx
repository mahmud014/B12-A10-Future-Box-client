import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sliderCollection")
      .then((res) => res.json())
      .then((data) => {
        const finalSlides = Array.isArray(data) ? data : data.data || [];
        setSlides(finalSlides);
      })
      .catch((err) => {
        console.error("Failed to load slides:", err);
      });
  }, []);

  if (!slides.length) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="w-full h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id} className="h-full">
            <div
              className="relative h-full flex items-center justify-center text-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text + Button */}
              <div className="relative z-10 text-white px-5 max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6">{slide.text}</p>
                <button className="btn btn-primary">Explore Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
