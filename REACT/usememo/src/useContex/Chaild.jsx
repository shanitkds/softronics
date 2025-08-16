import React, { useContext } from 'react'
import MyContext from './UseContext'

function Chaild() {
    const {value,name}=useContext(MyContext)
  return (
    <div>
      <h1>{value}</h1>
      <h3>{name}</h3>
    </div>
  )
}

export default Chaild
