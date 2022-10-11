import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'
// import { BUY_CAKE } from '../redux/cakeTypes'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'
function CakeContainer(props) {
  console.log(props)
  return (
    <div>
      <h3>item {props.noOfItem}</h3>
      <button onClick={props.buyItem}>Buy CAkes</button>
    </div>
  )
}

const mapStateToProps =(state,ownProps)=>{
  const itemState=ownProps.cake?state.cake.noOfCake:state.iceCream.noOfIceCream
  return {
    noOfItem:itemState
  }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
  const dis=ownProps.cake?buyCake:buyIceCream
  // console.log(dispatch)
  return {
    buyItem : ()=>dispatch(dis())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)