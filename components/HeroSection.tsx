import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sprout } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#0d1f0e] text-white py-24 md:py-32 px-4 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/catfish-bg.jpg"
          alt="Sustainably farmed catfish at Golden Basket Ltd"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f0e]/90 via-[#183113]/75 to-black/50" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-[#e1bb3f]/20 border border-[#e1bb3f]/50 text-[#e1bb3f] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
          <Sprout className="w-4 h-4" aria-hidden="true" />
          <span>Sustainable Agribusiness • Wakiso &amp; Kiryandongo, Uganda</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Fresh Catfish,{' '}
          <span className="text-[#e1bb3f]">Empowering Communities.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#f5ecd0] leading-relaxed mb-8 max-w-2xl">
          Golden Basket Ltd is transforming livelihoods across Uganda through solar-powered aquaculture, sustainable fish production, and community-driven agribusiness.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 bg-[#e1bb3f] hover:bg-[#d4ab2a] text-[#183113] font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-200"
          >
            <span>Explore Our Products</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
          >
            <span>Our Story &amp; Impact</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

