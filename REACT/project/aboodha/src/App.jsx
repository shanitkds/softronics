import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProdutPage from './Pages/ProdutPage'
import ProductInfoPage from './Pages/ProductInfoPage'
import CartPage from './Pages/CartPage'
import ContactPage from './Pages/ContactPage'
import AboutUsPage from './Pages/AboutUsPage'
import OrderSectionPage from './Pages/OrderSectionPage'
import OrderSuccess from './Component/Order/OrederSucess/OrderSusses'
import Orders from './Pages/OrdersPage'
import LoginPage from './Pages/LoginPage'
import AdressPage from './Pages/AdressPage'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products/:type" element={<ProdutPage/>} />
          <Route path="/ProductInfoPage/:id" element={<ProductInfoPage/>} />
          <Route path="/cartPage" element={<CartPage/>} />
          <Route path="/contactus" element={<ContactPage/>} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path='/OrderSectionPage' element={<OrderSectionPage/>}/>
          <Route path="/ordersusses" element={<OrderSuccess/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/adress" element={<AdressPage/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


