'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-dark-green text-gold  px-4 md:px-16 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="rounded-full bg-light-gold-tint flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/GB_logo.png"
              alt="Golden Basket Logo"
              width={60}
              height={60}
              className="object-contain rounded-full w-12 h-12 md:w-16 md:h-16"
              priority
            />
          </div>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gold hover:text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="#who-we-are" className="hover:text-white transition">Home</Link>
          <Link href="#vision" className="hover:text-white transition">About us</Link>
          <Link href="#team" className="hover:text-white transition">Products</Link>
          <Link href="#contact" className="hover:text-white transition">Innovations</Link>
          <Link href="#contact" className="hover:text-white transition">Media</Link>
          <Link href="#contact" className="hover:text-white transition">Jobs</Link>
          <Link href="#contact" className="hover:text-white transition">Contact us</Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-4 space-y-4 animate-fade-in">
          <Link href="#who-we-are" onClick={toggleMenu} className="block hover:text-white">Home</Link>
          <Link href="#vision" onClick={toggleMenu} className="block hover:text-white">About us</Link>
          <Link href="#team" onClick={toggleMenu} className="block hover:text-white">Products</Link>
          <Link href="#contact" onClick={toggleMenu} className="block hover:text-white">Innovations</Link>
          <Link href="#contact" onClick={toggleMenu} className="block hover:text-white">Media</Link>
          <Link href="#contact" onClick={toggleMenu} className="block hover:text-white">Jobs</Link>
          <Link href="#contact" onClick={toggleMenu} className="block hover:text-white">Contact us</Link>
          
        </nav>
      )}
    </header>
  );
};

export default Header;
