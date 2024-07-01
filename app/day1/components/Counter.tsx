'use client';

import React, { useState } from "react";

export function Counter() {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount( _ => 0 );
    };

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p><button onClick={reset}>Reset</button></p>
        </div>
    );
}