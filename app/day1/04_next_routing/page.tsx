'use client';

import Link from "next/link";
import { BackToTop } from "@/app/components/BackToTop";

export default function Home() {
    return (
        <main>
            <h1>Welcome to Next.js Site</h1>
            <nav>
                <ul>
                <li><Link href="04_next_routing/about">About</Link></li>
                <li><Link href="04_next_routing/blog">Blog</Link></li>
                </ul>
            </nav>
        </main>
    );
}
