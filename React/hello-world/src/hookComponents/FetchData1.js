import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
const initialState={
  loading:false,
  error:false,
  post:{}
}

const reducer=(currentState,action)=>{
  switch(action.type){
    case 'success':
      return {
        loading:false,
        error:false,
        post:action.payload
      }
    case 'failure':
      return {
        loading:false,
        error:true,
        post:{}
      }
    case 'loading':
      return {
        loading:true,
        error:false,
        post:{}
      }
      default:
        return currentState
  }
}
function FetchData1() {
  const [id, setId] = useState(0)
  const [id2, setId2] = useState(0)
  const [state,dispatch]=useReducer(reducer,initialState)
  // const [post, setPost] = useState({})
  // const [loading,setLoading]=useState(false)
  // const [err,setError]=useState(false)


  useEffect(() => {
    dispatch({type:'loading'})
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id2}`).then(result => {
      dispatch({type:'success',payload:result.data})
      console.log(result.data)
      // setLoading(false)
      // setError(false)
      // setPost(result.data)
    }).catch(err => {
      dispatch({type:"failure"})
      // setPost({})
      // setLoading(false)
      // setError(true)
     
      console.log(err)
    })
  }, [id2])

  const clickHandler = (e) => {
    
    console.log(id)
    setId2(id)

  }
  
  return (
    <div>
      
        <input type="text" value={id} onChange={(e) => { setId(e.target.value) }} />
        <button onClick={()=>{clickHandler()}}>Submit</button>
        
        {state.loading && <h1>Loading</h1>}
        {state.error && <h1>Error</h1>}
        <h1>{state.post.title} {state.post.id}</h1>
      
  

    </div>
  )
}

export default FetchData1