import React from "react";

const Contact = () => {
  return (
    <section className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://i.ibb.co/Y7sMhkJ5/restaurant-interior.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact <span className="text-orange-500">DishDive</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Have questions or feedback? We’d love to hear from you!
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
            alt="Phone"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Phone</h4>
          <p className="text-gray-600">+880 1518 627916</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Email</h4>
          <p className="text-gray-600">info@dishdive.com</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/484/484167.png"
            alt="Location"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Address</h4>
          <p className="text-gray-600">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows={5}
            ></textarea>
            <button className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>

        {/* Google Map */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="DishDive Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.906720107979!2d90.395449314981!3d23.750903994624525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b13d5a18c1%3A0xe01f5482cb1d9a7c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 bg-orange-500 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Have Any Questions? Reach Out Today!
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Our team is ready to assist you with reservations, events, and more.
        </p>
        <button
          onClick={() => (window.location.href = "/reservation")}
          className="btn bg-white text-orange-600 border-none hover:bg-gray-100"
        >
          Book a Table Now
        </button>
      </div>
    </section>
  );
};

export default Contact;
