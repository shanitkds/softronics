import React from 'react'

 const ChildComponent=React.memo(({asd})=>{

   
    console.log('hello');
    
    
  return (
    <div>
        <button onClick={asd}>chanild button</button>
    </div>
  )
})

export default ChildComponent
