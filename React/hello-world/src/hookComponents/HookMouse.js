import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [X,setX]=useState(0)
    const [Y,setY]=useState(0)
    const logMousePosition=(e)=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect')
        window.addEventListener('mousemove',logMousePosition);
        return ()=>{
            console.log('Unmounting')
            window.removeEventListener('mousemove',logMousePosition)
        }

    },[])

  return (
    <div>
        <h1>{X} {Y}</h1>
    </div>
  )
}

export default HookMouse