import React from "react";

const NoReviews = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 p-4">
      <div className="text-center">
        <img
          src="https://i.ibb.co.com/KcLvyXWV/buzzer-with-symbol-red-background.jpg"
          alt="No Reviews"
          className="h-[250px] mx-auto object-contain opacity-70"
        />
        <h1 className="text-3xl font-bold mt-4 text-gray-700">
          No Reviews Found
        </h1>
        <p className="mt-2 text-gray-500">
          There are no reviews yet. Be the first to share your experience!
        </p>
        <button className="mt-6 btn btn-primary">Write a Review</button>
      </div>
    </div>
  );
};

export default NoReviews;
