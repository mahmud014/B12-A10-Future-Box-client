import React from "react";

const WhyChoose = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose DishDive?</h2>
        <p className="max-w-2xl mx-auto mb-10">
          We believe good food brings people together. Here’s what makes us
          special.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl shadow-md bg-base-200">
            <h3 className="text-xl font-semibold mb-2">🌿 Fresh Ingredients</h3>
            <p>
              We use only organic and locally sourced produce for every meal.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-base-200">
            <h3 className="text-xl font-semibold mb-2">👨‍🍳 Expert Chefs</h3>
            <p>
              Our team of skilled chefs craft each dish with perfection and
              passion.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-base-200">
            <h3 className="text-xl font-semibold mb-2">🚚 Fast Delivery</h3>
            <p>Enjoy hot and fresh meals at your doorstep, every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
