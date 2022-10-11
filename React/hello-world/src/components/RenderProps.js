import React, { Component } from 'react'

export class RenderProps extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      clickHandler=()=>{
        console.log(this.state)
          this.setState(prewState=>{
              return {
                  count:this.state.count+1
              }
          })
      }

  render() {
    return (
      <div>
       {
        this.props.render(this.state.count,this.clickHandler)
       }
      </div>
    )
  }
}

export default RenderProps