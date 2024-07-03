'use client';

import { BackToTop } from "@/app/components/BackToTop";

import { ConditionalRendering } from "../components/ConditionalRendering";

export default function Home() {
    return (
        <main>
            <h1>Conditional Rendering in React</h1>
            <ConditionalRendering />

            <BackToTop />
        </main>
    );
}