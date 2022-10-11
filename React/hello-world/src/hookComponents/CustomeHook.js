import React, { useState } from 'react'
import useCount from './useCount'

function CustomeHook() {
  const [count,increase,decrease,reset]=useCount()
  return (
    <div>customeHook
      {count}
      <button onClick={increase}>inc</button>
      <button onClick={decrease}>dec</button>
      <button onClick={reset}>reset</button>


    </div>
  )
}

export default CustomeHook