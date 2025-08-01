import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white py-24 px-4 md:px-16">
      <div className="absolute inset-0 z-0">
        <Image src="/catfish-bg.jpg" alt="Catfish" layout="fill" objectFit="cover" className="opacity-30" />
      </div>
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Fresh Catfish, Empowering Communities.</h1>
        <p className="text-lg mb-6">Golden Basket Ltd is transforming livelihoods through sustainable fish production.</p>
        <button className="bg-[#f6c046] text-black font-semibold px-6 py-3 rounded">Learn more</button>
      </div>
    </section>
  );
}
