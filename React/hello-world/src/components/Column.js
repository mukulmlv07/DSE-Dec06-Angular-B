import React from 'react'

function Column() {
    const ls=['mukul','mohit','manddeo']
  return (
    <React.Fragment>
        {ls.map(name=><td>{name}</td>)}
    </React.Fragment>
  )
}

export default Column