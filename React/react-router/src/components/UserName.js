import React from 'react'
import { useParams } from 'react-router-dom'
function UserName() {
  const {userId} = useParams()
  return (
    <div>userName {userId}</div>
  )
}

export default UserName