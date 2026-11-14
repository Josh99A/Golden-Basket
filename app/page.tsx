'use client';

import Image from 'next/image';
import Link from 'next/link';
import Team from '@/components/Team';
import Partners from '@/components/Partners';
import TestimonialCard from '@/components/Testimonials';
import { testimonials } from '@/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import {
  ArrowRight,
  Sprout,
  Sun,
  Fish,
  Users,
  Calendar,
  CheckCircle2,
  Eye,
  Compass,
  Award,
  BookOpen,
  Wheat,
  Handshake,
  MessageSquareQuote,
} from 'lucide-react';

const impactMetrics = [
  {
    value: '2019',
    label: 'Founded in Uganda',
    detail: 'Driving sustainable agricultural transformation',
    icon: Calendar,
  },
  {
    value: '6 Solar Tanks',
    label: 'NSSF Hi-Innovator Funded',
    detail: 'Solar-powered concrete aquaculture system',
    icon: Sun,
  },
  {
    value: '100% Fresh',
    label: 'Sustainably Farmed Catfish',
    detail: 'Nutritious, affordable & high-quality protein',
    icon: Fish,
  },
  {
    value: 'Community First',
    label: 'Empowering Local Farmers',
    detail: 'Supporting youth, women & out-grower networks',
    icon: Users,
  },
];

const visionPoints = [
  'To become a leading force in African agribusiness.',
  'To promote sustainable and responsible farming practices.',
  'To deliver high-quality, affordable agricultural products.',
  'To empower communities through job creation and innovation.',
  'To contribute to food security and economic growth.',
];

const products = [
  {
    title: 'Fresh Whole Catfish',
    tag: 'Flagship Aquaculture',
    description:
      'Sustainably raised in solar-powered concrete tanks in Wakiso District for households, hotels, restaurants, and regional markets.',
    image: '/Images/catfish-bg.jpg',
    icon: Fish,
    ctaText: 'Order or Inquire',
  },
  {
    title: 'Quality Catfish Fingerlings',
    tag: 'Seed Stock & Hatchery',
    description:
      'Healthy, fast-growing catfish fingerlings and technical hatchery support designed to help fellow aquaculture farmers thrive.',
    image: '/Images/DFCU_pic.jpg',
    icon: Sprout,
    ctaText: 'Request Fingerlings',
  },
  {
    title: 'Value Addition & Poultry/Crops',
    tag: 'Diversified Value Chains',
    description:
      'Expanding into nutrient-rich smoked fish, poultry production, and diversified crop value chains across Wakiso and Kiryandongo.',
    image: '/Images/Ame.jpg',
    icon: Wheat,
    ctaText: 'Explore Partnerships',
  },
  {
    title: 'Smart Farm Training & Consultancy',
    tag: 'Capacity Building',
    description:
      'Empowering local communities, youth, and women with hands-on modern aquaculture systems and agribusiness best practices.',
    image: '/Images/mission_2.png',
    icon: BookOpen,
    ctaText: 'Book a Consultation',
  },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0d1f0e] text-white py-24 md:py-32 lg:py-36 px-4 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/catfish-bg.jpg"
            alt="Fresh sustainably farmed catfish at Golden Basket Ltd"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f0e]/90 via-[#183113]/75 to-black/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#e1bb3f]/20 border border-[#e1bb3f]/50 text-[#e1bb3f] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <Sprout className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Sustainable Agribusiness • Wakiso &amp; Kiryandongo, Uganda</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Fresh Catfish,{' '}
              <span className="text-[#e1bb3f]">Empowering Communities.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#f5ecd0] leading-relaxed mb-8 max-w-2xl">
              Golden Basket Ltd is transforming livelihoods through solar-powered fish production, climate-smart agriculture, and inclusive community empowerment across Uganda.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 bg-[#e1bb3f] hover:bg-[#d4ab2a] text-[#183113] font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-200"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                <span>Our Story &amp; Impact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT METRICS STRIP */}
      <section
        id="impact"
        aria-label="Key Impact Milestones"
        className="bg-[#183113] border-y border-[#e1bb3f]/30 text-white py-10 px-4 md:px-16"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {impactMetrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#e1bb3f]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e1bb3f]/20 border border-[#e1bb3f]/40 flex items-center justify-center shrink-0 text-[#e1bb3f]">
                  <IconComponent className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[#e1bb3f] leading-tight">
                    {metric.value}
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    {metric.label}
                  </p>
                  <p className="text-xs text-[#f5ecd0]/80 mt-1 leading-snug">
                    {metric.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WHO WE ARE & OUR VISION SECTION */}
      <section className="bg-[#FAF7F0] px-4 md:px-16 py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-[#183113] text-[#e1bb3f] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Purpose-Driven Agribusiness</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183113] tracking-tight">
              Building a Sustainable Food Future in Uganda
            </h2>
            <div className="w-20 h-1.5 bg-[#e1bb3f] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Elevated Cards for Who We Are & Our Vision */}
            <div className="lg:col-span-7 space-y-6">
              {/* Who We Are Card */}
              <div className="bg-white border border-[#183113]/10 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#183113] text-[#e1bb3f] flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3c6326] block">
                      Our Identity
                    </span>
                    <h3 className="text-2xl font-bold text-[#183113]">
                      Who We Are
                    </h3>
                  </div>
                </div>
                <p className="text-[#183113]/85 leading-relaxed text-base">
                  Founded in 2019, Golden Basket Ltd is a Ugandan agribusiness company committed to driving socio-economic transformation through sustainable food production. Our mission is to empower communities by producing high-quality, nutritious, and affordable agricultural products—starting with catfish farming and expanding into poultry, crop farming, and more.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#183113] hover:text-[#3c6326] font-bold mt-5 group transition-colors"
                >
                  <span>Read more about our journey</span>
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              {/* Our Vision Card */}
              <div className="bg-white border border-[#183113]/10 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#183113] text-[#e1bb3f] flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3c6326] block">
                      Strategic Direction
                    </span>
                    <h3 className="text-2xl font-bold text-[#183113]">
                      Our Vision
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3 text-[#183113]/85">
                  {visionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-5 h-5 text-[#3c6326] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#183113] hover:text-[#3c6326] font-bold mt-6 group transition-colors"
                >
                  <span>Find out more about our impact</span>
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Photo Collage */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border-2 border-[#e1bb3f]/50 group">
                <Image
                  src="/Images/vision_1.png"
                  alt="Aquaculture production and community empowerment at Golden Basket"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f0e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block bg-[#e1bb3f] text-[#183113] text-xs font-bold px-2.5 py-1 rounded-md mb-1">
                    Wakiso &amp; Kiryandongo
                  </span>
                  <p className="text-sm font-semibold">
                    Modern Solar-Powered Concrete Tank Systems
                  </p>
                </div>
              </div>

              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border-2 border-[#183113]/20 group">
                <Image
                  src="/Images/mission_1.png"
                  alt="Golden Basket sustainable farming practices"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f0e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block bg-[#183113] text-[#e1bb3f] border border-[#e1bb3f]/40 text-xs font-bold px-2.5 py-1 rounded-md mb-1">
                    Inclusive Growth
                  </span>
                  <p className="text-sm font-semibold">
                    Supporting Local Farmers, Women &amp; Youth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PRODUCTS & AGRIBUSINESS SOLUTIONS SECTION */}
      <section id="products" className="bg-white px-4 md:px-16 py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-[#183113] text-[#e1bb3f] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Fish className="w-3.5 h-3.5" aria-hidden="true" />
              <span>What We Produce &amp; Offer</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183113] tracking-tight">
              Our Products &amp; Agribusiness Solutions
            </h2>
            <p className="text-[#183113]/80 mt-3 text-base sm:text-lg">
              From farm-fresh table catfish and vigorous fingerlings to value-added proteins and technical training, we deliver quality at every stage of the value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, idx) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF7F0] border border-[#183113]/15 hover:border-[#e1bb3f] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f0e]/75 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[#183113]/90 backdrop-blur-sm text-[#e1bb3f] text-xs font-bold px-3 py-1.5 rounded-full border border-[#e1bb3f]/40">
                      <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                      {product.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#183113] mb-3">
                        {product.title}
                      </h3>
                      <p className="text-[#183113]/80 text-sm sm:text-base leading-relaxed mb-6">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#183113]/10 flex items-center justify-between">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#183113] hover:bg-[#3c6326] text-[#e1bb3f] font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
                      >
                        <span>{product.ctaText}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                      <span className="text-xs font-semibold text-[#3c6326]">
                        Wakiso &amp; Kiryandongo
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR TEAM SECTION */}
      <section
        id="team"
        className="bg-[#183d1c] text-white px-4 md:px-16 py-20 lg:py-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-[#e1bb3f]/20 border border-[#e1bb3f]/40 text-[#e1bb3f] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Dedicated Leadership</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e1bb3f] tracking-tight">
              Meet Our Leadership Team
            </h2>
            <p className="text-[#f5ecd0]/90 mt-3 text-base sm:text-lg">
              Driven by experienced agribusiness professionals, aquaculture specialists, and strategists committed to transforming food systems across East Africa.
            </p>
          </div>
          <Team />
        </div>
      </section>

      {/* 6. WORK WITH US BANNER */}
      <section className="bg-[url(/Images/work_with_us.jpg)] bg-cover bg-center relative text-center px-4 md:px-16 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#102F14]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-[#e1bb3f]/20 border border-[#e1bb3f]/50 text-[#e1bb3f] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Handshake className="w-4 h-4" aria-hidden="true" />
            <span>Collaborate For Impact</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
            Work With <span className="text-[#e1bb3f]">Golden Basket</span>
          </h2>
          <p className="text-base sm:text-lg text-[#f5ecd0] leading-relaxed mb-8">
            Whether you&apos;re a farmer, distributor, researcher, hotelier, or passionate about sustainable agribusiness, we&apos;d love to hear from you! Partner with us to bring nutritious food solutions to communities and make a lasting impact.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#e1bb3f] hover:bg-[#d4ab2a] text-[#183113] font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS SECTION */}
      <section
        id="testimonials"
        className="bg-white px-4 md:px-16 py-20 lg:py-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-[#183113] text-[#e1bb3f] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Trusted Across Uganda</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183113] tracking-tight">
              Hear From Our Major Customers
            </h2>
            <p className="text-[#183113]/80 mt-3 text-base sm:text-lg">
              Discover how our reliable supply of fresh catfish, fingerlings, and farm support helps businesses and families thrive.
            </p>
          </div>

          <Swiper
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 28 },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full pb-12"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <TestimonialCard {...t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 8. OUR PARTNERS SECTION */}
      <section className="bg-[#183113] text-center px-4 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-[#e1bb3f]/20 border border-[#e1bb3f]/40 text-[#e1bb3f] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Handshake className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Institutional Support</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-[#e1bb3f]">
            Our Strategic Partners
          </h2>
          <p className="text-[#f5ecd0]/85 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
            Proudly backed by leading development and financial institutions accelerating agribusiness innovation in Uganda.
          </p>
          <Partners />
        </div>
      </section>
    </>
  );
}