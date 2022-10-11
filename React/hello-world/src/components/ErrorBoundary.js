import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         harError:false
      }
    }
    static getDerivedStateFromError(){
        return {
            hasError:true
        }
    }
    componentDidCatch(error,info){
console.log(error,info)
    }
  render() {
    if(this.state.hasError){
        return <h1>Error</h1>
    }else{
        return this.props.children
    }
    
  }
}

export default ErrorBoundary