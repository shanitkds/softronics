import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input,setInput] = useState("")

  const [show,setShow]=useState(false)
  const [editbtn,setEditbtn]=useState(false)
  const [indexval,setIndexval]=useState(null)
  const [color,setColor]=useState("black")
  // const [uparr,setUparr]=useState([])
   const [reset, setRest] = useState(false);
  const [arr,setArr]=useState([])
 
  const passArry=()=>{

    const newarr=[...arr,{Text:input,status:false}]
    // newarr.push(input)
    setArr(newarr)
    setInput("")
    console.log(arr);
    
    
    

      
       
  }

  const display=()=>{
    setShow(true)  
    
  }
  
  const edit=(a)=>{
     console.log(a);
    setInput(arr[a].Text)
     setEditbtn(true)
     setIndexval(a)

  }

  const Update=()=>{
    arr[indexval].Text=input
    setEditbtn(false)
    setInput("")


  }

  const del=(a)=>{
    arr.splice(a,1);
    const newarr=[...arr]
    setArr(newarr)


  }


  let btn1;
   if (editbtn) {
        btn1=<button onClick={Update}>Update</button>
      }else{
        btn1=<button onClick={passArry}>push</button>
      }
const Changecolor=(a)=>{

  const updateColor=[...arr]
  updateColor[a].status=!updateColor[a].status
  setArr(updateColor)
  

}
  console.log(arr);

  return (
    <>
     <div className='main-div'>
      <div className='fix'>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      {btn1}
       <button onClick={display}>display</button>
      </div>
      
      {/* <button onClick={display}>diplay</button> */}
      {show && (
        arr.map((val,index)=>(
            <li className='list' key={index} style={{color:val.status ? 'red':'black'}}>{val.Text}<button onClick={()=>edit(index)}>edit</button>
            <button onClick={()=>del(index)}>delet</button><button onClick={()=>Changecolor(index)}>toggle</button></li>
        
      ))
      )}
      
     </div>
    </>
  )
}

export default App
