import React, { Component } from 'react'
import GrandChild from './GrandChild'

export class Child extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'child'
      }
    }
  
  render() {
    return (
      <div>
      <button onClick={()=>this.props.greetParent(this.state.name)}>Click</button>
      <GrandChild greetParent={this.props.greetParent}/>
      </div>
    )
  }
}

export default Child