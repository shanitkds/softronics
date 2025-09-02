import React, { useContext } from 'react'
import { AddCartContext } from '../Store/Cartcontext'
import { Link } from 'react-router-dom'
import { FaHome, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa"

function Cart() {
    const { cart, setCart } = useContext(AddCartContext)

    const Remove = (index) => {
        const Carts = [...cart]
        Carts.splice(index, 1)
        setCart(Carts)
    }

    return (
        <div className=' pl-10 pt-25 pb-20 h-screen'>
            <div className='flex flex-wrap gap-4 '>
                {cart.length > 0 ? (cart.map((res,i) => (
                    <div key={i} className='w-60 border-4 border-[white] bg-[white] rounded-xl  '>
                        <div className='border-2 border-amber-200 rounded-xl'>
                            <img src={res.img} alt="" className='size-60 rounded-xl' />
                        </div>
                        <div>
                            <div>{res.brand},{res.material}</div>
                            <div className='flex'>Price:{res.price}</div>
                            <div>Size:{res.selectSize}</div>
                            <button className="px-2 py-1 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition duration-300" onClick={()=>Remove(i)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))) : (
                    <div className="w-full h-screen flex items-center justify-center">
                        <p className="text-gray-500 text-[80px]  sm:text-[200px] font-semibold">No Product</p>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Cart
