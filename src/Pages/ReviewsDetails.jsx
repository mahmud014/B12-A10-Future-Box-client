import React from "react";
import { useLoaderData, useParams, Link, useNavigate } from "react-router-dom";
import ReviewsDetailsCard from "../Components/ReviewsDetailsCard";

const ReviewsDetails = () => {
  const navigate = useNavigate();
  const reviews = useLoaderData();
  const { id } = useParams();

  const review = reviews.find((r) => r._id === id);

  if (!review) {
    return (
      <div className="min-h-screen">
        <p className="text-xl font-semibold">Review not found!</p>
        <Link to="/" className="mt-4 text-orange-500 underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white mt-5">
      <ReviewsDetailsCard review={review} />

      <div className="text-center mt-10">
        <Link
          onClick={() => navigate(-1)}
          className="text-orange-500 font-semibold underline hover:text-orange-600"
        >
          ← Go Back
        </Link>
      </div>
    </div>
  );
};

export default ReviewsDetails;
