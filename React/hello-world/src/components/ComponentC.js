import React, { Component } from 'react'
import { userContext } from './userContext'

export class ComponentC extends Component {
  render() {
    return (
      <userContext.Consumer>
        {
            name=><h1>{name}</h1>
        }
      </userContext.Consumer>
    )
  }
}

export default ComponentC