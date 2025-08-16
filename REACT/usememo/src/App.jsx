import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './USECALLBACK/parent'
import Main from './useContex/Main'

function App() {
  // const [count, setCount] = useState(0)
  // const [input,setInput]= useState('')

  // const bigFunction=(num)=>{                        //usememo
  //    console.log("fhh");
     
  //   for (let i = 0; i < 600000000; i++) { }
  //    return num+1
    
  // }



  // const value=useMemo(()=>(
  //   bigFunction(count)
  // ),[count])
  return (
    // <>
    //   <button onClick={()=>(setCount(count+1))}>plus</button><br />
    //   <input type="text" onChange={(e)=(setInput(e.target.value))}/>       //USEMEMO
    //   {/* {count}<br/> */}
    //   {value}<br/>
    //   {input}
    // </>

    <div>
      {/* <Parent/>                  use call back,react memo */}
      <Main/>
    </div>
  )
}

export default App
