import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [datas,setDatas]=useState([])
  const [contain,setContain]=useState(false)

 const fech1=()=>{
 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>{
      setDatas(data)
      
      
      
    })
   setContain(true)
    
 }
    
  console.log(datas);

 
  return (
    <>
      <div>
        <button onClick={fech1}>fech</button>
        { contain &&
          datas.map((obj)=>{
            return(
              <div>Name: {obj.name} ,  email:{obj.email}</div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
