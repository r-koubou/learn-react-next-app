'use client';

import { BackToTop } from "@/app/components/BackToTop";

import { ListRendering } from "../components/ListRendering";

export default function Home() {
    return (
        <main>
            <h1>List Rendering in React</h1>
            <ListRendering />

            <BackToTop />
        </main>
    );
}