import React, { useState } from 'react'

function Hooks2() {
    const [name, setName] = useState({ fn: "", ln: "" })
    return (
        <div>
            <form>
                <input type="text" value={name.fn} onChange={(e) => setName({ ...name,fn: e.target.value })} />
                

                <input type="text" value={name.ln} onChange={(e) => setName({ ...name,ln: e.target.value })} />

                <h1>{name.fn}{name.ln}</h1>
              
            </form>

        </div>
    )
}

export default Hooks2