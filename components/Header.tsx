'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-dark-green text-white  px-4 md:px-16 py-4 shadow-lg top-0 z-50">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="rounded-full bg-light-gold-tint flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/Images/GB_logo.png"
              alt="Golden Basket Logo"
              width={60}
              height={60}
              className="object-contain rounded-full w-12 h-12 md:w-16 md:h-16"
              priority
            />
          </div>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gold focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <Link href="/about" className="hover:text-gold transition">About us</Link>
          <Link href="#team" className="hover:text-gold transition">Products</Link>
          <Link href="#contact" className="hover:text-gold transition">Jobs</Link>
          <Link href="/contact" className="hover:text-gold transition">Contact us</Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-4 space-y-4 animate-fade-in">
          <Link href="/" onClick={toggleMenu} className="block hover:text-gold">Home</Link>
          <Link href="/about" onClick={toggleMenu} className="block hover:text-gold">About us</Link>
          <Link href="#team" onClick={toggleMenu} className="block hover:text-gold">Products</Link>
          <Link href="#contact" onClick={toggleMenu} className="block hover:text-gold">Innovations</Link>
          <Link href="#contact" onClick={toggleMenu} className="block hover:text-gold">Media</Link>
          <Link href="#contact" onClick={toggleMenu} className="block hover:text-gold">Jobs</Link>
          <Link href="/contact" onClick={toggleMenu} className="block hover:text-gold">Contact us</Link>
          
        </nav>
      )}
    </header>
  );
};

export default Header;
