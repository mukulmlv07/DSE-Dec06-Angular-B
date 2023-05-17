import React from 'react'
type p<T> = {
  items: T[]
  onClick : (val: T) => void
}

type obj = {
  id: number;
  name: string;
}


const Button = <T extends obj | null>(prop:p<T>) => {
  return (
    <div>
      <h2>
        {prop.items.map(item =>
          item?.id)}
      </h2>
    </div>
  )
}

export default Button
