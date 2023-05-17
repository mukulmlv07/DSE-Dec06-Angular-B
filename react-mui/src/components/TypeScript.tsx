import React from 'react'
type propType = {
  children: React.ReactElement
};
function TypeScript(props: propType) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default TypeScript
