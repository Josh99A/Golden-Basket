import Image from 'next/image'

const partners = [
  '/partners/logo1.png',
  '/partners/northstar-seed.png',
  '/partners/logo2.png',
  '/partners/farm-logo.png'
];

export default  function Partners() {
  return (
    <div className="flex justify-center flex-wrap gap-6">
      {partners.map((logo, idx) => (
        <Image
          key={idx}
          src={logo}
          alt={`Partner ${idx + 1}`}
          width={120}
          height={80}
          className="object-contain"
        />
      ))}
    </div>
  );
}
