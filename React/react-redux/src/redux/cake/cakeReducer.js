import { BUY_CAKE } from "./cakeTypes"

const initialState={
  noOfCake:10
}

export const cakeReducer=(state=initialState,action)=>{
  switch(action.type){
    case BUY_CAKE:
      return {
        noOfCake:state.noOfCake-action.payload
      }
    default:
      return state
  }
}
