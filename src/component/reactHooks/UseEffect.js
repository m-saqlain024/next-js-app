'use client'
import React , { useState , useEffect} from 'react'

function UseEffect() {

    const [ count , setCount] = useState(0)
    useEffect(()=>{
     document.title = `${count}`
    })
  return (
    <div>
      <p>this is value + {count}</p>
      <button onClick={()=> setCount(count+1)}> page number</button>
    </div>
  )
}

export default UseEffect
