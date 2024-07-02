import { BackToTop } from "@/app/components/BackToTop";

import { Greeting } from "../components/Greeting";

export default function Home() {
    return (
        <main>
            <Greeting name="React Developer" />
            <Greeting name="Next.js Developer" />

            <BackToTop />
        </main>
    );
}
