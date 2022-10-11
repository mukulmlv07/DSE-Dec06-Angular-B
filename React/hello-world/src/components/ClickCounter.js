import React, { Component } from 'react'
import withCounter from './withCounter'
export class ClickCounter extends Component {
    

  render() {
    const {count,clickHandler}=this.props
    return (
      <button onClick={clickHandler}>Click {count}</button>
    )
  }
}

export default withCounter(ClickCounter,5)