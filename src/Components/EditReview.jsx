import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditReview = () => {
  const review = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formattedDate = review.date ? review.date.split("T")[0] : "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const updated = {
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
      review_text: form.review_text.value,
      date: form.date.value || new Date().toISOString().split("T")[0],
    };

    try {
      const res = await fetch(`http://localhost:5000/reviews/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      const data = await res.json();
      if (data.modifiedCount || data.matchedCount) {
        Swal.fire("Success", "Review updated!", "success").then(() =>
          navigate("/myreviews")
        );
      } else {
        Swal.fire("Info", "No changes were made.", "info");
      }
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto my-12 p-6 bg-white shadow rounded space-y-4"
    >
      {/** Food Name */}
      <div>
        <label className="font-semibold">Food Name</label>
        <input
          name="food_name"
          defaultValue={review.food_name}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/** Photo URL */}
      <div>
        <label className="font-semibold">Photo URL</label>
        <input
          name="photo"
          defaultValue={review.photo}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/** Restaurant Name */}
      <div>
        <label className="font-semibold">Restaurant Name</label>
        <input
          name="restaurant_name"
          defaultValue={review.restaurant_name}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/** Restaurant Location */}
      <div>
        <label className="font-semibold">Restaurant Location</label>
        <input
          name="restaurant_location"
          defaultValue={review.restaurant_location}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/** Description */}
      <div>
        <label className="font-semibold">Description</label>
        <textarea
          name="description"
          defaultValue={review.description}
          className="textarea textarea-bordered w-full"
          required
        />
      </div>

      {/** Price */}
      <div>
        <label className="font-semibold">Price</label>
        <input
          name="price"
          type="number"
          defaultValue={review.price}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/** Tags */}
      <div>
        <label className="font-semibold">Tags (comma separated)</label>
        <input
          name="tags"
          defaultValue={review.tags ? review.tags.join(", ") : ""}
          className="input input-bordered w-full"
        />
      </div>

      {/** Rating */}
      <div>
        <label className="font-semibold">Rating</label>
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          step="0.1"
          defaultValue={review.rating}
          className="input input-bordered w-full"
          required
        />
      </div>

      {/** Date */}
      <div>
        <label className="font-semibold">Date</label>
        <input
          name="date"
          type="date"
          defaultValue={formattedDate}
          className="input input-bordered w-full"
        />
      </div>

      {/** Review Text */}
      <div>
        <label className="font-semibold">Review Text</label>
        <textarea
          name="review_text"
          defaultValue={review.review_text}
          className="textarea textarea-bordered w-full"
          required
        />
      </div>

      {/** Submit */}
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={loading}
      >
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          "Update Review"
        )}
      </button>
    </form>
  );
};

export default EditReview;
