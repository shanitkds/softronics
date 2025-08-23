import React, { useContext } from 'react'
import { AddCartContext } from '../Store/Cartcontext'
import { div } from 'framer-motion/client'


function Cart() {
    const { cart,setCart } = useContext(AddCartContext)

    const Remove = (index) => {
        const Carts=[...cart]
        Carts.splice(index,1)
        setCart(Carts)
        console.log(Carts);
        
};
    return (
        <div className='pl-30 pt-25 pb-20'>
            <div className='flex flex-wrap gap-4 '>
                {cart.length > 0 ? (cart.map((res,i) => (
                    <div className='w-60 border-4 border-[white] bg-[white] rounded-xl '>
                        <div className='border-2 border-amber-200 rounded-xl'><img src={res.img} alt="" className='size-60 rounded-xl' /></div>
                        <div>
                            <div>{res.brand},{res.material}</div>
                            <div className='flex'>Price:{res.price}</div>
                            <div>Size:{res.selectSize}</div>
                            <button key={i} className="px-2 py-1 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition duration-300" onClick={()=>Remove(i)}>
                                Remove
                            </button>
                        </div>
                    </div>

                ))) : (
                    <div className="w-full h-screen flex items-center justify-center">
                        <p className="text-gray-500 text-[200px] font-semibold">No Data</p>
                    </div>
                )}

            </div>
            <div>
                {cart.length > 0 ?
                    (<div className='pt-10 pl-140'>
                <button className="px-12 py-5 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300" >
                    Order All
                </button>
            </div>):""
                }
            </div>
        </div>
    )
}

export default Cart