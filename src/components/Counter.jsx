import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            Counter
            <button className='btn btn-accent' onClick={() => handleClick()}>increment</button>
            <p>{count}</p>
            <p className='text-2xl'>test</p>
        </div>
    )
}

export default Counter