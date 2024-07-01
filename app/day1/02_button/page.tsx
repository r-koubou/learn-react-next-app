'use client';

import Link from 'next/link';

import { BackToTop } from '@/app/components/BackToTop';
import { Button } from '../components/Button';

export default function Home() {

    const handleClick = () => {
        alert('Button clicked');
    };

    return (
        <main>
            <h1>Button Demo</h1>
            <Button text="Clieck me" onClick={handleClick} />
            <Button text="Secondary" onClick={handleClick} color='secondary' />

            <BackToTop />
        </main>
    );
}
