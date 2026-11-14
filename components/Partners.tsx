'use client';

import Image from 'next/image';
import { partners } from '@/constants';

const partnerMeta: Record<
  string,
  { name: string; role: string; year: string }
> = {
  '/Images/partners/dfcu_Foundation.png': {
    name: 'dfcu Foundation',
    role: 'Agribusiness Enterprise Development & Capacity Acceleration',
    year: 'Institutional Partner',
  },
  '/Images/partners/hi_innovators.svg': {
    name: 'NSSF Hi-Innovator Program',
    role: 'Seed Grant Backer — 6 Concrete Tanks & Solar Water Circulation System',
    year: '2023 Seed Award',
  },
  '/Images/partners/Imuka-logo.png': {
    name: 'Imuka Access',
    role: 'Investment Readiness, Business Advisory & Ecosystem Scaling',
    year: 'Ecosystem Partner',
  },
};

export default function Partners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/15 max-w-7xl mx-auto">
      {partners.map((logo, idx) => {
        const info = partnerMeta[logo] || {
          name: `Partner 0${idx + 1}`,
          role: 'Strategic Agribusiness Partner',
          year: 'Uganda',
        };
        return (
          <div
            key={logo}
            className="border-r border-b border-white/15 p-8 sm:p-10 flex flex-col justify-between bg-[#122615] hover:bg-[#19331d] transition-colors group text-left"
          >
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[#d9ae34]/80 mb-8">
              <span>0{idx + 1}</span>
              <span>{info.year}</span>
            </div>

            <div className="bg-[#f6f2e9] px-6 py-5 rounded-sm flex items-center justify-center h-24 mb-8">
              <Image
                src={logo}
                alt={info.name}
                width={170}
                height={70}
                className="object-contain max-h-14 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {info.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#efe7d3]/75 leading-relaxed">
                {info.role}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
