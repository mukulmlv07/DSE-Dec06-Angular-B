import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
function CakeContainerWithHooks() {
  const noOfCakes=useSelector(state=>state.cake.noOfCake)
  const dispatch=useDispatch()
  return (
    <div>
      <h3>no of cakes {noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>buyCakes</button>
    </div>
  )
}

export default CakeContainerWithHooks