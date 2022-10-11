import React from 'react'

function Title(props) {
  console.log('title component')
  return (
    <div>
     {props.children}
    </div>
  )
}

export default React.memo(Title)