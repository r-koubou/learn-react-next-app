import { BackToTop } from "@/app/components/BackToTop";

export default function StaticPage() {
    return (
        <div>
            <h1>Statically Generated Page</h1>
            <p>This content is generated at build time.</p>

            <BackToTop />
        </div>
    );
}
