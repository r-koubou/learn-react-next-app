'use client';

import Link from "next/link";

export default function Home() {
  return (
    <main>
        <h1>Learn React, Next.js Demo</h1>
        <nav>
            <h2>Day 1</h2>
            <ul>
                <li><Link href="day1/00_component">00 Component</Link></li>
                <li><Link href="day1/01_tsx">01 TSX</Link></li>
                <li><Link href="day1/02_button">02 Button</Link></li>
                <li><Link href="day1/03_state">03 State</Link></li>
                <li><Link href="day1/04_next_routing">03 Next Routing</Link></li>
            </ul>
        </nav>
    </main>
  );
}
