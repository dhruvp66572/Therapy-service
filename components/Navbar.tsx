import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-white text-lg font-bold">
                        Therapist Website
                    </Link>
                    <div className="space-x-4">
                        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                        <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar