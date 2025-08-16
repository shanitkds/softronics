import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState([])
  const [input,setInput] = useState("")
  
  const fechData=async()=>{
    const res=await axios.get('https://dummyjson.com/products')
    // console.log(res);
    
    if (res) {
      setCount(res.data.products)
    }
   
    
    
  }

useEffect(()=>{
  fechData()
 
},[])

useEffect(()=>{
  
})
  

  return (
    <>
       <input type="search" value={input} onChange={(e)=>{setInput(e.target.value)}} />
     <div className='main'>
       {count.map((val)=>(
        <div className='cart'>
          <img src={val.thumbnail} alt="" />
          <h4>{val.title}</h4>
         </div>
      ))}
     </div>
     
    </>
  )
}

export default App
