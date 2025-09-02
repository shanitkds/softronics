import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import products from '../Store/Store'
import { button, div } from 'framer-motion/client'
import { AddCartContext } from '../Store/Cartcontext'
import { FaRupeeSign } from "react-icons/fa";
import DeliveryDetails from '../DeliveryDetails'


function ProductInfo() {
  const { id } = useParams()
  const [productInfo, setProductInfo] = useState([])
  const { cart, setCart,order,setOrder} = useContext(AddCartContext)
  const [selected, setSelected] = useState('')
  const navigate=useNavigate()

  useEffect(() => {
    const product = products.find((p) => p.id.toString() === id);
    setProductInfo(product)

  }, [id])


  const add = () => {
    if (!selected) {
      alert('Please select The Size')
      return;
    }
    setCart([...cart, { ...productInfo, selectSize: selected }])
  }


  const Order=()=>{
    if (!selected) {
      alert('Please select The Size')
      return;
    }
    setOrder({...productInfo,selectSize:selected})
    console.log(order);
     navigate('/adress')
  }

  
  return (
    <div className='pt-20 sm:flex sm:pt-0'>
      <div className="ml-20 h-[650px] w-[400px] bg-white flex flex-col items-center justify-start gap-6 pt-15 sm:pt-35 sm:h-screen">
        {/* Product Image Box */}
        <div className="border-4 border-amber-100 p-3">
          <img
            src={productInfo.img}
            alt="product"
            className="w-[280px] h-auto object-contain"
          />
        </div>

      
        <div className="flex gap-4">
          <button className="px-4 py-2 border bg-amber-100 border-amber-100 text-black rounded hover:bg-amber-100 hover:text-white" onClick={Order}>
            Order
          </button>
          <button className="px-4 py-2 border border-gray-300 text-black rounded  hover:bg-amber-100 hover:text-white" onClick={add}>
            Add
          </button>
        </div>
      </div>
      {/* --------------------------------------------- */}
      <div className=''>
        <div className="pt-20 sm:pt-40 pl-34 sm:pl-50 max-w-md">
         
          <div className="text-lg font-semibold text-gray-800 mb-2">
            {productInfo.brand}, {productInfo.material}
          </div>

        
          <div className="flex items-center text-xl font-bold text-green-700 mb-4">
            <FaRupeeSign className="mr-1" /> {productInfo.price}
          </div>

       
          <div>
            <div className="text-sm font-medium text-gray-600 mb-2">
              SELECT SIZE
            </div>
            <div className="flex gap-2.5">
              {productInfo?.size?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelected(size)}
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-colors duration-600
            ${selected === size
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='pt-8 pl-3'>
          <DeliveryDetails />
        </div>
      </div>

    </div>

  )
}

export default ProductInfo