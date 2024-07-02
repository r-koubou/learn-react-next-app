import React from "react";

type GreetingProps = {
    name: string;
};

export function Greeting({ name }: GreetingProps ){
    return (
        <main>
            <h1>Hello, {name}</h1>
        </main>
    );
}