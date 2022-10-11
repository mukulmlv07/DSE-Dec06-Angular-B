import React from 'react'

function Count(props) {
  console.log(`count for ${props.type}`)
  return (
    <div>age - {props.age}</div>
  )
}

export default React.memo(Count)