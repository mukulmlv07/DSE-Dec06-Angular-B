import React, { Component } from 'react'

export class Counter1 extends Component {
    

  render() {
    const {count,clickHandler}=this.props
    return (
      <button onClick={clickHandler}>Click {count}</button>
    )
  }
}

export default Counter1