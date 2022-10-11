import React from 'react'

function Name({list}) {
  return (
    <div>{list.map(name=><h1>{name}</h1>)}</div>
  )
}

export default Name