import React, { Component } from 'react'

export class GrandChild extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.greetParent('GrandSon')}>Greet Child</button>
      </div>
    )
  }
}

export default GrandChild