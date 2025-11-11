import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sliderCollection")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!data || data.length === 0) {
          Swal.fire(
            "No Slides Found",
            "Please add slider data in MongoDB.",
            "info"
          );
        } else {
          setSlides(data);
        }
      })
      .catch((err) => {
        Swal.fire("Error", err.message || "Failed to load slides.", "error");
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
          <SwiperSlide key={slide._id}>
            <div
              className="relative h-full flex items-center justify-center text-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative text-white px-5 max-w-2xl">
                <h2 className="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg mb-6">{slide.text}</p>
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
