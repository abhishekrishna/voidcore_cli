'use client'


import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-20 right-20 rounded-b-2xl z-50 backdrop-blur-md bg-white-550/0 bg-gradient-to-r from-pink-500/30 to-blue-500/30 border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="w-16 h-16 relative mr-2 scale-40 filter invert">
            <Image
              src="/logo.png"
              alt="voidcore logo"
              fill
              className="object-contain"
              
            />
          </div>
          <h1 className="text-3xl font-bold">voidcore</h1>
        </Link>

        <nav className="hidden md:flex gap-12 items-center text-white text-sm">
          <Link href="#projects" className="hover:text-purple-300 transition">Projects</Link>
          <Link href="#tech" className="hover:text-purple-300 transition">Tech Stack</Link>
          <Link href="#contact" className="hover:text-purple-300 transition">Contact</Link>
        </nav>
      </div>
    </header>
  )
}