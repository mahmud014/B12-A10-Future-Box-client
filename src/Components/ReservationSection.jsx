import React from "react";
import Swal from "sweetalert2";

const ReservationSection = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Booked Successfully!",
      text: "Your table has been reserved.",
      confirmButtonColor: "#f97316",
    });
  };

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="text-orange-500 uppercase font-semibold tracking-wide text-sm">
            Book a Table Online
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Flexible Online Reservation
          </h2>
          <p className="text-gray-600 max-w-xl">
            Provide your customers with modern and efficient ways for table
            reservations. In addition to booking via phone and email, you can
            also choose to integrate with OpenTable, or link to other local
            reservation systems.
          </p>
        </div>

        {/* Right Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="https://i.ibb.co.com/XfpqfP0V/top-view-baked-potatoes-with-minced-meat-greens-inside-plate-with-bread-dark-blue-desk-140725-49975.jpg"
                alt="Delicious food"
                className="rounded-2xl w-full object-cover"
              />
            </div>

            {/* Booking Form */}
            <div className="md:w-1/2 space-y-4">
              <span className="text-orange-500 font-semibold text-sm uppercase">
                Online Reservation
              </span>
              <h3 className="text-xl font-bold">Book a Table</h3>

              <form className="space-y-4" onSubmit={handleBooking}>
                <select className="select select-bordered w-full">
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>4 Persons</option>
                </select>

                <input
                  type="date"
                  className="input input-bordered w-full"
                  defaultValue={new Date().toISOString().split("T")[0]}
                />

                <input
                  type="time"
                  className="input input-bordered w-full"
                  defaultValue="19:00"
                />

                <button type="submit" className="btn btn-primary w-full">
                  Book Now
                </button>
                <p className="text-xs text-gray-400 mt-2">
                  *Powered by DishDive
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
