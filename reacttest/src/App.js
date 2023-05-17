import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function App() {
  const [users, setUser] = useState([]);
  const [count, setCount] = useState(0)
  const [field, setFields] = useState([]) 
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
      .then((data) => { console.log(data); setUser(data.data)});
  }, []);

  useEffect(() => {
    let some=0
    // const newArray = new Array(Number(count)).fill()
    const newArray = new Array(Number(count)).fill(undefined).map(e => { return { id: some++, value: undefined }; })
    // console.log(newArray2)
    setFields(newArray);
  }
  ,[count])
  const handleChange = (userId) => {
  
    const newUsers = users.map(u => { 
      if (u.id === userId) { 
        const newData = { ...u, completed: !u.completed }
        return  newData
      }
      return u
    })

    setUser(
      newUsers
    )
  }

  const handleChange2 = (e, id) => {
    const newData = field.map(f => { 
      if (f.id === id) { 
        return {...f, value:e.target.value}
      }
      return f
    })
    setFields(newData)
  }
  
  return <div>
    {users.map((user) => <div>
      <input type='checkbox' checked={ user.completed } onChange={()=>handleChange(user.id)}/>
      {user.title}
    </div>)}
    <input type='text' value={count} onChange={(e) => { setCount(e.target.value); }} />
    {field.map((f) => {
      console.log(f)
      return <input type='text' value={f.value} onChange={(e) => handleChange2(e,f.id)}
        />;
    })}
    {
      field.map((f) => <h4>{f.value }</h4>)
    }
  </div>;
}
