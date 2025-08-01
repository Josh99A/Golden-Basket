const testimonials = [
  {
    name: 'Sarah N',
    role: 'Local Market Vendor',
    location: 'Kampala',
    quote: 'Golden Basket Ltd has been our go-to supplier for fresh catfish...'
  },
  {
    name: 'Chef Isaac M',
    role: 'Owner of Lakeside Dine Restaurant',
    location: 'Entebbe',
    quote: 'What sets Golden Basket apart is not just the freshness of their catfish...'
  },
  {
    name: 'Joshua B.',
    role: 'Youth Beneficiary',
    location: 'Wakiso District',
    quote: 'Joining Golden Basket’s fish farming project gave me a stable income...'
  }
];

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((item, idx) => (
        <div key={idx} className="bg-[#f4e8c1] p-6 rounded shadow">
          <p className="italic">“{item.quote}”</p>
          <div className="mt-4">
            <p className="font-bold">{item.name}</p>
            <p className="text-sm">{item.role}</p>
            <p className="text-xs italic text-gray-500">{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
