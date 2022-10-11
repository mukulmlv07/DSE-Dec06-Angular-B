import axios from "axios"
import { USER_FETCH_FAILURE, USER_FETCH_REQUEST, USER_FETCH_SUCCESS } from "./userActionTypes"

const userFetchRequest=()=>{
  return {
    type: USER_FETCH_REQUEST
  }
}

const userFetchSuccess=(users)=>{
  return{
    type:USER_FETCH_SUCCESS,
    payload:users
  }
}

const userFetchFailure=(error)=>{
  return{
    type:USER_FETCH_FAILURE,
    payload:error
  }
}

const fetchUser=()=>{
  
  return (dispatch)=>{
    dispatch(userFetchRequest())
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
      const users=response.data.map(user=>user.name)
     
      dispatch(userFetchSuccess(users))
    }).catch(error=>{
     
      dispatch(userFetchFailure(error))
    })

  }
}

export {userFetchFailure,userFetchRequest,userFetchSuccess,fetchUser}