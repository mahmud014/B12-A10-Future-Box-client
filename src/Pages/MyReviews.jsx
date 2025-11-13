import React, { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import LoadingPage from "../Components/LoadingPage";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) {
      setReviews([]);
      return;
    }

    setLoading(true);

    fetch(`https://dish-dive-server.vercel.app/myreviews?email=${user.email}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reviews");
        return res.json();
      })
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err))
      .finally(() => setLoading(false));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dish-dive-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setReviews(reviews.filter((r) => r._id !== id));
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
          });
      }
    });
  };

  const handleEdit = (id) => {
    navigate(`/editreview/${id}`);
  };

  if (loading)
    return (
      <p className="text-center mt-10">
        <LoadingPage />{" "}
      </p>
    );
  if (!reviews.length)
    return <p className="text-center mt-10">No reviews found.</p>;

  return (
    <div className="max-w-6xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">My Reviews</h2>
      <table className="table-auto w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Food Image</th>
            <th className="px-4 py-2">Food Name</th>
            <th className="px-4 py-2">Restaurant</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review._id} className="border-t border-gray-200">
              <td className="px-4 py-2">
                <img
                  src={review.photo}
                  alt={review.food_name}
                  className="w-20 h-20 object-cover rounded"
                />
              </td>
              <td className="px-4 py-2">{review.food_name}</td>
              <td className="px-4 py-2">{review.restaurant_name}</td>
              <td className="px-4 py-2">{review.date}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(review._id)}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
