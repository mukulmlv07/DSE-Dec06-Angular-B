import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
  const [age,setAge]=useState(10)
  const [salary,setSalary]=useState(1000)

  const incSalary=useCallback(()=>{
    setSalary(prewSalary=>prewSalary+1000)
  },[salary])
  const incAge=useCallback(()=>{
    setAge(prewAge=>prewAge+1)
  },[age])
  return (
    <div>
      <Title>Title of Component</Title>
      <Count age={age} type={'age'}></Count>
      <Button incAge={incAge}  type={'age'}></Button>
      <Count age={salary} type={'salary'}></Count>

      <Button incAge={incSalary}  type={'salary'}></Button>

    </div>
  )
}

export default ParentComponent