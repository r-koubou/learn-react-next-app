import { BackToTop } from "@/app/components/BackToTop";

import { NaviLink } from "../components/NaviLink";

export default function LinkExample() {
    return (
        <div>
            <h1>Next.js Link Component Example</h1>
            <nav>
                <NaviLink href="/day4/01_link_component">Home</NaviLink>
                <NaviLink href="/day4/01_link_component/about">About</NaviLink>
                <NaviLink href="/day4/01_link_component/contact">Contact</NaviLink>
            </nav>

            <BackToTop />
        </div>
    );
}