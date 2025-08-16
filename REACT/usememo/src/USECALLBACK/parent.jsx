import React, { useCallback, useState } from 'react'
import Chaild from './chaild'

function Parent() {
    const [count,setCount]=useState(0)
    const [state,setState]=useState(0)
    const Change=useCallback(()=>{
        console.log("dtrdt");
        
    },[state])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>count{count}</button>
      <button onClick={Change} >function change</button>
      <button onClick={()=>setState(state+1)}>new one</button>
      <Chaild asd={Change}/>
    </div>
  )
}

export default Parent
