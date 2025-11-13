import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAddReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const reviewData = {
      food_name: form.food_name.value,
      photo: form.photo.value,
      restaurant_name: form.restaurant_name.value,
      restaurant_location: form.restaurant_location.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      tags: form.tags.value
        ? form.tags.value.split(",").map((t) => t.trim())
        : [],
      rating: parseFloat(form.rating.value),
      reviewer_name: user?.displayName || "Anonymous",
      email: user?.email || "",
      review_text: form.review_text.value,
      date: form.date.value || new Date().toISOString().split("T")[0],
    };

    try {
      // Save only once in 'reviews' collection
      const res = await fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire("Success", "Review added!", "success").then(() => {
          navigate("/allreviews");
        });
        form.reset();
      } else {
        Swal.fire("Error", "Failed to submit review. Try again.", "error");
      }
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-12 bg-white shadow-xl rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Add a Review</h2>
      <form onSubmit={handleAddReview} className="space-y-4">
        <div>
          <label className="font-semibold">Food Name</label>
          <input
            name="food_name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Photo URL</label>
          <input
            name="photo"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Restaurant Name</label>
          <input
            name="restaurant_name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Restaurant Location</label>
          <input
            name="restaurant_location"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="font-semibold">Price</label>
          <input
            name="price"
            type="number"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Tags (comma separated)</label>
          <input name="tags" className="input input-bordered w-full" />
        </div>

        <div>
          <label className="font-semibold">Rating</label>
          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            step="0.1"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Date</label>
          <input
            name="date"
            type="date"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="font-semibold">Review Text</label>
          <textarea
            name="review_text"
            className="textarea textarea-bordered w-full"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Submit Review"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddReview;
