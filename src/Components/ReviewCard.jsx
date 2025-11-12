import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden">
      {/* Food Image */}
      <figure>
        <img
          src={review.photo}
          alt={review.food_name}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body p-6">
        {/* Food & Restaurant Info */}
        <h3 className="text-2xl font-bold mb-1">{review.food_name}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {review.restaurant_name} • {review.restaurant_location}
        </p>

        {/* Reviewer & Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">{review.reviewer_name}</span>
          <div className="flex items-center text-yellow-500">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className="mr-1" />
            ))}
          </div>
        </div>

        {/* Review */}
        <p className="text-gray-700 mb-4 line-clamp-3">{review.review_text}</p>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <Link
            to={`/reviewsdetails/${review._id}`}
            className="btn btn-sm btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
