import { useState } from "react"

function useCount() {
  const [count,setCount]=useState(0)
  
  const increase=()=>{
    setCount(prewCount=>prewCount+1)
  }
  
  const decrease=()=>{
    setCount(prewCount=>prewCount-1)
  }
  const reset=()=>{
    setCount(0)
  }
  return [count,increase,decrease,reset]
}

export default useCount