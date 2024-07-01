import Link from "next/link";

import { BackToTop } from '@/app/components/BackToTop';
import { Greeting } from "../components/Greeting";

export default function Home() {

    const name = 'TSX';
    const getExclamation = () => "!!!";

    return (
        <main>
            <h1>TSX Demo</h1>
            <p>
                1 + 1 = {1 + 1}
            </p>
            <ul>
                {['Apple', 'Banana', 'Cherry'].map((fruit, index) => (
                    <li key={index}>{fruit}(={index})</li>
                ))}
            </ul>

            <BackToTop />
        </main>
    );
}
