import React, { useEffect } from 'react'

import Header from './componats/header/Header'
import Mainsection from './componats/mainsection/Mainsection'
import Footer from './componats/Footer/Footer'
import ContactInfo from './componats/contact/ContactInfo'
import AOS from "aos";
import "aos/dist/aos.css";
import Project from './componats/project/Project'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false
    });
  },[]);
  return (
    <div>
      <Header/>
      <Mainsection/>
      <Project/>
       <ContactInfo/>
      <Footer/>
    </div>
  )
}

export default App
