'use client';

import { BackToTop } from "@/app/components/BackToTop";

import  Button from "../components/Button"


export default function CSSModulesPage() {
    const handleClick = () => alert('Button clicked');

    return (
        <div>
            <h1>CSS Modules Example</h1>
            <Button onClick={handleClick}>Click me</Button>

            <BackToTop />
        </div>
    );
}
