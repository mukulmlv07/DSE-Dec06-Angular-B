import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, updateCount] = useState(0)
    const [name, updateName] = useState('mukul')
    useEffect(
        () => {console.log('updating')
             document.title = `tou click ${count} times` },
        [count]
    )
    return (
        <>
            <input type='text' value={name} onChange={(e) => updateName(e.target.value)} />
            <button onClick={() => updateCount(prewCount => prewCount + 1)}>click</button>
        </>
    )
}

export default UseEffect