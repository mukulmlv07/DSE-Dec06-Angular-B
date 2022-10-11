import React, { Component } from "react";

const withCounter = (WrappedComponent,increamentCount) => {
    class WithCounter extends Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          clickHandler=()=>{
              this.setState(prewState=>{
                  return {
                      count:this.state.count+increamentCount
                  }
              })
          }
      
        render(){
            return <WrappedComponent count={this.state.count} clickHandler={this.clickHandler} {...this.props}/>
        }
    }
    return WithCounter; 
}

export default withCounter