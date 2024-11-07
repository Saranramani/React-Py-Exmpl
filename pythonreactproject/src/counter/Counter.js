import React from 'react';
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount((count) => count + 1);

    const decrement = () => setCount((count) => count - 1);

    const reset = () => setCount(0);

    return (
        <div>
            <h1 data-testid='counter'> {count}</h1><br></br>
            <button data-testid='button-increment' onClick={ increment }>INCREMENT</button>
            <button data-testid='button-decrement' onClick={ decrement }>DECREMENT</button>
            <button data-testid='button-reset' onClick={ reset }>RESET</button>
        </div>
    )
};
