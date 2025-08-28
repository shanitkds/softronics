import React from 'react'
import { useNavigate } from 'react-router-dom'

function FiltterButten({value,name}) {
    const navigate=useNavigate()
    return (
        <div onClick={()=>navigate(`/products/${value}`)}>
            <div
                className="w-50 h-15 bg-white rounded-xl shadow-md flex items-center justify-center 
                     cursor-pointer transition transform hover:scale-105 hover:shadow-lg active:scale-95 
                     focus:outline-none ml-5 mt-4"
            >
                <p className="text-gray-700 font-semibold">{name}</p>
            </div>
        </div>
    )
}

export default FiltterButten