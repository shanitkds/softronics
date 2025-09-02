import React from 'react'
import BannerCart from '../BannerCart'
import shirt from '../../../public/SHITR.png'
import pant from '../../../public/PANT.png'
import Uniform from '../../../public/UNIFORM.webp'
import kurtha from '../../../public/KURTHA.png'
import Thobe from '../../../public/THOBE.png'
import wedding from '../../../public/WEDDING.png'

function OpenPage() {
  return (
    <div className="px-30 py-6">
      
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <BannerCart img={shirt} category="Shirt" />
        <BannerCart img={pant} category="Pant" />
        <BannerCart img={Uniform} category="Uniform" />
      </div>

     
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <BannerCart img={kurtha} category="Kurtha" />
        <BannerCart img={Thobe} category="Thobe" />
        <BannerCart img={wedding} category="Wedding Outfit" />
      </div>
    </div>
  )
}

export default OpenPage
