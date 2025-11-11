import React from "react";
import "animate.css";

const LoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-lenear-to-br from-orange-200 via-white to-orange-100">
      {/* Spinner */}
      <div className="relative flex justify-center items-center animate__animated animate__rotateIn animate__infinite animate__slower">
        {/* Outer Spinner */}
        <div className="w-16 h-16 border-4 border-orange-300 border-t-orange-500 rounded-full animate-spin"></div>

        {/* Inner Spinner */}
        <div
          className="absolute w-8 h-8 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>

      {/* Loading Text */}
      <p className="mt-8 text-xl font-semibold text-orange-600 animate__animated animate__pulse animate__infinite animate__slower">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingPage;
