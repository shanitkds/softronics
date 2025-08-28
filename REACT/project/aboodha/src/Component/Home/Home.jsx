import React from 'react'
import SpotlightButton from '../button';
import Bgimage from '../../../public/bg-image.png'
import { useNavigate } from 'react-router-dom';


function NavBar() {
    const navigate=useNavigate()
    return (
        <div
    style={{ backgroundImage: `url(${Bgimage})` }}
    className="relative w-full h-[550px] bg-no-repeat bg-cover bg-top "
>
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-start justify-center h-full pl-12 space-y-4" data-aos="fade-right">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-white">Aboodha Tailoring</h1>

        {/* Subtitle / Caption */}
        <p className="text-2xl text-white">Custom-made Thobes for Every Occasion</p>

        {/* Small descriptive text */}
        <p className="text-white max-w-lg">
            We specialize in designing and stitching high-quality traditional thobes tailored to your style and comfort.
        </p>

        {/* Button */}
        <div onClick={() => navigate('/products/0')}  className="w-60">
            <SpotlightButton />
        </div>
    </div>
</div>


    )
}

export default NavBar