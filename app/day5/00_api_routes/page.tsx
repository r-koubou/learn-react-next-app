'use client';

import { useState, useEffect } from "react";

import { BackToTop } from "@/app/components/BackToTop";


export default function ApiRoutesExample() {
    const [ message, setMessage ] = useState<string>('');

    useEffect( () => {
        fetch('api/hello')
        .then( response => response.json() )
        .then( data => setMessage(data.message) );
    }, []);

    return (
        <div>
            <h1>API Routes Example</h1>
            <p>Mesage from API: {message}</p>

            <BackToTop />
        </div>
    );
}
