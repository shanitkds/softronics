import React from 'react'
import { CiLogout } from "react-icons/ci";
import { useNavigate, useNavigation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png'

function RealNav() {
    const navigation=useNavigate()
  return (
    <div className='bg-[#e2e2f0] fixed top-0 w-full z-50'>
         <div className="flex gap-70 h-[70px] items-center">
                    <div><img src={logo} alt="" className='w-19'/></div>
                    <div className="flex gap-20 font-bold">
                       <Link to='/home'>HOME</Link>
                       <Link to='/aboutus'>ABOUT US</Link>
                       <Link to='/contactus'>CONTACT US</Link>
                        {/* <div >HOME</div> */}
                        {/* <div>ABOUT US</div>
                        <div>CONTACT US</div> */}
                    </div>
                    <div className="flex gap-20 ml-35">
                        <div>
                            <CiLogout size={20}/>
                            logOut
                        </div>
                       <div >
                         <button className="mr-5 px-5 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300" onClick={()=>navigation('/orders')}>
                            Orders
                        </button>
                        <button className="px-5 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300" onClick={()=>navigation('/cartPage')}>
                            Cart
                        </button>
                       </div>
                    </div>
                </div> 
    </div>
  )
}

export default RealNav