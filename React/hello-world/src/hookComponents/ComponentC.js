import React, { useContext } from 'react'
import { hookContext, secondContext } from '../App'

function ComponentC() {
    const surname=useContext(secondContext)
    const name=useContext(hookContext)
    return (
        <div>
            <hookContext.Consumer>
                {
                    name => {
                        return <secondContext.Consumer>
                            {
                                surname => <h1>{surname} {name}</h1>
                            }
                        </secondContext.Consumer>
                    }
                }
            </hookContext.Consumer>
            {/* <secondContext.Consumer>
            {
                surname=><h1>{surname}</h1>
            }
        </secondContext.Consumer> */}

        <h1>{name}{surname}</h1>

        </div>
    )
}

export default ComponentC