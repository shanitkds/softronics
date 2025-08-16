import React, { useState } from 'react'
import MyContext from './UseContext'
import Parent from './Parent'

function Main() {
    const [count,setCount]=useState(null)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>click</button>
      <MyContext.Provider value={{value:count,name:"shanith"}}>
        <Parent/>
      </MyContext.Provider>
    </div>
  )
}

export default Main
