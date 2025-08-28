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
    <div >
      <div className='flex p-3 gap-15 ml-15' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <BannerCart img={shirt} category="Shirt" />
        <BannerCart img={pant} category="Pant" />
        <BannerCart img={Uniform} category="Uniform" />
      </div>
      <div className='flex p-3 gap-15 ml-15'
      data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
      >
        <BannerCart img={kurtha} category="kurtha" />
        <BannerCart img={Thobe} category="Thobe" />
        <BannerCart img={wedding} category="WeddingOutfit" />
      </div>
    </div>
  )
}

export default OpenPage
