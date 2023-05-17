import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
import { useLocation } from 'react-router-dom'
function Login() {
  const [user,setUser]=useState('')
  const location=useLocation()
  const redirectURL=location.state?.path || '/'
  const auth=useAuth()
  const navigate = useNavigate()
  console.log(navigate)
  const loginHandler=()=>{
    auth.login(user)
    navigate(redirectURL,{replace:true})
  }
  return (
    <>
      <input type='text' placeholder='name' value={user} onChange={(event)=>{setUser(event.target.value)}}></input>
      <button onClick={loginHandler} type='submit'>Login</button>
    </>
  )
}

export default Login