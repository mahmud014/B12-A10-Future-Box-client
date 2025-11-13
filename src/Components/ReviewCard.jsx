import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const ReviewCard = ({ review }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleFavorite = async () => {
    if (!user?.email) {
      Swal.fire("Info", "You need to log in to add favorites.", "info");
      return;
    }

    setLoading(true);

    const favoriteData = {
      ...review,
      userEmail: user.email, // store the current user
    };

    try {
      const res = await fetch("https://dish-dive-server.vercel.app/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(favoriteData),
      });

      const data = await res.json();
      if (data.insertedId) {
        Swal.fire("Success", "Added to favorites!", "success");
      } else {
        Swal.fire(
          "Info",
          "Already in favorites or something went wrong.",
          "info"
        );
      }
    } catch (err) {
      Swal.fire("Error", "Failed to add favorite.", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden">
      <figure>
        <img
          src={review.photo}
          alt={review.food_name}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body p-6">
        <h3 className="text-2xl font-bold mb-1">{review.food_name}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {review.restaurant_name} • {review.restaurant_location}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">{review.reviewer_name}</span>
          <div className="flex items-center text-yellow-500">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className="mr-1" />
            ))}
          </div>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-3">{review.review_text}</p>

        <div className="flex justify-between items-center">
          <Link
            to={`/reviewsdetails/${review._id}`}
            className="btn btn-sm btn-primary"
          >
            View Details
          </Link>
          <button
            onClick={handleFavorite}
            className={`btn btn-sm btn-error mt-2 ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            ❤️ Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
