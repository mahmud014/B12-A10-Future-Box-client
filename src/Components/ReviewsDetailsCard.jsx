import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ReviewDetailsCard = ({ review }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden container mx-auto my-6">
      {/* Image Side */}
      <div className="md:w-1/2">
        <img
          src={review.photo}
          alt={review.food_name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details Side */}
      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{review.food_name}</h2>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Restaurant:</span>{" "}
            {review.restaurant_name}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Location:</span>{" "}
            {review.restaurant_location}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Description:</span>{" "}
            {review.description}
          </p>
          <p className="text-xl font-semibold text-primary mb-2">
            Price: {review.price} BDT
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <p className="text-xl font-semibold mb-2">Tags:</p>
            {review.tags &&
              review.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <FaStar
                key={idx}
                className={`mr-1 ${
                  idx < review.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">{review.rating}.0</span>
          </div>

          {/* Reviewer */}
          <div className="border-t pt-3 mt-3">
            <p className="font-semibold">{review.reviewer_name}</p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Date: </span>
              {new Date(review.review_date).toLocaleDateString()}
            </p>
            <p className="mt-1 text-gray-700">{review.review_text}</p>
          </div>
        </div>
        <div>
          <button className="btn btn-primary">Add to favourite</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailsCard;
