'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Russell Taylor
                </Link>

                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                <ul
                    className={`md:flex space-x-4 absolute md:static bg-gray-900 md:bg-transparent w-full left-0 md:w-auto md:flex-row flex-col text-center md:text-left ${isOpen ? 'block' : 'hidden'}`}
                >
                    <li>
                        <Link href="/" className="block px-4 py-2 hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="block px-4 py-2 hover:text-gray-400">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="block px-4 py-2 hover:text-gray-400">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="block px-4 py-2 hover:text-gray-400">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
