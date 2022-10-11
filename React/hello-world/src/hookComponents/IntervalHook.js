import React, { useEffect, useState } from 'react'

function IntervalHook() {
    const [count,incCount]=useState(0)
    const tick=()=>{
        incCount(prewCount=>prewCount+1)
    }
    useEffect(()=>{
        console.log('useEffect')
        const interval=setInterval(tick,1000)
        return ()=>{
            console.log('Clear')
            clearInterval(interval)
        }
    },[])
  return (
    <div>{count}</div>
  )
}

export default IntervalHook