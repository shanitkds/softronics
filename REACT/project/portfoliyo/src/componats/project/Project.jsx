import React from 'react'
import Cart from '../items/Cart'
import Photo from "./img3.webp"
import Photo1 from "./img4.webp"
import Photo5 from "./img5.webp"

function Project() {
    return (
        <div className=' bg-blue-500 flex h-196'>
            <div className='size-5 text-[75px] font-extrabold pl-20 pt-12'data-aos="fade-down-right">Project</div>
            <div className='flex mt-70 mr-100'>
                <Cart title={"My Poject"} img={Photo} />
                <Cart title={"My Poject"} img={Photo1} />
                <Cart title={"My Poject"} img={Photo5} />
                <Cart title={"My Poject"} img={Photo1} />

            </div>

        </div>
    )
}

export default Project
