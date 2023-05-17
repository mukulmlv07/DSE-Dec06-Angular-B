import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function Home() {
  const navigate=useNavigate()
 
  return <>
    <button onClick={()=>navigate('/galary')}>
      GO TO Galary
    </button>
    
    
  </>;
}    

export default Home;
