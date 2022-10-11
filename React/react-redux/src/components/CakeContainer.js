import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'
// import { BUY_CAKE } from '../redux/cakeTypes'
import {connect} from 'react-redux'
function CakeContainer(props) {
  console.log(props)
  return (
    <div>
      <h3>no of cakes {props.noOfCakes}</h3>
      <button onClick={props.buyCake}>Buy CAkes</button>
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
    buyCake  : ()=>dispatch(buyCake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)