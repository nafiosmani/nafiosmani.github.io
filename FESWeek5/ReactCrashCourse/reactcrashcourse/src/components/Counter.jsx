// Create a default 'count' of 0. Create a button to increemnt 'count' by 1. Create a button to decrement 'count' by 1. 

// Path: src\components\Counter.jsx

import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter

// create counter with two buttons using arrays


// import React, { useState } from 'react'
// function Counter() {
//      const [count, setCount] = useState(0)
//      function incrementCounter() {
//          setCount((prevCounter) => prevCounter + 1)
//          setCount((prevCounter) => prevCounter + 1)
//      }
//      function decrementCounter() {
//          setCount((prevCounter) => prevCounter - 1)
//          setCount((prevCounter) => prevCounter - 1)
//      }
// return (
//    <div>
//      <button onClick={decrementCounter}>-</button>
//      <button onClick={incrementCounter}>+</button>
//    </div>
//  )
// }
// export default Counter