import React from "react";

const LocationSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="text-orange-500 uppercase font-semibold tracking-wide text-sm">
            Visit Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Our Location</h2>
          <p className="text-gray-600 max-w-xl">
            Find us in the heart of the city. We provide a cozy and friendly
            environment where you can enjoy delicious meals. Our location is
            easy to reach and perfect for family gatherings, dates, or business
            lunches.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Address:</strong> 123 Main Street, Dhaka, Bangladesh
            </p>
            <p>
              <strong>Phone:</strong> +880 1518627916
            </p>
            <p>
              <strong>Opening Hours:</strong> Mon-Sun: 10:00 AM - 10:00 PM
            </p>
          </div>
        </div>

        {/* Right Content: Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-[400px] md:h-[400px]">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9012187202787!2d90.41251811537272!3d23.81033248459078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b857b1b7c2c5%3A0x7f83f627c3d2a0ee!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1700044461924!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
