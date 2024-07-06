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
            <h2>Day 2 (Day 1 の復習)</h2>
            <ul>
                <li><Link href="day2/00_func_component">00 Function Component</Link></li>
                <li><Link href="day2/01_props">01 Props</Link></li>
                <li><Link href="day2/02_state">02 State</Link></li>
            </ul>
            <h2>Day 3</h2>
            <ul>
                <li><Link href="day3/00_event_handling">00 Event Handler</Link></li>
                <li><Link href="day3/01_conditional_rendering">01 Conditional Rendering</Link></li>
                <li><Link href="day3/02_list_rendering">02 List Rendering</Link></li>
            </ul>
            <h2>Day 4</h2>
            <ul>
                <li>00 Pages and Routing</li>
                <ul>
                    <li><Link href="day4/00_pages_and_routing">00_pages_and_routing</Link></li>
                    <li><Link href="day4/00_pages_and_routing/about">00_pages_and_routing/about</Link></li>
                </ul>
                <li><Link href="day4/01_link_component">01_link_component</Link></li>
                <li><Link href="day4/02_image_component">02_image_component</Link></li>
            </ul>
            <h2>Day 5</h2>
            <ul>
                <li><Link href="day5/00_api_routes">00 API Routes</Link></li>
                <li><Link href="day5/01_static_generation">01 Static Generation</Link></li>
                <li><Link href="day5/02_static_generation_with_data">02 Static Generation with Data</Link></li>
                <li><Link href="day5/03_isr">03 ISR</Link></li>
                <li><Link href="day5/04_server_side_rendering/1">04 Server Side Rendering</Link></li>
            </ul>
        </nav>
    </main>
  );
}
