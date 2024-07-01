'use client';

import React from "react";

type ButtonProps = {
    text: string;
    onClick: () => void;
    color?: 'primary' | 'secondary';
};


export function Button({ text, onClick, color = 'primary' }: ButtonProps ) {
    const buttonStyle = {
        backgroundColor: color === 'primary' ? 'blue' : 'green',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
}
