import { MainLayout } from "../components/MainLayout";

export default function LayoutComponentPage() {
    const sidebar = (
        <nav>
            <ul>
                <li>Name</li>
                <li>About</li>
                <li>Content</li>
            </ul>
        </nav>
    );

    return (
        <MainLayout sidebar={sidebar}>
            <h2>Welcome to the layout Component Example</h2>
            <p>This page demonstrates the use of custom layout component.</p>
        </MainLayout>
    );
}
