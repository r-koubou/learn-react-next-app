'use client';

import Link from "next/link";

import { BackToTop } from '@/app/components/BackToTop';
import { Counter } from "../components/Counter";

export default function Home() {
    const handleClick = () => {
        alert('Button clicked');
    };
    return (
        <main>
            <h1>State Demo</h1>
            <Counter />
            <BackToTop />
        </main>
    );
}