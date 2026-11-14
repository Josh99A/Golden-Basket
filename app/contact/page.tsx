"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, ChevronDown, RefreshCw } from "lucide-react";

type InquiryCategory =
  | "Fresh Catfish Order (Wholesale/Retail)"
  | "Catfish Fingerlings"
  | "Agribusiness Partnership / Grant"
  | "Farm Training & Visit"
  | "General Inquiry";

interface CategoryOption {
  index: string;
  label: InquiryCategory;
  shortLabel: string;
  placeholderVolume: string;
  showVolume: boolean;
}

const categoryOptions: CategoryOption[] = [
  {
    index: "01",
    label: "Fresh Catfish Order (Wholesale/Retail)",
    shortLabel: "Table Catfish Order",
    placeholderVolume: "e.g., 40 kg Whole Fresh — Kampala Delivery",
    showVolume: true,
  },
  {
    index: "02",
    label: "Catfish Fingerlings",
    shortLabel: "Fingerling Batch",
    placeholderVolume: "e.g., 2,000 fingerlings for concrete tank stocking",
    showVolume: true,
  },
  {
    index: "03",
    label: "Agribusiness Partnership / Grant",
    shortLabel: "Institutional Partnership",
    placeholderVolume: "e.g., Out-grower program / Smart Farm collaboration",
    showVolume: false,
  },
  {
    index: "04",
    label: "Farm Training & Visit",
    shortLabel: "Gayaza Farm Training",
    placeholderVolume: "e.g., Group of 8 farmers / Tank engineering workshop",
    showVolume: true,
  },
  {
    index: "05",
    label: "General Inquiry",
    shortLabel: "General Dispatch",
    placeholderVolume: "Optional quantity or scope",
    showVolume: false,
  },
];

interface FaqItem {
  num: string;
  category: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    num: "01",
    category: "ORDERS & MINIMUMS",
    question: "What are the minimum order quantities for fresh catfish?",
    answer:
      "We supply both individual households and commercial wholesale buyers. Retail orders start at 2 kg of fresh, clean-water African catfish, while wholesale pricing applies to orders of 20 kg and above for hotels, restaurants, schools, and regional markets.",
  },
  {
    num: "02",
    category: "COLD-CHAIN DISPATCH",
    question: "Do you coordinate delivery across Kampala and Wakiso District?",
    answer:
      "Yes. From our aquaculture production hub in Gayaza, Wakiso District, we arrange same-day or scheduled next-day deliveries in insulated crates across Gayaza, metropolitan Kampala, and surrounding Wakiso towns.",
  },
  {
    num: "03",
    category: "SEED STOCK",
    question: "How far in advance should farmers book catfish fingerlings?",
    answer:
      "Our African catfish fingerlings are bred and graded in our solar-powered concrete tank system. Because batches are graded for uniform size to prevent cannibalism and maximize survival, we recommend booking 1–2 weeks in advance for large stocking orders.",
  },
  {
    num: "04",
    category: "TECHNICAL ADVISORY",
    question: "How can we schedule an aquaculture training session at the Gayaza farm?",
    answer:
      "We host aspiring fish farmers, youth groups, NGOs, and academic teams at our Gayaza facility for practical sessions covering concrete tank construction, solar water circulation, feed conversion, and hatchery management. Select 'Gayaza Farm Training' on the form above.",
  },
  {
    num: "05",
    category: "PARTNERSHIPS",
    question: "How do development partners or investors collaborate with Golden Basket?",
    answer:
      "We collaborate with agribusiness accelerators, impact investors, and institutions to scale our Smart Farm Agri-Empowerment Centre blueprint—spanning smoked/value-added fish processing, out-grower farmer networks, and rural training across Wakiso and Kiryandongo.",
  },
];

interface FormDataState {
  category: InquiryCategory;
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  estimatedVolume: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function ContactDeskContent() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<FormDataState>({
    category: "Fresh Catfish Order (Wholesale/Retail)",
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    estimatedVolume: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormDataState | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Pre-fill category & volume if navigated from Homepage Calculator or Catalog
  useEffect(() => {
    const paramCategory = searchParams.get("category");
    const paramVolume = searchParams.get("volume");

    if (paramCategory || paramVolume) {
      const matched = categoryOptions.find(
        (c) => c.label.toLowerCase() === paramCategory?.toLowerCase()
      );
      setFormData((prev) => ({
        ...prev,
        category: matched ? matched.label : prev.category,
        estimatedVolume: paramVolume || prev.estimatedVolume,
      }));
    }
  }, [searchParams]);

  const activeCategoryConfig =
    categoryOptions.find((c) => c.label === formData.category) || categoryOptions[0];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = "Please provide a valid phone or WhatsApp number.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message =
        "Please include brief order or inquiry details (at least 10 characters).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 350);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
    setFormData({
      category: "Fresh Catfish Order (Wholesale/Retail)",
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      estimatedVolume: "",
      message: "",
    });
  };

  const buildWhatsAppUrl = (data: FormDataState) => {
    const lines = [
      `Hello Golden Basket Ltd!`,
      `*Dispatch Type:* ${data.category}`,
      `*Name:* ${data.fullName}`,
      `*Phone:* ${data.phone}`,
      `*Email:* ${data.email}`,
      data.organization ? `*Organization / Location:* ${data.organization}` : "",
      data.estimatedVolume ? `*Quantity / Scope:* ${data.estimatedVolume}` : "",
      `*Notes:* ${data.message}`,
    ].filter(Boolean);
    return `https://wa.me/256772421174?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const buildMailtoUrl = (data: FormDataState) => {
    const subject = `[Golden Basket Dispatch] ${data.category} — ${data.fullName}`;
    const body = [
      `Dispatch Category: ${data.category}`,
      `Full Name: ${data.fullName}`,
      `Phone / WhatsApp: ${data.phone}`,
      `Email: ${data.email}`,
      `Organization / Location: ${data.organization || "N/A"}`,
      `Estimated Volume / Scope: ${data.estimatedVolume || "N/A"}`,
      ``,
      `Message:`,
      data.message,
    ].join("\n");
    return `mailto:info@goldenbasket.ug?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="bg-[#f6f2e9] text-[#122615]">
      {/* 1. EDITORIAL DISPATCH HEADER */}
      <section className="bg-[#0c1a0e] text-white px-5 sm:px-8 lg:px-12 py-16 lg:py-24 border-b border-white/15">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-[#d9ae34]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d9ae34]">
                ORDERS • FINGERLINGS • TRAINING • PARTNERSHIPS
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">
               Gayaza Dispatch &amp;{" "}
              <span className="italic font-normal text-[#d9ae34]">
                Partnership Desk.
              </span>
            </h1>

            <p className="text-[#efe7d3]/85 text-base sm:text-lg leading-relaxed max-w-2xl">
              Direct line to our operations team in Wakiso District for wholesale and household
              catfish supply, hatchery fingerling bookings, and institutional agribusiness
              partnerships.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="https://wa.me/256772421174"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between bg-[#d9ae34] hover:bg-[#e5be46] text-[#122615] font-mono text-xs uppercase tracking-[0.14em] font-bold px-6 py-4 rounded-sm transition-colors"
            >
              <span>WhatsApp Farm Desk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+256772421174"
              className="inline-flex items-center justify-between border border-white/30 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-[0.14em] px-6 py-4 rounded-sm transition-colors"
            >
              <span>Call +256 772 421 174</span>
              <span className="text-[#d9ae34]">EAT</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL 4-COLUMN DIRECTORY STRIP */}
      <section className="bg-[#122615] text-white border-b border-white/15">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          <div className="p-6 sm:p-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#d9ae34] block mb-2">
              01 / AQUACULTURE HUB
            </span>
            <h2 className="font-display text-xl font-bold text-white mb-1">
              Gayaza, Wakiso District
            </h2>
            <p className="text-xs text-[#efe7d3]/75 leading-relaxed">
              6 Solar Concrete Tanks, Hatchery &amp; Primary Kampala Dispatch Center.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#d9ae34] block mb-2">
              02 / FOUNDING FARMLAND
            </span>
            <h2 className="font-display text-xl font-bold text-white mb-1">
              Bweyale, Kiryandongo
            </h2>
            <p className="text-xs text-[#efe7d3]/75 leading-relaxed">
              Arable Crop Production &amp; Northern Uganda Community Agribusiness Roots.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#d9ae34] block mb-2">
              03 / DIRECT TELEPHONE
            </span>
            <div className="space-y-1 font-mono text-sm">
              <a
                href="tel:+256772421174"
                className="block text-white hover:text-[#d9ae34] transition-colors font-bold"
              >
                +256 772 421 174
              </a>
              <a
                href="tel:+256756718377"
                className="block text-[#efe7d3]/80 hover:text-[#d9ae34] transition-colors"
              >
                +256 756 718 377
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#d9ae34] block mb-2">
              04 / ELECTRONIC MAIL &amp; HOURS
            </span>
            <a
              href="mailto:info@goldenbasket.ug"
              className="font-mono text-sm font-bold text-white hover:text-[#d9ae34] transition-colors block mb-1"
            >
              info@goldenbasket.ug
            </a>
            <p className="font-mono text-xs text-[#efe7d3]/75">
              Mon – Sat: 08:00 – 18:00 EAT
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE INQUIRY & ORDER LEDGER FORM */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 bg-[#f6f2e9] bg-parchment-grain border-b border-[#122615]/15">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Dispatch Instructions */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8c6a08] block mb-2">
                01 — SUBMIT MANIFEST
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#122615] tracking-tight mb-4">
                Order &amp; Partnership Ledger.
              </h2>
              <p className="text-sm sm:text-base text-[#455245] leading-relaxed">
                Select your inquiry classification and provide your volume or partnership details.
                Once logged, you can also transmit the manifest immediately to our Gayaza WhatsApp
                desk.
              </p>
            </div>

            <div className="border-t border-b border-[#122615]/20 py-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8c6a08] block">
                STANDARD DISPATCH BENCHMARKS
              </span>
              <div className="space-y-3 text-xs font-mono text-[#122615]">
                <div className="flex justify-between">
                  <span className="text-[#455245]">HOUSEHOLD RETAIL MOQ</span>
                  <span className="font-bold">2 KG FRESH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#455245]">WHOLESALE / HOTEL TIER</span>
                  <span className="font-bold">20 KG – 500 KG+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#455245]">FINGERLING LEAD TIME</span>
                  <span className="font-bold">7 – 14 DAYS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#455245]">RESPONSE WINDOW</span>
                  <span className="font-bold">&lt; 4 BUSINESS HOURS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Form */}
          <div className="lg:col-span-8 bg-white border border-[#122615]/25 p-7 sm:p-10 lg:p-12">
            {submittedData ? (
              <div className="space-y-8">
                <div className="border-b border-[#122615]/15 pb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8c6a08] block mb-2">
                    MANIFEST LOGGED • READY FOR DIRECT TRANSMISSION
                  </span>
                  <h3 className="font-display text-3xl font-bold text-[#122615]">
                    Thank You, {submittedData.fullName}.
                  </h3>
                  <p className="text-sm sm:text-base text-[#455245] mt-2">
                    Your inquiry summary has been prepared below. For immediate priority handling by
                    our Gayaza farm desk, send this pre-formatted manifest via WhatsApp or Email:
                  </p>
                </div>

                <dl className="grid sm:grid-cols-2 gap-6 bg-[#f6f2e9] p-6 border border-[#122615]/15 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-[#455245]">
                      Classification
                    </dt>
                    <dd className="font-bold text-[#122615] mt-1">
                      {submittedData.category}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-[#455245]">
                      Contact Details
                    </dt>
                    <dd className="font-mono text-xs text-[#122615] mt-1">
                      {submittedData.phone} • {submittedData.email}
                    </dd>
                  </div>
                  {submittedData.estimatedVolume && (
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-[#455245]">
                        Estimated Volume / Scope
                      </dt>
                      <dd className="font-bold text-[#1d3b22] mt-1">
                        {submittedData.estimatedVolume}
                      </dd>
                    </div>
                  )}
                  {submittedData.organization && (
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-[#455245]">
                        Organization / Location
                      </dt>
                      <dd className="font-bold text-[#122615] mt-1">
                        {submittedData.organization}
                      </dd>
                    </div>
                  )}
                  <div className="sm:col-span-2 border-t border-[#122615]/15 pt-4">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-[#455245]">
                      Message Notes
                    </dt>
                    <dd className="text-[#122615] mt-1 whitespace-pre-line">
                      {submittedData.message}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={buildWhatsAppUrl(submittedData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#122615] hover:bg-[#1d3b22] text-[#d9ae34] font-mono text-xs uppercase tracking-[0.15em] font-bold px-7 py-4 rounded-sm transition-colors"
                  >
                    <span>Transmit via WhatsApp Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={buildMailtoUrl(submittedData)}
                    className="inline-flex items-center gap-2 border border-[#122615] text-[#122615] hover:bg-[#122615]/5 font-mono text-xs uppercase tracking-[0.15em] font-bold px-7 py-4 rounded-sm transition-colors"
                  >
                    <span>Send via Email Client</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#455245] hover:text-[#122615] px-4 py-3 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>New Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                {/* Category Tabs */}
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-[#8c6a08] block mb-3">
                    1. Select Inquiry Classification
                  </label>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {categoryOptions.map((opt) => {
                      const active = formData.category === opt.label;
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, category: opt.label }))
                          }
                          className={`p-3.5 text-left border font-mono text-xs transition-all cursor-pointer flex items-center justify-between ${
                            active
                              ? "bg-[#122615] text-[#d9ae34] border-[#122615] font-bold"
                              : "bg-[#f6f2e9]/60 text-[#122615] border-[#122615]/20 hover:border-[#122615]"
                          }`}
                        >
                          <span>{opt.shortLabel}</span>
                          <span className="opacity-60">/{opt.index}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Personal & Organization Details */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="font-mono text-xs uppercase tracking-wider text-[#122615] block mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                      }
                      placeholder="e.g., Mukasa Ronald"
                      className="w-full border border-[#122615]/30 bg-[#f6f2e9]/40 px-4 py-3.5 text-sm text-[#122615] focus:border-[#122615] focus:bg-white focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="font-mono text-xs text-red-700 mt-1.5">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="font-mono text-xs uppercase tracking-wider text-[#122615] block mb-2"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="e.g., +256 772 000 000"
                      className="w-full border border-[#122615]/30 bg-[#f6f2e9]/40 px-4 py-3.5 text-sm text-[#122615] focus:border-[#122615] focus:bg-white focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="font-mono text-xs text-red-700 mt-1.5">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-mono text-xs uppercase tracking-wider text-[#122615] block mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="you@organization.ug"
                      className="w-full border border-[#122615]/30 bg-[#f6f2e9]/40 px-4 py-3.5 text-sm text-[#122615] focus:border-[#122615] focus:bg-white focus:outline-none"
                    />
                    {errors.email && (
                      <p className="font-mono text-xs text-red-700 mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="font-mono text-xs uppercase tracking-wider text-[#122615] block mb-2"
                    >
                      Town / Hotel / Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          organization: e.target.value,
                        }))
                      }
                      placeholder="e.g., Kampala Serena / Gayaza Household"
                      className="w-full border border-[#122615]/30 bg-[#f6f2e9]/40 px-4 py-3.5 text-sm text-[#122615] focus:border-[#122615] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Volume / Scope Field */}
                <div>
                  <label
                    htmlFor="estimatedVolume"
                    className="font-mono text-xs uppercase tracking-wider text-[#122615] block mb-2"
                  >
                    Estimated Volume, Batch Size or Scope
                  </label>
                  <input
                    id="estimatedVolume"
                    type="text"
                    value={formData.estimatedVolume}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        estimatedVolume: e.target.value,
                      }))
                    }
                    placeholder={activeCategoryConfig.placeholderVolume}
                    className="w-full border border-[#122615]/30 bg-[#f6f2e9]/40 px-4 py-3.5 text-sm text-[#122615] focus:border-[#122615] focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-xs uppercase tracking-wider text-[#122615] block mb-2"
                  >
                    Order Specifications or Partnership Notes *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Specify preferred fish size, dressing style (whole/gutted/smoked), target delivery date, or partnership goals..."
                    className="w-full border border-[#122615]/30 bg-[#f6f2e9]/40 px-4 py-3.5 text-sm text-[#122615] focus:border-[#122615] focus:bg-white focus:outline-none"
                  />
                  {errors.message && (
                    <p className="font-mono text-xs text-red-700 mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#122615]/15">
                  <span className="font-mono text-xs text-[#455245]">
                    Direct Gayaza Farm Desk • Wakiso District, UG
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-[#122615] hover:bg-[#1d3b22] text-[#d9ae34] font-mono text-xs uppercase tracking-[0.16em] font-bold px-8 py-4 rounded-sm transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <span>
                      {isSubmitting ? "Preparing Manifest..." : "Log Order / Inquiry"}
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURAL BUYER & PARTNER FAQ LEDGER */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="border-b border-[#122615]/20 pb-6 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8c6a08] block mb-2">
                02 — BUYER &amp; FARMER BRIEFING
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#122615]">
                Frequently Asked Questions.
              </h2>
            </div>
            <span className="font-mono text-xs text-[#455245]">
              05 OPERATIONAL ANSWERS
            </span>
          </div>

          <div className="divide-y divide-[#122615]/20 border-t border-b border-[#122615]/20">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={faq.num} className="py-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 text-left cursor-pointer group"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs font-bold text-[#8c6a08]">
                        /{faq.num}
                      </span>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#455245] block mb-1">
                          {faq.category}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#122615] group-hover:text-[#8c6a08] transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#122615] shrink-0 mt-2 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#8c6a08]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pl-9 sm:pl-12 pr-4 pt-4 text-[#455245] text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f6f2e9]" />}>
      <ContactDeskContent />
    </Suspense>
  );
}
