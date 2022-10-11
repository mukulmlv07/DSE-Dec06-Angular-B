import { BUY_ICE_CREAM } from "./iceCreamType"

const initialState={
  noOfIceCream:20
}
export const iceCReamReducer=(state=initialState,action)=>{
  switch(action.type){
    case BUY_ICE_CREAM:
      return {
        noOfIceCream:state.noOfIceCream-1
      }
    default:
      return state
  }
}