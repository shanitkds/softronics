import React from 'react'
import SpotlightButton from '../button';
import Bgimage from '../../../public/bg-image.png'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    return (
        <div
            style={{ backgroundImage: `url(${Bgimage})` }}
            className=" w-full h-[550px] bg-no-repeat bg-cover bg-top max-sm:h-[400px] "
        >
            
            <div className="absolute inset-0 bg-black/50"></div>

            <div 
                className="relative z-10 flex flex-col items-start justify-center h-full pl-12 space-y-4 
                           max-sm:items-center max-sm:pl-0 max-sm:text-center max-sm:space-y-2"
                data-aos="fade-right"
            >
                <h1 className="text-5xl font-bold text-white max-sm:text-3xl">
                    Aboodha Tailoring
                </h1>

                <p className="text-2xl text-white max-sm:text-lg">
                    Custom-made Thobes for Every Occasion
                </p>

                <p className="text-white max-w-lg max-sm:text-sm max-sm:max-w-xs">
                    We specialize in designing and stitching high-quality traditional thobes tailored to your style and comfort.
                </p>

                
                <div 
                    onClick={() => navigate('/products/0')}  
                    className="w-60 max-sm:w-40"
                >
                    <SpotlightButton />
                </div>
            </div>
            
        </div>
    )
}

export default NavBar
