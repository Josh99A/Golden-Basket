import Image from 'next/image';
import { team } from '../constants';

export default function Team() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {team.map((member, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl overflow-hidden shadow-xl group border border-white/15 hover:border-[#e1bb3f]/80 transition-all duration-300 bg-[#102F14]"
        >
          {/* Image */}
          <div className="relative w-full h-96 overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f0e]/90 via-[#0d1f0e]/20 to-transparent" />
          </div>

          {/* Bottom Glass/White Info Card */}
          <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md px-5 py-4 rounded-xl shadow-lg border-l-4 border-[#e1bb3f] transition-transform duration-300 group-hover:-translate-y-1 text-left">
            <p className="text-[#183113] font-bold text-base sm:text-lg leading-snug">
              {member.name}
            </p>
            <span className="text-[#3c6326] font-semibold text-xs sm:text-sm uppercase tracking-wider block mt-0.5">
              {member.role}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

