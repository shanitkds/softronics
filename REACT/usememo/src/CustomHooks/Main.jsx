import React from 'react'
import CustomHooks from './CustomHooks'

function Main() {
    const{incremebt,decriment,reset,count}=CustomHooks(5)
  return (
    <div>
      <button></button>
    </div>
  )
}

export default Main
