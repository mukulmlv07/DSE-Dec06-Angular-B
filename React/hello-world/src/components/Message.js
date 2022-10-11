import React, { Component } from "react";

export class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello Mukul"
        }
    }
    changeMessage(){
        console.log('dfd',this)
        this.setState((prewState)=>({
            message:"Bye Mukul"
        }),()=>{console.log(this.state)})
    }
    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Change Message</button>
        </div>
        )
    }
}