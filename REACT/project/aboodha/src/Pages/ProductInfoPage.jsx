import React from 'react'
import ProductInfo from '../Component/ProductInfo/ProductInfo'
import Footer from '../Component/Footer/Footer'
import RealNav from '../Component/RealNav/RealNav'
import Cart from '../Component/Cart/Cart'
function ProductInfoPage() {
  return (
    <div>
      <RealNav />
      <ProductInfo />
      <Footer />
    </div>
  )
}

export default ProductInfoPage