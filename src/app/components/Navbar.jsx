import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center shadow-2xl">
            <div className="flex p-7 text-2xl cursor-pointer">
                <h1 className="font-extrabold transition duration-300 ease-in-out hover:font-normal hover:text-black">JOSS</h1>
                <h1 className="transition duration-300 ease-in-out hover:font-extrabold hover:text-secondary">GARDEN</h1>
            </div>
            <div className="flex gap-5 px-8 font-bold text-secondary ">
                <Link href="/" className="cursor-pointer transition duration-300 ease-in-out hover:text-black">Beranda</Link>
                <Link href="/gallery" className="cursor-pointer transition duration-300 ease-in-out hover:text-black">Galeri</Link>
                <Link href="/plantGuide" className="cursor-pointer transition duration-300 ease-in-out hover:text-black">Panduan</Link>
                <Link href="/blog" className="cursor-pointer transition duration-300 ease-in-out hover:text-black">Blog</Link>
                <Link href="/contact" className="cursor-pointer transition duration-300 ease-in-out hover:text-black">Kontak</Link>
            </div>
        </div>
    )
}

export default Navbar