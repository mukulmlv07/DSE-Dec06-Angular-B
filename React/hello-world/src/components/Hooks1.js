import React, { useState } from 'react'

function Hooks1() {
    const [count,setCount]=useState(0)
  return (
    <div>
        <button onClick={()=>setCount(prewCount=>prewCount+1)}>
            click {count}
        </button>
    </div>
  )
}

export default Hooks1