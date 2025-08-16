import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componect/Navbar'
import Main from './componect/main'
import Text from './componect/text'
import Footer from './componect/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
        <Main/>
        <Text/>
        <Footer/>
      </div>
    </>
  )
}

export default App
