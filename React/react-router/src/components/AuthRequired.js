import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
import { useLocation } from 'react-router-dom'
function AuthRequired(props) {
  const auth=useAuth()
  const location = useLocation()
  console.log(location)
  if(!auth.user){
    return <Navigate to='/login' state={{ path: location.pathname }}></Navigate>
  }
  return (
    <div>{props.children}</div>
  )
}

export default AuthRequired