import React, { useEffect, useState } from 'react'
// import { ImOpt } from 'react-icons/im'
// import productbanner from '../../../public/protact-pagebanner.jpg'
import products from '../Store/Store'
import { div } from 'framer-motion/client'
import FiltterButten from '../FiltterButten'
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';


function ProductCart() {
    const [filterProduct,setFilterProdict]=useState([])
    const [check,setCheck]=useState('')
    const {type} = useParams()
    const navigation=useNavigate()
      
        
    const FilterProducts=()=>{

        if (type==0) {
            setFilterProdict(products)
        }else{
            const setData=products.filter((val)=>val.type.toLowerCase().includes(type.toLowerCase()))
           if (setData.length>0){
              setFilterProdict(setData)
           }
        }
        
        
      
           

           
    }


    useEffect(()=>{
             FilterProducts()
           },[type])

    return (
        <div>
            {/* <div style={{ backgroundImage: `url(${productbanner})` }}
                className="relative w-full h-[550px] bg-no-repeat bg-cover bg-top">

            </div> */}
            <div className='flex relative'>
                <div className='bg-[#f0e8e8] fixed w-75 top-0  h-full pt-21 hidden sm:block'>
                    <div className='text-4xl pl-18 '>
                        Filtter
                    </div>
                    <div >
                    <FiltterButten value='Pant' name='Pant' />
                    <FiltterButten value='Shirt' name='Shirt' />
                    <FiltterButten value='Uniform' name='Uniform' />
                    <FiltterButten value='kurtha' name='kurtha' />
                    <FiltterButten value='Thobe' name='Thobe' />
                    <FiltterButten value='WeddingOutfit' name='Wedding Outfit' />
                    
                </div>
                </div>
                <div className='flex flex-wrap ml-6 sm:ml-75 absolute pt-16' >
                    {filterProduct.map((prod) => (
                        <div className='w-70 p-4 ' onClick={()=>navigation(`/ProductInfoPage/${prod.id}`)}>
                            <div>
                                <img src={prod.img} alt="" />
                            </div>
                            <div className="flex items-center text-lg font-semibold text-gray-800">
                                <FaRupeeSign className="mr-1" /> {prod.price}
                            </div>
                            <div className="text-gray-600">{prod.material}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProductCart