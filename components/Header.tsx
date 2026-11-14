'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/about' },
  { label: 'Produce & Systems', href: '/#products' },
  { label: 'Order Calculator', href: '/#calculator' },
  { label: 'Leadership', href: '/#team' },
  { label: 'Contact & Dispatch', href: '/contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'WhatsApp Direct Dispatch',
    href: 'https://wa.me/256772421174',
    icon: FaWhatsapp,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: FaFacebook,
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com',
    icon: FaXTwitter,
  },
  {
    label: 'YouTube',
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
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href.includes('#')) return false;
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* Editorial Field Dispatch Top Bar */}
      <div className="hidden lg:block bg-[#0c1a0e] text-[#efe7d3]/80 border-b border-white/10 text-[11px] tracking-wide">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex justify-between items-center">
          <div className="flex items-center divide-x divide-white/15">
            <span className="pr-4 font-mono uppercase tracking-widest text-[#d9ae34]">
              00°27&apos;N 32°36&apos;E — Gayaza, Wakiso District, UG
            </span>
            <a
              href="mailto:info@goldenbasket.ug"
              className="px-4 hover:text-[#d9ae34] transition-colors"
            >
              info@goldenbasket.ug
            </a>
            <div className="pl-4 flex items-center gap-2">
              <span className="text-white/45 uppercase font-mono">Farm Desk:</span>
              <a
                href="tel:+256772421174"
                className="hover:text-[#d9ae34] transition-colors font-mono"
              >
                +256 772 421 174
              </a>
              <span className="text-white/30">/</span>
              <a
                href="tel:+256756718377"
                className="hover:text-[#d9ae34] transition-colors font-mono"
              >
                +256 756 718 377
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono uppercase text-[10px] tracking-widest text-white/45">
              Mon–Sat 08:00–18:00 EAT
            </span>
            <div className="h-3 w-px bg-white/15" />
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/65 hover:text-[#d9ae34] transition-colors"
                >
                  <Icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Architectural Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#122615]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#d9ae34]/20'
            : 'bg-[#122615] py-4 border-b border-white/10'
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center">
            {/* Brand Identity */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3.5 group focus:outline-none"
            >
              <div className="rounded-full bg-[#efe7d3] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-[#d9ae34]/60 group-hover:border-[#d9ae34] transition-all shrink-0">
                <Image
                  src="/Images/GB_logo.png"
                  alt="Golden Basket Logo"
                  width={48}
                  height={48}
                  className="object-contain rounded-full w-10 h-10 md:w-11 md:h-11"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-[#d9ae34] transition-colors leading-none">
                  Golden Basket
                </span>
                <span className="font-mono text-[10px] text-[#d9ae34]/90 tracking-[0.18em] uppercase mt-1">
                  Agribusiness • Est. 2019
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-7"
            >
              {NAV_LINKS.map(({ label, href }) => {
                const active = isActiveLink(href);
                return (
                  <Link
                    key={label}
                    href={href}
                    className={`py-1.5 text-sm tracking-wide transition-colors relative group ${
                      active
                        ? 'text-[#d9ae34] font-semibold'
                        : 'text-[#efe7d3]/85 hover:text-white font-medium'
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#d9ae34] transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Primary Dispatch CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#d9ae34] text-[#122615] font-semibold text-xs uppercase tracking-[0.12em] px-5 py-3 rounded-sm hover:bg-[#e5be46] transition-all duration-200 group"
              >
                <span>Order / Partner</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="p-2 text-[#efe7d3] hover:text-[#d9ae34] focus:outline-none"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[520px] opacity-100 mt-4 pb-5' : 'max-h-0 opacity-0'
            }`}
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col divide-y divide-white/10 border-t border-white/15 pt-2"
            >
              {NAV_LINKS.map(({ label, href }, idx) => {
                const active = isActiveLink(href);
                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`py-3 px-2 text-sm flex items-center justify-between transition-colors ${
                      active
                        ? 'text-[#d9ae34] font-semibold'
                        : 'text-[#efe7d3]/90 hover:text-[#d9ae34]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-[#d9ae34]/60">
                        0{idx + 1}
                      </span>
                      <span>{label}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#d9ae34] text-[#122615] font-semibold text-xs uppercase tracking-[0.14em] px-5 py-3.5 rounded-sm"
                >
                  <span>Order Fresh Catfish or Partner</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <div className="flex flex-wrap items-center justify-between text-xs text-[#efe7d3]/70 pt-2 font-mono">
                  <a href="tel:+256772421174" className="hover:text-[#d9ae34]">
                    +256 772 421 174
                  </a>
                  <a href="mailto:info@goldenbasket.ug" className="hover:text-[#d9ae34]">
                    info@goldenbasket.ug
                  </a>
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
