import { Adamina } from "next/font/google";
import React from "react";

type UserProfileProps = {
    name: string;
    age: number;
    isAdmin?: boolean;
    hobbies: string[];
    onProfileClick: (name:string) => void;
};

export function UserProfile({
    name,
    age,
    isAdmin = false,
    hobbies,
    onProfileClick
}: UserProfileProps ) {
    return (
        <div onClick={() => { onProfileClick(name) }}>
            <h2>{name} {isAdmin && '(Adamin)'}</h2>
            <p>Age: {age}</p>
            <p>Hobbies: {hobbies.join(',')}</p>
        </div>
    );
}
