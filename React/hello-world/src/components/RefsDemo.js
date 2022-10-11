import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <input ref={this.inputRef}></input>
      </div>
    )
  }
}

export default RefsDemo