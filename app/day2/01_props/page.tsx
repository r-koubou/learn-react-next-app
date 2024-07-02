'use client';

import { BackToTop } from "@/app/components/BackToTop";

import { UserProfile } from "../components/UserProfile";


export default function Home() {

    const handleProfileClick = (name: string) => {
        alert(`You clicked on ${name}'s profile`);
    };

    return (
        <main>
            <h1>User Profiles</h1>
            <UserProfile
                name="Alice"
                age={28}
                isAdmin={true}
                hobbies={['reading', 'swimming']}
                onProfileClick={handleProfileClick}
            />
            <UserProfile
                name="Bob"
                age={32}
                hobbies={['swiming', 'cooking']}
                onProfileClick={handleProfileClick}
            />
            <BackToTop />
        </main>
    );
}