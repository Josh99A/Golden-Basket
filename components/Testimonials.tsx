import Image from 'next/image';
import { Star, Quote, MapPin } from 'lucide-react';

type TestimonialCardProps = {
  image: string;
  name: string;
  role: string;
  testimonial: string;
  location: string;
};

export default function TestimonialCard({
  image,
  name,
  role,
  testimonial,
  location,
}: TestimonialCardProps) {
  return (
    <div className="bg-[#FAF7F0] border border-[#e1bb3f]/40 hover:border-[#e1bb3f] p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
      {/* Decorative Quote Icon */}
      <Quote
        aria-hidden="true"
        className="w-12 h-12 text-[#e1bb3f]/25 absolute top-6 right-6 pointer-events-none"
      />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#e1bb3f] text-[#e1bb3f]"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-[#183113]/90 text-sm sm:text-base leading-relaxed italic mb-6 relative z-10">
          &ldquo;{testimonial}&rdquo;
        </blockquote>
      </div>

      {/* Profile, Role & Location */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#e1bb3f]/30 mt-auto">
        <div className="flex items-center gap-3.5">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#e1bb3f] shadow-sm shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-[#183113] text-base leading-tight">
              {name}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#3c6326] mt-0.5">
              {role}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#183113] bg-[#e1bb3f]/25 px-3 py-1.5 rounded-full shrink-0">
          <MapPin className="w-3.5 h-3.5 text-[#3c6326]" aria-hidden="true" />
          {location}
        </span>
      </div>
    </div>
  );
}

