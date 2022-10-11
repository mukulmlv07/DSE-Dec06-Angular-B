import React, { Component } from 'react'
import RefChild from './RefChild'

export class RefParent extends Component {
 constructor(props) {
   super(props)
   this.secondRef=React.createRef()
 }
 
  render() {
    return (
      <div>
        <RefChild ref={this.secondRef}/>
        <button onClick={()=>this.secondRef.current.clickHandler()}>Click</button>
        
      </div>
    )
  }
}

export default RefParent