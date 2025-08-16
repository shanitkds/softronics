  import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// topic useefeect

function App() {
  const [name, setName] = useState("abi")
  const[val,setVal]=useState(0)
  const[input,setInput]=useState(0)
  const[input2,setInput2]=useState(0)
  const[add,setAdd]=useState(0)
const arr=[1,2,3,4,5,6]

  const changename=()=>{
    setName("prakash")
  }

 
  const Calculater=(a)=>{
  if (a=="+") {
      setAdd(input+input2)
  }else if(a=="-"){
    setAdd(input-input2)
  }else if(a=="*"){
    setAdd(input*input2)
  }else{
    setAdd(input/input2)
  }
  

    }
      


  return (
    <>  
      <div>
        <h1>{name}</h1>
        <h1>{val}</h1>
        <h1>{add}</h1>
        {
          arr.map((val,index)=>(
            <h1 key={index}>{val}<button>edit</button><button>delete</button></h1>
          ))
        }
        <button onClick={changename}>changename</button>
        <button onClick={()=>{setVal(val+1)}}>increes</button>
        <input type="text" onChange={(e)=>{setInput(Number(e.target.value))}}/>
        <input type="text" onChange={(e)=>{setInput2(Number(e.target.value))}}/>
        <button onClick={()=>{Calculater("+")}}>+</button>
        <button onClick={()=>{Calculater("-")}}>-</button>
        <button onClick={()=>{Calculater("*")}}>*</button>
        <button onClick={()=>{Calculater("/")}}>/</button>
     

      </div>
    </>
  )
}

export default App
