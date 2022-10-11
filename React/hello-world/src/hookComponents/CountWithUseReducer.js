import React, { useReducer } from 'react'
const initialState=0
const reducer=(currentState,action)=>{
    switch(action){
        case 'increament':
            return currentState+1;
        case 'decreament':
            return currentState-1
        case 'reset':
            return 0
        default:
            return initialState
    }

}

function CountWithUseReducer() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <button onClick={()=>dispatch('increament')}>Increas {count}</button>
        <button onClick={()=>dispatch('decreament')}>Decreas {count}</button>
        <button onClick={()=>dispatch('reset')}>Reset {count}</button>
    </div>
  )
}

export default CountWithUseReducer