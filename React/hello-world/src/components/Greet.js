import React from "react";

export const Greet = (props)=>{
    console.log(props)
return <React.Fragment>
        <h1>{props.name}</h1>
        </React.Fragment>
}
