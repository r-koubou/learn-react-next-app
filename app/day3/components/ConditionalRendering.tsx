'use client';

import React, { useState } from "react";

type UserProps = {
    isLoggedIn: boolean;
    username: string;
};

const UserGreeting = ({ username }: { username: string }) =>
    <h2>Welcome back, {username}!</h2>;

const GuestGreeting = () =>
    <h2>Please sign in.</h2>;

const Greeting = ({ isLoggedIn, username} : UserProps) => {
    if( isLoggedIn )
    {
        return <UserGreeting username={username} />;
    }
    return <GuestGreeting />;
};

export function ConditionalRendering() {
    const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');

    const handleLogin = () => {
        setisLoggedIn(true);
        setUsername('John Doe');
    };

    const handleLogout = () => {
        setisLoggedIn(false);
        setUsername('');
    };

    return (
        <div>
            <h2>Conditional Rendering</h2>
            <Greeting isLoggedIn={isLoggedIn} username={username} />
            {
                isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <button onClick={handleLogin}>Login</button>
                )
            }
            {isLoggedIn && <p>You can now access all feartures!</p>}
        </div>
    );
}