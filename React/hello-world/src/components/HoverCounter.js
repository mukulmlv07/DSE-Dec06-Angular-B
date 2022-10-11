import React, { Component } from 'react'
import withCounter from './withCounter'
export class HowerCounter extends Component {
    
  render() {
    const {count,clickHandler}=this.props
    return (
      <h3 onMouseOver={clickHandler}>Click {count}  </h3>
    )
  }
}

export default withCounter(HowerCounter,10)