import Image from 'next/image';

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
    <article className="bg-[#f6f2e9] border-t-2 border-[#122615] p-7 sm:p-9 flex flex-col justify-between h-full transition-colors hover:bg-[#efe7d3]/70">
      <div>
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-[#122615]/60 mb-6">
          <span>Buyer &amp; Partner Dispatch</span>
          <span>{location}, UG</span>
        </div>

        <blockquote className="font-display text-lg sm:text-xl text-[#122615] leading-relaxed mb-8">
          &ldquo;{testimonial}&rdquo;
        </blockquote>
      </div>

      <div className="flex items-center gap-4 pt-5 border-t border-[#122615]/15 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#122615]/30 shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            sizes="48px"
            className="object-cover object-[50%_20%]"
          />
        </div>
        <div>
          <h3 className="font-sans font-bold text-[#122615] text-sm tracking-tight">
            {name}
          </h3>
          <p className="font-mono text-xs text-[#455245] mt-0.5">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}
