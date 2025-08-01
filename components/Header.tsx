'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#183d1c] text-white px-4 md:px-16 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Golden Basket</h1>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="#who-we-are" className="hover:text-[#f6c046] transition">Who We Are</Link>
          <Link href="#vision" className="hover:text-[#f6c046] transition">Vision</Link>
          <Link href="#team" className="hover:text-[#f6c046] transition">Team</Link>
          <Link href="#contact" className="hover:text-[#f6c046] transition">Contact</Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-4 space-y-4 animate-fade-in">
          <Link href="#who-we-are" onClick={toggleMenu} className="block hover:text-[#f6c046]">Who We Are</Link>
          <Link href="#vision" onClick={toggleMenu} className="block hover:text-[#f6c046]">Vision</Link>
          <Link href="#team" onClick={toggleMenu} className="block hover:text-[#f6c046]">Team</Link>
          <Link href="#contact" onClick={toggleMenu} className="block hover:text-[#f6c046]">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
