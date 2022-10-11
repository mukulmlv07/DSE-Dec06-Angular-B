import React, { Component } from 'react'

export class RefChild extends Component {
    constructor(props) {
      super(props)
        this.newRef=React.createRef()
    }
    clickHandler=()=>{
        console.log("helo",this.newRef)

        this.newRef.current.focus()
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.newRef}></input>
      </div>
    )
  }
}

export default RefChild