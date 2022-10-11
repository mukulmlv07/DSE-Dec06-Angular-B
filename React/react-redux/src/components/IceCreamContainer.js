import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'

function IceCreamContainer() {
  const noOfIceCream=useSelector(state=>state.iceCream.noOfIceCream)
  const dispatch=useDispatch()
  return (
    <div><h3>no of Icecream {noOfIceCream} </h3>
    <button onClick={()=>{dispatch(buyIceCream())}}>buyIceCream</button></div>
  )
}

export default IceCreamContainer