import React from 'react'
import ComponentC from '../hookComponents/ComponentC'
import { secondContext } from '../App'
function ComponentB() {
  return (
    <div>
        {/* <secondContext.Consumer>
            {
                surname=><h1>{surname}</h1>
            }
        </secondContext.Consumer> */}
        <ComponentC/>
    </div>
  )
}

export default ComponentB