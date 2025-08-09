import Image from 'next/image';
import { team } from '../constants';

export default function Team() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {team.map((member, idx) => (
        <div key={idx} className="relative rounded-lg overflow-hidden shadow-lg group">
          
          {/* Image */}
          <div className="relative w-full h-80">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom Overlay */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-md shadow-md text-center">
            <p className="text-gray-900 font-semibold text-sm sm:text-base">{member.name}</p>
            <span className="text-gray-600 text-xs sm:text-sm">{member.role}</span>
          </div>

        </div>
      ))}
    </div>
  );
}
