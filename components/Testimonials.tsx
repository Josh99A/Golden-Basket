import Image from "next/image";

type TestimonialCardProps = {
  image: string;
  name: string;
  role: string;
  testimonial: string;
  location: string;
};

export default function TestimonialCard({ image, name, role, testimonial, location }: TestimonialCardProps) {
  return (
    <div className="bg-[#E7D59E] p-6 rounded-lg shadow-md flex flex-col gap-4">
      {/* Profile & Role */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="text-gray-800 text-sm leading-relaxed relative">
        <span className="text-2xl font-serif">“</span>
        {testimonial}
        <span className="text-2xl font-serif">”</span>
      </div>

      {/* Location */}
      <p className="text-primary-text font-semibold text-sm mt-auto">{location}</p>
    </div>
  );
}
