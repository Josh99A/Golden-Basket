"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import {
  Sprout,
  Building2,
  ShieldCheck,
  Fish,
  TrendingUp,
  Award,
  Sparkles,
  Target,
  Compass,
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Sun,
} from "lucide-react";

interface TimelineMilestone {
  year: string;
  title: string;
  tag: string;
  text: string;
  highlight: string;
  left: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const timelineData: TimelineMilestone[] = [
  {
    year: "2018",
    title: "The Humble Beginning",
    tag: "Origins • Bweyale",
    text: "Subsistence crop farming begins in Bweyale, Kiryandongo District, Uganda — planting the seeds of a bigger agribusiness vision rooted in community food security.",
    highlight: "Laid foundational agricultural practices in Kiryandongo District",
    left: true,
    icon: Sprout,
  },
  {
    year: "2019",
    title: "Golden Basket Ltd is Born",
    tag: "Incorporation • Gayaza",
    text: "Officially registered as a company, we expanded into commercial poultry farming in Gayaza, Wakiso District, raising layers and broilers for urban households.",
    highlight: "Formalized operations & expanded into Wakiso District",
    left: false,
    icon: Building2,
  },
  {
    year: "2020",
    title: "Challenge & Resilience",
    tag: "Strategic Pivot",
    text: "Faced with COVID-19 supply disruptions and rising poultry feed costs, we paused poultry farming and began intensive research into resilient, sustainable aquaculture.",
    highlight: "Identified high-demand protein gap in Uganda's aquaculture market",
    left: true,
    icon: ShieldCheck,
  },
  {
    year: "2021",
    title: "Innovation Through Fish Farming",
    tag: "Flagship Aquaculture",
    text: "We launched our flagship African catfish production project in Wakiso District, focusing on water quality, superior genetics, consistency, and market needs.",
    highlight: "Established end-to-end breeding, fingerling & table-fish production",
    left: false,
    icon: Fish,
  },
  {
    year: "2022",
    title: "Growth & Smart Farm Vision",
    tag: "Scale & Ecosystem",
    text: "Steadily growing our operations, team, and community impact — designing blueprints for value addition, integrated crop farming, and regional export readiness.",
    highlight: "Conceived the Smart Farm Agri-Empowerment Centre model",
    left: true,
    icon: TrendingUp,
  },
  {
    year: "2023",
    title: "Seed Funding from NSSF Hi-Innovator",
    tag: "Clean Energy & Expansion",
    text: "Won competitive seed funding from the NSSF Hi-Innovator Program and constructed 6 modern concrete tanks equipped with a solar water pump system, maximizing production capacity.",
    highlight: "6 concrete tanks + solar-powered water circulation infrastructure",
    left: false,
    icon: Award,
  },
];

const coreValues = [
  {
    name: "Sustainability",
    description:
      "Solar-powered water systems, eco-friendly pond management, and responsible resource stewardship.",
    icon: Sun,
  },
  {
    name: "Innovation",
    description:
      "Modern concrete tank engineering, high-yield breeding, and smart farm agribusiness systems.",
    icon: Sparkles,
  },
  {
    name: "Community Empowerment",
    description:
      "Training local farmers, creating youth and women employment, and uplifting rural households.",
    icon: Users,
  },
  {
    name: "Quality Excellence",
    description:
      "Nutrient-rich, clean-water African catfish and vigorous fingerlings raised to strict standards.",
    icon: CheckCircle2,
  },
];

export default function AboutPage() {
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({
    "2018": true,
    "2019": true,
  });
  const [activeYear, setActiveYear] = useState<string>("2023");
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const year = entry.target.getAttribute("data-year");
          if (year && entry.isIntersecting) {
            setVisibleItems((prev) => ({ ...prev, [year]: true }));
            setActiveYear(year);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    Object.values(itemRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToYear = (year: string) => {
    setActiveYear(year);
    setVisibleItems((prev) => ({ ...prev, [year]: true }));
    const target = itemRefs.current[year];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <main className="bg-[#F5F1E8] text-[#183113]">
      {/* Hero Section */}
      <section className="bg-[#183113] text-white px-6 lg:px-16 py-16 lg:py-24 relative overflow-hidden">
        {/* Pattern background covering the whole hero section */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-25">
          <Image
            src="/Images/patterns/about_hero_pattern.png"
            alt="Golden Basket Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#183113]/95 via-[#183113]/85 to-[#204E36]/90 z-0" />

        {/* Content on top of the pattern */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6B81A]/20 border border-[#F6B81A]/40 text-[#F6B81A] text-sm font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Est. 2018–2019 • Gayaza & Bweyale, Uganda</span>
            </div>

            <h1 className="text-[#F6B81A] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              About Golden Basket Ltd
            </h1>

            <p className="text-white/95 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Transforming livelihoods through sustainable agribusiness, modern solar-powered
              aquaculture, and community-driven food systems across Uganda.
            </p>

            {/* Quick Key Facts */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5 text-left">
                <p className="text-[#F6B81A] text-xl sm:text-2xl font-extrabold">2019</p>
                <p className="text-xs sm:text-sm text-white/85">Incorporated in Uganda</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5 text-left">
                <p className="text-[#F6B81A] text-xl sm:text-2xl font-extrabold">6 Tanks</p>
                <p className="text-xs sm:text-sm text-white/85">Solar Concrete System</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5 text-left">
                <p className="text-[#F6B81A] text-xl sm:text-2xl font-extrabold">NSSF</p>
                <p className="text-xs sm:text-sm text-white/85">Hi-Innovator Winner</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F6B81A] hover:bg-[#e0a612] text-[#183113] font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                <span>Explore Our Products</span>
              </Link>
            </div>
          </div>

          {/* Fixed Responsive Overlapping Image Collage */}
          <div className="w-full max-w-md mx-auto relative h-72 md:h-96 flex-shrink-0">
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-[#F6B81A]/15 rounded-3xl blur-2xl pointer-events-none" />

            {/* Top-left image */}
            <div className="absolute top-0 left-2 sm:left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F6B81A] transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-20 bg-[#204E36]">
              <Image
                src="/Images/DFCU_pic.jpg"
                alt="Golden Basket leadership and recognition"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#183113]/90 via-[#183113]/50 to-transparent p-2.5">
                <span className="text-xs font-bold text-[#F6B81A] block">
                  Award-Winning Enterprise
                </span>
              </div>
            </div>

            {/* Bottom-right overlapping image */}
            <div className="absolute bottom-0 right-2 sm:right-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300 z-10 bg-[#204E36]">
              <Image
                src="/Images/Ame.jpg"
                alt="Golden Basket sustainable aquaculture operations"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#183113]/90 via-[#183113]/50 to-transparent p-2.5">
                <span className="text-xs font-bold text-white block">
                  Sustainable Aquaculture
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-3 left-2 sm:left-6 z-30 bg-[#183113] text-white border-2 border-[#F6B81A] rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F6B81A] flex-shrink-0" />
              <span className="text-xs font-bold tracking-wide">Wakiso & Kiryandongo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#204E36] bg-[#F5F1E8] px-3.5 py-1.5 rounded-full mb-3">
              Purpose & Direction
            </span>
            <h2 className="text-[#183113] text-3xl sm:text-4xl font-extrabold mb-4">
              Guided by Vision, Driven by Mission
            </h2>
            <p className="text-[#183113]/80 text-base sm:text-lg">
              Every fish we raise and every farmer we train advances a more food-secure,
              prosperous East Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Vision Card */}
            <div className="bg-[#F5F1E8]/70 border border-[#183113]/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full max-w-xs mx-auto sm:mx-0 relative h-60 sm:h-64 mb-8">
                <div className="absolute top-0 left-0 w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white z-20">
                  <Image
                    src="/Images/vision_1.png"
                    alt="Golden Basket Vision - High quality aquaculture"
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-4 sm:left-28 sm:right-auto w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-[#F6B81A] z-10">
                  <Image
                    src="/Images/vision_2.png"
                    alt="Golden Basket Vision - Sustainable farming"
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-3 right-2 sm:right-4 z-30 bg-[#183113] text-[#F6B81A] p-2.5 rounded-xl shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#204E36] mb-2">
                <span>Long-Term Horizon</span>
              </div>
              <h3 className="text-[#183113] text-2xl sm:text-3xl font-extrabold mb-4">
                Our Vision
              </h3>
              <p className="text-[#183113] text-base sm:text-lg leading-relaxed">
                To be the prime choice provider of superior high-quality goods and services in the
                agribusiness value chain, fostering livelihoods, and contributing to economic growth
                in Africa while remaining a key driver of sustainable success.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#F5F1E8]/70 border border-[#183113]/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full max-w-xs mx-auto sm:mx-0 relative h-60 sm:h-64 mb-8">
                <div className="absolute top-0 left-0 w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white z-20">
                  <Image
                    src="/Images/mission_2.png"
                    alt="Golden Basket Mission - Fresh catfish production"
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-4 sm:left-28 sm:right-auto w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-[#F6B81A] z-10">
                  <Image
                    src="/Images/mission_1.png"
                    alt="Golden Basket Mission - Community agribusiness"
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-3 right-2 sm:right-4 z-30 bg-[#183113] text-[#F6B81A] p-2.5 rounded-xl shadow-md">
                  <Target className="w-6 h-6" />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#204E36] mb-2">
                <span>Daily Commitment</span>
              </div>
              <h3 className="text-[#183113] text-2xl sm:text-3xl font-extrabold mb-4">
                Our Mission
              </h3>
              <p className="text-[#183113] text-base sm:text-lg leading-relaxed">
                To provide customers with a choice of diverse, high-quality goods and services
                delivered through sustainable, responsible, and innovative practices in the
                agribusiness industry.
              </p>
            </div>
          </div>

          {/* Core Values Pills & Cards */}
          <div className="bg-[#183113] rounded-3xl p-8 lg:p-12 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
              <div>
                <span className="text-[#F6B81A] text-xs font-bold uppercase tracking-widest block mb-2">
                  What We Stand For
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Our Core Values
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {coreValues.map((val) => (
                  <span
                    key={val.name}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B81A] text-[#183113] text-xs sm:text-sm font-bold shadow-sm"
                  >
                    <val.icon className="w-4 h-4" />
                    {val.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreValues.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.name}
                    className="bg-white/10 border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F6B81A]/20 border border-[#F6B81A]/40 flex items-center justify-center text-[#F6B81A] mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{val.name}</h4>
                    <p className="text-sm text-white/85 leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Story Section */}
      <section className="bg-[#FBF3DC] px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* CEO Image Column */}
          <div className="lg:col-span-5 relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[#F6B81A] bg-[#183113]">
              <Image
                src="/Images/Likia.jpeg"
                alt="Frances Philippa Eluzai, CEO & Founder of Golden Basket Ltd"
                width={600}
                height={650}
                className="object-cover w-full h-[380px] sm:h-[460px] transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#183113] via-[#183113]/80 to-transparent p-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F6B81A] text-[#183113] text-xs font-extrabold uppercase tracking-wider mb-2">
                  Leadership Spotlight
                </span>
                <h3 className="text-xl font-bold text-white">Frances Philippa Eluzai</h3>
                <p className="text-sm text-white/85">CEO & Founder, Golden Basket Ltd</p>
              </div>
            </div>
          </div>

          {/* CEO Speech & Smart Farm Callout */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183113] text-[#F6B81A] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Founder’s Message</span>
            </div>
            <h2 className="text-[#183113] text-3xl sm:text-4xl font-extrabold mb-6">
              Our Story: Resilience & Purpose in Every Harvest
            </h2>

            <div className="relative bg-white border-l-4 border-[#F6B81A] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#F6B81A] text-[#183113] flex items-center justify-center shadow-md mb-6">
                <FaQuoteLeft className="text-xl" />
              </div>

              <div className="space-y-4 text-[#183113] text-base sm:text-lg leading-relaxed">
                <p>
                  Golden Basket Ltd, founded in 2019 in Bweyale, Uganda, is committed to
                  transforming lives through sustainable agriculture. Starting with subsistence
                  farming, we expanded into poultry, and later, in response to COVID-19 challenges,
                  launched a flagship catfish farming project in 2021 to provide affordable,
                  high-quality protein.
                </p>
                <p>
                  Today, we focus on fresh catfish production while preparing for future ventures in
                  value addition, crop farming, and agribusiness export. With a passionate team and
                  a clear purpose, Golden Basket is becoming a trusted name in Uganda’s agricultural
                  sector, empowering households, creating jobs, and building a more resilient
                  future.
                </p>
              </div>

              {/* Smart Farm Agri-Empowerment Centre Callout */}
              <div className="mt-6 p-5 rounded-xl bg-[#F5F1E8] border border-[#183113]/15">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#183113] text-[#F6B81A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-[#183113]">
                      Future Flagship: The Smart Farm Agri-Empowerment Centre
                    </h4>
                    <p className="text-xs sm:text-sm text-[#183113]/85 mt-1 leading-relaxed">
                      Our strategic blueprint for an integrated hub uniting commercial aquaculture
                      production, agro-processing, trading, e-commerce, and hands-on community
                      training under one roof.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#183113]/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[#183113] font-extrabold text-lg">
                    — Frances Philippa Eluzai
                  </p>
                  <p className="text-[#204E36] text-sm font-medium">
                    CEO & Founder, Golden Basket Ltd
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#204E36]/10 text-[#183113] px-3.5 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-[#204E36]" />
                  NSSF Hi-Innovator Alumna
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scroll-Animated Timeline (2018 - 2023) */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 bg-[#204E36] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F6B81A]/20 border border-[#F6B81A]/40 text-[#F6B81A] text-xs font-bold uppercase tracking-widest mb-3">
              Our Journey (2018 – 2023)
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Milestones of Resilience & Growth
            </h2>
            <p className="text-white/85 text-base sm:text-lg">
              From humble subsistence roots in Kiryandongo to solar-powered concrete aquaculture
              tanks in Wakiso. Click any year or scroll to explore our evolution.
            </p>
          </div>

          {/* Interactive Year Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            {timelineData.map((item) => {
              const isSelected = activeYear === item.year;
              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => scrollToYear(item.year)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#F6B81A] text-[#183113] shadow-lg scale-105"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/15"
                  }`}
                >
                  {item.year}
                </button>
              );
            })}
          </div>

          {/* Responsive Vertical Timeline Container */}
          <div className="relative">
            {/* Vertical Line: Left-aligned on mobile, centered on desktop */}
            <div
              className="absolute top-2 bottom-2 left-6 md:left-1/2 md:-translate-x-1/2 w-1 bg-gradient-to-b from-[#F6B81A] via-[#F6B81A]/70 to-[#F6B81A]/30 rounded-full"
              aria-hidden="true"
            />

            <div className="space-y-10 md:space-y-12">
              {timelineData.map((item, idx) => {
                const IconComponent = item.icon;
                const isVisible = !!visibleItems[item.year];
                const isActive = activeYear === item.year;

                return (
                  <div
                    key={item.year}
                    data-year={item.year}
                    ref={(el) => {
                      itemRefs.current[item.year] = el;
                    }}
                    onClick={() => setActiveYear(item.year)}
                    className={`relative flex flex-col md:flex-row items-start ${
                      item.left ? "md:flex-row" : "md:flex-row-reverse"
                    } group cursor-pointer`}
                  >
                    {/* Card Half */}
                    <div
                      className={`w-full pl-16 md:pl-0 md:w-1/2 ${
                        item.left ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                      } transition-all duration-700 ease-out ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${idx * 60}ms` }}
                    >
                      <div
                        className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 border ${
                          isActive
                            ? "bg-white text-[#183113] border-[#F6B81A] shadow-2xl ring-2 ring-[#F6B81A]/60"
                            : "bg-[#183113]/90 text-white border-white/15 hover:border-[#F6B81A]/60 shadow-lg"
                        }`}
                      >
                        <div
                          className={`flex flex-wrap items-center gap-2 mb-3 ${
                            item.left ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase ${
                              isActive
                                ? "bg-[#183113] text-[#F6B81A]"
                                : "bg-[#F6B81A] text-[#183113]"
                            }`}
                          >
                            {item.year}
                          </span>
                          <span
                            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                              isActive
                                ? "bg-[#F5F1E8] text-[#204E36]"
                                : "bg-white/10 text-[#F6B81A]"
                            }`}
                          >
                            {item.tag}
                          </span>
                        </div>

                        <h3
                          className={`text-xl sm:text-2xl font-extrabold mb-2.5 ${
                            isActive ? "text-[#183113]" : "text-white"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`text-sm sm:text-base leading-relaxed mb-4 ${
                            isActive ? "text-[#183113]/90" : "text-white/85"
                          }`}
                        >
                          {item.text}
                        </p>

                        <div
                          className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg ${
                            isActive
                              ? "bg-[#FBF3DC] text-[#183113]"
                              : "bg-white/10 text-[#F6B81A]"
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{item.highlight}</span>
                        </div>
                      </div>
                    </div>

                    {/* Center / Left Timeline Node Icon */}
                    <div
                      className={`absolute left-6 md:left-1/2 -translate-x-1/2 top-6 w-12 h-12 rounded-2xl flex items-center justify-center border-4 transition-all duration-300 z-10 ${
                        isActive
                          ? "bg-[#F6B81A] text-[#183113] border-white scale-110 shadow-xl"
                          : "bg-[#183113] text-[#F6B81A] border-[#F6B81A] group-hover:scale-105"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Spacer for opposite side on desktop */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Call-to-Action */}
      <section className="py-16 px-6 lg:px-16 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto bg-[#183113] rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl border border-[#F6B81A]/30">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F6B81A] mb-4">
            Ready to Order Fresh Catfish or Partner With Golden Basket?
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Whether you are a wholesale buyer, hotel, household, fish farmer seeking quality
            fingerlings, or a development partner, we would love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F6B81A] hover:bg-[#e0a612] text-[#183113] font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#impact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-7 py-3.5 rounded-xl transition-all"
            >
              <span>See Our Community Impact</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
