// LocationPage.jsx
import React from 'react';

function LocationPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Our Tailoring Shop</h1>

      {/* Description */}
      <p className="mb-6 text-gray-700 text-center max-w-2xl">
        Welcome to our tailoring shop in <span className="font-semibold">Nellikuth</span>!
        We specialize in **Thobe tailoring**, providing custom designs, perfect fittings, and high-quality craftsmanship.
        Our expert tailors are dedicated to helping you get the perfect Thobe that suits your style and comfort.
        Visit us today for a professional and personalized tailoring experience.
      </p>

      {/* Google Map iframe */}
      <div className="w-full max-w-4xl h-96 shadow-lg rounded-md overflow-hidden">
        <iframe
          title="Tailoring Shop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019828915046!2d-122.41941528468125!3d37.77492977975901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0a6e63bb%3A0x4c42b2a9c623f29b!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1692530000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

  );
}

export default LocationPage;
