import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { userContext } from './userContext'
export class ComponentB extends Component {
  render() {
    return (
        <div>
      <ComponentC/>
            {this.context}
        </div>
    )
  }
}
ComponentB.contextType=userContext
export default ComponentB