'use client';

import React from 'react';
import styles from '../styles/Button.module.css';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export default function Button({ onClick, children} : ButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};
