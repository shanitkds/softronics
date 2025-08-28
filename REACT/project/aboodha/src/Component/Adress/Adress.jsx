import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adress() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigation=useNavigate()

  const addresses = [
    {
      id: 1,
      name: "Home",
      details: "123, MG Road, Malappuram, Kerala - 676505",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Office",
      details: "4th Floor, Tech Park, Calicut - 673016",
      phone: "9876500001",
    },
  ];

  return (
    <div className="w-full h-screen flex">
      {/* Left Section - About Shop */}
      <div className="w-1/2 bg-gradient-to-br bg-[#40336e] to-indigo-900 text-white p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Aboodha Tailoring Shop</h1>
        <p className="text-lg leading-relaxed mb-8">
          We are specialized in stitching <span className="font-semibold">Thobes</span>, 
          modern outfits, and traditional wear with premium fabrics.  
          Our tailors focus on <span className="font-semibold">quality, fitting, and 
          timely delivery</span>. With years of experience, we make sure 
          every customer looks elegant and stylish.  
        </p>
        <p className="text-sm opacity-80">
          ✂️ Custom tailoring • 👔 Perfect fitting • 🧵 Premium fabric selection
        </p>
      </div>

      {/* Right Section - Address Selection */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Select Delivery Address</h2>

          {/* Address List */}
          <div className="space-y-4">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className={`p-4 border rounded-xl cursor-pointer transition ${
                  selectedAddress === addr.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedAddress(addr.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">{addr.name}</h3>
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddress === addr.id}
                    readOnly
                  />
                </div>
                <p className="text-gray-600 text-sm mt-1">{addr.details}</p>
                <p className="text-gray-500 text-sm">📞 {addr.phone}</p>
              </div>
            ))}
          </div>

          {/* Confirm Button */}
          <button
            disabled={!selectedAddress}
            className="mt-6 w-full bg-[#1b1717] text-white py-2 rounded-lg font-semibold hover:bg-[#000000] transition disabled:opacity-50"
            onClick={()=>navigation('/OrderSectionPage')}
          >
            Deliver to this Address
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adress;
