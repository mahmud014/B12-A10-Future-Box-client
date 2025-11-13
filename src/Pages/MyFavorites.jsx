import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import ReviewCard from "../Components/ReviewCard";
import NoReviews from "../Components/NoReviews";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch favorites
  const fetchFavorites = async () => {
    if (!user?.email) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://dish-dive-server.vercel.app/favorites?userEmail=${user.email}`
      );
      const data = await res.json();
      setFavorites(data);
    } catch {
      Swal.fire("Error", "Failed to load favorites.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  // Delete favorite
  const handleDelete = async (favoriteId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This favorite will be removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f97316",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      // Send DELETE request to backend
      const res = await fetch(
        `https://dish-dive-server.vercel.app/favorites/${favoriteId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      if (data.deletedCount && data.deletedCount > 0) {
        Swal.fire("Deleted!", "Favorite removed.", "success");
        // Remove from local state
        setFavorites(favorites.filter((f) => f._id !== favoriteId));
      } else {
        Swal.fire("Info", "Favorite not found or already deleted.", "info");
      }
    } catch {
      Swal.fire("Error", "Failed to remove favorite.", "error");
    }
  };

  return (
    <section className="py-16 bg-base-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">My Favorites</h2>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : favorites.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((fav) => (
              <div key={fav._id} className="relative">
                <ReviewCard review={fav} />
                <button
                  onClick={() => handleDelete(fav._id)}
                  className="absolute top-3 right-3 btn btn-xs btn-error"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-12">Not Yet Favorite food</div>
        )}
      </div>
    </section>
  );
};

export default MyFavorites;
