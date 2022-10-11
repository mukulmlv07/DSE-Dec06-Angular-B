import React, { useState } from 'react'
import { buyCake } from '../redux/cake/cakeActions'
// import { BUY_CAKE } from '../redux/cakeTypes'
import {connect} from 'react-redux'
function CakeContainer2(props) {
  const [cakeCount,updateCakeCount]=useState(1)
  return (
    <div>
      <h3>No of Cakes {props.noOfCakes}</h3>
      <input type='text' value={cakeCount} onChange={(event)=>{updateCakeCount(event.target.value)}}></input>
      <button onClick={()=>{props.buyCake(cakeCount)}}>Buy {cakeCount} Cakes</button>
    </div>
  )
}

const mapStateToProps =(state)=>{
  // console.log(state)
  return {
    noOfCakes:state.cake.noOfCake
  }
}
const mapDispatchToProps=(dispatch)=>{
  // console.log(dispatch)
  return {
    buyCake  : (cakeCount)=>dispatch(buyCake(cakeCount))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer2)