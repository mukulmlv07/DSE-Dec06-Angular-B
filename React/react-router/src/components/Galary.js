import React from 'react'
import { useNavigate } from 'react-router-dom';
function Galary() {
  const navigate=useNavigate()
  return <>
    <button onClick={()=>navigate(-1)}>
      GO Back
    </button>
  </>;
}

export default Galary