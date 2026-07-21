'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header({ onContactClick }: { onContactClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/images/logo.png" alt="NovaRays" width={180} height={60} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="#benefits" className="hover:text-primary transition-colors">Why Us</Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
          <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
        </nav>

        {/* CTA Button */}
        <button
          onClick={onContactClick}
          className="btn-primary text-sm"
        >
          Get Free Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-50 px-4 py-4 flex flex-col gap-4">
          <Link href="#services" className="hover:text-primary">Services</Link>
          <Link href="#benefits" className="hover:text-primary">Why Us</Link>
          <Link href="#testimonials" className="hover:text-primary">Testimonials</Link>
          <Link href="#faq" className="hover:text-primary">FAQ</Link>
          <button onClick={onContactClick} className="btn-primary w-full text-center">Get Quote</button>
        </nav>
      )}
    </header>
  )
}
