import { div } from 'framer-motion/m'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function BannerCart({ img, category }) {
    const navigate=useNavigate()
    return (
        <div>
            <div
                style={{ backgroundImage: `url(${img})` }}
                className="w-100 h-100 bg-no-repeat bg-cover bg-top border-15 border-white shadow-lg rounded-lg flex flex-col items-center justify-end p-4"
            >
                <p className="text-white font-semibold bg-black/50 px-2 py-1 rounded mb-2">
                    {category}
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded" onClick={()=>navigate(`/products/${category}`)}>
                    Shop Now
                </button>
            </div>
        </div>
    )
}

export default BannerCart