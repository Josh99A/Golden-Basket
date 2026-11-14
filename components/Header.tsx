'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/#products' },
  { label: 'Our Team', href: '/#team' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact Us', href: '/contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'Follow Golden Basket on Facebook',
    href: 'https://facebook.com',
    icon: FaFacebook,
  },
  {
    label: 'Chat with Golden Basket on WhatsApp',
    href: 'https://wa.me/256772421174',
    icon: FaWhatsapp,
  },
  {
    label: 'Follow Golden Basket on X (Twitter)',
    href: 'https://x.com',
    icon: FaXTwitter,
  },
  {
    label: 'Subscribe to Golden Basket on YouTube',
    href: 'https://youtube.com',
    icon: FaYoutube,
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isActiveLink = (href: string) => {
    if (href.includes('#')) return false;
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-light-gold-tint text-[#183113] border-b border-[#e1bb3f]/30 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center divide-x divide-[#183113]/20">
            <Link
              href="/contact"
              className="flex items-center gap-2 pr-4 font-medium hover:text-[#2f5e25] transition-colors"
            >
              <HiOutlineLocationMarker className="text-[#b8921e] text-base shrink-0" />
              <span>Wakiso District, Uganda</span>
            </Link>

            <a
              href="mailto:info@goldenbasket.ug"
              className="flex items-center gap-2 px-4 font-medium hover:text-[#2f5e25] transition-colors"
            >
              <MdEmail className="text-[#b8921e] text-base shrink-0" />
              <span>info@goldenbasket.ug</span>
            </a>

            <div className="flex items-center gap-2 pl-4 font-medium">
              <IoCall className="text-[#b8921e] text-base shrink-0" />
              <a
                href="tel:+256772421174"
                className="hover:text-[#2f5e25] hover:underline transition-colors"
              >
                +256 772 421 174
              </a>
              <span className="text-[#183113]/40">/</span>
              <a
                href="tel:+256756718377"
                className="hover:text-[#2f5e25] hover:underline transition-colors"
              >
                +256 756 718 377
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#183113]/70 font-medium mr-1">Connect:</span>
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-7 h-7 rounded-full bg-[#183113]/10 text-[#183113] hover:bg-[#183113] hover:text-[#e1bb3f] flex items-center justify-center transition-all duration-200"
              >
                <Icon className="text-xs" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#183113]/95 backdrop-blur-md shadow-xl py-2.5 border-b border-[#e1bb3f]/20'
            : 'bg-dark-green py-3.5 shadow-md'
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="rounded-full bg-light-gold-tint flex items-center justify-center w-14 h-14 md:w-16 md:h-16 ring-2 ring-[#e1bb3f]/40 group-hover:ring-[#e1bb3f] transition-all shadow-md shrink-0">
                <Image
                  src="/Images/GB_logo.png"
                  alt="Golden Basket Logo"
                  width={56}
                  height={56}
                  className="object-contain rounded-full w-11 h-11 md:w-13 md:h-13"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base md:text-lg tracking-tight text-white group-hover:text-[#e1bb3f] transition-colors leading-tight">
                  Golden Basket
                </span>
                <span className="text-[11px] text-[#e1bb3f] tracking-wider uppercase font-medium">
                  Your Choice of Value
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center space-x-1 lg:space-x-2"
            >
              {NAV_LINKS.map(({ label, href }) => {
                const active = isActiveLink(href);
                return (
                  <Link
                    key={label}
                    href={href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      active
                        ? 'text-[#e1bb3f] bg-white/10 font-semibold'
                        : 'text-white/90 hover:text-[#e1bb3f] hover:bg-white/5'
                    }`}
                  >
                    {label}
                    {active && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#e1bb3f] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Primary CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#e1bb3f] text-[#183113] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#f0cc55] shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="p-2.5 rounded-lg text-white hover:text-[#e1bb3f] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#e1bb3f] transition-colors"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[540px] opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'
            }`}
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col space-y-1 border-t border-white/15 pt-4"
            >
              {NAV_LINKS.map(({ label, href }) => {
                const active = isActiveLink(href);
                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      active
                        ? 'bg-[#e1bb3f]/20 text-[#e1bb3f] font-semibold'
                        : 'text-white/90 hover:bg-white/10 hover:text-[#e1bb3f]'
                    }`}
                  >
                    <span>{label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#e1bb3f]" />}
                  </Link>
                );
              })}

              <div className="pt-3 px-2">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#e1bb3f] text-[#183113] font-semibold text-sm px-5 py-3 rounded-xl hover:bg-[#f0cc55] transition shadow-md"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Quick Contact Bar */}
              <div className="mt-4 pt-4 border-t border-white/15 px-3 flex flex-col gap-2.5 text-xs text-white/80">
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="tel:+256772421174"
                    className="flex items-center gap-1.5 hover:text-[#e1bb3f] transition-colors"
                  >
                    <IoCall className="text-[#e1bb3f] text-sm" />
                    <span>+256 772 421 174</span>
                  </a>
                  <a
                    href="mailto:info@goldenbasket.ug"
                    className="flex items-center gap-1.5 hover:text-[#e1bb3f] transition-colors"
                  >
                    <MdEmail className="text-[#e1bb3f] text-sm" />
                    <span>info@goldenbasket.ug</span>
                  </a>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-white/60">Wakiso District, Uganda</span>
                  <div className="flex items-center gap-2">
                    {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-7 h-7 rounded-full bg-white/10 text-white hover:bg-[#e1bb3f] hover:text-[#183113] flex items-center justify-center transition-colors"
                      >
                        <Icon className="text-xs" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
