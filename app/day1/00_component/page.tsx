'use client';

import { BackToTop } from "@/app/components/BackToTop";
import { Greeting } from "../components/Greeting";

export default function Home() {
    return (
        <main>
            <h1>Welcome to My App</h1>
            <Greeting name="Alice" />
            <Greeting name="Bob" />

            <BackToTop />
        </main>
    );
}