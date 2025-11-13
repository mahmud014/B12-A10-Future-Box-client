import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const OfferSection = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint if you have one
    fetch("https://dish-dive-server.vercel.app/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data))
      .catch((err) => console.error("Failed to load offers:", err));
  }, []);

  const getDiscountedPrice = (price, discount) => {
    return (price - price * (discount / 100)).toFixed(2);
  };

  const handleGrabNow = (offer) => {
    Swal.fire({
      title: "Great Choice!",
      text: `You selected "${offer.title}" for $${getDiscountedPrice(
        offer.originalPrice,
        offer.discount
      )}.`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Special Offers</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${offer.image})` }}
              ></div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="mb-4">
                  <span className="text-gray-400 line-through mr-2">
                    ৳{offer.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-green-600 font-bold text-xl">
                    ৳{getDiscountedPrice(offer.originalPrice, offer.discount)}
                  </span>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleGrabNow(offer)}
                >
                  Grab Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
