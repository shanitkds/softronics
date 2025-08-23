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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:type" element={<ProdutPage/>} />
          <Route path="/ProductInfoPage/:id" element={<ProductInfoPage/>} />
          <Route path="/cartPage" element={<CartPage/>} />
          <Route path="/contactus" element={<ContactPage/>} />
          <Route path="/aboutus" element={<AboutUsPage/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


