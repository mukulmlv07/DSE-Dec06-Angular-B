import React from 'react'

function Hero({heroName}) {
    if(heroName==='Batman'){
        throw new Error('not a hero')
    }
  return (
    <h1>{heroName}</h1>
  )
}

export default Hero