import Link from "next/link";

import { BackToTop } from "@/app/components/BackToTop";

type BlogPageProps = {
    params:{
        slug: string;
    }
};

export default function BlogPage({ params }: BlogPageProps) {
    return (
        <main>
            <h1>Blog Post: {params.slug} </h1>
            <p>This is the content of the blog post</p>
            <BackToTop />
        </main>
    );
}