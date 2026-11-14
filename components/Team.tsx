import Image from 'next/image';
import { team } from '../constants';

const teamNotes: Record<string, { focus: string; location: string }> = {
  'Frances Philippa Eluzai': {
    focus: 'Enterprise Strategy, NSSF Hi-Innovator Fellow & Community Agribusiness',
    location: 'Gayaza & Bweyale',
  },
  'Lindrio Diana': {
    focus: 'Supply Chain Coordination, Partner Relations & Financial Administration',
    location: 'Wakiso District',
  },
  'Amegovu Donald': {
    focus: 'Solar Tank Aquaculture Systems, Hatchery Operations & Smart Farm Tech',
    location: 'Gayaza Farm Hub',
  },
};

export default function Team() {
  return (
    <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
      {team.map((member, idx) => {
        const meta = teamNotes[member.name] || {
          focus: 'Sustainable Aquaculture & Agribusiness Operations',
          location: 'Uganda',
        };
        return (
          <article
            key={member.name}
            className="group flex flex-col border-t border-white/20 pt-6"
          >
            {/* Top Editorial Index & Role */}
            <div className="flex items-baseline justify-between mb-4 font-mono text-xs uppercase tracking-widest">
              <span className="text-[#d9ae34]">0{idx + 1} / Leadership</span>
              <span className="text-white/55">{meta.location}</span>
            </div>

            {/* Portrait Frame */}
            <div className="relative w-full h-[380px] overflow-hidden bg-[#0c1a0e] mb-5 border border-white/10">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a0e]/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            </div>

            {/* Editorial Bio Caption */}
            <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#d9ae34] transition-colors">
              {member.name}
            </h3>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#d9ae34] mt-1 mb-3">
              {member.role}
            </p>
            <p className="text-sm text-[#efe7d3]/75 leading-relaxed">
              {meta.focus}
            </p>
          </article>
        );
      })}
    </div>
  );
}
