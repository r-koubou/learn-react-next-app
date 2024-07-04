import { BackToTop } from "@/app/components/BackToTop";

import { OptimizedImage } from "../components/OptimizedImage";

export default function ImageComponentExample() {
    return (
        <div>
            <h1>Next.js Image Component Example</h1>
            <OptimizedImage
                src="/images/image_component_example.jpg"
                alt="Placeholder Image"
                width={600}
                height={400}
                />
        </div>
    );
}
