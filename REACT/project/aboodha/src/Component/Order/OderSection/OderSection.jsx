import React, { useContext, useState } from 'react'
import products from '../../Store/Store'
import { useNavigate, useParams } from 'react-router-dom'
import { AddCartContext } from '../../Store/Cartcontext'


function OderSection() {
  const { id } = useParams()
  const { order,orders,setOrders } = useContext(AddCartContext)
  const navigation=useNavigate()
  const [pay,setPay]=useState(null)

      
      

      const ConformOrder=(e)=>{
        e.preventDefault();
        setOrders([...orders,order])
        console.log(orders);
        navigation('/ordersusses')

    
      }

      console.log(pay);
      
      


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Payment Section */}
        <form className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Method</h2>

          <fieldset className="space-y-4 mb-6">
            <legend className="sr-only">Choose payment method</legend>

            {/* Cash on Delivery */}
            <label className="flex items-start gap-3 p-4 border rounded-xl cursor-pointer hover:shadow-md transition">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                className="mt-1 h-5 w-5 text-black focus:ring-black"
                onClick={(e)=>setPay(e.target.value)}
              />
              <span className="flex-1">
                <span className="block font-semibold text-gray-800">
                  Cash on Delivery (COD)
                </span>
                <span className="block text-sm text-gray-500">
                  Pay with cash when the order arrives.
                </span>
              </span>
            </label>

            {/* UPI */}
            <label className="flex items-start gap-3 p-4 border rounded-xl cursor-pointer hover:shadow-md transition">
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                className="mt-1 h-5 w-5 text-black focus:ring-black"
                onClick={(e)=>setPay(e.target.value)}
              />
              <span className="flex-1">
                <span className="block font-semibold text-gray-800">UPI</span>
                <span className="block text-sm text-gray-500">
                  Pay using UPI apps like Google Pay, PhonePe, or BHIM.
                </span>
              </span>
            </label>

            {/* UPI Field */}
            <div id="upiField" className="hidden mt-4">
              <label htmlFor="upiId" className="text-sm font-medium text-gray-700">
                UPI ID
              </label>
              <input
                id="upiId"
                type="text"
                placeholder="username@bank"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <p className="text-xs text-gray-500 mt-1">
                We will send a collect request to this UPI ID.
              </p>
            </div>
          </fieldset>

          <button
           disabled={!pay}
            type="submit"
            className="w-full py-3 rounded-xl text-white font-semibold bg-black hover:bg-gray-900 transition"
            onClick={ConformOrder}
          >
            Confirm & Continue
          </button>
        </form>

        {/* Order Summary Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>

          <div className="flex items-center gap-6">
            <img
              src={order.img}
              alt={order.brand}
              className="w-28 h-28 object-cover rounded-xl shadow-md"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{order.brand}</h3>
              <p className="text-sm text-gray-500">Material: {order.material}</p>
              <p className="text-sm text-gray-500">Size: {order.selectSize}</p>
              <p className="mt-2 text-lg font-bold text-gray-900">₹{order.price}</p>
            </div>
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>₹{order.price}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Delivery</span>
              <span>₹50</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-900 text-lg">
              <span>Total</span>
              <span>₹{order.price + 50}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default OderSection

