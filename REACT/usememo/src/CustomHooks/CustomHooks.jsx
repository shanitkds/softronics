import React, { useState } from 'react'

function CustomHooks(val) {
  const [count,setCount]=useState(val)

  const increment=()=>(setCount(count+1))
  const decriment=()=>(setCount(count-1))
  const reset=()=>(setCount(val))
  return{increment,decriment,reset,count}
}

export default CustomHooks
