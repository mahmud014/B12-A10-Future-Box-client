import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard";
import NoReviews from "../Components/NoReviews";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://dish-dive-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setFilteredReviews(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load reviews!",
        });
      });
  }, []);

  // Filter + sort logic
  useEffect(() => {
    setLoading(true);
    const delayDebounce = setTimeout(() => {
      let filtered = reviews.filter(
        (r) =>
          r.reviewer_name?.toLowerCase().includes(search.toLowerCase()) ||
          r.review_text?.toLowerCase().includes(search.toLowerCase()) ||
          r.food_name?.toLowerCase().includes(search.toLowerCase()) ||
          r.restaurant_name?.toLowerCase().includes(search.toLowerCase())
      );

      // Sort
      if (sort === "latest") {
        filtered.sort(
          (a, b) => new Date(b.review_date) - new Date(a.review_date)
        );
      } else if (sort === "oldest") {
        filtered.sort(
          (a, b) => new Date(a.review_date) - new Date(b.review_date)
        );
      } else if (sort === "highest") {
        filtered.sort((a, b) => b.rating - a.rating);
      } else if (sort === "lowest") {
        filtered.sort((a, b) => a.rating - b.rating);
      }

      setFilteredReviews(filtered);
      setLoading(false);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [search, reviews, sort]);

  return (
    <section className="py-16 bg-base-100 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Go Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline btn-primary mb-6"
        >
          ← Go Back
        </button>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Customer Reviews</h2>
          <p className="text-gray-500">See what our guests say about us</p>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by name, food, or restaurant..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full md:w-1/2"
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered w-full md:w-1/4"
          >
            <option value="latest">Sort by Latest</option>
            <option value="oldest">Sort by Oldest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : filteredReviews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <ReviewCard
                key={review._id}
                review={review}
                onClick={() =>
                  Swal.fire({
                    icon: "info",
                    title: review.reviewer_name,
                    text: review.review_text,
                    confirmButtonColor: "#f97316",
                  })
                }
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-8">
            <NoReviews></NoReviews>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllReviews;
