import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            Counter
            <button onClick={() => handleClick()}>increment</button>
            <p>{count}</p>
        </div>
    )
}

export default Counter