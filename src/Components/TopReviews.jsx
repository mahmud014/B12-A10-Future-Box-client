// src/components/TopReviews.jsx
import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router";

const TopReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://dish-dive-server.vercel.app/latest-reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) =>
        Swal.fire("Error", err.message || "Failed to load reviews", "error")
      );
  }, []);

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Top Rated Reviews</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Check out the most loved dishes by our customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/allreviews"
          className="btn btn-outline btn-primary hover:btn-primary"
        >
          Show All
        </Link>
      </div>
    </section>
  );
};

export default TopReviews;
