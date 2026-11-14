"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface TimelineMilestone {
  year: string;
  phase: string;
  location: string;
  title: string;
  text: string;
  outcome: string;
}

const timelineData: TimelineMilestone[] = [
  {
    year: "2018",
    phase: "CHAPTER 01",
    location: "Bweyale, Kiryandongo District",
    title: "The Subsistence Roots",
    text: "Our agricultural journey began in Bweyale, Kiryandongo District with small-scale subsistence crop farming—laying the practical agronomic foundation for commercial food production.",
    outcome: "Established founding farmland in Northern Uganda",
  },
  {
    year: "2019",
    phase: "CHAPTER 02",
    location: "Gayaza, Wakiso District",
    title: "Incorporation & Commercial Poultry",
    text: "Golden Basket Ltd was officially incorporated in Uganda and expanded operations to Gayaza, Wakiso District, raising commercial layers and broilers for urban markets.",
    outcome: "Registered Golden Basket Ltd & established Wakiso operations",
  },
  {
    year: "2020",
    phase: "CHAPTER 03",
    location: "Wakiso District",
    title: "Pandemic Pivot & Aquaculture Research",
    text: "Confronted by COVID-19 supply chain lockdowns and surging poultry feed prices, we paused poultry operations and conducted deep feasibility research into resilient freshwater aquaculture.",
    outcome: "Identified high-density African catfish farming as core growth engine",
  },
  {
    year: "2021",
    phase: "CHAPTER 04",
    location: "Gayaza Aquaculture Hub",
    title: "Launch of Flagship Catfish Project",
    text: "Commissioned our flagship African catfish production unit in Wakiso District, focusing on water quality management, fingerling survival, and consistent table-size harvests.",
    outcome: "First commercial harvests delivered to Kampala & Wakiso buyers",
  },
  {
    year: "2022",
    phase: "CHAPTER 05",
    location: "Wakiso & Kiryandongo",
    title: "Value Chain Expansion & Smart Farm Blueprint",
    text: "Expanded our technical team and customer base while drafting the blueprint for the Smart Farm Agri-Empowerment Centre—integrating production, processing, and farmer training.",
    outcome: "Developed out-grower training curriculum & value-addition roadmap",
  },
  {
    year: "2023",
    phase: "CHAPTER 06",
    location: "Gayaza, Wakiso District",
    title: "NSSF Hi-Innovator Award & 6 Solar Concrete Tanks",
    text: "Selected for seed funding under the NSSF Hi-Innovator Program, enabling the construction of 6 reinforced concrete tanks equipped with an off-grid solar water circulation system.",
    outcome: "6 concrete tanks + solar pump system commissioned at Gayaza",
  },
];

const operatingPrinciples = [
  {
    num: "01",
    name: "Ecological Stewardship",
    description:
      "Solar-powered water oxygenation, zero-hormone feeding regimes, and responsible freshwater conservation.",
  },
  {
    num: "02",
    name: "Engineering Precision",
    description:
      "Reinforced concrete tank design, scheduled grading intervals, and disciplined water pH and dissolved-oxygen monitoring.",
  },
  {
    num: "03",
    name: "Rural & Youth Livelihoods",
    description:
      "Equipping Ugandan youth, women, and out-grower farmers with viable fingerlings and practical aquaculture economics.",
  },
  {
    num: "04",
    name: "Uncompromised Food Quality",
    description:
      "Clean-water table catfish harvested to order with firm texture and traceable farm-to-kitchen handling.",
  },
];

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState<string>("2023");
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const year = entry.target.getAttribute("data-year");
          if (year && entry.isIntersecting) {
            setActiveYear(year);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-10% 0px -25% 0px",
      }
    );

    Object.values(itemRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToYear = (year: string) => {
    setActiveYear(year);
    const target = itemRefs.current[year];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <main className="bg-[#f6f2e9] text-[#122615]">
      {/* 1. EDITORIAL MONOGRAPH HERO */}
      <section className="bg-[#0c1a0e] text-white px-5 sm:px-8 lg:px-12 py-16 lg:py-24 relative overflow-hidden border-b border-white/15">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#d9ae34]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d9ae34]">
                COMPANY MONOGRAPH • EST. 2018–2019
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Cultivating Resilient Food Systems in{" "}
              <span className="italic font-normal text-[#d9ae34]">Uganda.</span>
            </h1>

            <p className="text-[#efe7d3]/85 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
              Golden Basket Ltd began on subsistence farmland in Bweyale, Kiryandongo District and
              evolved into an award-winning solar-powered aquaculture enterprise in Gayaza, Wakiso
              District.
            </p>

            {/* Architectural Ledger Strip */}
            <div className="grid grid-cols-3 border-t border-b border-white/15 py-5 mb-10 gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#d9ae34] block">
                  INCORPORATED
                </span>
                <p className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                  2019
                </p>
              </div>
              <div className="border-l border-white/15 pl-4 sm:pl-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#d9ae34] block">
                  SOLAR AQUACULTURE
                </span>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#d9ae34] mt-1">
                  06 Tanks
                </p>
              </div>
              <div className="border-l border-white/15 pl-4 sm:pl-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#d9ae34] block">
                  RECOGNITION
                </span>
                <p className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                  NSSF Fellow
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#d9ae34] hover:bg-[#e5be46] text-[#122615] font-mono text-xs uppercase tracking-[0.15em] font-bold px-7 py-4 rounded-sm transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2.5 border border-white/30 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-[0.15em] px-7 py-4 rounded-sm transition-colors"
              >
                <span>View Produce &amp; Systems</span>
              </Link>
            </div>
          </div>

          {/* Responsive Editorial Dual-Frame Collage */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative h-80 sm:h-96 w-full">
              <figure className="absolute top-0 left-0 w-3/4 h-60 sm:h-72 border border-white/20 bg-[#122615] p-2.5 z-20 shadow-2xl">
                <div className="relative w-full h-[calc(100%-24px)] overflow-hidden">
                  <Image
                    src="/Images/DFCU_pic.jpg"
                    alt="Golden Basket leadership and recognition"
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="font-mono text-[10px] uppercase tracking-widest text-[#d9ae34] pt-1.5 flex justify-between">
                  <span>ARCHIVE 01 — RECOGNITION</span>
                  <span>KAMPALA</span>
                </figcaption>
              </figure>

              <figure className="absolute bottom-0 right-0 w-3/4 h-60 sm:h-72 border border-[#d9ae34]/50 bg-[#122615] p-2.5 z-10 shadow-2xl">
                <div className="relative w-full h-[calc(100%-24px)] overflow-hidden">
                  <Image
                    src="/Images/Ame.jpg"
                    alt="Golden Basket concrete aquaculture tanks"
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="font-mono text-[10px] uppercase tracking-widest text-white/80 pt-1.5 flex justify-between">
                  <span>ARCHIVE 02 — SOLAR TANKS</span>
                  <span>GAYAZA</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION, MISSION & OPERATING PRINCIPLES */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 bg-white border-b border-[#122615]/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#122615]/20 pb-6 mb-14 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8c6a08] block mb-2">
                01 — MANDATE &amp; CHARTER
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#122615] tracking-tight">
                Vision, Mission &amp; Principles.
              </h2>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#455245]">
              GAYAZA &amp; BWEYALE OPERATIONS
            </span>
          </div>

          {/* Vision & Mission Architectural Split */}
          <div className="grid md:grid-cols-2 border-t border-l border-[#122615]/20 mb-16">
            {/* Vision */}
            <div className="border-r border-b border-[#122615]/20 p-8 sm:p-12 bg-[#f6f2e9]/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#8c6a08] mb-6">
                  <span>CHARTER I / LONG-TERM HORIZON</span>
                  <span>VISION</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#122615] mb-4">
                  Our Vision
                </h3>
                <p className="text-[#122615]/90 text-base sm:text-lg leading-relaxed mb-8">
                  To be the prime choice provider of superior high-quality goods and services in
                  the agribusiness value chain, fostering livelihoods, and contributing to economic
                  growth in Africa while remaining a key driver of sustainable success.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#122615]/15">
                <div className="relative h-40 w-full overflow-hidden border border-[#122615]/15">
                  <Image
                    src="/Images/vision_1.png"
                    alt="Golden Basket Vision"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-[#122615]/15">
                  <Image
                    src="/Images/vision_2.png"
                    alt="Sustainable farming in Uganda"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="border-r border-b border-[#122615]/20 p-8 sm:p-12 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#8c6a08] mb-6">
                  <span>CHARTER II / DAILY PRACTICE</span>
                  <span>MISSION</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#122615] mb-4">
                  Our Mission
                </h3>
                <p className="text-[#122615]/90 text-base sm:text-lg leading-relaxed mb-8">
                  To provide customers with a choice of diverse, high-quality goods and services
                  delivered through sustainable, responsible, and innovative practices in the
                  agribusiness industry.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#122615]/15">
                <div className="relative h-40 w-full overflow-hidden border border-[#122615]/15">
                  <Image
                    src="/Images/mission_2.png"
                    alt="Fresh catfish harvest"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 w-full overflow-hidden border border-[#122615]/15">
                  <Image
                    src="/Images/mission_1.png"
                    alt="Community training"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4 Operating Principles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#122615]/20">
            {operatingPrinciples.map((item) => (
              <div
                key={item.num}
                className="border-r border-b border-[#122615]/20 p-7 bg-[#122615] text-white flex flex-col justify-between"
              >
                <span className="font-mono text-xs text-[#d9ae34] block mb-6">
                  PRINCIPLE /{item.num}
                </span>
                <div>
                  <h4 className="font-display text-xl font-bold text-white mb-2">
                    {item.name}
                  </h4>
                  <p className="text-sm text-[#efe7d3]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUNDER'S LETTER & SMART FARM BLUEPRINT */}
      <section className="bg-[#f6f2e9] bg-parchment-grain px-5 sm:px-8 lg:px-12 py-20 lg:py-28 border-b border-[#122615]/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#122615]/20 pb-6 mb-14 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8c6a08] block mb-2">
                02 — FOUNDER&apos;S DISPATCH
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#122615] tracking-tight">
                Resilience in Every Harvest.
              </h2>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#455245]">
              FRANCES PHILIPPA ELUZAI • CEO &amp; FOUNDER
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Portrait Column */}
            <div className="lg:col-span-5">
              <figure className="border border-[#122615]/20 bg-white p-4">
                <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden bg-[#122615]">
                  <Image
                    src="/Images/Likia.jpeg"
                    alt="Frances Philippa Eluzai, CEO & Founder of Golden Basket Ltd"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="pt-4 flex items-baseline justify-between border-t border-[#122615]/15 mt-4">
                  <div>
                    <p className="font-display text-lg font-bold text-[#122615]">
                      Frances Philippa Eluzai
                    </p>
                    <p className="font-mono text-xs uppercase tracking-wider text-[#8c6a08]">
                      Founder &amp; Chief Executive Officer
                    </p>
                  </div>
                  <span className="font-mono text-[11px] text-[#455245]">
                    NSSF Hi-Innovator
                  </span>
                </figcaption>
              </figure>
            </div>

            {/* Editorial Letter Column */}
            <div className="lg:col-span-7 space-y-6">
              <blockquote className="font-display text-2xl sm:text-3xl text-[#122615] leading-snug border-l-2 border-[#8c6a08] pl-6 py-1">
                &ldquo;When feed disruptions tested Uganda’s agricultural sector in 2020, we saw an
                opportunity to reimagine how affordable, clean-water fish protein is raised close to
                our communities.&rdquo;
              </blockquote>

              <div className="space-y-4 text-[#122615]/85 text-base sm:text-lg leading-relaxed pt-2">
                <p>
                  Golden Basket Ltd, founded in 2019 in Bweyale, Uganda, is committed to
                  transforming lives through sustainable agriculture. Starting with subsistence
                  farming, we expanded into commercial poultry in Gayaza, and in 2021 launched our
                  flagship African catfish farming operation to supply nutritious, locally grown
                  protein.
                </p>
                <p>
                  Today, we operate six concrete tanks powered by solar water circulation while
                  preparing for our next phase in value addition, integrated crop farming, and
                  regional agribusiness trade.
                </p>
              </div>

              {/* Architectural Blueprint Box */}
              <div className="border border-[#122615] bg-white p-7 sm:p-9 mt-8">
                <div className="flex items-center justify-between border-b border-[#122615]/15 pb-3 mb-4 font-mono text-xs uppercase tracking-widest">
                  <span className="text-[#8c6a08] font-bold">
                    STRATEGIC MASTERPLAN
                  </span>
                  <span className="text-[#122615]">NEXT HORIZON</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#122615] mb-2">
                  The Smart Farm Agri-Empowerment Centre
                </h3>
                <p className="text-sm sm:text-base text-[#455245] leading-relaxed mb-6">
                  Our long-term blueprint for an integrated hub uniting commercial aquaculture
                  production, hygienic fish smoking and filleting, direct market trading, and
                  hands-on farmer training under one roof.
                </p>
                <Link
                  href="/contact?category=Agribusiness%20Partnership%20%2F%20Grant"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] font-bold text-[#122615] hover:text-[#8c6a08] transition-colors"
                >
                  <span>Inquire About Strategic Partnerships</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE FIELD CHRONICLE TIMELINE (2018–2023) */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 bg-[#122615] bg-topography text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/15 pb-6 mb-12 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d9ae34] block mb-2">
                03 — CHRONICLE (2018 – 2023)
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Six Years of Field Milestones.
              </h2>
            </div>

            {/* Interactive Year Index Bar */}
            <div className="flex flex-wrap border border-white/20 bg-[#0c1a0e] p-1 self-start">
              {timelineData.map((item) => {
                const isSelected = activeYear === item.year;
                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => scrollToYear(item.year)}
                    className={`px-3.5 sm:px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#d9ae34] text-[#122615] font-bold"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.year}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Architectural Ledger Timeline */}
          <div className="border-t border-white/15 divide-y divide-white/15">
            {timelineData.map((item) => {
              const isActive = activeYear === item.year;
              return (
                <article
                  key={item.year}
                  data-year={item.year}
                  ref={(el) => {
                    itemRefs.current[item.year] = el;
                  }}
                  onClick={() => setActiveYear(item.year)}
                  className={`grid md:grid-cols-12 gap-6 py-8 sm:py-10 px-4 sm:px-6 transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#1d3b22]/90 border-l-4 border-l-[#d9ae34]"
                      : "hover:bg-white/5"
                  }`}
                >
                  {/* Year & Phase */}
                  <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#d9ae34]">
                      {item.phase}
                    </span>
                    <span className="font-display text-4xl sm:text-5xl font-bold text-white">
                      {item.year}
                    </span>
                    <span className="font-mono text-xs text-white/55 mt-1 hidden md:block">
                      {item.location}
                    </span>
                  </div>

                  {/* Narrative */}
                  <div className="md:col-span-6">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#efe7d3]/85 text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* Recorded Outcome */}
                  <div className="md:col-span-3 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/15 pt-4 md:pt-0 md:pl-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#d9ae34]">
                      KEY MILESTONE OUTCOME
                    </span>
                    <p className="font-mono text-xs sm:text-sm text-white/90 leading-relaxed mt-2">
                      {item.outcome}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM DISPATCH CALLOUT */}
      <section className="py-16 lg:py-20 px-5 sm:px-8 lg:px-12 bg-[#f6f2e9] border-t border-[#122615]/15">
        <div className="max-w-7xl mx-auto border border-[#122615] bg-white p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8c6a08] block mb-2">
              DIRECT FARM DISPATCH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#122615] mb-3">
              Visit Our Gayaza Tanks or Place a Wholesale Order.
            </h2>
            <p className="text-[#455245] text-base leading-relaxed">
              Connect directly with our operations team for table fish supply, fingerling batches,
              or institutional partnership inquiries.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#122615] hover:bg-[#1d3b22] text-[#d9ae34] font-mono text-xs uppercase tracking-[0.15em] font-bold px-7 py-4 rounded-sm transition-colors"
            >
              <span>Open Dispatch Desk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 border border-[#122615] text-[#122615] hover:bg-[#122615]/5 font-mono text-xs uppercase tracking-[0.15em] font-bold px-7 py-4 rounded-sm transition-colors"
            >
              <span>Order Calculator</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
