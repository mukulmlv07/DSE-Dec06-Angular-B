import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         tech:'react'
      }
    }
    nameHandler=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    techHandler=(event)=>{
        this.setState({
            tech:event.target.value
        })
    }
    submitHandler=(event)=>{
        alert(`${this.state.name} ${this.state.tech}`)
        // event.preventDefault()
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label for="name">Name</label>
                <input id="name" type="text" value={this.state.name} onChange={this.nameHandler}></input>
            </div>
            <div>
                <label>Technology</label>
                <select value={this.state.tech} onChange={this.techhandler}>
                    <option value='react'>React</option>
                    <option value='vue'>Vue</option>
                    <option value='angular'>Angular</option>
                </select>
            </div>
            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
      </div>
    )
  }
}

export default Form