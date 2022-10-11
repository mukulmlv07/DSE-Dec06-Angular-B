import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Profile() {
  const auth=useAuth()
  const navigate=useNavigate()
 
  const logoutHandler=()=>{
    auth.logout()
    navigate('/')
  }

  return (
    <>
    <h1>Hello {auth.user || 'Guest' }</h1>
    {auth.user && <button onClick={logoutHandler}>logout</button>}
    </>
  )
}

export default Profile