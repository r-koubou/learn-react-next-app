'use client';

import { BackToTop } from "@/app/components/BackToTop";

import { EventHandler } from "../components/EventHandler";

export default function Home() {
    return (
        <main>
            <h1>Event Handling in React</h1>
            <EventHandler />

            <BackToTop />
        </main>
    );
}