import React, { useEffect } from 'react'
import axios from 'axios'
import { fetchUser } from '../redux/user/userAction'
import { useDispatch, useSelector,connect } from 'react-redux'
function UserComponent(props) {
  
  useEffect(()=>{
   props.dispatchFetchUser()
  },[])
  return (
    <div>UserComponent</div>
  )
 
}
const mapStateTOProps = (state)=>{

  return {
    userData:state.user.users
  }
}
const mapDispatchToProps = dispatch=>{

  return{
    dispatchFetchUser : ()=>dispatch(fetchUser())
  }
}

export default connect(mapStateTOProps,mapDispatchToProps)(UserComponent)