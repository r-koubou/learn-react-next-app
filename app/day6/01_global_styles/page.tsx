import { BackToTop } from "@/app/components/BackToTop";

export default function GlobalStylesPage() {
    return (
        <div className="container">
            <h1>Global Styles Example</h1>
            <p>This page uses global styles defined in global.css.</p>
            <p>The backgorund, text color, and layout are all set using global styles.</p>

            <BackToTop />
        </div>
    );
}