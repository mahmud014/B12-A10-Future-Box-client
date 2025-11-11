import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // Correct image URLs
  const heroImage = "https://i.ibb.co/Y7sMhkJ5/restaurant-interior.jpg";
  const chefImage =
    "https://i.ibb.co/WpkG5142/side-view-mushroom-frying-with-stove-fire-human-hand-pan.jpg";

  return (
    <section className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-orange-500">DishDive</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Discover who we are, what drives us, and why our dishes bring people
            together in every bite.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div data-aos="fade-right">
          <img
            src={chefImage}
            alt="Our Chef"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="space-y-6" data-aos="fade-left">
          <h2 className="text-4xl font-bold">A Story of Flavor & Passion</h2>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold">DishDive</span>, food is more
            than a meal — it’s an experience. Since our humble beginnings, we’ve
            focused on combining authentic recipes with fresh ingredients to
            deliver unforgettable flavors.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our chefs bring years of culinary expertise to every plate, inspired
            by global tastes and local traditions. We believe that good food has
            the power to bring people together — whether it’s friends, family,
            or first-time guests.
          </p>

          <button
            onClick={() => navigate("/")}
            className="btn btn-primary mt-4"
          >
            🍽 Back to Home
          </button>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-8">Why Choose DishDive?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
                alt="Fresh Ingredients"
                className="w-16 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Fresh Ingredients</h4>
              <p className="text-gray-600">
                We use locally sourced, high-quality ingredients to ensure every
                dish bursts with flavor.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3823/3823481.png"
                alt="Master Chefs"
                className="w-16 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Master Chefs</h4>
              <p className="text-gray-600">
                Our expert chefs bring passion and precision to every creation
                served at your table.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1533/1533913.png"
                alt="Cozy Ambience"
                className="w-16 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Cozy Ambience</h4>
              <p className="text-gray-600">
                Experience warmth and comfort while enjoying your meal in our
                modern, elegant setting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 bg-orange-500 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Taste Something Amazing?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Join us today and indulge in a dining experience that delights every
          sense.
        </p>
        <button
          onClick={() => navigate("/reservation")}
          className="btn bg-white text-orange-600 border-none hover:bg-gray-100"
        >
          Book a Table Now
        </button>
      </div>
    </section>
  );
};

export default About;
