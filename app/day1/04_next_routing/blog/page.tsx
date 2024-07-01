import Link from "next/link";

import { BackToTop } from "@/app/components/BackToTop";

export default function Blog() {
    return (
        <main>
            <h1>Blog Posts</h1>
            <ul>
                <li><Link href="blog/first-post">First Post</Link></li>
                <li><Link href="blog/second-post">Second Post</Link></li>
            </ul>
            <BackToTop />
        </main>
    );
}