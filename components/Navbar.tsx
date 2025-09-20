"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-500">
          MovieZone
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-red-400">Home</Link>
          <Link href="/about" className="hover:text-red-400">About</Link>
          <Link href="/contact" className="hover:text-red-400">Contact</Link>
          <Link href="/privacy" className="hover:text-red-400">Privacy</Link>
          <Link href="/dmca" className="hover:text-red-400">DMCA</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-2">
          <Link href="/" className="block hover:text-red-400">Home</Link>
          <Link href="/about" className="block hover:text-red-400">About</Link>
          <Link href="/contact" className="block hover:text-red-400">Contact</Link>
          <Link href="/privacy" className="block hover:text-red-400">Privacy</Link>
          <Link href="/dmca" className="block hover:text-red-400">DMCA</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
