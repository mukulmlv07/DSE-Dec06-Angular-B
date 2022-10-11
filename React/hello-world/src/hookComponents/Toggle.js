import React, { useState } from 'react'
import HookMouse from './HookMouse'

function Toggle() {
    const [display,toggle]=useState(false)
  return (
    <div>
        <button onClick={()=>{toggle(!display)}}>
        click
        </button>
        {display && <HookMouse/>}    
    </div>
  )
}

export default Toggle