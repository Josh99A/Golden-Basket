'use client';
import Image from 'next/image'
import 'animate.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import GoToTopButton from '@/components/GoToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-light-gold-tint text-[#2c2c2c] overflow-x-hidden">
      <Header />
      <section className="relative bg-black text-white py-24 px-4 md:px-16">
          <div className="absolute inset-0 z-0">
            <Image src="/Images/catfish-bg.jpg" alt="Catfish" layout="fill" objectFit="cover" className="opacity-30 " />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl text-gold  md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">Fresh Catfish, Empowering Communities.</h1>
            <p className="text-lg text-light-gold-tint mb-6 animate__animated animate__fadeIn animate__delay-1s">Golden Basket Ltd is transforming livelihoods through sustainable fish production.</p>
            <button className="animate__animated animate__pulse animate__infinite">Learn more</button>
          </div>
      </section>

      <section className="px-4 md:px-16 py-20 animate__animated animate__bounce">
        <div className="grid md:grid-cols-2 gap-8">
         <div>
            <h3 className="text-2xl font-bold mb-4">Who we Are?</h3>
            <p className="leading-relaxed">
              Founded in 2019, Golden Basket Ltd is a Ugandan agribusiness company committed to driving socio-economic transformation through sustainable food production. Our mission is to empower communities by producing high-quality, nutritious, and affordable agricultural products—starting with catfish farming and expanding into poultry, crop farming, and more.
            </p>
            <a href="#" className="text-[#183d1c] font-semibold mt-4 inline-block">Read more...</a>
        </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>To become a leading force in African agribusiness.</li>
              <li>To promote sustainable and responsible farming practices.</li>
              <li>To deliver high-quality, affordable agricultural products.</li>
              <li>To empower communities through job creation and innovation.</li>
              <li>To contribute to food security and economic growth.</li>
            </ul>
            <a href="#" className="text-[#183d1c] font-semibold mt-4 inline-block">Find out more...</a>
        </div>
        </div>
      </section>

      <section className="bg-[#183d1c] text-white px-4 md:px-16 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our team</h2>
        <Team />
      </section>

      <section className="bg-[url(/Images/work_with_us.jpg)] text-center px-4 md:px-16 py-20 text-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 ">Work with us</h3>
          <p className="mb-6">
            Whether you&apos;re a farmer, distributor, researcher, or passionate about agribusiness, we&apos;d love to hear from you! Partner with us to bring sustainable food solutions to communities and make a lasting impact.
          </p>
          <button className="bg-gold font-semibold px-6 py-3 rounded">Contact us</button>
        </div>
      </section>

      <section className="bg-white px-4 md:px-16 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Hear From Our Major Customers</h2>
        <Testimonials />
      </section>

      <section className="bg-[#f4e8c1] text-center px-4 md:px-16 py-20">
        <h2 className="text-3xl font-bold mb-10">Our Partners</h2>
        <Partners />
      </section>

      <Footer />
      <GoToTopButton/>
    </main>
  );
}