import React from 'react'

function Button(props) {
  console.log(`button for ${props.type}`)

  return (
    <div>
      <button onClick={props.incAge}>Increase Age</button>
    </div>
  )
}

export default React.memo(Button)