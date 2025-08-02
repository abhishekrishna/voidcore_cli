'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-0 py-1 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-0">
          <div className="w-40 h-20 relative">
            
        <Image
            src="/logo.png"
            alt="VoidCore Logo"
            fill
            className="object-contain w-full h-full scale-50 pl-20"
        />
        </div>
          <h1 className="text-3xl font-bold">VoidCore</h1>
          
        </Link>

        <nav className="hidden md:flex gap-15 items-center text-white text-sm pr-20">
          <Link href="#projects" className="hover:text-purple-300 transition">Projects</Link>
          <Link href="#tech" className="hover:text-purple-300 transition">Tech Stack</Link>
          <Link href="#contact" className="hover:text-purple-300 transition">Contact</Link>
        </nav>
      </div>
    </header>
  )
}