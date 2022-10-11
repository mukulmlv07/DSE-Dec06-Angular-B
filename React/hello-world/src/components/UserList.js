import React from 'react'
import Name from './Name'
function UserList() {
  const list=['mukul','mahi','aradhya']
  const l= <Name list={list}/>
  return (
   
    <div>
        {
           l
        }
        
    </div>
  )
}

export default UserList