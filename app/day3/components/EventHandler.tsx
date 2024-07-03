'use client';

import React, { useState } from "react";

export function EventHandler() {
    const [message, setMessage] = useState<string>('');

    const handleClick = () => {
        setMessage('Button clicked!');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage('Form submitted!');
    };

    return (
        <div>
            <h2>Event Handling</h2>
            <button onClick={handleClick}>Click Me</button>
            <input type="text" onChange={handleChange} placeholder="Type something" />
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}
