'use client';

import { Counter } from "../components/Counter";

import { BackToTop } from "@/app/components/BackToTop";

export default function Home() {
    return (
        <main>
            <h1>useState Example</h1>
            <Counter />
            <BackToTop />
        </main>
    );
}
