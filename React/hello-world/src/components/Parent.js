import React, { Component } from 'react'
import Child from './Child'


export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Parent'
      }
    }

    greetParent=(name)=>{
        
        console.log(`hello ${this.state.name} from ${name}`)
    }
  render() {
    return (
      <Child greetParent = {this.greetParent}/>
    )
  }
}

export default Parent