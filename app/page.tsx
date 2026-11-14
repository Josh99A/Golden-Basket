'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Team from '@/components/Team';
import Partners from '@/components/Partners';
import TestimonialCard from '@/components/Testimonials';
import { testimonials } from '@/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const lifecycleStages = [
  {
    index: '01',
    code: 'STAGE 01 / GENETICS & HATCHERY',
    title: 'Selective Breeding & Fingerling Grading',
    summary:
      'Every harvest begins in our controlled Gayaza hatchery. Broodstock are selected for vigour and feed-conversion efficiency, producing uniform fingerlings with high survival rates for both our tanks and partner out-growers.',
    specs: [
      { label: 'Survival Benchmark', value: '92%+' },
      { label: 'Grading Interval', value: 'Every 14 Days' },
      { label: 'Species', value: 'Clarias gariepinus' },
    ],
    image: '/Images/DFCU_pic.jpg',
    caption: 'Hatchery grading and enterprise recognition in Wakiso District.',
  },
  {
    index: '02',
    code: 'STAGE 02 / SOLAR AQUACULTURE',
    title: '6 Concrete Tanks Powered by Solar Circulation',
    summary:
      'Commissioned in 2023 with seed backing from the NSSF Hi-Innovator Program, our six reinforced concrete tanks run on continuous solar-pumped water oxygenation—eliminating grid fuel dependency while maintaining dissolved oxygen.',
    specs: [
      { label: 'Infrastructure', value: '6 Concrete Tanks' },
      { label: 'Energy Source', value: '100% Off-Grid Solar' },
      { label: 'Water Exchange', value: 'Continuous Recirculation' },
    ],
    image: '/Images/Ame.jpg',
    caption: 'Concrete tank management and water quality monitoring at Gayaza.',
  },
  {
    index: '03',
    code: 'STAGE 03 / CLEAN-WATER NUTRITION',
    title: 'High-Protein Feed & Zero-Hormone Growth',
    summary:
      'Our catfish are raised in clean, circulating freshwater on balanced floating pellets without growth hormones or preventative antibiotics—resulting in firm, sweet white flesh prized by Kampala kitchens and hotels.',
    specs: [
      { label: 'Grow-Out Cycle', value: '5 – 6 Months' },
      { label: 'Average Table Weight', value: '0.8 kg – 1.5 kg' },
      { label: 'Water Quality', value: 'Daily pH & DO Logs' },
    ],
    image: '/Images/vision_1.png',
    caption: 'Balanced nutrition and strict pond hygiene protocols.',
  },
  {
    index: '04',
    code: 'STAGE 04 / HARVEST & DISPATCH',
    title: 'Same-Day Harvest, Dressing & Cold-Chain Delivery',
    summary:
      'Harvested to order at dawn in Gayaza and delivered fresh whole, gutted, or kiln-smoked across Wakiso and metropolitan Kampala for households, restaurants, schools, and wholesale fish traders.',
    specs: [
      { label: 'Retail Minimum', value: 'From 2 kg' },
      { label: 'Wholesale Tier', value: '20 kg – 500 kg+' },
      { label: 'Dispatch Window', value: 'Same-Day / 24h' },
    ],
    image: '/Images/catfish-bg.jpg',
    caption: 'Freshly harvested African catfish ready for market dispatch.',
  },
];

const produceCatalog = [
  {
    index: '01',
    category: 'TABLE FISH / WHOLESALE & RETAIL',
    title: 'Fresh Whole & Dressed African Catfish',
    specs: 'MOQ: 2 kg Retail • 20 kg+ Wholesale • Live, Whole or Gutted',
    description:
      'Clean-water catfish harvested to order from our solar-powered concrete tanks in Gayaza. Consistent sizing for hotels, restaurants, supermarkets, and family kitchens.',
    image: '/Images/catfish-bg.jpg',
    inquiryCategory: 'Fresh Catfish Order (Wholesale/Retail)',
  },
  {
    index: '02',
    category: 'AQUACULTURE SEED STOCK',
    title: 'Graded Catfish Fingerlings & Post-Fingerlings',
    specs: 'Batch Booking: 500 – 10,000+ Fingerlings • Acclimatized',
    description:
      'Uniformly graded, disease-free seed stock bred for rapid growth in both concrete tanks and earthen ponds, accompanied by stocking and feeding schedules.',
    image: '/Images/DFCU_pic.jpg',
    inquiryCategory: 'Catfish Fingerlings',
  },
  {
    index: '03',
    category: 'VALUE ADDITION & DIVERSIFIED CROPS',
    title: 'Smoked Catfish, Poultry & Crop Value Chains',
    specs: 'Extended Shelf-Life Protein • Bweyale & Gayaza Farms',
    description:
      'Kiln-smoked catfish fillets and whole fish alongside our expanding poultry and arable crop operations rooted in our founding Bweyale farmland.',
    image: '/Images/Ame.jpg',
    inquiryCategory: 'Fresh Catfish Order (Wholesale/Retail)',
  },
  {
    index: '04',
    category: 'SMART FARM ADVISORY',
    title: 'Practical Aquaculture Training & Tank Engineering',
    specs: 'On-Farm Gayaza Workshops • Out-Grower Mentorship',
    description:
      'Hands-on technical advisory for farmers, youth collectives, and NGOs on concrete tank construction, solar water pumping, feed formulation, and unit economics.',
    image: '/Images/mission_2.png',
    inquiryCategory: 'Farm Training & Visit',
  },
];

const visionPrinciples = [
  {
    num: '01',
    title: 'Regional Agribusiness Leadership',
    body: 'Building a trusted East African food production house anchored in measurable quality and transparent farm practices.',
  },
  {
    num: '02',
    title: 'Solar & Resource Stewardship',
    body: 'Replacing diesel-heavy pond pumping with clean solar circulation and high-density concrete tank engineering.',
  },
  {
    num: '03',
    title: 'Accessible, Nutrient-Dense Protein',
    body: 'Closing Uganda’s nutritional gap with affordable, clean-water fish harvested minutes from urban markets.',
  },
  {
    num: '04',
    title: 'Youth & Women Livelihoods',
    body: 'Transferring practical aquaculture skills and fingerling supply to out-grower households across Wakiso and Kiryandongo.',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [activeStage, setActiveStage] = useState(1); // Default to Stage 02 (Solar Concrete Tanks)

  // Interactive Calculator State
  const [calcMode, setCalcMode] = useState<'order' | 'stocking'>('order');
  const [orderKg, setOrderKg] = useState<number>(40);
  const [prepStyle, setPrepStyle] = useState<'Whole Fresh' | 'Gutted & Dressed' | 'Kiln-Smoked'>('Whole Fresh');
  const [deliveryZone, setDeliveryZone] = useState<'Gayaza Farm Pickup' | 'Wakiso District' | 'Kampala Metro'>('Kampala Metro');

  // Stocking Calculator State
  const [tankArea, setTankArea] = useState<number>(30);
  const [systemType, setSystemType] = useState<'solar-concrete' | 'earthen-pond'>('solar-concrete');

  useGSAP(
    () => {
      gsap.from('.hero-reveal', {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
      });
    },
    { scope: heroRef }
  );

  // Derived calculations for Table Fish Order
  const orderTier =
    orderKg >= 100
      ? 'Commercial Bulk Partner'
      : orderKg >= 20
      ? 'Wholesale / HoReCa Tier'
      : 'Household & Retail Tier';
  const estimatedFishCount = Math.round(orderKg * 1.1);
  const crateCount = Math.max(1, Math.ceil(orderKg / 25));

  // Derived calculations for Fingerling Stocking
  const densityPerSqM = systemType === 'solar-concrete' ? 65 : 15;
  const recommendedFingerlings = tankArea * densityPerSqM;
  const projectedHarvestKg = Math.round(recommendedFingerlings * 0.88 * 0.95);
  const estimatedFeedBags = Math.max(1, Math.round((projectedHarvestKg * 1.15) / 20));

  const currentStage = lifecycleStages[activeStage];

  const whatsappOrderText =
    calcMode === 'order'
      ? `Hello Golden Basket! I would like to inquire about ordering *${orderKg} kg* of *${prepStyle}* catfish (${orderTier}) for *${deliveryZone}*.`
      : `Hello Golden Basket! I am planning a *${tankArea} m²* (${
          systemType === 'solar-concrete' ? 'Concrete Tank' : 'Earthen Pond'
        }) setup and would like to inquire about *${recommendedFingerlings.toLocaleString()} catfish fingerlings*.`;

  return (
    <>
      {/* 1. EDITORIAL ASYMMETRIC HERO */}
      <section
        ref={heroRef}
        className="relative bg-[#0c1a0e] text-white pt-14 pb-20 lg:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/catfish-bg.jpg"
            alt="Fresh sustainably farmed catfish at Golden Basket Ltd"
            fill
            priority
            className="object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a0e] via-[#0c1a0e]/90 to-[#122615]/65" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-end">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7">
            <div className="hero-reveal flex items-center gap-4 mb-7">
              <span className="h-px w-10 bg-[#d9ae34]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d9ae34]">
                Aquaculture &amp; Agribusiness • Est. 2019 • Uganda
              </span>
            </div>

            <h1 className="hero-reveal font-display text-4xl sm:text-5xl lg:text-[62px] font-bold text-white leading-[1.06] tracking-tight mb-7">
              Freshwater Catfish,{' '}
              <span className="italic font-normal text-[#d9ae34]">
                Cultivated
              </span>{' '}
              with Solar Precision.
            </h1>

            <p className="hero-reveal text-base sm:text-lg text-[#efe7d3]/85 leading-relaxed mb-10 max-w-2xl">
              From our six solar-powered concrete tanks in Gayaza, Wakiso District to our founding
              farmland in Bweyale, Golden Basket Ltd supplies clean-water table catfish, graded
              fingerlings, and practical farmer training across Uganda.
            </p>

            <div className="hero-reveal flex flex-wrap items-center gap-4">
              <Link
                href="/#calculator"
                className="inline-flex items-center gap-3 bg-[#d9ae34] hover:bg-[#e5be46] text-[#122615] font-semibold text-xs uppercase tracking-[0.14em] px-7 py-4 rounded-sm transition-all duration-200 group"
              >
                <span>Estimate Order or Fingerlings</span>
                <ArrowDownRightIcon />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 bg-transparent hover:bg-white/10 text-white border border-white/30 font-mono text-xs uppercase tracking-[0.14em] px-7 py-4 rounded-sm transition-all duration-200"
              >
                <span>Read Our Field Story</span>
                <ArrowUpRight className="w-4 h-4 text-[#d9ae34]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Field Ledger Card */}
          <div className="hero-reveal lg:col-span-5">
            <div className="bg-[#122615]/90 backdrop-blur-md border border-white/15 p-6 sm:p-8 relative">
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6 font-mono text-[11px] uppercase tracking-widest">
                <span className="text-[#d9ae34]">GAYAZA PRODUCTION LEDGER</span>
                <span className="text-white/60">WAKISO DISTRICT</span>
              </div>

              <div className="relative h-52 w-full mb-6 overflow-hidden border border-white/10">
                <Image
                  src="/Images/Ame.jpg"
                  alt="Golden Basket solar-powered concrete fish tanks in Gayaza"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0c1a0e] via-[#0c1a0e]/70 to-transparent p-3.5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#d9ae34]">NSSF HI-INNOVATOR COHORT</span>
                  <span className="text-white/80">SOLAR TANK SYSTEM</span>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-y-4 gap-x-6 text-left border-t border-white/15 pt-5">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                    Primary Species
                  </dt>
                  <dd className="font-display text-lg text-white mt-0.5">
                    African Catfish
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                    Tank Infrastructure
                  </dt>
                  <dd className="font-display text-lg text-[#d9ae34] mt-0.5">
                    6 Concrete Units
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                    Water Circulation
                  </dt>
                  <dd className="font-sans text-sm font-semibold text-white/90 mt-0.5">
                    100% Off-Grid Solar Pump
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                    Supply Coverage
                  </dt>
                  <dd className="font-sans text-sm font-semibold text-white/90 mt-0.5">
                    Wakiso, Kampala &amp; North UG
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL LEDGER METRICS STRIP */}
      <section
        id="impact"
        aria-label="Enterprise Figures"
        className="bg-[#122615] text-white border-b border-white/15"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x divide-white/15">
          <div className="p-6 sm:p-9">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#d9ae34] block mb-2">
              01 / ORIGIN
            </span>
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              2019
            </p>
            <p className="text-xs sm:text-sm text-[#efe7d3]/75 mt-2 leading-relaxed">
              Incorporated in Uganda following our 2018 farming roots in Bweyale, Kiryandongo.
            </p>
          </div>

          <div className="p-6 sm:p-9">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#d9ae34] block mb-2">
              02 / INFRASTRUCTURE
            </span>
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d9ae34]">
              06 Tanks
            </p>
            <p className="text-xs sm:text-sm text-[#efe7d3]/75 mt-2 leading-relaxed">
              Reinforced concrete aquaculture tanks powered by a solar water pump system.
            </p>
          </div>

          <div className="p-6 sm:p-9">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#d9ae34] block mb-2">
              03 / STANDARD
            </span>
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              100%
            </p>
            <p className="text-xs sm:text-sm text-[#efe7d3]/75 mt-2 leading-relaxed">
              Clean circulating freshwater, hormone-free feed, and same-day cold-chain harvest.
            </p>
          </div>

          <div className="p-6 sm:p-9">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#d9ae34] block mb-2">
              04 / FOOTPRINT
            </span>
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              2 Hubs
            </p>
            <p className="text-xs sm:text-sm text-[#efe7d3]/75 mt-2 leading-relaxed">
              Operating across Gayaza (Wakiso District) and Bweyale (Kiryandongo District).
            </p>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC EDITORIAL STORY & VISION (SECTION 01) */}
      <section className="bg-[#f6f2e9] bg-parchment-grain px-5 sm:px-8 lg:px-12 py-20 lg:py-28 border-b border-[#122615]/15">
        <div className="max-w-7xl mx-auto">
          {/* Editorial Section Masthead */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#122615]/20 pb-6 mb-14 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8c6a08] block mb-2">
                SECTION 01 — THE ENTERPRISE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#122615] tracking-tight">
                Rooted in Ugandan Soil &amp; Water.
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#122615] hover:text-[#8c6a08] pb-1 border-b border-[#122615] transition-colors self-start md:self-auto"
            >
              <span>Full Company Chronicle (2018–2023)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative + Staggered Field Photography */}
            <div className="lg:col-span-6 space-y-8">
              <p className="font-display text-xl sm:text-2xl text-[#122615] leading-relaxed">
                &ldquo;We started Golden Basket to prove that Ugandan aquaculture can be both
                ecologically responsible and commercially reliable—delivering nutritious protein to
                families while creating skilled rural jobs.&rdquo;
              </p>

              <p className="text-[#455245] text-base leading-relaxed">
                Founded in 2019 after initial crop farming in Kiryandongo District, Golden Basket
                pivoted during the 2020 feed-supply disruptions into intensive African catfish
                production. Today, our Gayaza aquaculture center pairs concrete tank engineering
                with solar water circulation to supply households, hotels, and fellow fish farmers.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 pt-2">
                <figure className="border border-[#122615]/15 bg-white p-3">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src="/Images/vision_1.png"
                      alt="Aquaculture production at Golden Basket"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="font-mono text-[11px] text-[#455245] pt-3 flex justify-between">
                    <span>FIG 1.1 — GAYAZA TANKS</span>
                    <span>WAKISO</span>
                  </figcaption>
                </figure>

                <figure className="border border-[#122615]/15 bg-white p-3 sm:mt-8">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src="/Images/mission_1.png"
                      alt="Community agribusiness training at Golden Basket"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="font-mono text-[11px] text-[#455245] pt-3 flex justify-between">
                    <span>FIG 1.2 — FIELD TRAINING</span>
                    <span>UGANDA</span>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Right Column: Architectural Numbered Vision Ledger */}
            <div className="lg:col-span-6 bg-white border border-[#122615]/15 p-7 sm:p-10">
              <div className="flex items-center justify-between border-b border-[#122615]/15 pb-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#122615] font-semibold">
                  STRATEGIC MANDATE &amp; VISION
                </span>
                <span className="font-mono text-xs text-[#8c6a08]">04 PILLARS</span>
              </div>

              <div className="divide-y divide-[#122615]/15">
                {visionPrinciples.map((item) => (
                  <div key={item.num} className="py-5 first:pt-2 last:pb-2 flex gap-5">
                    <span className="font-mono text-sm font-bold text-[#8c6a08] pt-1">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#122615] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#455245] leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#122615]/15 bg-[#f6f2e9] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8c6a08] block">
                    FUTURE BLUEPRINT
                  </span>
                  <p className="font-display text-base font-bold text-[#122615]">
                    The Smart Farm Agri-Empowerment Centre
                  </p>
                </div>
                <Link
                  href="/about"
                  className="font-mono text-xs uppercase tracking-wider text-[#122615] font-semibold hover:text-[#8c6a08] inline-flex items-center gap-1.5 shrink-0"
                >
                  <span>Explore Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE AQUACULTURE PROCESS & PRODUCE CATALOG (SECTION 02) */}
      <section
        id="products"
        className="bg-white px-5 sm:px-8 lg:px-12 py-20 lg:py-28 border-b border-[#122615]/15"
      >
        <div className="max-w-7xl mx-auto">
          {/* Editorial Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#122615]/20 pb-6 mb-14 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8c6a08] block mb-2">
                SECTION 02 — AQUACULTURE &amp; PRODUCE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#122615] tracking-tight">
                What We Raise &amp; Supply.
              </h2>
            </div>
            <p className="text-sm text-[#455245] max-w-md font-mono">
              Every batch is traceable from our Gayaza hatchery through solar-aerated concrete tanks
              to final dispatch.
            </p>
          </div>

          {/* Interactive 4-Stage Aquaculture Process Explorer */}
          <div className="mb-20 border border-[#122615]/20 bg-[#f6f2e9]">
            <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#122615]/20 divide-x divide-y lg:divide-y-0 divide-[#122615]/20">
              {lifecycleStages.map((stage, idx) => {
                const isSelected = activeStage === idx;
                return (
                  <button
                    key={stage.index}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`p-5 sm:p-6 text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#122615] text-white'
                        : 'bg-[#f6f2e9] text-[#122615] hover:bg-[#efe7d3]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full font-mono text-xs mb-3">
                      <span className={isSelected ? 'text-[#d9ae34]' : 'text-[#8c6a08]'}>
                        STAGE {stage.index}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isSelected ? 'bg-[#d9ae34]' : 'bg-[#122615]/20'
                        }`}
                      />
                    </div>
                    <p className="font-display text-base sm:text-lg font-bold leading-snug">
                      {stage.title}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detail View */}
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#8c6a08] block mb-3">
                    {currentStage.code}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#122615] mb-4">
                    {currentStage.title}
                  </h3>
                  <p className="text-[#455245] text-base leading-relaxed mb-8">
                    {currentStage.summary}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#122615]/15">
                  {currentStage.specs.map((spec) => (
                    <div key={spec.label}>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#455245] block">
                        {spec.label}
                      </span>
                      <span className="font-display text-base sm:text-lg font-bold text-[#122615] mt-1 block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] border-t lg:border-t-0 lg:border-l border-[#122615]/20 bg-[#0c1a0e]">
                <Image
                  src={currentStage.image}
                  alt={currentStage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0c1a0e] via-[#0c1a0e]/75 to-transparent p-4 text-xs font-mono text-[#efe7d3]">
                  {currentStage.caption}
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Produce & Services Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#122615]/20">
            {produceCatalog.map((item) => (
              <article
                key={item.index}
                className="border-r border-b border-[#122615]/20 p-7 sm:p-10 flex flex-col justify-between bg-white hover:bg-[#f6f2e9]/60 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#8c6a08] mb-5">
                    <span>{item.category}</span>
                    <span>/{item.index}</span>
                  </div>

                  <div className="relative h-56 w-full mb-6 overflow-hidden bg-[#122615]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#122615] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#1d3b22] bg-[#efe7d3] px-3 py-1.5 inline-block mb-4">
                    {item.specs}
                  </p>
                  <p className="text-sm sm:text-base text-[#455245] leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#122615]/15 flex items-center justify-between">
                  <Link
                    href={`/contact?category=${encodeURIComponent(item.inquiryCategory)}`}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] font-bold text-[#122615] group-hover:text-[#8c6a08] transition-colors"
                  >
                    <span>Request Supply / Quote</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <span className="font-mono text-[11px] text-[#455245]">
                    Gayaza Dispatch
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ORDER & POND STOCKING CALCULATOR (SECTION 03) */}
      <section
        id="calculator"
        className="bg-[#122615] bg-topography text-white px-5 sm:px-8 lg:px-12 py-20 lg:py-28 border-b border-white/15"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/15 pb-6 mb-12 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d9ae34] block mb-2">
                SECTION 03 — INTERACTIVE PLANNING DESK
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Order &amp; Stocking Calculator.
              </h2>
            </div>

            {/* Mode Switcher */}
            <div className="inline-flex border border-white/25 bg-[#0c1a0e] p-1 self-start">
              <button
                type="button"
                onClick={() => setCalcMode('order')}
                className={`px-4 sm:px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  calcMode === 'order'
                    ? 'bg-[#d9ae34] text-[#122615] font-bold'
                    : 'text-[#efe7d3]/80 hover:text-white'
                }`}
              >
                01. Table Catfish Order
              </button>
              <button
                type="button"
                onClick={() => setCalcMode('stocking')}
                className={`px-4 sm:px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  calcMode === 'stocking'
                    ? 'bg-[#d9ae34] text-[#122615] font-bold'
                    : 'text-[#efe7d3]/80 hover:text-white'
                }`}
              >
                02. Farmer Fingerling Calculator
              </button>
            </div>
          </div>

          {calcMode === 'order' ? (
            <div className="grid lg:grid-cols-12 border border-white/20 bg-[#0c1a0e]/85">
              {/* Left Controls */}
              <div className="lg:col-span-7 p-7 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-white/15">
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label
                      htmlFor="catfish-kg-slider"
                      className="font-mono text-xs uppercase tracking-widest text-[#d9ae34]"
                    >
                      1. Select Order Volume (Kilograms)
                    </label>
                    <span className="font-display text-3xl sm:text-4xl font-bold text-white">
                      {orderKg} <span className="text-lg font-normal text-[#d9ae34]">kg</span>
                    </span>
                  </div>
                  <input
                    id="catfish-kg-slider"
                    type="range"
                    min={5}
                    max={500}
                    step={5}
                    value={orderKg}
                    onChange={(e) => setOrderKg(Number(e.target.value))}
                    className="gb-slider"
                  />
                  <div className="flex justify-between font-mono text-[11px] text-white/45 mt-2">
                    <span>5 kg (Household)</span>
                    <span>20 kg (Wholesale Threshold)</span>
                    <span>100 kg (Hotel/Market)</span>
                    <span>500 kg+</span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#d9ae34] block mb-3">
                    2. Preparation Specification
                  </span>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {(['Whole Fresh', 'Gutted & Dressed', 'Kiln-Smoked'] as const).map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() => setPrepStyle(style)}
                        className={`py-3 px-4 text-left border font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          prepStyle === style
                            ? 'border-[#d9ae34] bg-[#d9ae34]/15 text-white font-bold'
                            : 'border-white/15 text-white/70 hover:border-white/35'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#d9ae34] block mb-3">
                    3. Dispatch &amp; Delivery Zone
                  </span>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {(
                      ['Gayaza Farm Pickup', 'Wakiso District', 'Kampala Metro'] as const
                    ).map((zone) => (
                      <button
                        key={zone}
                        type="button"
                        onClick={() => setDeliveryZone(zone)}
                        className={`py-3 px-4 text-left border font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          deliveryZone === zone
                            ? 'border-[#d9ae34] bg-[#d9ae34]/15 text-white font-bold'
                            : 'border-white/15 text-white/70 hover:border-white/35'
                        }`}
                      >
                        {zone}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Live Dispatch Summary */}
              <div className="lg:col-span-5 p-7 sm:p-10 bg-[#f6f2e9] text-[#122615] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#122615]/15 pb-3 mb-6 font-mono text-xs uppercase tracking-widest">
                    <span>ESTIMATED BATCH MANIFEST</span>
                    <span className="text-[#8c6a08] font-bold">{orderTier}</span>
                  </div>

                  <dl className="space-y-4 border-b border-[#122615]/15 pb-6 mb-6">
                    <div className="flex justify-between items-baseline">
                      <dt className="font-mono text-xs uppercase text-[#455245]">
                        Net Weight &amp; Style
                      </dt>
                      <dd className="font-display text-xl font-bold text-[#122615]">
                        {orderKg} kg • {prepStyle}
                      </dd>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <dt className="font-mono text-xs uppercase text-[#455245]">
                        Approx. Fish Count (0.8–1.1kg avg)
                      </dt>
                      <dd className="font-mono text-sm font-bold text-[#122615]">
                        ~{estimatedFishCount} Whole Fish
                      </dd>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <dt className="font-mono text-xs uppercase text-[#455245]">
                        Insulated Transport Crates
                      </dt>
                      <dd className="font-mono text-sm font-bold text-[#122615]">
                        {crateCount} {crateCount === 1 ? 'Crate' : 'Crates'} (25 kg cap.)
                      </dd>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <dt className="font-mono text-xs uppercase text-[#455245]">
                        Logistics Route
                      </dt>
                      <dd className="font-mono text-sm font-bold text-[#1d3b22]">
                        {deliveryZone}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="space-y-3">
                  <Link
                    href={`/contact?category=${encodeURIComponent(
                      'Fresh Catfish Order (Wholesale/Retail)'
                    )}&volume=${encodeURIComponent(
                      `${orderKg} kg (${prepStyle}) — ${deliveryZone}`
                    )}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#122615] hover:bg-[#1d3b22] text-[#d9ae34] font-mono text-xs uppercase tracking-[0.15em] font-bold py-4 px-6 transition-colors"
                  >
                    <span>Lock In Quote on Dispatch Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`https://wa.me/256772421174?text=${encodeURIComponent(whatsappOrderText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 border border-[#122615] text-[#122615] hover:bg-[#122615]/5 font-mono text-xs uppercase tracking-[0.15em] font-bold py-3.5 px-6 transition-colors"
                  >
                    <span>Send Manifest via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12 border border-white/20 bg-[#0c1a0e]/85">
              {/* Left Fingerling Stocking Controls */}
              <div className="lg:col-span-7 p-7 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-white/15">
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label
                      htmlFor="tank-area-slider"
                      className="font-mono text-xs uppercase tracking-widest text-[#d9ae34]"
                    >
                      1. Total Tank or Pond Surface Area (m²)
                    </label>
                    <span className="font-display text-3xl sm:text-4xl font-bold text-white">
                      {tankArea} <span className="text-lg font-normal text-[#d9ae34]">m²</span>
                    </span>
                  </div>
                  <input
                    id="tank-area-slider"
                    type="range"
                    min={10}
                    max={400}
                    step={10}
                    value={tankArea}
                    onChange={(e) => setTankArea(Number(e.target.value))}
                    className="gb-slider"
                  />
                  <div className="flex justify-between font-mono text-[11px] text-white/45 mt-2">
                    <span>10 m² (Single Tank)</span>
                    <span>60 m² (6-Tank Cluster)</span>
                    <span>200 m² (Commercial)</span>
                    <span>400 m²</span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#d9ae34] block mb-3">
                    2. Production System Architecture
                  </span>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setSystemType('solar-concrete')}
                      className={`p-4 text-left border transition-all cursor-pointer ${
                        systemType === 'solar-concrete'
                          ? 'border-[#d9ae34] bg-[#d9ae34]/15 text-white'
                          : 'border-white/15 text-white/70 hover:border-white/35'
                      }`}
                    >
                      <span className="font-mono text-xs uppercase tracking-wider text-[#d9ae34] block mb-1">
                        High-Density System
                      </span>
                      <p className="font-display text-lg font-bold">
                        Concrete Tank + Solar Circulation
                      </p>
                      <p className="text-xs text-white/65 mt-1">
                        ~65 fingerlings / m² with continuous water oxygenation
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSystemType('earthen-pond')}
                      className={`p-4 text-left border transition-all cursor-pointer ${
                        systemType === 'earthen-pond'
                          ? 'border-[#d9ae34] bg-[#d9ae34]/15 text-white'
                          : 'border-white/15 text-white/70 hover:border-white/35'
                      }`}
                    >
                      <span className="font-mono text-xs uppercase tracking-wider text-[#d9ae34] block mb-1">
                        Conventional System
                      </span>
                      <p className="font-display text-lg font-bold">
                        Static Earthen Pond
                      </p>
                      <p className="text-xs text-white/65 mt-1">
                        ~15 fingerlings / m² for natural pond ecosystems
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Fingerling Stocking Output */}
              <div className="lg:col-span-5 p-7 sm:p-10 bg-[#f6f2e9] text-[#122615] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#122615]/15 pb-3 mb-6 font-mono text-xs uppercase tracking-widest">
                    <span>GAYAZA HATCHERY PROJECTION</span>
                    <span className="text-[#8c6a08] font-bold">6-MONTH CYCLE</span>
                  </div>

                  <dl className="space-y-4 border-b border-[#122615]/15 pb-6 mb-6">
                    <div className="flex justify-between items-baseline">
                      <dt className="font-mono text-xs uppercase text-[#455245]">
                        Recommended Fingerlings
                      </dt>
                      <dd className="font-display text-2xl font-bold text-[#122615]">
                        {recommendedFingerlings.toLocaleString()} pcs
                      </dd>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <dt className="font-mono text-xs uppercase text-[#455245]">
                        Projected 6-Month Harvest
                      </dt>
                      <dd className="font-mono text-sm font-bold text-[#1d3b22]">
                        ~{projectedHarvestKg.toLocaleString()} kg Table Fish
                      </dd>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <dt className="font-mono text-xs uppercase text-[#455245]">
                        Est. Floating Feed (20kg Bags)
                      </dt>
                      <dd className="font-mono text-sm font-bold text-[#122615]">
                        ~{estimatedFeedBags} Bags (Full Cycle)
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="space-y-3">
                  <Link
                    href={`/contact?category=${encodeURIComponent(
                      'Catfish Fingerlings'
                    )}&volume=${encodeURIComponent(
                      `${recommendedFingerlings.toLocaleString()} fingerlings (${tankArea} m² ${
                        systemType === 'solar-concrete' ? 'Concrete Tank' : 'Earthen Pond'
                      })`
                    )}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#122615] hover:bg-[#1d3b22] text-[#d9ae34] font-mono text-xs uppercase tracking-[0.15em] font-bold py-4 px-6 transition-colors"
                  >
                    <span>Book Fingerling Batch</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`https://wa.me/256772421174?text=${encodeURIComponent(whatsappOrderText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 border border-[#122615] text-[#122615] hover:bg-[#122615]/5 font-mono text-xs uppercase tracking-[0.15em] font-bold py-3.5 px-6 transition-colors"
                  >
                    <span>Discuss Stocking Plan on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. LEADERSHIP GALLERY (SECTION 04) */}
      <section
        id="team"
        className="bg-[#0c1a0e] text-white px-5 sm:px-8 lg:px-12 py-20 lg:py-28 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d9ae34] block mb-2">
                SECTION 04 — STEWARDSHIP
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                The People Behind the Tanks.
              </h2>
            </div>
            <p className="text-sm text-[#efe7d3]/70 max-w-md">
              A multidisciplinary Ugandan team combining hands-on aquaculture engineering, finance,
              and rural enterprise management.
            </p>
          </div>
          <Team />
        </div>
      </section>

      {/* 7. CUSTOMER DISPATCHES / TESTIMONIALS (SECTION 05) */}
      <section
        id="testimonials"
        className="bg-white px-5 sm:px-8 lg:px-12 py-20 lg:py-28 border-b border-[#122615]/15"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#122615]/20 pb-6 mb-14 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8c6a08] block mb-2">
                SECTION 05 — FIELD RECEPTION
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#122615] tracking-tight">
                What Buyers &amp; Technicians Say.
              </h2>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#455245]">
              KAMPALA • BUGEMA • WAKISO
            </span>
          </div>

          <Swiper
            spaceBetween={28}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 18 },
              768: { slidesPerView: 2, spaceBetween: 28 },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full pb-14"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <TestimonialCard {...t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 8. INSTITUTIONAL PARTNERS & FIELD COLLABORATION BANNER */}
      <section className="bg-[#122615] text-white px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d9ae34] block mb-2">
                SECTION 06 — INSTITUTIONAL BACKING
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Backed by Uganda&apos;s Leading Accelerators.
              </h2>
            </div>
            <p className="text-sm text-[#efe7d3]/75 max-w-md">
              Our solar-powered tank expansion and enterprise governance have been validated by
              premier national agribusiness and innovation institutions.
            </p>
          </div>

          <Partners />

          {/* Full-Bleed Editorial Partnership Callout */}
          <div className="mt-16 relative overflow-hidden border border-white/20 bg-[#0c1a0e]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/Images/work_with_us.jpg"
                alt="Partner with Golden Basket Ltd"
                fill
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a0e] via-[#0c1a0e]/85 to-transparent" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d9ae34] block mb-3">
                WHOLESALE • OUT-GROWERS • GRANT PARTNERSHIPS
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Source Fresh Catfish or Scale Community Aquaculture?
              </h3>
              <p className="text-[#efe7d3]/85 text-base sm:text-lg leading-relaxed mb-8">
                Whether you manage a hotel kitchen in Kampala, need vigorous fingerlings for your
                ponds, or represent an agricultural development program, our Gayaza desk is ready to
                collaborate.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#d9ae34] hover:bg-[#e5be46] text-[#122615] font-mono text-xs uppercase tracking-[0.15em] font-bold px-7 py-4 rounded-sm transition-colors"
                >
                  <span>Open Dispatch &amp; Partnership Desk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+256772421174"
                  className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-[0.15em] px-7 py-4 rounded-sm transition-colors"
                >
                  <span>Call +256 772 421 174</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowDownRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 4L12 12M12 12V5M12 12H5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}