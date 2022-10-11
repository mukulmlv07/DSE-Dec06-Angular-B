import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_ALL_QUOTES } from '../gqlQueries/queries'

function Home() {
  // useEffect(()=>{
  //   fetch('http://localhost:4000/',{
  //     method:'post',
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify({
  //       query:`
  //       {
  //         quotes{
  //         name
  //       }
  //       }
  //       `
  //     })
  //   }).then(res=>res.json()).then(data=>console.log(data))
  // },[])
  const {loading,error,data}=useQuery(GET_ALL_QUOTES)
  console.log(loading,data)
  return (
    <div>Home</div>
  )
}

export default Home