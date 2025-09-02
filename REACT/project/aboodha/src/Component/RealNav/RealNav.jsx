import React, { useState } from 'react'
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png'
import { CiMenuBurger } from "react-icons/ci";

function RealNav() {
  const navigation = useNavigate();
  const [ops, setOps] = useState(false)

  return (
    <div className="bg-[#e2e2f0] fixed top-0 w-full z-50 ">
      <div className="flex items-center justify-between h-[70px] px-5">


        <div>
          <img src={logo} alt="Logo" className="w-20" />
        </div>


        <div className="flex gap-10 font-bold max-sm:hidden">
          <Link to="/home">HOME</Link>
          <Link to="/aboutus">ABOUT US</Link>
          <Link to="/contactus">CONTACT US</Link>
        </div>


        <div className="flex items-center gap-5 ml-10 max-sm:hidden">
          <div className="flex items-center gap-1 cursor-pointer">
            <CiLogout size={20} />
            <span>Logout</span>
          </div>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
              onClick={() => navigation('/orders')}
            >
              Orders
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
              onClick={() => navigation('/cartPage')}
            >
              Cart
            </button>
          </div>
        </div>


        <div className="sm:hidden"
          onClick={() => setOps(!ops)}
        >
          <CiMenuBurger size={28} />
        </div>
      </div>
      {
  ops && (
    <div className="absolute top-16 right-4 w-48 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl shadow-xl overflow-hidden animate-slideDown">
      <ul className="flex flex-col divide-y divide-amber-500/30">
        <li>
          <Link
            to="/home"
            className="block px-5 py-3 hover:bg-amber-500 hover:text-black transition-all duration-300"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/aboutus"
            className="block px-5 py-3 hover:bg-amber-500 hover:text-black transition-all duration-300"
          >
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            to="/contactus"
            className="block px-5 py-3 hover:bg-amber-500 hover:text-black transition-all duration-300"
          >
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  )
}


    </div>
  )
}

export default RealNav
