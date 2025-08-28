import React, { useContext } from 'react'
import { AddCartContext } from '../../Store/Cartcontext'
// import { div } from 'framer-motion/client'

function ViewOrder() {
    const { orders } = useContext(AddCartContext)

    return (
        <>
            {orders.length > 0 ? (<div className="flex flex-wrap gap-6 pt-30 pl-15 pb-38">
                {orders.map((info) => (
                    <div
                        key={info.id}
                        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-5 border"
                    >
                        {/* Product Brand */}
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{info.brand}</h3>

                        {/* Product Image */}
                        <div className="w-full h-48 flex items-center justify-center mb-4">
                            <img
                                src={info.img}
                                alt={info.brand}
                                className="max-h-44 object-contain rounded-xl"
                            />
                        </div>

                        {/* Material */}
                        <div className="text-gray-700 font-medium mb-2">
                            Material: <span className="font-normal">{info.material}</span>
                        </div>

                        {/* Delivery Date */}
                        <div className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg inline-block">
                            📦 Delivery Date: <span className="font-semibold">12/06/2025</span>
                        </div>
                    </div>
                ))}
            </div>) : (
                <div className="w-full h-screen flex items-center justify-center">
                    <p className="text-gray-500 text-[200px] font-semibold">No Orders</p>
                </div>
            )
            }
        </>
    )
}

export default ViewOrder

