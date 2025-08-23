import React from "react";
import { FaTruck, FaClock, FaShieldAlt } from "react-icons/fa";

function DeliveryDetails() {
  return (
    <div className="max-w-3xl mx-auto p-6  rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Delivery Details</h2>

      <div className="flex items-start mb-3 gap-3">
        <FaTruck className="text-blue-500 mt-1" />
        <p>
          <span className="font-semibold">Fast Shipping:</span> We process and ship your order within 24 hours, ensuring it reaches you quickly and safely.
        </p>
      </div>

      <div className="flex items-start mb-3 gap-3">
        <FaClock className="text-blue-500 mt-1" />
        <p>
          <span className="font-semibold">Estimated Delivery:</span> Typically, orders arrive within 3-5 business days depending on your location.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <FaShieldAlt className="text-blue-500 mt-1" />
        <p>
          <span className="font-semibold">Safe & Secure:</span> Your items are carefully packed to prevent damage. Payment on delivery is available for your convenience.
        </p>
      </div>

      <p className="mt-4 text-gray-700">
        You will receive a tracking number once your order is shipped. Use it to monitor your package until it reaches your doorstep. 
        Our customer support is always available for any delivery-related assistance.
      </p>
    </div>
  );
}

export default DeliveryDetails;
