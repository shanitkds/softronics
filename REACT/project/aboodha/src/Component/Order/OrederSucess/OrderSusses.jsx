import React from "react"
import { CheckCircle2 } from "lucide-react" // success icon (from lucide-react)
import { Link, useNavigate } from "react-router-dom"

function OrderSuccess() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
        {/* Success Icon */}
        <CheckCircle2 className="mx-auto text-green-500 w-20 h-20 mb-4" />

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Order Placed Successfully 🎉
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Thank you for your purchase!  
          Your order has been confirmed and will be shipped soon.
        </p>

        {/* Order Info */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-500">Order ID</p>
          <p className="font-semibold text-gray-800">#ORD123456</p>

          <p className="mt-2 text-sm text-gray-500">Estimated Delivery</p>
          <p className="font-semibold text-gray-800">Aug 30 - Sep 2</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <Link
            to="/orders"
            className="px-5 py-2 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition"
            onClick={()=>navigate('/orders')}
          >
            View Orders
          </Link>
          <Link
            to="/products/0"
            className="px-5 py-2 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess
