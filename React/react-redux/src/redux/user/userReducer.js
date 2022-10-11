import { USER_FETCH_FAILURE, USER_FETCH_REQUEST, USER_FETCH_SUCCESS } from "./userActionTypes"

const initialState={
  loading:true,
  users:[],
  error:''
}

export const userReducer=(state=initialState,action)=>{
  switch(action.type){
    case USER_FETCH_REQUEST:
      return{
        loading:true,
        users:[],
        error:''
      }
    case USER_FETCH_SUCCESS:
      return {
        loading : false,
        users:action.payload,
        error:''
      }
    case USER_FETCH_FAILURE:
      return {
        loading:false,
        users:[],
        error:action.payload
      }
    default:
      return state
  }
}